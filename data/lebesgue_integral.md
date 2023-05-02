# Lebesgue Integral

The Lebesgue integral is a type of integral used in mathematics, particularly in measure theory and real analysis. It is named after French mathematician Henri Lebesgue, who first introduced the concept in 1902.

The Lebesgue integral is an extension of the Riemann integral, which is a way to calculate the area under a curve. However, the Riemann integral has limitations, particularly when dealing with functions that are not continuous or when integrating over unbounded domains. The Lebesgue integral overcomes these limitations by allowing for a more flexible integration process.

## Definition

The Lebesgue integral is defined in terms of a measure, which is a function that assigns a non-negative real number to subsets of a set. Given a measure space $(X, \mathcal{M}, \mu)$, where $X$ is a set, $\mathcal{M}$ is a sigma-algebra of subsets of $X$, and $\mu$ is a measure on $\mathcal{M}$, the Lebesgue integral of a measurable function $f: X \rightarrow \mathbb{R}$ is defined as:

$$\int_X f d\mu = \int_{[a,b]} f d\mu = \int_{-\infty}^{\infty} f(x) d\mu(x)$$

where $[a,b]$ is a closed interval in $\mathbb{R}$ and $\mu$ is the Lebesgue measure.

## Properties

The Lebesgue integral has several properties that make it a useful tool in mathematical analysis. For example, it satisfies the linearity property, which states that for any constants $a, b \in \mathbb{R}$ and measurable functions $f, g: X \rightarrow \mathbb{R}$, we have:

$$\int_X (af + bg) d\mu = a \int_X f d\mu + b \int_X g d\mu$$

Additionally, it satisfies the monotonicity property, which states that if $f, g: X \rightarrow \mathbb{R}$ are measurable functions such that $f(x) \leq g(x)$ for all $x \in X$, then:

$$\int_X f d\mu \leq \int_X g d\mu$$

## Applications

The Lebesgue integral has many applications in mathematical analysis, probability theory, and other fields. For example, it is used to define the Fourier transform and to study the convergence of sequences of functions. It is also used in probability theory to define the expected value of a random variable and to calculate probabilities of events.

## Further Readings

- "Lebesgue Integration on Euclidean Space" by Frank Jones
- "Measure and Integration Theory" by Heinz Bauer and Robert B. Burckel
- "Real Analysis and Probability" by R.M. Dudley
