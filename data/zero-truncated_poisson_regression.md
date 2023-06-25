# Zero-Truncated Poisson Regression

Zero-Truncated Poisson Regression is a statistical method used to model count data where the response variable is a count of events and the observed counts do not include zero. This type of data is common in situations where the process of data collection or the nature of the phenomenon under study does not allow for the observation of zero counts. Examples include the number of insurance claims filed by policyholders, the number of citations received by scientific articles, or the number of defects in a manufacturing process.

The Zero-Truncated Poisson Regression model is an extension of the Poisson Regression model, which is used to model count data that follows a Poisson distribution. The Poisson distribution is characterized by a single parameter, $\lambda$, which represents the mean and variance of the distribution. In the context of regression, the Poisson distribution is used to model the conditional mean of the response variable, given the values of the predictor variables.

## Model Specification

The Zero-Truncated Poisson Regression model can be specified as follows:

1. The response variable, $Y$, is a count of events and follows a zero-truncated Poisson distribution with parameter $\lambda$:


$$

P(Y = y) = \frac{e^{-\lambda} \lambda^y}{(1 - e^{-\lambda})y!}, \quad y = 1, 2, 3, \dots

$$


2. The parameter $\lambda$ is related to the predictor variables, $X_1, X_2, \dots, X_p$, through a linear predictor function:


$$

\eta = \beta_0 + \beta_1 X_1 + \beta_2 X_2 + \dots + \beta_p X_p

$$


3. The link function, which relates the linear predictor to the mean of the response variable, is the logarithm function:


$$

\log(\lambda) = \eta

$$


The model can be estimated using maximum likelihood estimation, which involves finding the values of the regression coefficients, $\beta_0, \beta_1, \dots, \beta_p$, that maximize the likelihood function. The likelihood function for the Zero-Truncated Poisson Regression model is given by:


$$

L(\beta_0, \beta_1, \dots, \beta_p) = \prod_{i=1}^n \frac{e^{-\lambda_i} \lambda_i^{y_i}}{(1 - e^{-\lambda_i})y_i!}

$$


where $n$ is the number of observations, $y_i$ is the observed count for the $i$-th observation, and $\lambda_i$ is the expected count for the $i$-th observation, given the values of the predictor variables.

## Model Interpretation

The interpretation of the regression coefficients in a Zero-Truncated Poisson Regression model is similar to that of a regular Poisson Regression model. The coefficients represent the effect of the predictor variables on the logarithm of the expected count of the response variable. Specifically, for a one-unit increase in the predictor variable $X_j$, the expected count of the response variable, given the values of the other predictor variables, is multiplied by $e^{\beta_j}$.

It is important to note that the interpretation of the coefficients assumes that the relationship between the predictor variables and the expected count of the response variable is linear on the logarithmic scale. This assumption may not hold in all situations, and it is recommended to assess the goodness-of-fit of the model using diagnostic plots and statistical tests.

## Limitations and Extensions

The Zero-Truncated Poisson Regression model assumes that the response variable follows a zero-truncated Poisson distribution, which may not be appropriate for all count data. In particular, the model may not fit well if the observed counts exhibit overdispersion, which occurs when the variance of the counts is greater than the mean. In such cases, alternative models, such as the Zero-Truncated Negative Binomial Regression model or the Hurdle model, may provide a better fit to the data.

Another limitation of the Zero-Truncated Poisson Regression model is that it does not account for the possibility of excess zeros in the data, which can occur when there are more zero counts than would be expected under a Poisson distribution. In this case, a Zero-Inflated Poisson Regression model or a Zero-Inflated Negative Binomial Regression model may be more appropriate. These models combine a Poisson or negative binomial distribution with a separate process that generates zeros, allowing for a better representation of the data.
