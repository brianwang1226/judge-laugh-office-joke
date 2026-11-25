// Make the AI Judge Laugh: The Office Joke (make.fun bounty
// u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)
// One-line office joke: a 15-minute standup wasted on defining "quick sync".
// The punchline is the recursion: the meeting about meetings is the meeting.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Our standup meeting is 15 minutes long. We spend 14 of them deciding what 'quick sync' means, and the last minute scheduling another meeting about it.";

const MAX_CHARS = 200;

if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY);
