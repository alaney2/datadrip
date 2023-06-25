# Time Series Poisson Regression

Time Series Poisson Regression is a statistical method used to model count data over time. It is an extension of the Poisson regression model, which is a type of generalized linear model (GLM) used for count data. The main difference between the two models is that Time Series Poisson Regression accounts for the temporal dependence in the data, whereas the standard Poisson regression model assumes that the observations are independent.

In this article, we will discuss the basics of Time Series Poisson Regression, including the underlying assumptions, the model formulation, and the estimation of model parameters using maximum likelihood estimation (MLE).

## Poisson Distribution

The Poisson distribution is a discrete probability distribution that models the number of events occurring in a fixed interval of time or space, given a constant mean rate of occurrence. The probability mass function (PMF) of the Poisson distribution is given by:


$$

P(X=k) = \frac{e^{-\lambda}\lambda^k}{k!}

$$


where $X$ is the number of events, $k$ is a non-negative integer, $\lambda$ is the mean rate of occurrence, and $e$ is the base of the natural logarithm.

## Generalized Linear Models

Generalized linear models (GLMs) are a class of statistical models that extend the linear regression framework to accommodate non-normal response variables and non-linear relationships between the response and predictor variables. GLMs consist of three components:

1. A random component, which specifies the probability distribution of the response variable.
2. A systematic component, which is a linear combination of the predictor variables.
3. A link function, which connects the random and systematic components by relating the expected value of the response variable to the linear predictor.

In the case of Poisson regression, the random component is the Poisson distribution, and the link function is the natural logarithm, which is known as the log link.

## Time Series Poisson Regression Model

The Time Series Poisson Regression model can be formulated as follows:


$$

Y_t \sim Poisson(\lambda_t)

$$



$$

\log(\lambda_t) = \beta_0 + \beta_1 X_{1,t} + \beta_2 X_{2,t} + \cdots + \beta_p X_{p,t} + \phi_1 Y_{t-1} + \phi_2 Y_{t-2} + \cdots + \phi_q Y_{t-q}

$$


where $Y_t$ is the count variable at time $t$, $\lambda_t$ is the mean rate of occurrence at time $t$, $X_{i,t}$ are the predictor variables, $\beta_i$ are the regression coefficients, $\phi_j$ are the autoregressive coefficients, and $q$ is the order of the autoregressive process.

The model can be interpreted as a Poisson regression model with an additional autoregressive component that captures the temporal dependence in the data. The log link ensures that the mean rate of occurrence, $\lambda_t$, is always positive.

## Maximum Likelihood Estimation

The parameters of the Time Series Poisson Regression model can be estimated using maximum likelihood estimation (MLE). The likelihood function for the model is given by:


$$

L(\beta, \phi | Y) = \prod_{t=1}^T \frac{e^{-\lambda_t}\lambda_t^{Y_t}}{Y_t!}

$$


where $T$ is the number of time points, and $Y$ is the observed count data. The log-likelihood function is:


$$

\log L(\beta, \phi | Y) = \sum_{t=1}^T \left[ -\lambda_t + Y_t \log(\lambda_t) - \log(Y_t!) \right]

$$


The MLE estimates of the parameters are obtained by maximizing the log-likelihood function with respect to the parameters, subject to the constraint that the mean rate of occurrence, $\lambda_t$, is positive. This can be achieved using numerical optimization techniques, such as the Newton-Raphson method or the expectation-maximization (EM) algorithm.

## Conclusion

Time Series Poisson Regression is a useful method for modeling count data over time, particularly when the data exhibit temporal dependence. The model extends the standard Poisson regression model by incorporating an autoregressive component, which allows for more accurate predictions and better understanding of the underlying dynamics of the data. The parameters of the model can be estimated using maximum likelihood estimation, which provides a flexible and efficient framework for fitting the model to the data.
