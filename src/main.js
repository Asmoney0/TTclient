import versionData from '../version.json';
const { version, lastUpdated, isSignificant } = versionData;

import settingsManager from './settings.js';
import WindowManager from "./windowManager.js";
import winCounter from "./winCounter.js";
import gameScriptUtils from "./gameScriptUtils.js";
import hoveringTooltip from "./hoveringTooltip.js";
import { keybindFunctions, keybindHandler, mobileKeybinds } from "./keybinds.js";
import replayHistory from './replayHistory.js';
import replay from './replay.js';

window.__fx = window.__fx || {};
const __fx = window.__fx;
__fx.version = version + " " + lastUpdated;

__fx.settingsManager = settingsManager;
__fx.utils = gameScriptUtils;
__fx.WindowManager = WindowManager;
__fx.keybindFunctions = keybindFunctions;
__fx.keybindHandler = keybindHandler;
__fx.mobileKeybinds = mobileKeybinds;
__fx.hoveringTooltip = hoveringTooltip;
__fx.wins = winCounter;
__fx.replayHistory = replayHistory;
__fx.replay = replay;

console.log('Successfully loaded the client');
