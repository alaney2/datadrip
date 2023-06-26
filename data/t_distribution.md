# T Distribution

The T distribution, also known as the Student's T distribution, is a continuous probability distribution that arises when estimating the mean of a normally distributed population in situations where the sample size is small and the population standard deviation is unknown. It was introduced by William Sealy Gosset under the pseudonym "Student" in 1908.

The T distribution is symmetric and bell-shaped, similar to the normal distribution, but has heavier tails. This means that it is more likely to produce values that fall far from the mean compared to the normal distribution. As the sample size increases, the T distribution approaches the normal distribution.

## Definition

The T distribution has one parameter, the degrees of freedom ($\nu$), which is related to the sample size. The probability density function (PDF) of the T distribution is given by:


$$

f(t; \nu) = \frac{\Gamma(\frac{\nu + 1}{2})}{\sqrt{\nu \pi} \Gamma(\frac{\nu}{2})} \left(1 + \frac{t^2}{\nu}\right)^{-\frac{\nu + 1}{2}}

$$


where $t$ is the random variable, $\nu$ is the degrees of freedom, and $\Gamma$ is the gamma function.

The degrees of freedom are typically calculated as the sample size minus one ($\nu = n - 1$), where $n$ is the number of observations in the sample.

## Applications

The T distribution is widely used in statistical inference, particularly in the following applications:

1. **Confidence intervals**: When estimating the mean of a normally distributed population with an unknown population standard deviation, the T distribution is used to construct confidence intervals. The T distribution accounts for the uncertainty in the estimate of the population standard deviation, which is replaced by the sample standard deviation.

2. **Hypothesis testing**: The T distribution is used in hypothesis testing for comparing the means of two samples or comparing a sample mean to a known population mean when the population standard deviation is unknown. The most common test that uses the T distribution is the Student's T-test.

3. **Linear regression**: In linear regression, the T distribution is used to test the significance of regression coefficients. The test statistic for each coefficient follows a T distribution with degrees of freedom equal to the number of observations minus the number of estimated parameters.

## Properties

The T distribution has several important properties:

1. **Symmetry**: The T distribution is symmetric around the mean, which is always zero.

2. **Unimodality**: The T distribution has a single peak, making it unimodal.

3. **Heavier tails**: The T distribution has heavier tails than the normal distribution, meaning that it is more likely to produce extreme values. As the degrees of freedom increase, the tails become lighter, and the T distribution approaches the normal distribution.

4. **Mean and variance**: The mean of the T distribution is always zero, and the variance is given by:


$$

\text{Var}(T) = \frac{\nu}{\nu - 2}

$$


for $\nu > 2$. The variance is always greater than 1, indicating that the T distribution is more spread out than the standard normal distribution.

5. **Relationship to other distributions**: The T distribution is related to several other probability distributions:

    - If $Z$ is a standard normal random variable and $V$ is a chi-square random variable with $\nu$ degrees of freedom, then the random variable $T = \frac{Z}{\sqrt{V/\nu}}$ follows a T distribution with $\nu$ degrees of freedom.
    
    - The T distribution is a special case of the generalized hyperbolic distribution.
    
    - The T distribution is a special case of the multivariate T distribution with one dimension.

## Limitations

While the T distribution is widely used in statistical inference, it has some limitations:

1. **Assumption of normality**: The T distribution assumes that the underlying population is normally distributed. If this assumption is violated, the results of hypothesis tests and confidence intervals may be inaccurate.

2. **Small sample sizes**: The T distribution is most appropriate for small sample sizes (typically less than 30). For larger sample sizes, the normal distribution can be used instead, as the difference between the two distributions becomes negligible.

3. **Unknown population standard deviation**: The T distribution is used when the population standard deviation is unknown. If the population standard deviation is known, the normal distribution should be used instead.

Despite these limitations, the T distribution remains a fundamental tool in statistical inference, providing a robust method for estimating population means and testing hypotheses when the population standard deviation is unknown and the sample size is small.
