import ModUtils from '../modUtils.js';

export default (/** @type {ModUtils} */ modUtils) => {
    const { insertCode, waitForMinification } = modUtils

    // Render win count
    insertCode(`var s = Math.floor((Device.a1.largeUIEnabled() ? 0.018 : 0.0137) * h___.hz);
		ctx.font = Util.qd.sS(0, Math.max(5, s));
		Util.qd.textBaseline(ctx, 0);
		Util.qd.textAlign(ctx, 2);
		ctx.fillStyle = Colors.nl;
		ctx.fillText(clientInfo.gameVersion, h___.w, 0);
        /* here */`,
        `const text = "Win count: " + __fx.wins.count;
        const textLength = ctx.measureText(text).width;
        const size = Math.max(5, s);
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        ctx.fillText(text, ctx.canvas.width - textLength - size / 2, size * 2);`)

    waitForMinification(() => applyPatches(modUtils))
}
//export const requiredVariables = ["game", "playerId", "playerData", "rawPlayerNames", "gIsSingleplayer", "playerTerritories"];

function applyPatches(/** @type {ModUtils} */ { replace, replaceOne, replaceRawCode, safeDictionary, matchOne, matchRawCode, escapeRegExp }) {

    // Constants for easy usage of otherwise long variable access expressions
    const dict = safeDictionary;
    const playerId = `${dict.game}.${dict.playerId}`;
    const rawPlayerNames = `${dict.playerData}.${dict.rawPlayerNames}`;
    const gIsSingleplayer = `${dict.game}.${dict.gIsSingleplayer}`;

    // Add update information
    replaceRawCode(`new k("🚀 New Game Update","The game was updated! Please reload the game. An internet connection is required.",!0,[`,
        `new k("🚀 New Game Update","The game was updated! Please reload the game. An internet connection is required."
        + "<div style='border: white; border-width: 1px; border-style: solid; margin: 10px; padding: 5px;'><h2>the client is not yet compatible with the latest version of the game.</h2><p>Updates should normally be available within a few hours.<br>You can still use the client to play in singleplayer mode.</p></div>",!0,[`
    );

    // Max size for custom maps: from 4096x4096 to 8192x8192
    // TODO: test this; it might cause issues with new boat mechanics?

    { // Add Troop Density and Maximum Troops in side panel
        const { valuesArray } = replaceRawCode(`,labels[5]=__L(0,"Interest"),labels[6]=__L(),labels[7]=__L(),(truncatedLabels=new Array(labels.length)).fill(""),(valuesArray=new Array(labels.length))[0]=game.io?`,
            `,labels[5]=__L(0,"Interest"),labels[6]=__L(),labels[7]=__L(),
		labels.push("Max Troops", "Density"), // add labels
		(truncatedLabels=new Array(labels.length)).fill(""),(valuesArray=new Array(labels.length))[0]=game.io?`);
        replaceOne(new RegExp(/(:(?<valueIndex>\w+)<7\?\w+\.\w+\.\w+\(valuesArray\[\2\]\)):(\w+\.\w+\(valuesArray\[7\]\))}/
            .source.replace(/valuesArray/g, valuesArray), "g"),
            '$1 : $<valueIndex> === 7 ? $3 '
            + `: $<valueIndex> === 8 ? __fx.utils.getMaxTroops(${dict.playerData}.${dict.playerTerritories}, ${playerId}) `
            + `: __fx.utils.getDensity(${playerId}) }`);
        // increase the size of the side panel by 25% to make the text easier to read
        replaceOne(/(this\.\w+=Math\.floor\(\(\w+\.\w+\.\w+\(\)\?\.1646:\.126\))\*(\w+\.\w+\),)/g, "$1 * 1.25 * $2");
    }

    // Increment win counter on wins
    replaceRawCode(`=function(sE){a8.gD[sE]&&(o.ha(sE,2),b.h9<100?xD(0,__L([a8.jx[sE]]),3,sE,ad.gN,ad.kl,-1,!0):xD(0,__L([a8.jx[sE]]),3,sE,ad.gN,ad.kl,-1,!0))`,
        `=function(sE){
		if (${playerId} === sE && !${gIsSingleplayer} && !${dict.game}.${dict.gIsReplay})
			__fx.wins.count++, window.localStorage.setItem("fx_winCount", __fx.wins.count),
			xD(0,"Your Win Count is now " + __fx.wins.count,3,sE,ad.gN,ad.kl,-1,!0);
		a8.gD[sE]&&(o.ha(sE,2),b.h9<100?xD(0,__L([a8.jx[sE]]),3,sE,ad.gN,ad.kl,-1,!0):xD(0,__L([a8.jx[sE]]),3,sE,ad.gN,ad.kl,-1,!0))`);


    { // Add settings button and custom lobby button
        // add buttons
        replaceRawCode(`,new nQ("☰<br>"+__L(),function(){aD6(3)},aa.ks),new nQ("",function(){at.d5(12)},aa.kg,!1)]`,
            `,new nQ("☰<br>"+__L(),function(){aD6(3)},aa.ks),new nQ("",function(){at.d5(12)},aa.kg,!1),
            new nQ("Client settings", function() { __fx.WindowManager.openWindow("settings"); }, "rgba(0, 0, 20, 0.5)")]`)
        // set position
        replaceRawCode(`aZ.g5.vO(aD3[3].button,x+a0S+gap,a3X+h+gap,a0S,h);`,
            `aZ.g5.vO(aD3[3].button,x+a0S+gap,a3X+h+gap,a0S,h);
            aZ.g5.vO(aD3[5].button, x, a3X + h * 2 + gap * 2, a0S * 2 + gap, h / 3);`);
    }

    { // Keybinds
        // match required variables
        const { 0: match, groups: { attackBarObject, setRelative } } = matchOne(/:\w+\.\w+\(\w+,8\)\?(?<attackBarObject>\w+)\.(?<setRelative>\w+)\(32\/31\):/g);
        // create a setAbsolutePercentage function on the attack percentage bar object,
        // and also register the keybind handler functions
        replaceOne(/}(function \w+\((\w+)\){return!\(1<\2&&1===(?<attackPercentage>\w+)\|\|\(1<\2&&\2\*\3-\3<1\/1024\?\2=\(\3\+1\/1024\)\/\3:\2<1)/g,
            "} this.setAbsolutePercentage = function(newPercentage) { $<attackPercentage> = newPercentage; }; "
            + "__fx.keybindFunctions.setAbsolute = this.setAbsolutePercentage; "
            + `__fx.keybindFunctions.setRelative = (arg1) => ${attackBarObject}.${setRelative}(arg1); $1`);
        // insert keybind handling code into the keyDown handler function
        replaceOne(new RegExp(/(function \w+\((?<event>\w+)\){)([^}]+matched)/g.source.replace(/matched/g, escapeRegExp(match)), "g"),
            "$1 if (__fx.keybindHandler($<event>.key)) return; $3");
    }
}
