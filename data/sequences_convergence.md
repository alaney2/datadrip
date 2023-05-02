# Sequences Convergence

In mathematics, a sequence is a list of numbers that follow a particular pattern. The concept of sequences is fundamental in the study of calculus, analysis, and other branches of mathematics. When dealing with sequences, it is often essential to determine whether a given sequence converges to a particular limit or not. This is where the concept of sequences convergence comes into play.

## Convergence of Sequences

A sequence $(a_n)$ is said to converge to a limit $L$ if, for every $\epsilon > 0$, there exists a positive integer $N$ such that $|a_n - L| < \epsilon$ for all $n \geq N$. In other words, as $n$ becomes larger and larger, the terms of the sequence get closer and closer to the limit $L$.

Symbolically, we can express this as:

$$\lim_{n \to \infty} a_n = L$$

where $\lim_{n \to \infty}$ denotes the limit of the sequence as $n$ approaches infinity.

## Divergence of Sequences

A sequence $(a_n)$ is said to diverge if it does not converge to any limit. In other words, if there exists no real number $L$ such that for every $\epsilon > 0$, there exists a positive integer $N$ such that $|a_n - L| < \epsilon$ for all $n \geq N$.

## Types of Convergence

There are different types of convergence that a sequence can exhibit. Some of the common types of convergence are:

### Pointwise Convergence

A sequence of functions $(f_n)$ converges pointwise to a function $f$ if, for every $x$ in the domain of $f$, the sequence of real numbers $(f_n(x))$ converges to $f(x)$.

### Uniform Convergence

A sequence of functions $(f_n)$ converges uniformly to a function $f$ if, for every $\epsilon > 0$, there exists a positive integer $N$ such that $|f_n(x) - f(x)| < \epsilon$ for all $n \geq N$ and all $x$ in the domain of $f$.

### Absolute Convergence

A series $\sum_{n=1}^{\infty} a_n$ is said to converge absolutely if the series $\sum_{n=1}^{\infty} |a_n|$ converges.

## Examples

Consider the following sequence:

$$a_n = \frac{n^2 + 3n + 2}{2n^2 + 1}$$

To show that this sequence converges, we need to find a limit $L$ such that:

$$\lim_{n \to \infty} \frac{n^2 + 3n + 2}{2n^2 + 1} = L$$

Dividing the numerator and denominator by $n^2$, we get:

$$\lim_{n \to \infty} \frac{1 + \frac{3}{n} + \frac{2}{n^2}}{2 + \frac{1}{n^2}} = \frac{1}{2}$$

Therefore, we can conclude that the sequence $(a_n)$ converges to $\frac{1}{2}$.

## Further Readings

- Cauchy Sequences
- Bounded Sequences
- Monotonic Sequences
