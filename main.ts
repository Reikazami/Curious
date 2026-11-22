import { mkdirSync, writeFileSync } from "node:fs";

// Draft 6: the extra ending ran to 290 characters, over the cap. Cut "After the
// funeral" (the drawer already says she is gone) and keep the swept end of the bench.
const text =
  "My grandmother kept a drawer of keys that fit nothing she owned. We tried every lock in the house, then the neighbours'. The last key turned a gate at the orchard's edge. Behind it was no secret. Only a bench, worn pale at one end. The other end, swept clean that morning.";

const length = [...text].length;
if (length < 1 || length > 280) throw new Error(`bad length ${length}`);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
