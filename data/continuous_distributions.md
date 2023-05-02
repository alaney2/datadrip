# Continuous Distributions

Continuous distributions are a type of probability distribution where the random variable takes on any value within a certain interval or range. This is in contrast to discrete distributions, where the random variable can only take on certain specific values. 

## Probability Density Function

The probability density function (PDF) is used to describe the distribution of continuous random variables. It is a function that describes the relative likelihood of observing a value of the random variable. The area under the PDF curve between any two values of the random variable represents the probability of the random variable assuming a value within that range.

The PDF must satisfy the following properties:
* $f(x) \geq 0$ for all $x$.
* $\int_{-\infty}^{\infty} f(x) dx = 1$.

## Examples of Continuous Distributions

### Normal Distribution

The normal distribution is one of the most commonly used continuous distributions. It is also known as the Gaussian distribution. The normal distribution is symmetric, bell-shaped, and defined by two parameters: the mean $\mu$ and the standard deviation $\sigma$. The PDF of the normal distribution is given by:

$$ f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{(x-\mu)^2}{2\sigma^2}} $$

### Exponential Distribution

The exponential distribution is a continuous distribution that is often used to model the time between events in a Poisson process. The PDF of the exponential distribution is given by:

$$ f(x) = \begin{cases} \lambda e^{-\lambda x} & x \geq 0 \\ 0 & x < 0 \end{cases} $$

where $\lambda$ is the rate parameter.

### Beta Distribution

The beta distribution is a continuous distribution that is often used to model proportions or probabilities. The PDF of the beta distribution is given by:

$$ f(x) = \frac{x^{\alpha-1}(1-x)^{\beta-1}}{B(\alpha,\beta)} $$

where $\alpha$ and $\beta$ are shape parameters and $B(\alpha,\beta)$ is the beta function.

### Gamma Distribution

The gamma distribution is a continuous distribution that is often used to model waiting times or survival times. The PDF of the gamma distribution is given by:

$$ f(x) = \frac{x^{\alpha-1}e^{-\frac{x}{\beta}}}{\beta^\alpha \Gamma(\alpha)} $$

where $\alpha$ and $\beta$ are shape and scale parameters, respectively, and $\Gamma(\alpha)$ is the gamma function.

### Weibull Distribution

The Weibull distribution is a continuous distribution that is often used to model failure times or lifetimes. The PDF of the Weibull distribution is given by:

$$ f(x) = \begin{cases} \frac{\alpha}{\beta} (\frac{x}{\beta})^{\alpha-1} e^{-(\frac{x}{\beta})^\alpha} & x \geq 0 \\ 0 & x < 0 \end{cases} $$

where $\alpha$ and $\beta$ are shape and scale parameters, respectively.

### Lognormal Distribution

The lognormal distribution is a continuous distribution that is often used to model the distribution of product of random variables. The PDF of the lognormal distribution is given by:

$$ f(x) = \frac{1}{x\sigma\sqrt{2\pi}} e^{-\frac{(\ln x - \mu)^2}{2\sigma^2}} $$

where $\mu$ and $\sigma$ are the mean and standard deviation of the logarithm of the random variable, respectively.

### Chi-Squared Distribution

The chi-squared distribution is a continuous distribution that is often used in hypothesis testing. The PDF of the chi-squared distribution is given by:

$$ f(x) = \begin{cases} \frac{1}{2^{\frac{k}{2}}\Gamma(\frac{k}{2})} x^{\frac{k}{2}-1} e^{-\frac{x}{2}} & x \geq 0 \\ 0 & x < 0 \end{cases} $$

where $k$ is the degrees of freedom and $\Gamma(\frac{k}{2})$ is the gamma function.

### Student's t-Distribution

The Student's t-distribution is a continuous distribution that is often used in hypothesis testing when the sample size is small or when the population variance is unknown. The PDF of the Student's t-distribution is given by:

$$ f(x) = \frac{\Gamma(\frac{\nu+1}{2})}{\sqrt{\nu\pi}\Gamma(\frac{\nu}{2})} \left(1+\frac{x^2}{\nu}\right)^{-\frac{\nu+1}{2}} $$

where $\nu$ is the degrees of freedom and $\Gamma(\frac{\nu}{2})$ is the gamma function.

### F-Distribution

The F-distribution is a continuous distribution that is often used in hypothesis testing for comparing variances of two populations. The PDF of the F-distribution is given by:

$$ f(x) = \begin{cases} \frac{\sqrt{\frac{(df_1x)^{df_1}df_2^{df_2}}{(df_1x+df_2)^{df_1+df_2}}}}{xB(\frac{df_1}{2},\frac{df_2}{2})} & x \geq 0 \\ 0 & x < 0 \end{cases} $$

where $df_1$ and $df_2$ are the degrees of freedom for the numerator and denominator, respectively, and $B(\frac{df_1}{2},\frac{df_2}{2})$ is the beta function.

## Conclusion

Continuous distributions are a fundamental concept in probability theory and statistics. They are used to model a wide range of phenomena in the natural and social sciences. In this article, several common continuous distributions were introduced, along with their probability density functions.
