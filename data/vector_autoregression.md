# Vector Autoregression

Vector Autoregression (VAR) is a statistical model used to capture the linear relationships among multiple time series variables. It is an extension of the univariate autoregressive model to multivariate time series data. VAR models are widely used in econometrics, finance, and other fields for forecasting, impulse response analysis, and policy analysis.

## Introduction

Consider a set of $k$ time series variables, $y_1, y_2, \dots, y_k$, each with $T$ observations. The VAR model of order $p$ can be written as:


$$

\mathbf{y}_t = \mathbf{A}_1 \mathbf{y}_{t-1} + \mathbf{A}_2 \mathbf{y}_{t-2} + \dots + \mathbf{A}_p \mathbf{y}_{t-p} + \mathbf{u}_t

$$


where $\mathbf{y}_t = (y_{1,t}, y_{2,t}, \dots, y_{k,t})'$ is a $k \times 1$ vector of the time series variables at time $t$, $\mathbf{A}_i$ are $k \times k$ matrices of coefficients for each lag $i$, and $\mathbf{u}_t = (u_{1,t}, u_{2,t}, \dots, u_{k,t})'$ is a $k \times 1$ vector of error terms. The error terms are assumed to be normally distributed with mean zero and a constant variance-covariance matrix $\mathbf{\Sigma}_u$.

The VAR model can be estimated using ordinary least squares (OLS) by regressing each variable on its own lagged values and the lagged values of the other variables. The coefficients can be estimated separately for each equation, and the variance-covariance matrix of the errors can be estimated from the residuals.

## Properties of VAR Models

### Stationarity

A VAR model is said to be stationary if its variables do not exhibit trends or drifts over time. Stationarity is an important property for time series analysis, as it ensures that the model's predictions are stable and reliable. To ensure stationarity, the time series variables should be transformed if necessary, for example by taking first differences or applying other transformations.

The stationarity of a VAR model can be tested using unit root tests, such as the Augmented Dickey-Fuller (ADF) test or the Phillips-Perron (PP) test, applied to each variable. If any of the variables are found to be non-stationary, they can be transformed or the model can be modified to include deterministic trends or other components.

### Granger Causality

Granger causality is a concept used to test whether one time series variable can help predict another variable. In the context of a VAR model, Granger causality can be tested by imposing restrictions on the coefficients of the lagged variables and comparing the restricted and unrestricted models using likelihood ratio tests or other statistical tests.

For example, to test whether variable $y_1$ Granger-causes variable $y_2$, we can estimate a restricted VAR model where the coefficients of the lagged values of $y_1$ in the equation for $y_2$ are set to zero, and compare it to the unrestricted model. If the restricted model has a significantly worse fit, we can conclude that $y_1$ Granger-causes $y_2$.

### Impulse Response Functions

Impulse response functions (IRFs) are used to analyze the dynamic effects of shocks to the variables in a VAR model. An IRF traces the response of a variable to a one-time shock in another variable, holding all other variables constant. The IRFs can be computed from the estimated coefficients of the VAR model and are typically plotted over a specified number of periods.

IRFs can be used to study the transmission of shocks between variables, for example, how a shock to interest rates affects output and inflation in a macroeconomic model. They can also be used to assess the stability of the model, as the responses should converge to zero over time if the model is stationary.

### Forecast Error Variance Decomposition

Forecast error variance decomposition (FEVD) is a technique used to quantify the contribution of each variable in a VAR model to the forecast error variance of another variable. FEVD is based on the orthogonalized impulse response functions, which are computed by applying a Cholesky decomposition to the variance-covariance matrix of the errors.

FEVD can be used to assess the relative importance of different variables in explaining the variability of a target variable. For example, in a macroeconomic model, FEVD can be used to determine the relative contributions of monetary policy shocks, demand shocks, and supply shocks to the forecast error variance of output growth.

## Extensions and Variations

There are several extensions and variations of the basic VAR model, including:

- Structural Vector Autoregression (SVAR): A variant of the VAR model that incorporates economic theory or other prior information to impose restrictions on the contemporaneous relationships between the variables. SVAR models are used to identify structural shocks and to conduct counterfactual policy analysis.

- Bayesian Vector Autoregression (BVAR): A Bayesian approach to estimating VAR models, which incorporates prior information on the coefficients and allows for more efficient estimation and forecasting, especially in small samples or when the number of variables is large.

- Vector Error Correction Model (VECM): An extension of the VAR model that incorporates cointegration relationships between the variables, allowing for both short-run dynamics and long-run equilibrium relationships to be modeled simultaneously.

- Panel Vector Autoregression (PVAR): A VAR model estimated on panel data, which combines time series and cross-sectional information to improve the efficiency of the estimates and to study the dynamic relationships between variables across different units or countries.
