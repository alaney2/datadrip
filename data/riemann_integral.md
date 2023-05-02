# Riemann Integral

The Riemann Integral is a method of calculating the area under a curve of a function. The integral is named after the German mathematician Bernhard Riemann, who first introduced it in 1854. 

## Definition

Formally, the Riemann Integral of a function f(x) over an interval [a, b] is defined as the limit of a Riemann sum as the mesh size of the partition of [a, b] approaches zero:

$$\int_{a}^{b} f(x) dx = \lim_{n \rightarrow \infty} \sum_{i=1}^{n} f(x_i^*) \Delta x$$

where $\Delta x = \frac{b-a}{n}$, and $x_i^*$ is a point in the ith subinterval of the partition of [a, b].

Intuitively, the Riemann sum approximates the area under the curve of a function by dividing the interval into smaller subintervals and calculating the area of each rectangle formed by the function and the subinterval. The limit of the Riemann sum as the number of subintervals approaches infinity gives the exact area under the curve of the function.

## Properties 

The Riemann Integral has a number of useful properties that make it an important tool in calculus:

- Linearity: $\int_{a}^{b} (cf(x)+g(x)) dx = c\int_{a}^{b} f(x)dx + \int_{a}^{b} g(x)dx$
- Additivity: $\int_{a}^{c} f(x)dx + \int_{c}^{b} f(x)dx = \int_{a}^{b} f(x)dx$
- Monotonicity: If $f(x) \leq g(x)$ for all $x$ in $[a, b]$, then $\int_{a}^{b} f(x)dx \leq \int_{a}^{b} g(x)dx$
- Integration by Substitution: $\int_{a}^{b} f(g(x))g'(x)dx = \int_{g(a)}^{g(b)} f(u)du$, where $u = g(x)$
- Definite Integrals can be used to calculate the area between two curves.

## Uses

The Riemann Integral is used in a wide variety of mathematical and scientific applications, including physics, engineering, and economics. It is also a fundamental concept in calculus and is used to define other important concepts such as the definite integral, the improper integral, and the Lebesgue Integral.

## Further Readings

- [Riemann Sum](riemann_sum): An introductory concept related to the Riemann Integral.
- [Lebesgue Integration](lebesgue_integration): A more general method of integration that extends the Riemann Integral.
- [Improper Integral](improper_integral): An extension of the Riemann Integral to integrate functions that do not converge on a given interval.
