# Probability Density Function

In probability theory and statistics, the probability density function (PDF) is a function that describes the likelihood of a continuous random variable taking on a specific value or range of values. The PDF is used to define the probability distribution of a continuous random variable and provides a mathematical model for the underlying process generating the data.

## Definition

Let $X$ be a continuous random variable with a range $R_X$. The probability density function $f_X(x)$ of $X$ is a function that satisfies the following conditions:

1. $f_X(x) \geq 0$ for all $x \in R_X$.
2. $\int_{-\infty}^{\infty} f_X(x) dx = 1$.

The probability that $X$ lies in the interval $[a, b]$ is given by the integral of the PDF over that interval:


$$

P(a \leq X \leq b) = \int_a^b f_X(x) dx

$$


It is important to note that the value of the PDF at a specific point does not represent the probability of the random variable taking that value. Instead, it represents the relative likelihood of the random variable being close to that value. In other words, the PDF provides a measure of how densely the probability mass is distributed around a particular value.

## Properties

Some important properties of probability density functions include:

1. **Normalization**: The total probability of all possible outcomes must equal 1. This is represented by the integral of the PDF over the entire range of the random variable:

    
$$

    \int_{-\infty}^{\infty} f_X(x) dx = 1
    
$$


2. **Non-negativity**: The PDF must be non-negative for all values of the random variable:

    
$$

    f_X(x) \geq 0 \quad \text{for all } x \in R_X
    
$$


3. **Mean and Variance**: The mean (expected value) and variance of a continuous random variable can be calculated using the PDF:

    - Mean: $\mu = E[X] = \int_{-\infty}^{\infty} x f_X(x) dx$
    - Variance: $\sigma^2 = E[(X - \mu)^2] = \int_{-\infty}^{\infty} (x - \mu)^2 f_X(x) dx$

4. **Cumulative Distribution Function**: The cumulative distribution function (CDF) of a continuous random variable can be obtained by integrating the PDF:

    
$$

    F_X(x) = P(X \leq x) = \int_{-\infty}^x f_X(t) dt
    
$$


    Conversely, the PDF can be obtained by differentiating the CDF:

    
$$

    f_X(x) = \frac{dF_X(x)}{dx}
    
$$


## Common Probability Density Functions

There are several common probability density functions that are used to model various types of continuous random variables. Some of these include:

1. **Uniform Distribution**: The uniform distribution is characterized by a constant probability density function over a specified interval $[a, b]$. The PDF of a uniform random variable is given by:

    
$$

    f_X(x) = \begin{cases}
    \frac{1}{b - a} & \text{for } x \in [a, b] \\
    0 & \text{otherwise}
    \end{cases}
    
$$


2. **Normal (Gaussian) Distribution**: The normal distribution is a symmetric, bell-shaped distribution that is characterized by its mean $\mu$ and variance $\sigma^2$. The PDF of a normal random variable is given by:

    
$$

    f_X(x) = \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x - \mu)^2}{2\sigma^2}}
    
$$


3. **Exponential Distribution**: The exponential distribution is characterized by a single parameter $\lambda > 0$, which represents the rate of the process. The PDF of an exponential random variable is given by:

    
$$

    f_X(x) = \begin{cases}
    \lambda e^{-\lambda x} & \text{for } x \geq 0 \\
    0 & \text{for } x < 0
    \end{cases}
    
$$


4. **Gamma Distribution**: The gamma distribution is a generalization of the exponential distribution and is characterized by two parameters, the shape parameter $k > 0$ and the scale parameter $\theta > 0$. The PDF of a gamma random variable is given by:

    
$$

    f_X(x) = \begin{cases}
    \frac{1}{\Gamma(k)\theta^k} x^{k-1} e^{-\frac{x}{\theta}} & \text{for } x \geq 0 \\
    0 & \text{for } x < 0
    \end{cases}
    
$$


    where $\Gamma(k)$ is the gamma function.

These are just a few examples of the many probability density functions that can be used to model continuous random variables. The choice of an appropriate PDF depends on the specific problem and the characteristics of the underlying process generating the data.
