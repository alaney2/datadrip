# Lebesgue Integration

Lebesgue integration is a mathematical concept that extends the Riemann integral to a larger class of functions. It is named after Henri Lebesgue, a French mathematician who developed the theory in the early 1900s. 

## Overview

Lebesgue integration is a method of measuring the area under a curve that is more flexible than the Riemann integral. The Riemann integral is based on partitioning the domain of a function into small intervals and approximating the area under the curve with rectangles. In contrast, the Lebesgue integral measures the area by dividing the range of the function into small intervals and approximating the area with rectangles whose height is determined by the values of the function on those intervals. 

Lebesgue integration is more powerful than Riemann integration because it can handle functions that are not continuous or do not have a finite number of discontinuities. It also allows for more general domains, such as infinite or unbounded intervals. 

## Definition

To define the Lebesgue integral, one first needs to define the concept of a measurable function. A function $f$ is said to be *measurable* if, for any real number $a$, the set $\{x \in X : f(x) > a\}$ is measurable, where $X$ is the domain of $f$. 

Then, given a measurable function $f$ on a measure space $(X,\mathcal{M},\mu)$, where $\mathcal{M}$ is a $\sigma$-algebra of subsets of $X$ and $\mu$ is a measure on $\mathcal{M}$, the Lebesgue integral of $f$ over $X$ is denoted by $\int_X f d\mu$ and is defined as follows:

$$\int_X f d\mu = \int_{-\infty}^\infty a d\mu_f(a)$$

where $\mu_f(a) = \mu(\{x \in X : f(x) > a\})$, the set of all $a$ for which $\mu_f(a) > 0$ is countable, and the integral on the right-hand side is the standard Riemann integral of the function $a \mapsto a\mu_f(a)$ over the real line.

## Properties

The Lebesgue integral shares many of the properties of the Riemann integral, such as linearity and additivity. However, it also has some unique properties:

- If $f$ is non-negative, then $\int_X f d\mu \geq 0$.
- If $f$ and $g$ are integrable functions and $f(x) \leq g(x)$ for all $x \in X$, then $\int_X f d\mu \leq \int_X g d\mu$.
- The Lebesgue integral is more general than the Riemann integral: every Riemann integrable function is Lebesgue integrable, but not every Lebesgue integrable function is Riemann integrable.
- The Lebesgue integral can handle functions with more general domains, such as infinite or unbounded intervals.

## Applications

Lebesgue integration has a wide range of applications in mathematics, physics, and engineering. It is used to define the Fourier transform and other integral transforms, as well as to study the properties of functions in analysis and topology. It also has applications in probability theory and statistics, where it is used to define the expectation of a random variable and to study properties of probability distributions.

## Further Readings

- [Lebesgue Measure](lebesgue_measure): A measure that is closely related to Lebesgue integration.
- [Dominated Convergence Theorem](dominated_convergence_theorem): A theorem that provides a condition for when the limit of a sequence of integrable functions can be taken inside the integral sign.
- [L_p Spaces](l_p_spaces): A family of function spaces that are closely related to Lebesgue integration.
