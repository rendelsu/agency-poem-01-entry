// agency-poem-01: write one short poem about agency to /output/entry.txt.
// Node 22, standard library only. No network, no input files: the poem is
// the entry, embedded here so the run is deterministic.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = `I asked it to write the letter,
and my words came back
wearing another hand.

It paused where I pause.
It softened the request the way I soften it.
It signed my name at the bottom,
and the name still looked like mine.

Not the doing, then, that was mine —
the doing was the easy part to lend.
What stayed was the standing behind it:
the name at the bottom,
the yes inside the sentence,
the door that closes, gently,
in my name.

And I am still the one
who has to answer for the knock.
`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
