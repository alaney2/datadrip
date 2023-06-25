# Moment Generating Functions

In probability theory and statistics, a moment generating function (MGF) is a function that generates the moments of a random variable's probability distribution. The MGF is particularly useful because it can be used to derive the mean, variance, and higher-order moments of a distribution, which are essential in understanding the properties of the distribution. Additionally, moment generating functions can be used to prove the Central Limit Theorem and to find the distribution of the sum of independent random variables.

## Definition

Given a random variable $X$ with probability density function (PDF) $f(x)$, the moment generating function $M_X(t)$ of $X$ is defined as the expected value of $e^{tX}$, where $t$ is a real number:


$$

M_X(t) = E[e^{tX}] = \int_{-\infty}^{\infty} e^{tx} f(x) dx

$$


for continuous random variables, and


$$

M_X(t) = E[e^{tX}] = \sum_{x} e^{tx} P(X = x)

$$


for discrete random variables.

The MGF exists if the above expectation converges for some interval of $t$ containing 0.

## Properties

1. **Uniqueness**: If two random variables have the same MGF, they have the same distribution. In other words, if $M_X(t) = M_Y(t)$ for all $t$ in some interval containing 0, then $X$ and $Y$ have the same distribution.

2. **Moments**: The $n$-th moment of a random variable $X$ can be found by taking the $n$-th derivative of its MGF with respect to $t$ and evaluating it at $t = 0$. Specifically, the $n$-th moment is given by:


$$

E[X^n] = \left. \frac{d^n}{dt^n} M_X(t) \right|_{t=0}

$$


3. **Sum of Independent Random Variables**: If $X$ and $Y$ are independent random variables with MGFs $M_X(t)$ and $M_Y(t)$, respectively, then the MGF of the sum $Z = X + Y$ is given by the product of the MGFs of $X$ and $Y$:


$$

M_Z(t) = M_X(t) M_Y(t)

$$


4. **Transformation**: If $Y = aX + b$, where $a$ and $b$ are constants, then the MGF of $Y$ is given by:


$$

M_Y(t) = e^{bt} M_X(at)

$$


## Examples

1. **Uniform Distribution**: Let $X$ be a continuous random variable uniformly distributed on the interval $[a, b]$. The PDF of $X$ is given by:


$$

f(x) = \begin{cases}
\frac{1}{b - a} & \text{if } a \le x \le b \\
0 & \text{otherwise}
\end{cases}

$$


The MGF of $X$ can be found by evaluating the expected value of $e^{tX}$:


$$

M_X(t) = \int_{a}^{b} e^{tx} \frac{1}{b - a} dx = \frac{e^{tb} - e^{ta}}{t(b - a)}

$$


2. **Exponential Distribution**: Let $X$ be a continuous random variable with an exponential distribution with parameter $\lambda > 0$. The PDF of $X$ is given by:


$$

f(x) = \begin{cases}
\lambda e^{-\lambda x} & \text{if } x \ge 0 \\
0 & \text{otherwise}
\end{cases}

$$


The MGF of $X$ can be found by evaluating the expected value of $e^{tX}$:


$$

M_X(t) = \int_{0}^{\infty} e^{tx} \lambda e^{-\lambda x} dx = \frac{\lambda}{\lambda - t}

$$


for $t < \lambda$.

## Applications

Moment generating functions have several applications in probability theory and statistics, including:

1. **Deriving moments**: MGFs can be used to find the mean, variance, and higher-order moments of a distribution, which are essential in understanding the properties of the distribution.

2. **Sums of independent random variables**: MGFs can be used to find the distribution of the sum of independent random variables, which is useful in various statistical analyses.

3. **Central Limit Theorem**: MGFs can be used to prove the Central Limit Theorem, a fundamental result in probability theory and statistics that states that the sum of a large number of independent and identically distributed random variables approaches a normal distribution.

4. **Characteristic functions**: MGFs are closely related to characteristic functions, which are another way to represent the distribution of a random variable and have applications in areas such as Fourier analysis and signal processing.
