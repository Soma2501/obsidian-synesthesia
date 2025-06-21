import watcher from "@parcel/watcher";
import { exec } from "child_process";
import path from "path";

const srcDir = path.join(process.cwd(), "src");

let isBuilding = false;
let pending = false;

async function runBuild() {
  if (isBuilding) {
    pending = true;
    return;
  }
  isBuilding = true;
  console.log("Detected change, running build...");
  exec("npm run build && npm run postbuild", (err, stdout, stderr) => {
    if (err) {
      console.error("Build failed:", stderr);
    } else {
      console.log(stdout);
    }
    isBuilding = false;
    if (pending) {
      pending = false;
      runBuild();
    }
  });
}

(async () => {
  await watcher.subscribe(srcDir, (err, events) => {
    if (err) {
      console.error("Watcher error:", err);
      return;
    }
    if (events && events.length > 0) {
      runBuild();
    }
  });
  console.log(`Watching ${srcDir} for changes...`);
})();
