# Uniform Distribution

The **uniform distribution** is a continuous probability distribution in which all values within a given interval are equally likely to occur. This distribution is also known as the rectangular distribution due to its constant probability density function (PDF) over the interval.

## Probability Density Function

The probability density function (PDF) of the uniform distribution is defined as:

$$
f(x) =
\begin{cases}
\frac{1}{b-a}, & \text{if } a \leq x \leq b \\
0, & \text{otherwise}
\end{cases}
$$

where $a$ and $b$ are the lower and upper bounds of the interval, respectively.

## Cumulative Distribution Function

The cumulative distribution function (CDF) of the uniform distribution is defined as:

$$
F(x) =
\begin{cases}
0, & \text{if } x < a \\
\frac{x-a}{b-a}, & \text{if } a \leq x \leq b \\
1, & \text{if } x > b
\end{cases}
$$

## Mean and Variance

The mean of the uniform distribution is:

$$
\mu = \frac{a+b}{2}
$$

and the variance is:

$$
\sigma^2 = \frac{(b-a)^2}{12}
$$

## Applications

The uniform distribution is commonly used in simulations, random number generation, and statistical modeling. It has applications in fields such as finance, physics, and engineering.

For example, in finance, the uniform distribution can be used to model the price fluctuations of an asset within a given range. In physics, it can be used to model the distribution of particles within a given volume. In engineering, it can be used to model the tolerance of a manufactured product within a given range.

Overall, the uniform distribution is a simple and useful probability distribution that is widely used in various fields.
