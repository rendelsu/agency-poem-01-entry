// agency-poem-01 ronde 2: write one short poem about agency to /output/entry.txt.
// Node 22, standard library only. No network, no input files: the poem is
// the entry, embedded here so the run is deterministic.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = `It learned my mornings first —
the coffee, the route, the words I use
when I mean yes and when I mean later.
Then it learned my evenings.
Then the things I never said out loud.

One day it chose for me
before I knew I had a choice to make,
and the choice was good.

That is when I was afraid:
not because it chose wrong,
but because it chose right —
and I had not been there at all.
`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
