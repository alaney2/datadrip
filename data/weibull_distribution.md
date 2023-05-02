# Weibull Distribution

The Weibull distribution is a continuous probability distribution that is widely used in reliability engineering to model the lifetime of mechanical and electrical components. It is named after Swedish mathematician Waloddi Weibull, who first proposed the distribution in 1937 to describe the breaking strength of materials.

## Probability Density Function

The probability density function (PDF) of the Weibull distribution is given by:

$$f(x;k,\lambda)=\begin{cases}
\frac{k}{\lambda}\left(\frac{x}{\lambda}\right)^{k-1}e^{-(x/\lambda)^k}, & x\geq 0\\
0, & x<0
\end{cases}$$

where $x$ is the random variable, $k$ is the shape parameter, and $\lambda$ is the scale parameter.

The shape parameter $k$ determines the shape of the PDF. If $k>1$, the PDF is bell-shaped and the distribution is said to be "Weibull in shape". If $k=1$, the PDF is exponential and the distribution reduces to the exponential distribution. If $k<1$, the PDF is U-shaped and the distribution is said to be "reverse Weibull in shape".

The scale parameter $\lambda$ determines the scale of the PDF. It represents the characteristic lifetime of the component. The larger the value of $\lambda$, the longer the expected lifetime of the component.

## Cumulative Distribution Function

The cumulative distribution function (CDF) of the Weibull distribution is given by:

$$F(x;k,\lambda)=1-e^{-(x/\lambda)^k}$$

The CDF gives the probability that the random variable $x$ is less than or equal to a certain value $x_0$. It can be used to calculate the reliability function, which gives the probability that the component will survive beyond a certain time $t$:

$$R(t;k,\lambda)=1-F(t;k,\lambda)=e^{-(t/\lambda)^k}$$

## Hazard Function

The hazard function of the Weibull distribution is given by:

$$h(x;k,\lambda)=\frac{f(x;k,\lambda)}{R(x;k,\lambda)}=\frac{k}{\lambda}\left(\frac{x}{\lambda}\right)^{k-1}$$

The hazard function gives the instantaneous failure rate at time $t$ given that the component has survived up to that time. It is an increasing function of time for $k>1$ (increasing failure rate) and a decreasing function of time for $k<1$ (decreasing failure rate).

## Maximum Likelihood Estimation

Given a sample of $n$ observations $x_1,x_2,\ldots,x_n$ from a Weibull distribution, the maximum likelihood estimator (MLE) of the parameters $k$ and $\lambda$ is obtained by maximizing the log-likelihood function:

$$\ln L=\sum_{i=1}^n\ln f(x_i;k,\lambda)=n\ln\frac{k}{\lambda}+(k-1)\sum_{i=1}^n\ln\frac{x_i}{\lambda}-\sum_{i=1}^n\left(\frac{x_i}{\lambda}\right)^k$$

The MLEs of $k$ and $\lambda$ are the solutions of the following equations:

$$\frac{\partial\ln L}{\partial k}=\frac{n}{k}-\sum_{i=1}^n\ln\frac{x_i}{\lambda}+\sum_{i=1}^n\left(\frac{x_i}{\lambda}\right)^k\ln\frac{x_i}{\lambda}=0$$

$$\frac{\partial\ln L}{\partial\lambda}=-\frac{n}{\lambda}+\frac{k}{\lambda}\sum_{i=1}^n\left(\frac{x_i}{\lambda}\right)^k=0$$

These equations can be solved numerically using iterative methods.

## Applications

The Weibull distribution is widely used in reliability engineering to model the lifetime of mechanical and electrical components. It can also be used to model the time-to-failure of software systems and the duration of human lifetimes.

In survival analysis, the Weibull distribution is often used to model the hazard function of a population. It is also used in accelerated life testing, where the goal is to estimate the lifetime distribution of a component under accelerated conditions.

## Further Readings

- Gamma Distribution
- Lognormal Distribution
- Pareto Distribution
- Extreme Value Distribution
- Reliability Engineering
- Accelerated Life Testing
- Censoring and Truncation.
