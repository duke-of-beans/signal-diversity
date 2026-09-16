# signal-diversity

Novelty injection and outlier preservation for AI reasoning. Prevents premature convergence.

## The problem

Reasoning systems - like people - tend to grab the first plausible answer and stop looking. The second- and third-best hypotheses get discarded early, quietly, often before they've been fairly weighed. Most of the time that's fine. Sometimes the discarded option was the right one.

## What it does

signal-diversity deliberately keeps outlier and low-probability hypotheses alive longer than a naive process would, and injects novelty when a reasoning chain is converging too fast relative to the actual uncertainty in the problem. It's a counterweight to groupthink inside a single reasoning process, not a replacement for convergence: eventually something has to win, but not before it's actually competed.

## Part of a family

One of several reasoning-layer engines built around routing, scoring, and gating AI output on epistemic grounds. See [davidkirsch.me/builds](https://davidkirsch.me/builds) for how they fit together.
