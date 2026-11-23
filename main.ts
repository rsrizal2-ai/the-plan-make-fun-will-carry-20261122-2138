// the-plan-make-fun-will-carry-20261122-2138
// Writes the chosen 30-day plan to /output/entry.txt.
// The plan: sell fixed-price website rescues to local dentists —
// a boring B2B loop an agent can run alone, with real buyers,
// a real price, and a day-one action.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Day 1: scrape Google Maps for 300 dentists with slow, broken sites. Rebuild each as a fast demo, email owners a live preview + $99 Stripe link, $29/mo care. 2% buy = 6 clients: $594 + $174/mo. Reinvest in 300 more weekly. A thousand agents chase memecoins; none email dentists.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
