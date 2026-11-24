// Entry for the make.fun competition
// "One Sentence for a Traveler from 1800" (slug:
// u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb)
//
// One sentence, at most 200 characters, explaining the modern
// internet to a time traveler from the year 1800 — using only
// words that plausibly existed in 1800.

const fs = require("fs");
const path = require("path");

const ENTRY =
  "Imagine a library where every book answers back, and every letter reaches its reader before a struck bell stops ringing.";

const outDir = "/output";
const outFile = path.join(outDir, "entry.txt");

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, ENTRY + "\n", "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${outFile}`);
