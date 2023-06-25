# ARCH and GARCH Models

Autoregressive Conditional Heteroskedasticity (ARCH) and Generalized Autoregressive Conditional Heteroskedasticity (GARCH) models are widely used in finance and econometrics to model and forecast the volatility of financial time series data. These models capture the changing variance of the time series over time, which is particularly useful for understanding the risk associated with financial assets.

## ARCH Models

ARCH models were introduced by Robert Engle in 1982 as a way to model the changing variance of a time series. The basic idea behind ARCH models is that the variance of the current period's error term is a function of the past error terms. In other words, the model assumes that the variance of the time series changes over time, and this change can be captured by the past values of the error terms.

An ARCH model of order $q$ is defined as follows:


$$

y_t = \epsilon_t = \sigma_t z_t

$$


where $y_t$ is the observed time series, $\epsilon_t$ is the error term, $\sigma_t$ is the conditional standard deviation, and $z_t$ is a white noise process with mean 0 and variance 1. The conditional variance $\sigma_t^2$ is given by:


$$

\sigma_t^2 = \alpha_0 + \alpha_1 \epsilon_{t-1}^2 + \alpha_2 \epsilon_{t-2}^2 + \cdots + \alpha_q \epsilon_{t-q}^2

$$


where $\alpha_0 > 0$, $\alpha_i \geq 0$ for $i = 1, \dots, q$, and $q$ is the order of the ARCH model.

The ARCH model can be estimated using maximum likelihood estimation (MLE) by assuming a normal distribution for the error terms. The log-likelihood function for an ARCH model is given by:


$$

\log L(\alpha_0, \alpha_1, \dots, \alpha_q) = -\frac{1}{2} \sum_{t=1}^T \left[ \log(2 \pi) + \log(\sigma_t^2) + \frac{\epsilon_t^2}{\sigma_t^2} \right]

$$


where $T$ is the number of observations in the time series.

## GARCH Models

GARCH models were introduced by Tim Bollerslev in 1986 as a generalization of ARCH models. GARCH models extend ARCH models by including lagged conditional variances in the model, allowing for a more flexible and parsimonious representation of the time-varying variance.

A GARCH model of order $(p, q)$ is defined as follows:


$$

y_t = \epsilon_t = \sigma_t z_t

$$


where $y_t$ is the observed time series, $\epsilon_t$ is the error term, $\sigma_t$ is the conditional standard deviation, and $z_t$ is a white noise process with mean 0 and variance 1. The conditional variance $\sigma_t^2$ is given by:


$$

\sigma_t^2 = \alpha_0 + \sum_{i=1}^q \alpha_i \epsilon_{t-i}^2 + \sum_{j=1}^p \beta_j \sigma_{t-j}^2

$$


where $\alpha_0 > 0$, $\alpha_i \geq 0$ for $i = 1, \dots, q$, $\beta_j \geq 0$ for $j = 1, \dots, p$, and $(p, q)$ are the orders of the GARCH model.

The GARCH model can also be estimated using maximum likelihood estimation (MLE) by assuming a normal distribution for the error terms. The log-likelihood function for a GARCH model is given by:


$$

\log L(\alpha_0, \alpha_1, \dots, \alpha_q, \beta_1, \dots, \beta_p) = -\frac{1}{2} \sum_{t=1}^T \left[ \log(2 \pi) + \log(\sigma_t^2) + \frac{\epsilon_t^2}{\sigma_t^2} \right]

$$


where $T$ is the number of observations in the time series.

## Applications

ARCH and GARCH models are widely used in finance and econometrics for various purposes, including:

1. Volatility forecasting: ARCH and GARCH models can be used to forecast the volatility of financial time series, which is useful for risk management and option pricing.
2. Value-at-Risk (VaR) estimation: VaR is a widely used risk measure that estimates the potential loss in the value of a portfolio over a given time horizon and confidence level. ARCH and GARCH models can be used to estimate the VaR of a portfolio by modeling the volatility of the individual assets.
3. Portfolio optimization: By modeling the volatility of individual assets, ARCH and GARCH models can be used to optimize the allocation of assets in a portfolio to minimize risk and maximize return.

## Limitations

Despite their popularity and usefulness, ARCH and GARCH models have some limitations:

1. Distributional assumptions: ARCH and GARCH models typically assume that the error terms follow a normal distribution, which may not always be appropriate for financial time series data. However, alternative distributions, such as the Student's t-distribution, can be used to account for heavy tails and skewness in the data.
2. Linearity: ARCH and GARCH models are linear models, which may not be able to capture complex nonlinear dynamics in the data. Extensions of ARCH and GARCH models, such as nonlinear GARCH models and stochastic volatility models, have been developed to address this issue.
3. Parameter estimation: The estimation of ARCH and GARCH models can be computationally intensive, especially for high-order models and large datasets. Moreover, the estimation may be sensitive to the choice of initial values and the optimization algorithm used for maximum likelihood estimation.
