# Student's T Distribution

The Student's T distribution is a probability distribution that is widely used in statistical inference, particularly in hypothesis testing. It was first introduced by William Sealy Gosset in 1908 under the pseudonym "Student".

The distribution arises when the population standard deviation is unknown and must be estimated from the sample. In such cases, the standard normal distribution cannot be used to calculate probabilities and confidence intervals. Instead, the Student's T distribution is used.

## Definition

Suppose we have a random sample of size n from a normal population with unknown mean μ and unknown standard deviation σ. Let X̄ be the sample mean and S be the sample standard deviation. Then the Student's T distribution with n - 1 degrees of freedom is defined as:

$$T = \frac{X̄ - μ}{S/\sqrt{n}}$$

where T has a T-distribution with n - 1 degrees of freedom.

## Properties

- The Student's T distribution is symmetric and bell-shaped like the normal distribution.

- The shape of the distribution depends on the number of degrees of freedom. As the degrees of freedom increase, the distribution approaches the normal distribution.

- The mean of the Student's T distribution is 0, and the variance is n/(n-2) if n > 2.

- The T statistic can be used to test hypotheses about the population mean μ. For example, if we want to test whether the mean of a population is equal to a given value μ0, we can calculate the T statistic and compare it to the critical values from the T distribution with n-1 degrees of freedom.

## Applications

The Student's T distribution is widely used in hypothesis testing and confidence interval estimation. It is also used in regression analysis, where the T statistic is used to test the significance of the regression coefficients. Additionally, the T distribution is used in one-way ANOVA to test for differences between means of several groups.

## Conclusion

The Student's T distribution is an important probability distribution that is widely used in statistical inference. It is used when the population standard deviation is unknown and must be estimated from the sample. The distribution has many important properties that make it useful in hypothesis testing and confidence interval estimation.
