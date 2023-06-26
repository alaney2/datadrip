# Extreme Value Distribution

In probability theory and statistics, the extreme value distribution (EVD) is a family of continuous probability distributions that describe the distribution of the maximum (or minimum) of a sample of independent and identically distributed (i.i.d.) random variables. Extreme value distributions are widely used in various fields, such as hydrology, finance, and engineering, to model the behavior of extreme events, such as floods, stock market crashes, and material failures.

## Types of Extreme Value Distributions

There are three main types of extreme value distributions, which are classified based on the behavior of the tails of the underlying distribution. These types are known as the Gumbel, Fréchet, and Weibull distributions, and they are collectively referred to as the generalized extreme value (GEV) distribution.

### Gumbel Distribution

The Gumbel distribution, also known as the type I extreme value distribution, is used to model the distribution of the maximum (or minimum) of a sample of i.i.d. random variables with an exponential tail. The cumulative distribution function (CDF) of the Gumbel distribution is given by:


$$

F(x) = \exp\left(-\exp\left(-\frac{x - \mu}{\sigma}\right)\right),

$$


where $\mu$ is the location parameter and $\sigma$ is the scale parameter.

### Fréchet Distribution

The Fréchet distribution, also known as the type II extreme value distribution, is used to model the distribution of the maximum (or minimum) of a sample of i.i.d. random variables with a power-law tail. The CDF of the Fréchet distribution is given by:


$$

F(x) = \begin{cases}
    \exp\left(-\left(\frac{x - \mu}{\sigma}\right)^{-\alpha}\right), & x > \mu, \\
    0, & x \leq \mu,
\end{cases}

$$


where $\mu$ is the location parameter, $\sigma$ is the scale parameter, and $\alpha$ is the shape parameter.

### Weibull Distribution

The Weibull distribution, also known as the type III extreme value distribution, is used to model the distribution of the maximum (or minimum) of a sample of i.i.d. random variables with a finite endpoint. The CDF of the Weibull distribution is given by:


$$

F(x) = \begin{cases}
    1 - \exp\left(-\left(\frac{x - \mu}{\sigma}\right)^{\alpha}\right), & x \geq \mu, \\
    0, & x < \mu,
\end{cases}

$$


where $\mu$ is the location parameter, $\sigma$ is the scale parameter, and $\alpha$ is the shape parameter.

## Fisher-Tippett-Gnedenko Theorem

The Fisher-Tippett-Gnedenko theorem is a fundamental result in extreme value theory that establishes the connection between the GEV distribution and the limiting distribution of the maximum (or minimum) of a sample of i.i.d. random variables. The theorem states that, under certain conditions, the distribution of the normalized maximum (or minimum) of a sample converges to one of the three types of extreme value distributions as the sample size goes to infinity.

## Pickands-Balkema-de Haan Theorem

The Pickands-Balkema-de Haan theorem is another important result in extreme value theory that provides a practical method for estimating the tail of a distribution using the so-called peaks-over-threshold approach. The theorem states that, under certain conditions, the distribution of the excesses over a high threshold converges to the generalized Pareto distribution, which is a two-parameter family of distributions that includes the exponential and Pareto distributions as special cases.

## Applications

Extreme value distributions have numerous applications in various fields, including:

1. Hydrology: Estimating the probability of extreme floods or droughts.
2. Finance: Modeling the risk of extreme losses in portfolio management and financial risk management.
3. Engineering: Assessing the reliability and safety of structures and materials under extreme loads or stresses.
4. Meteorology: Analyzing the occurrence of extreme weather events, such as heatwaves, storms, and hurricanes.
5. Environmental science: Studying the impact of climate change on the frequency and intensity of extreme events.

## Conclusion

Extreme value distributions are a family of continuous probability distributions that describe the distribution of the maximum (or minimum) of a sample of i.i.d. random variables. They play a crucial role in extreme value theory and have numerous applications in various fields, such as hydrology, finance, engineering, meteorology, and environmental science. The three main types of extreme value distributions are the Gumbel, Fréchet, and Weibull distributions, which are collectively referred to as the generalized extreme value (GEV) distribution. The Fisher-Tippett-Gnedenko theorem and the Pickands-Balkema-de Haan theorem are fundamental results in extreme value theory that establish the connection between the GEV distribution and the limiting distribution of the maximum (or minimum) of a sample of i.i.d. random variables and provide a practical method for estimating the tail of a distribution, respectively.
