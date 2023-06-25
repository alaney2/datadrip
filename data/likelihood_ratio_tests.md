# Likelihood Ratio Tests

Likelihood Ratio Tests (LRT) are a statistical method used to compare the goodness of fit of two competing models. These tests are commonly used in hypothesis testing, model selection, and parameter estimation. The main idea behind LRT is to compare the likelihood of the observed data under two different models, one being a simpler, nested model (null hypothesis) and the other being a more complex, alternative model (alternative hypothesis).

## Background

In statistical modeling, we often want to determine which model best describes the observed data. One way to do this is to compare the likelihoods of the data under different models. The likelihood of a model is a measure of how probable the observed data is, given the model's parameters. The higher the likelihood, the better the model fits the data.

Likelihood ratio tests are based on the likelihood ratio statistic, which is the ratio of the likelihoods of the two models being compared. The likelihood ratio statistic is defined as:


$$

\Lambda = \frac{L(\theta_0)}{L(\theta_1)}

$$


where $L(\theta_0)$ is the likelihood of the null hypothesis model (simpler model) and $L(\theta_1)$ is the likelihood of the alternative hypothesis model (more complex model). The likelihood ratio statistic follows a chi-square distribution with degrees of freedom equal to the difference in the number of parameters between the two models.

## Procedure

To perform a likelihood ratio test, follow these steps:

1. **Fit the null hypothesis model**: Estimate the parameters of the simpler model using maximum likelihood estimation (MLE).

2. **Fit the alternative hypothesis model**: Estimate the parameters of the more complex model using MLE.

3. **Compute the likelihood ratio statistic**: Calculate the likelihood ratio statistic, $\Lambda$, using the likelihoods of the two models.

4. **Determine the degrees of freedom**: Calculate the difference in the number of parameters between the two models. This is the degrees of freedom for the chi-square distribution.

5. **Compute the p-value**: Using the chi-square distribution with the calculated degrees of freedom, find the p-value associated with the likelihood ratio statistic.

6. **Compare the p-value to the significance level**: If the p-value is less than the chosen significance level (e.g., 0.05), reject the null hypothesis in favor of the alternative hypothesis. This means that the more complex model provides a significantly better fit to the data.

## Example

Suppose we have a dataset of students' test scores and we want to determine if a linear model (null hypothesis) or a quadratic model (alternative hypothesis) better describes the relationship between the students' study time and their test scores.

1. **Fit the null hypothesis model**: We fit a linear model to the data using MLE and obtain the likelihood, $L(\theta_0)$.

2. **Fit the alternative hypothesis model**: We fit a quadratic model to the data using MLE and obtain the likelihood, $L(\theta_1)$.

3. **Compute the likelihood ratio statistic**: We calculate the likelihood ratio statistic, $\Lambda = \frac{L(\theta_0)}{L(\theta_1)}$.

4. **Determine the degrees of freedom**: The linear model has two parameters (intercept and slope), while the quadratic model has three parameters (intercept, linear term, and quadratic term). The degrees of freedom for the chi-square distribution is 3 - 2 = 1.

5. **Compute the p-value**: Using the chi-square distribution with 1 degree of freedom, we find the p-value associated with the likelihood ratio statistic.

6. **Compare the p-value to the significance level**: If the p-value is less than 0.05, we reject the null hypothesis in favor of the alternative hypothesis, concluding that the quadratic model provides a significantly better fit to the data.

## Limitations

Likelihood ratio tests have some limitations:

1. **Assumptions**: LRT assumes that the models being compared are nested, meaning that one model is a special case of the other. If the models are not nested, the test may not be valid.

2. **Distribution**: The likelihood ratio statistic follows a chi-square distribution only asymptotically, meaning that the approximation may not be accurate for small sample sizes.

3. **Complexity**: LRT can be computationally intensive, especially for models with a large number of parameters.

Despite these limitations, likelihood ratio tests are a powerful and widely used tool for model comparison and hypothesis testing in various fields, including biology, economics, and social sciences.
