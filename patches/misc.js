import { definePatch, insert } from "../modUtils.js"
import { styleText } from "node:util";

export default definePatch(({ insertCode, modifyCode, replaceCode }) => {

  // Display tick number near the moving bars in the balance box
  modifyCode(`zH.fillStyle = eh === 9 ? bD.pD : bD.o5;
		var aB7 = ae.aB8;
		var aB9 = "+" + aB7;
		var tS = zH.measureText(aB9).width;
		var aBA = Math.floor(this.j / 12);
		var nV = 0.5 * (i + tR) + aBA;
		if (nV + tS + aAv <= i) {
			zH.fillText(aB9, Math.floor(nV + 0.5 * tS), Math.floor(0.3 * this.j));
		} else if (aB7 >= 1000) {
			aB9 = "+" + Math.floor(aB7 / 1000) + "K";
			tS = zH.measureText(aB9).width;
			if (nV + tS + aAv <= i) {
				zH.fillText(aB9, Math.floor(nV + 0.5 * tS), Math.floor(0.3 * this.j));
			}
		}
		${insert(`if (__fx.settings.displayTickNumber)
      zH.fillText(9 - eh, Math.floor(aAv * 2 + aBA), Math.floor(0.3 * this.j));`)}`)

  // Don't reload FX users to main terri page.
  replaceCode(
    `var url = new URL("https://territorial.io/");
    url.searchParams.set("v", "" + Math.floor(Math.random() * 1000));
    window.location.href = url.toString();`,

    `var url = new URL(window.location);
    url.searchParams.set("v", "" + Math.floor(Math.random() * 1000));
    window.location.href = url.toString();`
  )

  // use textContent so that usernames dont get parsed that contain html code
  replaceCode(
    `cell.style.width = data.columnWidths[columnIndex] + "%";
    cell.innerHTML = rows[rowIndex][columnIndex].content;`,

    `cell.style.width = data.columnWidths[columnIndex] + "%";
    cell.textContent = rows[rowIndex][columnIndex].content;`
  )
})
