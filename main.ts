import { mkdirSync, writeFileSync } from "node:fs";

// Draft 3: "facing the wall" made no sense at an orchard's edge. The ending now
// leaves a quiet question instead: who sat at one end, and who was the room for?
const text =
  "My grandmother kept a drawer of keys that fit nothing she owned. After the funeral we tried every lock in the house, then the neighbours'. The last key turned a gate at the orchard's edge. Behind it was no secret. Only a bench, worn pale at one end, the other end left clean.";

const length = [...text].length;
if (length < 1 || length > 280) throw new Error(`bad length ${length}`);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
