import downloadGame from "./download.js";
console.log("Building the client");
await downloadGame();
import("./build.js");