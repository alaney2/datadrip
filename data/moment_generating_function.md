# Moment Generating Function

In probability theory and statistics, the moment generating function (MGF) is a useful tool for characterizing the distribution of a random variable. It is particularly helpful in finding the moments of a random variable, which are important for understanding the shape, spread, and central tendency of the distribution. The MGF is defined as the expected value of the exponential function of the random variable, and it can be used to derive various properties of the distribution, such as the mean, variance, and higher-order moments.

## Definition

Let $X$ be a random variable with probability density function (PDF) $f_X(x)$ if $X$ is continuous, or probability mass function (PMF) $p_X(x)$ if $X$ is discrete. The moment generating function of $X$, denoted as $M_X(t)$, is defined as:


$$

M_X(t) = E[e^{tX}] = \begin{cases}
\int_{-\infty}^{\infty} e^{tx} f_X(x) dx, & \text{if } X \text{ is continuous} \\
\sum_{x} e^{tx} p_X(x), & \text{if } X \text{ is discrete}
\end{cases}

$$


where $t$ is a real number and $E[\cdot]$ denotes the expected value. The MGF exists if the integral or sum converges for some interval of $t$ containing 0.

## Properties

The moment generating function has several useful properties that make it a powerful tool for analyzing the distribution of a random variable:

1. **Moments**: The $n$-th moment of $X$, denoted as $E[X^n]$, can be found by taking the $n$-th derivative of $M_X(t)$ with respect to $t$ and evaluating it at $t=0$:


$$

E[X^n] = \left.\frac{d^n}{dt^n} M_X(t)\right|_{t=0}

$$


2. **Uniqueness**: If two random variables $X$ and $Y$ have the same MGF, i.e., $M_X(t) = M_Y(t)$ for all $t$ in some interval containing 0, then $X$ and $Y$ have the same distribution, i.e., $f_X(x) = f_Y(x)$ or $p_X(x) = p_Y(x)$.

3. **Sum of independent random variables**: If $X$ and $Y$ are independent random variables, then the MGF of their sum $Z = X + Y$ is the product of their MGFs:


$$

M_Z(t) = M_X(t) M_Y(t)

$$


This property is particularly useful for finding the distribution of the sum of independent random variables, which is a common problem in probability theory and statistics.

## Examples

1. **Normal distribution**: Let $X$ be a normally distributed random variable with mean $\mu$ and variance $\sigma^2$, i.e., $X \sim N(\mu, \sigma^2)$. The PDF of $X$ is given by:


$$

f_X(x) = \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}

$$


The MGF of $X$ can be found by evaluating the expected value:


$$

M_X(t) = E[e^{tX}] = \int_{-\infty}^{\infty} e^{tx} \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x-\mu)^2}{2\sigma^2}} dx = e^{\mu t + \frac{1}{2}\sigma^2 t^2}

$$


2. **Poisson distribution**: Let $X$ be a Poisson distributed random variable with parameter $\lambda$, i.e., $X \sim Poisson(\lambda)$. The PMF of $X$ is given by:


$$

p_X(x) = e^{-\lambda} \frac{\lambda^x}{x!}, \quad x = 0, 1, 2, \dots

$$


The MGF of $X$ can be found by evaluating the expected value:


$$

M_X(t) = E[e^{tX}] = \sum_{x=0}^{\infty} e^{tx} e^{-\lambda} \frac{\lambda^x}{x!} = e^{\lambda(e^t - 1)}

$$


## Applications

The moment generating function is widely used in probability theory and statistics for various purposes, such as:

- Finding the moments of a random variable, which are important for characterizing the distribution's shape, spread, and central tendency.
- Proving the uniqueness of a distribution, i.e., showing that two random variables with the same MGF have the same distribution.
- Finding the distribution of the sum of independent random variables, which is a common problem in probability theory and statistics.
- Deriving the characteristic function and cumulant generating function, which are other useful tools for characterizing the distribution of a random variable.
