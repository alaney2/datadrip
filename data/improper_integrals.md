# Improper Integrals

An improper integral occurs when either the limits of integration are infinite or the integrand is unbounded in the interval of integration. The concept of improper integrals is a natural extension of definite integrals that allows one to evaluate integrals that would otherwise be undefined. Improper integrals are used extensively in physics, engineering, and mathematics to solve complex problems that cannot be solved by using standard integration techniques.

## Definition

An improper integral of the first kind is defined as:

$$\int_{a}^{b}f(x)dx = \lim_{t \to b^-}\int_{a}^{t}f(x)dx$$

if the limit exists. Similarly, an improper integral of the second kind is defined as:

$$\int_{a}^{\infty}f(x)dx = \lim_{t \to \infty}\int_{a}^{t}f(x)dx$$

if the limit exists. If both limits exist, then the integral is said to be convergent, otherwise it is divergent.

## Convergence Tests

There are several tests that can be used to determine the convergence or divergence of improper integrals. Some of the commonly used tests are:

### Comparison Test

Suppose that $f(x)$ and $g(x)$ are continuous functions and $0 \leq f(x) \leq g(x)$ for all $x$ greater than some fixed number $a$. If $\int_{a}^{\infty}g(x)dx$ is convergent, then $\int_{a}^{\infty}f(x)dx$ is also convergent. Conversely, if $\int_{a}^{\infty}f(x)dx$ is divergent, then $\int_{a}^{\infty}g(x)dx$ is also divergent.

### Limit Comparison Test

Suppose that $f(x)$ and $g(x)$ are continuous functions such that $f(x), g(x) > 0$ for all $x$ greater than some fixed number $a$. If $\lim_{x \to \infty}\frac{f(x)}{g(x)} = L$, where $L$ is a finite positive number, then either both integrals $\int_{a}^{\infty}f(x)dx$ and $\int_{a}^{\infty}g(x)dx$ converge or both diverge.

### Integral Test

Suppose that $f(x)$ is a continuous, positive, and decreasing function for all $x$ greater than some fixed number $a$. Then the improper integral $\int_{a}^{\infty}f(x)dx$ converges if and only if the infinite series $\sum_{n = a}^{\infty}f(n)$ converges.

### p-Series Test

The p-series test states that if $p > 1$, then the improper integral $\int_{1}^{\infty}\frac{1}{x^p}dx$ is convergent, and if $p \leq 1$, then it is divergent.

## Examples

### Example 1

Evaluate the improper integral $\int_{0}^{\infty}\frac{1}{1+x^2}dx$.

Solution:

$$\int_{0}^{\infty}\frac{1}{1+x^2}dx = \lim_{t \to \infty}\int_{0}^{t}\frac{1}{1+x^2}dx$$

$$= \lim_{t \to \infty}[\arctan(x)]_{0}^{t} = \frac{\pi}{2}$$

### Example 2

Determine the convergence or divergence of the improper integral $\int_{1}^{\infty}\frac{1}{x^2}dx$.

Solution:

$$\int_{1}^{\infty}\frac{1}{x^2}dx = \lim_{t \to \infty}\int_{1}^{t}\frac{1}{x^2}dx$$

$$= \lim_{t \to \infty}[-\frac{1}{x}]_{1}^{t} = 1$$

Since the limit exists, the integral is convergent.

## Further Readings

- Laplace Transforms
- Gamma Function
- Lebesgue Integration.
