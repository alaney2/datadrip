# Log Normal Distribution

The log normal distribution is a continuous probability distribution of a random variable whose logarithm is normally distributed. In other words, if a random variable $X$ follows a log normal distribution, then the logarithm of $X$, denoted as $Y = \ln(X)$, follows a normal distribution. The log normal distribution is commonly used in various applications, such as modeling stock prices, lifetimes of products, and growth rates of organisms.

## Definition

A random variable $X$ is said to follow a log normal distribution if its probability density function (PDF) is given by:


$$

f(x; \mu, \sigma) = \frac{1}{x\sigma\sqrt{2\pi}}\exp\left(-\frac{(\ln(x) - \mu)^2}{2\sigma^2}\right)

$$


where $x > 0$, $\mu$ is the mean of the logarithm of $X$, and $\sigma > 0$ is the standard deviation of the logarithm of $X$. The parameters $\mu$ and $\sigma$ determine the shape and scale of the distribution.

## Properties

1. **Mean**: The mean of a log normal distribution is given by:

   
$$

   E[X] = \exp\left(\mu + \frac{1}{2}\sigma^2\right)
   
$$


2. **Variance**: The variance of a log normal distribution is given by:

   
$$

   \text{Var}[X] = \left(\exp(\sigma^2) - 1\right)\exp(2\mu + \sigma^2)
   
$$


3. **Median**: The median of a log normal distribution is given by:

   
$$

   \text{Med}[X] = \exp(\mu)
   
$$


4. **Mode**: The mode of a log normal distribution is given by:

   
$$

   \text{Mode}[X] = \exp(\mu - \sigma^2)
   
$$


5. **Skewness**: The skewness of a log normal distribution is given by:

   
$$

   \text{Skew}[X] = \left(\exp(\sigma^2) + 2\right)\sqrt{\exp(\sigma^2) - 1}
   
$$


6. **Kurtosis**: The kurtosis of a log normal distribution is given by:

   
$$

   \text{Kurt}[X] = \exp(4\sigma^2) + 2\exp(3\sigma^2) + 3\exp(2\sigma^2) - 6
   
$$


## Relationship to Other Distributions

1. **Normal Distribution**: As mentioned earlier, if $X$ follows a log normal distribution, then $\ln(X)$ follows a normal distribution with mean $\mu$ and standard deviation $\sigma$.

2. **Exponential Distribution**: The log normal distribution can be considered as a generalization of the exponential distribution. If $X$ follows an exponential distribution with rate parameter $\lambda$, then $\ln(X)$ follows a normal distribution with mean $-\ln(\lambda)$ and standard deviation $1$.

3. **Weibull Distribution**: The log normal distribution is a special case of the Weibull distribution when the shape parameter is equal to $1$.

## Applications

The log normal distribution is widely used in various fields, including finance, economics, biology, and engineering. Some common applications include:

1. **Finance**: Modeling stock prices, returns on investments, and other financial variables that are strictly positive and exhibit a skewed distribution.

2. **Economics**: Modeling income distribution, as incomes are strictly positive and often exhibit a right-skewed distribution.

3. **Biology**: Modeling growth rates of organisms, as they are strictly positive and often exhibit a right-skewed distribution.

4. **Engineering**: Modeling lifetimes of products, as they are strictly positive and often exhibit a right-skewed distribution.

5. **Survival Analysis**: Modeling the time until an event occurs, such as the time until failure of a component or the time until death of an organism.

## Estimation

The parameters $\mu$ and $\sigma$ of a log normal distribution can be estimated using various methods, such as maximum likelihood estimation (MLE) or method of moments. In MLE, the parameters are chosen to maximize the likelihood function, which is the probability of observing the given data under the assumed distribution. For the log normal distribution, the MLE estimates of $\mu$ and $\sigma$ can be obtained by taking the logarithm of the data and then computing the sample mean and sample standard deviation, respectively.

## Conclusion

The log normal distribution is a versatile and widely used probability distribution that models random variables that are strictly positive and exhibit a skewed distribution. Its properties and relationships to other distributions make it a useful tool in various applications, such as finance, economics, biology, and engineering. Estimation of its parameters can be done using methods like maximum likelihood estimation, making it a practical choice for modeling real-world data.
