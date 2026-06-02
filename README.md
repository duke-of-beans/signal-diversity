# Signal Diversity

**Novelty injection and outlier preservation for AI reasoning systems.**

![Status](https://img.shields.io/badge/status-production-brightgreen)
![License](https://img.shields.io/badge/license-MIT-green)

---

## The problem

AI reasoning systems converge. Given enough iterations, they settle on the most probable interpretation and stop looking. This is efficient — and dangerous. The most valuable signals in adversarial, investigative, or creative domains are often the ones that look like noise: the outlier data point, the unexpected connection, the finding that contradicts the model.

Premature convergence kills two kinds of signal:

1. **Novelty** — the connection no one has made yet, because it requires visiting an improbable region of the search space
2. **Outliers** — the data point that doesn't fit the model, which is either noise (likely) or the most important finding in the dataset (rarely, but with enormous payoff)

## Two mechanisms

### Divergence Engine

Deliberate injection of novelty into the reasoning process at controlled intervals.

**Method:** At configurable intervals (every N reasoning steps, or when convergence is detected via entropy monitoring), the system deliberately seeks pattern-breaking connections:

- Sample from low-probability associations in the knowledge graph
- Cross-reference entities from unrelated domains
- Invert assumptions and test what changes
- Query for structural isomorphisms — "what else has this shape?"

**Not randomness.** The Divergence Engine doesn't add noise. It adds *structured novelty* — connections that are improbable but structurally meaningful. The difference matters: random exploration is expensive and mostly useless. Structural exploration finds the connections that were always there but invisible from the convergent path.

### Outlier Shield

Protection of statistically anomalous findings from automatic dismissal.

**Method:** When the system encounters a data point, claim, or connection that falls outside the expected distribution:

1. **Flag** it as anomalous (don't suppress)
2. **Score** it: probability of being noise vs. probability of being signal
3. **Protect** it from pruning for a configurable grace period
4. **Investigate** — route to [INVESTIGATIVE mode](https://github.com/duke-of-beans/assertion-router) for further analysis
5. **Resolve** — after investigation, either promote to finding or archive with explanation

The key insight: **the cost of investigating a false positive is linear; the cost of dismissing a true outlier is catastrophic.** The asymmetry demands a bias toward investigation.

## TypeScript interfaces

```typescript
export interface DivergenceConfig {
  triggerInterval: number;        // reasoning steps between novelty injections
  entropyFloor: number;           // inject when reasoning entropy drops below this
  structuralSearch: boolean;      // use graph isomorphism for connection finding
  maxNoveltyBudget: number;       // max tokens/cost per injection
}

export interface OutlierShieldConfig {
  anomalyThreshold: number;       // standard deviations from expected distribution
  gracePeriod: number;            // milliseconds before an outlier can be pruned
  investigationRoute: 'tribunal' | 'assertion-router' | 'manual';
  falsePositiveTolerance: number; // acceptable false positive rate (default: 0.3)
}

export interface ProtectedOutlier {
  id: string;
  content: string;
  anomalyScore: number;
  detectedAt: Date;
  graceExpiresAt: Date;
  status: 'protected' | 'investigating' | 'promoted' | 'archived';
  investigationNotes?: string;
}
```

## Production status

In production since April 2026. The Divergence Engine is used in research sessions and investigative work. The Outlier Shield protects anomalous findings in entity analysis and cross-corpus investigation. Both are integrated with the [NIGHTSHIFT](https://github.com/duke-of-beans/nightshift) maintenance daemon — NIGHTSHIFT Pass 12 (LANTERN autonomous synthesis) implements structured novelty injection over the memory graph.

## Prior art

- **Curiosity-driven exploration** — Pathak et al. (2017), intrinsic motivation for RL
- **Anomaly detection** — Chandola et al. (2009), survey of anomaly detection techniques
- **Serendipity in information retrieval** — Foster & Ford (2003)
- **Antifragility** — Taleb (2012), systems that benefit from disorder
- **Simulated annealing** — Kirkpatrick et al. (1983), controlled randomness for optimization

## Part of the cognitive stack

- [NIGHTSHIFT](https://github.com/duke-of-beans/nightshift) — Pass 12 implements LANTERN novelty injection over memory
- [Assertion Router](https://github.com/duke-of-beans/assertion-router) — outliers route to INVESTIGATIVE mode
- [Tribunal](https://github.com/duke-of-beans/tribunal) — multi-perspective evaluation of protected outliers
- [Cognitive Stack](https://github.com/duke-of-beans/cognitive-stack) — the full 10-system architecture

---

*Built by [David Kirsch](https://github.com/duke-of-beans). MIT License.*
