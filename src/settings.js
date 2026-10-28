import versionData from '../version.json';
const { version, lastUpdated, isSignificant } = versionData;

import { KeybindsInput } from "./keybindsInput.js";
import winCounter from "./winCounter.js";
import WindowManager from "./windowManager.js";
import replayHistory from './replayHistory.js'

window.__fx = window.__fx || {};
const __fx = window.__fx;

var settings = {
  displayWinCounter: true,
  displayTickNumber: true,
  useFullscreenMode: true,
  hoveringTooltip: true,
  showPlayerDensity: true,
  coloredDensity: true,
  densityDisplayStyle: "absoluteQuotient",
  keybindButtons: false,
  attackPercentageKeybinds: [],
  startingPercentageEnabled: false,
  startingPercentage: 50,
  hidePropagandaPopup: false,
  showReplayTimebar: true
};
__fx.settings = settings;
const discontinuedSettings = ["hideAllLinks", "fontName"];
__fx.makeMainMenuTransparent = false;

// https://stackoverflow.com/a/34156339
function saveFile(content, fileName, contentType) {
  var a = document.createElement("a");
  var file = new Blob([content], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
  URL.revokeObjectURL(a.href);
}
function createButton(text, action) {
    const button = document.createElement("button");
    button.textContent = text;
    button.addEventListener("click", action);
    return button;
}

const CELL = 2.35;
const PANEL_STYLE = { display: "grid", gridAutoRows: CELL + "em", gap: CELL / 3 + "em",
  padding: CELL / 6 + "em", width: "max-content", background: "rgba(0, 0, 0, 0.75)",
  border: "2px solid white", transition: "none", animation: "none" };
const CELL_STYLE = { display: "flex", alignItems: "center", justifyContent: "center",
  fontSize: CELL * 0.89 + "em", lineHeight: "1", cursor: "pointer", userSelect: "none",
  transition: "none", animation: "none" };
const ICON_BASE = 1011;
const ICON_COUNT = 13;
const MORE_CODE = ICON_BASE + ICON_COUNT;
const tileUrls = {};
function tileFor(code) {
  if (code < ICON_BASE || code > MORE_CODE) return "";
  if (!tileUrls[code]) {
    const canvas = window[dictionary.emojiHolder]?.[dictionary.emojiPicker]?.[dictionary.emojiTiles]?.[code - ICON_BASE];
    if (canvas) tileUrls[code] = canvas.toDataURL();
  }
  return tileUrls[code] || "";
}

function StartingPercentageInput(container) {
  const label = document.createElement("label");
  label.className = "checkbox";
  label.append("Custom starting attack percentage ");
  const note = document.createElement("small");
  note.innerText = "Sets a fixed attack percentage for the troop bar at the start of every game.";
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const checkmark = document.createElement("span");
  checkmark.className = "checkmark";
  label.append(document.createElement("br"), note, checkbox, checkmark);
  container.append(label, document.createElement("br"));

  const inputRow = document.createElement("div");
  Object.assign(inputRow.style, { display: "none", transition: "none", animation: "none" });
  const input = document.createElement("input");
  input.type = "number";
  input.min = "0";
  input.max = "100";
  input.step = "0.1";
  input.placeholder = "50";
  inputRow.append("Percentage (%): ", input);
  container.append(inputRow, document.createElement("br"));

  function updateVisibility() {
    inputRow.style.display = checkbox.checked ? "block" : "none";
  }
  checkbox.addEventListener("change", () => {
    if (checkbox.checked && input.value.trim() === "") input.value = "50";
    updateVisibility();
  });

  this.save = function (targetSettings) {
    targetSettings.startingPercentageEnabled = checkbox.checked;
    targetSettings.startingPercentage = input.value.trim() === "" ? 50 : Number(input.value);
  };

  this.update = function (currentSettings) {
    checkbox.checked = !!currentSettings.startingPercentageEnabled;
    input.value = currentSettings.startingPercentage ?? 50;
    updateVisibility();
  };
}

function SectionHeader(text) {
  return function (container) {
    const title = document.createElement("p");
    const heading = document.createElement("b");
    heading.innerText = text;
    title.append(heading);
    container.append(title);
  };
}

function createCheckboxRow(labelText, note) {
  const label = document.createElement("label");
  label.className = "checkbox";
  label.append(labelText + " ");
  if (note) {
    const noteElement = document.createElement("small");
    noteElement.innerText = note;
    label.append(document.createElement("br"), noteElement);
  }
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const checkmark = document.createElement("span");
  checkmark.className = "checkmark";
  label.append(checkbox, checkmark);
  return { label, checkbox };
}

function ReplayHistoryList(container) {
  const title = document.createElement("p");
  title.innerHTML = "<b>Saved Replays</b> (auto-saves your last 5 games)";
  container.append(title);

  const list = document.createElement("div");
  container.append(list);

  function formatTime(timestamp) {
    const minutes = Math.floor((Date.now() - timestamp) / 60000);
    if (minutes < 1) return "just now";
    if (minutes < 60) return minutes + "m ago";
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return hours + "h ago";
    return Math.floor(hours / 24) + "d ago";
  }

  function render() {
    list.innerHTML = "";
    const replays = replayHistory.getAll();
    if (!replays.length) {
      const empty = document.createElement("small");
      empty.innerText = "No replays saved yet. Finish a game and it'll show up here.";
      list.append(empty);
      return;
    }
    replays.forEach((replay) => {
      const row = document.createElement("div");
      row.style.display = "flex";
      row.style.alignItems = "center";
      row.style.gap = "6px";
      row.style.marginBottom = "4px";

      const label = document.createElement("small");
      label.innerText = formatTime(replay.timestamp);
      label.style.flex = "1";

      const loadBtn = createButton("Load", () => {
        WindowManager.closeWindow("settings");
        replayHistory.load(replay.data);
      })
      const copyBtn = createButton("Copy", () => {
          navigator.clipboard.writeText(replay.data).then(() => {
          copyBtn.innerText = "Copied!";
          setTimeout(() => (copyBtn.innerText = "Copy"), 1500);
        }).catch(() => alert("Failed to copy"));
      });
      const deleteBtn = createButton("Delete", () => {
        replayHistory.remove(replay.timestamp);
        render();
      });
      const downloadBtn = createButton("Download", () =>
        saveFile(replay.data, `replay_${replay.timestamp}.txt`, "text/plain"),
      )
      row.append(label, loadBtn, copyBtn, downloadBtn, deleteBtn);
      list.append(row);
    });
  }

  this.update = render;
}

const settingsManager = new (function () {
  const settingsStructure = [
    {
      for: "displayWinCounter",
      type: "checkbox",
      label: "Display win counter",
      note: "The win counter tracks multiplayer solo wins (not in team games)",
    },
    {
      type: "button",
      text: "Reset win counter",
      action: winCounter.removeWins,
    },
    {
      for: "displayTickNumber",
      type: "checkbox",
      label: "Display tick number near the balance",
    },
    {
      for: "useFullscreenMode",
      type: "checkbox",
      label: "Use fullscreen mode",
      note: "Note: fullscreen mode will trigger after you click anywhere on the page due to browser policy restrictions.",
    },
    {
      for: "hoveringTooltip",
      type: "checkbox",
      label: "Hovering tooltip",
      note: "Display map territory info constantly (on mouse hover) instead of only when right clicking on the map",
    },
    {
      for: "showPlayerDensity",
      type: "checkbox",
      label: "Show player density",
    },
    {
      for: "coloredDensity",
      type: "checkbox",
      label: "Colored density",
      note: "Display the density with a color between red and green depending on the density value",
    },
    {
      for: "hidePropagandaPopup",
      type: "checkbox",
      label: "Hide propaganda popup"
    },
    KeybindsInput,
    {
      for: "keybindButtons", type: "checkbox",
      label: "Keybind buttons", note: "Show keybind buttons above the troop selector (max 6)"
    },
    {
      for: "showReplayTimebar",
      type: "checkbox",
      label: "Replay timebar",
      note: "Show a seek bar when watching replays, allowing you to skip to any point of the replay. Seeking backward re-simulates the replay from the start, which can take a few seconds.",
    },
    ReplayHistoryList,
    function Footer(container) {
      const versionInfo = document.createElement("p");
      versionInfo.innerText = `TT Client v${versionData.version}`;
      const links = document.createElement("p");
      links.innerHTML = `<a href="https://github.com/Asmoney0/TTclient>Github Repository</a> |
        <a href="https://github.com/fxclient/FXclient#readme">Original FX Repository</a>`;
      container.append(versionInfo, links);
    }
  ];
  const settingsContainer = document.querySelector(".settings .scrollable");
  var inputFields = {}; // (includes select menus)
  var checkboxFields = {};
  var customElements = [];
  settingsStructure.forEach((item) => {
    if (typeof item === "function") {
      const container = document.createElement("div");
      customElements.push(new item(container));
      return settingsContainer.append(container);
    }
    const label = document.createElement("label");
    if (item.tooltip) label.title = item.tooltip;
    const isValueInput = item.type.endsWith("Input");
    const element = document.createElement(
      isValueInput || item.type === "checkbox"
        ? "input"
        : item.type === "selectMenu"
        ? "select"
        : "button"
    );
    if (item.type === "textInput") element.type = "text";
    if (item.placeholder) element.placeholder = item.placeholder;
    if (isValueInput || item.type === "selectMenu")
      inputFields[item.for] = element;
    if (item.text) element.innerText = item.text;
    if (item.action) element.addEventListener("click", item.action);
    if (item.label) label.append(item.label + " ");
    if (item.note) {
      const note = document.createElement("small");
      note.innerText = item.note;
      label.append(document.createElement("br"), note);
    }
    if (item.options)
      item.options.forEach((option) => {
        const optionElement = document.createElement("option");
        optionElement.setAttribute("value", option.value);
        optionElement.innerText = option.label;
        element.append(optionElement);
      });
    label.append(element);
    if (item.type === "checkbox") {
      element.type = "checkbox";
      const checkmark = document.createElement("span");
      checkmark.className = "checkmark";
      label.className = "checkbox";
      label.append(checkmark);
      checkboxFields[item.for] = element;
    } else label.append(document.createElement("br"));
    settingsContainer.append(label, document.createElement("br"));
  });
  this.save = function () {
    Object.keys(inputFields).forEach(function (key) {
      settings[key] = inputFields[key].value.trim();
    });
    Object.keys(checkboxFields).forEach(function (key) {
      settings[key] = checkboxFields[key].checked;
    });
    customElements.forEach((element) => element.save?.(settings));
    this.applySettings();
    WindowManager.closeWindow("settings");
    discontinuedSettings.forEach((settingName) => delete settings[settingName]);
    localStorage.setItem("fx_settings", JSON.stringify(settings));
    window.location.reload();
  };

  const fileInput = document.createElement("input");
  fileInput.type = "file";
  function handleFileSelect(event) {
    const input = event.target;
    /** @type {File} */
    const selectedFile = input.files[0];
    if (!selectedFile) return;

    input.removeEventListener("change", handleFileSelect);
    input.value = "";
    if (!selectedFile.name.endsWith(".json"))
      return alert("Invalid file format");
    const fileReader = new FileReader();
    fileReader.onload = function () {
      let result;
      try {
        result = JSON.parse(fileReader.result);
        if (
          confirm(
            'Warning: This will override all current settings, click "OK" to confirm'
          )
        )
          __fx.settings = settings = result;
        localStorage.setItem("fx_settings", JSON.stringify(settings));
        window.location.reload();
      } catch (error) {
        alert("Error\n" + error);
      }
    };
    fileReader.readAsText(selectedFile);
  }
  this.importFromFile = function () {
    fileInput.click();
    fileInput.addEventListener("change", handleFileSelect);
  };
  this.exportToFile = function () {
    saveFile(
      JSON.stringify(settings),
      "FX_client_settings.json",
      "application/json"
    );
  };

  this.syncFields = function () {
    Object.keys(inputFields).forEach(function (key) {
      inputFields[key].value = settings[key];
    });
    Object.keys(checkboxFields).forEach(function (key) {
      checkboxFields[key].checked = settings[key];
    });
    customElements.forEach((element) => element.update?.(settings));
  };
  this.resetAll = function () {
    if (
      !confirm(
        "Are you Really SURE you want to RESET ALL SETTINGS back to the default?"
      )
    )
      return;
    localStorage.removeItem("fx_settings");
    window.location.reload();
  };
  this.applySettings = function () {
    if (settings.customBackgroundUrl !== "") {
      document.body.style.backgroundImage =
        "url(" + settings.customBackgroundUrl + ")";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
    }
    __fx.makeMainMenuTransparent = settings.customBackgroundUrl !== "";
  };

  if (settings.useFullscreenMode) tryEnterFullscreen();
})();

export function tryEnterFullscreen() {
  if (document.fullscreenElement !== null || !document.fullscreenEnabled) return
  document.documentElement
    .requestFullscreen({ navigationUI: "hide" })
    .then(() => console.log("Fullscreen mode activated"))
    .catch((error) => console.warn("Could not enter fullscreen mode:", error))
}

WindowManager.add({
  name: "settings",
  element: document.querySelector(".settings"),
  beforeOpen: function () {
    settingsManager.syncFields();
  },
});

if (localStorage.getItem("fx_settings") !== null) {
  __fx.settings = settings = {
    ...settings,
    ...JSON.parse(localStorage.getItem("fx_settings")),
  };
}

settingsManager.applySettings();

export default settingsManager;
export function getSettings() {
  return settings;
}
