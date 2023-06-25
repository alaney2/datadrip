# Generalized Linear Models

Generalized linear models (GLMs) are a class of flexible and interpretable statistical models that extend linear regression to accommodate non-normal response variables and non-linear relationships between predictors and responses. GLMs are widely used in various fields, including social sciences, biology, and engineering.

## Overview

GLMs were introduced by Nelder and Wedderburn in 1972 as a unifying framework for linear regression, logistic regression, and Poisson regression. The main idea behind GLMs is to generalize linear regression by allowing the response variable to follow any distribution from the exponential family and by modeling the relationship between the expected value of the response variable and the linear predictor through a link function.

A GLM consists of three components:

1. A random component: The response variable $Y$ follows a distribution from the exponential family, such as Gaussian, binomial, or Poisson.

2. A systematic component: The linear predictor $\eta$ is a linear combination of the predictor variables $X_1, X_2, \dots, X_p$, i.e., $\eta = \beta_0 + \beta_1 X_1 + \beta_2 X_2 + \dots + \beta_p X_p$.

3. A link function: The link function $g$ relates the expected value of the response variable $\mu = E(Y)$ to the linear predictor $\eta$, i.e., $g(\mu) = \eta$.

## Exponential Family

The exponential family is a class of probability distributions that includes many common distributions, such as Gaussian, binomial, Poisson, gamma, and exponential. A distribution is said to be in the exponential family if its probability density function (pdf) or probability mass function (pmf) can be written in the form:


$$

f(y | \theta, \phi) = \exp \left( \frac{y\theta - b(\theta)}{a(\phi)} + c(y, \phi) \right)

$$


where $y$ is the response variable, $\theta$ is the natural parameter, $\phi$ is the dispersion parameter, and $a(\cdot)$, $b(\cdot)$, and $c(\cdot)$ are known functions.

## Link Function

The link function $g$ is a monotonic and differentiable function that maps the expected value of the response variable $\mu$ to the linear predictor $\eta$. Common choices for the link function include:

- Identity link: $g(\mu) = \mu$ (used in linear regression)
- Logit link: $g(\mu) = \log \frac{\mu}{1 - \mu}$ (used in logistic regression)
- Log link: $g(\mu) = \log \mu$ (used in Poisson regression)

The choice of the link function depends on the distribution of the response variable and the desired relationship between the expected value of the response variable and the linear predictor. The canonical link function is the link function that corresponds to the natural parameter of the exponential family distribution.

## Estimation

The parameters of a GLM can be estimated using maximum likelihood estimation (MLE). The likelihood function for a GLM is given by:


$$

L(\beta | Y, X) = \prod_{i=1}^n f(y_i | \theta_i, \phi)

$$


where $\beta = (\beta_0, \beta_1, \dots, \beta_p)$ are the regression coefficients, $Y = (y_1, y_2, \dots, y_n)$ are the observed response values, $X = (x_{ij})$ is the design matrix, and $\theta_i = g^{-1}(\eta_i)$ with $\eta_i = \beta_0 + \beta_1 x_{i1} + \dots + \beta_p x_{ip}$.

The MLE of the parameters can be obtained by maximizing the log-likelihood function:


$$

\ell(\beta | Y, X) = \log L(\beta | Y, X) = \sum_{i=1}^n \log f(y_i | \theta_i, \phi)

$$


The MLE can be found using iterative algorithms, such as the Newton-Raphson method or the Fisher scoring method.

## Model Selection

Model selection in GLMs can be done using various criteria, such as the Akaike information criterion (AIC), the Bayesian information criterion (BIC), or likelihood ratio tests. These criteria balance the goodness-of-fit of the model with the complexity of the model to avoid overfitting.

## Applications

GLMs have numerous applications in various fields. Some examples include:

- Linear regression: Modeling the relationship between a continuous response variable and one or more predictor variables.
- Logistic regression: Modeling the probability of success in a binary outcome as a function of predictor variables.
- Poisson regression: Modeling the count of events occurring in a fixed interval of time or space as a function of predictor variables.
- Multinomial logistic regression: Modeling the probabilities of multiple outcomes as a function of predictor variables.
- Negative binomial regression: Modeling overdispersed count data as a function of predictor variables.

## Limitations

While GLMs are flexible and interpretable, they have some limitations:

- GLMs assume that the response variable follows a distribution from the exponential family. If this assumption is not met, the model may not provide accurate predictions.
- GLMs assume a specific relationship between the expected value of the response variable and the linear predictor through the link function. If this relationship is not appropriate, the model may not provide accurate predictions.
- GLMs are sensitive to multicollinearity among predictor variables, which can lead to unstable parameter estimates and reduced interpretability.
- GLMs are not well-suited for modeling complex non-linear relationships or high-dimensional data, where more flexible models, such as generalized additive models (GAMs) or machine learning methods, may be more appropriate.
