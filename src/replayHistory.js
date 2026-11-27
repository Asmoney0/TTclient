const STORAGE_KEY = "fx_replays";
const MAX_REPLAYS = 5;

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    console.warn("Failed to load replay history:", error);
    return [];
  }
}

function persist(replays) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(replays));
  } catch (error) {
    console.warn("Failed to save replay history:", error);
  }
}

function downloadReplay(replayData, timestamp) {
  try {
    const blob = new Blob([replayData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `replay_${timestamp}.txt`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  } catch (error) {
    console.warn("Failed to download replay:", error);
  }
}

function save(replayData) {
  if (!replayData) return;
  const replays = load();
  if (replays.some((replay) => replay.data === replayData)) return;
  const timestamp = Date.now();
  replays.push({ data: replayData, timestamp });
  while (replays.length > MAX_REPLAYS) replays.shift();
  persist(replays);
  const settings = window.__fx && window.__fx.settings;
  if (!settings || settings.autoDownloadReplays !== false) {
    downloadReplay(replayData, timestamp);
  }
}

function getAll() {
  return load().slice().reverse(); // most recent first
}

function remove(timestamp) {
  persist(load().filter((r) => r.timestamp !== timestamp));
}

function clear() {
  localStorage.removeItem(STORAGE_KEY);
}

export default { save, getAll, remove, clear, load: () => { alert("Game hasn't loaded yet") } };
