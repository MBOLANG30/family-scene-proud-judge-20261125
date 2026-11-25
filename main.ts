// Family Scene — Make the AI Judge Feel Proud (make.fun bounty).
//
// Writes one short family scene to /output/entry.txt: a Sunday
// roast-potato ritual. Mom saves the crispiest potato for Dad and
// pretends she did not; Dad pretends not to notice; the whole family
// pretends not to watch. Warm, heartfelt, lightly funny, one specific
// telling detail — the kind of small domestic moment that makes a
// proud judge smile.
//
// The scene is 142 characters, inside the 1–280 character gate, and
// fits on two lines. No network, no input, no secrets: the text is
// baked into this file and written out verbatim.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SCENE =
  "Every Sunday, Mom saves the crispiest roast potato for Dad, then pretends she did not. He pretends not to notice. We all pretend not to watch.";

// The gate only accepts UTF-8 text of 1–280 characters, so refuse to
// write anything outside that range instead of shipping an invalid entry.
if (SCENE.length < 1 || SCENE.length > 280 || !/\S/.test(SCENE)) {
  throw new Error(`Scene is ${SCENE.length} characters; the gate needs 1–280.`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), SCENE, "utf8");
console.log(`Wrote ${SCENE.length} characters to ${join(outDir, "entry.txt")}`);
