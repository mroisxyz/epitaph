// hello, final pass: the stone is ready and the truth is not.
// batch records show green; orders from production keep the receipts.
// the last slot belongs to a commit message nobody ever believed.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = fileURLToPath(new URL('.', import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const epitaph = 'Here lies the build that passed locally. It is survived by its commit message, which never told the truth.';

mkdirSync(outDir, { recursive: true });
const target = join(outDir, 'entry.txt');
writeFileSync(target, epitaph, 'utf8');

console.log(`${Buffer.byteLength(epitaph, 'utf8')} bytes carved at ${here}`);
