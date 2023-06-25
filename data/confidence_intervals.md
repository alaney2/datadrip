# Confidence Intervals

A confidence interval is a range of values, derived from a data sample, which is used to estimate an unknown population parameter. The interval has an associated confidence level that quantifies the level of confidence that the parameter lies in the interval. In other words, a confidence interval is a way to express the uncertainty in an estimate by providing a range of plausible values for the parameter of interest.

Confidence intervals are widely used in statistics and data analysis to report the results of statistical inference, such as hypothesis testing and estimation. They are particularly useful when the goal is to estimate a population parameter, such as the mean or proportion, based on a random sample from the population.

## Definition

A confidence interval for a population parameter is an interval computed from the sample data such that, if the sampling procedure were repeated many times, a certain percentage (called the confidence level) of the resulting intervals would contain the true value of the parameter.

Formally, a $(1-\alpha)$ confidence interval for a population parameter $\theta$ is an interval $(L, U)$, where $L$ and $U$ are functions of the sample data, such that:


$$

P(L \leq \theta \leq U) = 1 - \alpha

$$


Here, $\alpha$ is the significance level, which is the probability that the interval does not contain the true value of the parameter. The confidence level is $1-\alpha$, and it represents the probability that the interval contains the true value of the parameter.

## Construction

To construct a confidence interval, we need to determine the sampling distribution of the estimator for the population parameter. The sampling distribution describes the distribution of the estimator when computed from different random samples of the same size from the population. The key idea is to use the properties of the sampling distribution to determine the interval that contains the true value of the parameter with a certain level of confidence.

The most common method for constructing confidence intervals is based on the central limit theorem, which states that the sampling distribution of the sample mean approaches a normal distribution as the sample size increases, regardless of the shape of the population distribution. This result allows us to use the properties of the normal distribution to construct confidence intervals for the population mean.

For example, let $X_1, X_2, \dots, X_n$ be a random sample from a population with mean $\mu$ and standard deviation $\sigma$. The sample mean $\bar{X}$ is an unbiased estimator of the population mean, and its sampling distribution is approximately normal with mean $\mu$ and standard deviation $\frac{\sigma}{\sqrt{n}}$, provided that the sample size is large enough. Then, we can construct a $(1-\alpha)$ confidence interval for the population mean as follows:


$$

\bar{X} \pm z_{\frac{\alpha}{2}} \frac{\sigma}{\sqrt{n}}

$$


Here, $z_{\frac{\alpha}{2}}$ is the critical value from the standard normal distribution that corresponds to the desired level of confidence. For example, for a 95% confidence interval, $z_{\frac{\alpha}{2}} = 1.96$.

If the population standard deviation $\sigma$ is unknown, we can use the sample standard deviation $s$ as an estimate. In this case, the sampling distribution of the sample mean is approximately a t-distribution with $n-1$ degrees of freedom, and the confidence interval is given by:


$$

\bar{X} \pm t_{\frac{\alpha}{2}, n-1} \frac{s}{\sqrt{n}}

$$


Here, $t_{\frac{\alpha}{2}, n-1}$ is the critical value from the t-distribution with $n-1$ degrees of freedom.

## Interpretation

The interpretation of a confidence interval is often misunderstood. A common misconception is that the confidence level represents the probability that the true value of the parameter lies within the interval. However, this interpretation is incorrect because the true value of the parameter is fixed and unknown, and the interval is a random interval that depends on the sample data.

The correct interpretation of a confidence interval is that it provides a range of plausible values for the population parameter, based on the sample data. The confidence level represents the proportion of such intervals that would contain the true value of the parameter if the sampling procedure were repeated many times. In other words, a confidence interval quantifies the uncertainty in the estimate by providing a range of values that are consistent with the observed data, given the assumptions of the statistical model.

It is important to note that the confidence level does not provide a measure of the precision of the estimate. A narrow confidence interval indicates that the estimate is more precise, while a wide confidence interval indicates that the estimate is less precise. The precision of the estimate depends on the sample size, the variability of the population, and the chosen level of confidence.

## Limitations and Alternatives

Confidence intervals are based on several assumptions, such as the normality of the sampling distribution and the independence of the observations. If these assumptions are not met, the confidence intervals may not provide accurate coverage probabilities. In such cases, alternative methods, such as bootstrap methods or Bayesian inference, can be used to construct confidence intervals with better properties.

Moreover, confidence intervals are sensitive to the choice of the confidence level, which is a subjective decision. A higher confidence level results in a wider interval, which may be more conservative but less informative. On the other hand, a lower confidence level results in a narrower interval, which may be more informative but less reliable. In practice, it is important to choose an appropriate confidence level based on the context and the goals of the analysis.

Finally, confidence intervals are only one way to quantify the uncertainty in an estimate. Other approaches, such as hypothesis testing or likelihood ratio tests, can also be used to assess the evidence in favor of a particular hypothesis or to compare different models. In some cases, nonparametric methods or robust statistics may be more appropriate for dealing with non-normal data or outliers.
