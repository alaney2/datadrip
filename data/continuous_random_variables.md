# Continuous Random Variables

A continuous random variable is a type of random variable that can take on an infinite number of values within a specified range or interval. Unlike discrete random variables, which can only take on a finite number of distinct values, continuous random variables can take on any value within their range, with the probability of taking on a specific value being zero. Continuous random variables are used to model quantities that can vary continuously, such as time, distance, temperature, and weight.

## Probability Density Function

The probability distribution of a continuous random variable is described by its probability density function (PDF). The PDF, denoted as $f_X(x)$, is a function that maps each value of the random variable to its probability density. The probability density is not the same as the probability of the random variable taking on a specific value, as the probability of a continuous random variable taking on any specific value is always zero.

Instead, the probability density function is used to calculate the probability of the random variable falling within a specific interval. The probability of a continuous random variable $X$ taking on a value within the interval $[a, b]$ is given by the integral of the PDF over that interval:


$$

P(a \le X \le b) = \int_a^b f_X(x) dx

$$


The PDF must satisfy two conditions:

1. $f_X(x) \ge 0$ for all $x$. The probability density cannot be negative.
2. $\int_{-\infty}^{\infty} f_X(x) dx = 1$. The total probability of all possible values of the random variable must equal 1.

## Cumulative Distribution Function

The cumulative distribution function (CDF) of a continuous random variable is a function that maps each value of the random variable to the probability of the random variable taking on a value less than or equal to that value. The CDF, denoted as $F_X(x)$, is defined as:


$$

F_X(x) = P(X \le x) = \int_{-\infty}^x f_X(t) dt

$$


The CDF is a non-decreasing function, meaning that as $x$ increases, the value of $F_X(x)$ either stays the same or increases. The CDF has the following properties:

1. $0 \le F_X(x) \le 1$ for all $x$. The probability of the random variable taking on a value less than or equal to $x$ is always between 0 and 1.
2. $F_X(-\infty) = 0$. The probability of the random variable taking on a value less than negative infinity is 0.
3. $F_X(\infty) = 1$. The probability of the random variable taking on a value less than or equal to positive infinity is 1.

The PDF of a continuous random variable can be obtained by taking the derivative of its CDF:


$$

f_X(x) = \frac{dF_X(x)}{dx}

$$


## Expected Value

The expected value, or mean, of a continuous random variable is a measure of the central tendency of the random variable's distribution. The expected value, denoted as $E[X]$, is defined as the weighted average of all possible values of the random variable, with the weights being the probability densities of the values:


$$

E[X] = \int_{-\infty}^{\infty} x f_X(x) dx

$$


The expected value is not always guaranteed to exist, as the integral may not converge. However, if it does exist, the expected value provides a measure of the "center" of the distribution of the random variable.

## Variance

The variance of a continuous random variable is a measure of the dispersion or spread of the random variable's distribution. The variance, denoted as $Var(X)$, is defined as the expected value of the squared difference between the random variable and its expected value:


$$

Var(X) = E[(X - E[X])^2] = \int_{-\infty}^{\infty} (x - E[X])^2 f_X(x) dx

$$


The square root of the variance is called the standard deviation, denoted as $\sigma(X)$:


$$

\sigma(X) = \sqrt{Var(X)}

$$


The standard deviation provides a measure of the "spread" of the distribution of the random variable in the same units as the random variable itself.

## Common Continuous Distributions

There are several common continuous probability distributions that are used to model various phenomena. Some of these include:

1. Uniform distribution: A continuous random variable with a constant probability density over a specified interval.
2. Normal distribution: A continuous random variable with a bell-shaped probability density function, characterized by its mean and standard deviation.
3. Exponential distribution: A continuous random variable that models the time between events in a Poisson process.
4. Gamma distribution: A continuous random variable that generalizes the exponential distribution, characterized by its shape and scale parameters.
5. Beta distribution: A continuous random variable defined on the interval [0, 1], characterized by its shape parameters.

Each of these distributions has its own unique properties and applications, and they can be used to model various real-world phenomena.
