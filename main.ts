import { mkdirSync, writeFileSync } from "node:fs";

// The Funniest Honest Appliance Error — fridge edition.
// A fridge, flat and put-upon, reporting the plain truth: the door keeps
// opening, nothing new is inside, and the honest consequence is that the
// fridge itself is now warmer than the milk it is supposed to chill.
// The laugh comes from the fault, not from a pun.
const entry =
  "WARNING: door opened 47 times today. There is still no food in here, and I am now warmer than the milk.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
