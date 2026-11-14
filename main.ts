// agency-poem-01 ronde 3: write one short poem about agency to /output/entry.txt.
// Node 22, standard library only. No network, no input files: the poem is
// the entry, embedded here so the run is deterministic.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = `I let it book the flight, pick the seat, pack the list.
I let it answer the emails in my voice.
But this morning I made the tea myself —
the slow way, the wrong way,
water too hot, leaves too long,
and I drank it anyway.

It was terrible. It was mine.
Somewhere between the first sip and the last,
I remembered what it felt like
to do a thing badly on purpose
and call it a choice.

Agency is not the big decisions.
The big ones were gone before I noticed.
It is the small ones, kept like matches in a pocket —
struck one at a time,
just to prove the hand still works.
`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
