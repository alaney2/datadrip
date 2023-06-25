# Instrumental Variables

Instrumental variables (IV) is a method used in econometrics, statistics, and machine learning to estimate causal effects in the presence of endogeneity. Endogeneity occurs when an independent variable in a regression model is correlated with the error term, leading to biased and inconsistent estimates of the causal effect. Instrumental variables provide a way to address this issue by using an additional variable, called an instrument, that is correlated with the endogenous variable but uncorrelated with the error term.

## Endogeneity and Omitted Variable Bias

Endogeneity can arise from several sources, such as omitted variable bias, simultaneity, and measurement error. Omitted variable bias occurs when a variable that affects the dependent variable is not included in the regression model, leading to a correlation between the independent variable and the error term. For example, consider the following linear regression model:


$$

Y_i = \beta_0 + \beta_1 X_i + \epsilon_i

$$


If there is an omitted variable $Z_i$ that affects both $Y_i$ and $X_i$, the error term $\epsilon_i$ will be correlated with $X_i$, leading to biased estimates of $\beta_1$. This is because the omitted variable $Z_i$ is part of the error term, and its correlation with $X_i$ causes the error term to be correlated with $X_i$ as well.

## Instrumental Variables Estimation

The instrumental variables method addresses endogeneity by using an additional variable, called an instrument, that is correlated with the endogenous variable but uncorrelated with the error term. The instrument is denoted as $W_i$, and the following conditions must hold for it to be a valid instrument:

1. Relevance: The instrument $W_i$ is correlated with the endogenous variable $X_i$.
2. Exogeneity: The instrument $W_i$ is uncorrelated with the error term $\epsilon_i$.

The IV estimation proceeds in two stages. In the first stage, the endogenous variable $X_i$ is regressed on the instrument $W_i$ and any other exogenous variables in the model. The predicted values of $X_i$ from this regression are then used in the second stage to estimate the causal effect of $X_i$ on $Y_i$. This two-stage procedure is known as two-stage least squares (2SLS).

## Two-Stage Least Squares

The two-stage least squares (2SLS) method is a widely used technique for instrumental variables estimation. The 2SLS procedure can be summarized as follows:

1. First stage: Regress the endogenous variable $X_i$ on the instrument $W_i$ and any other exogenous variables in the model. Obtain the predicted values $\hat{X}_i$ from this regression.
2. Second stage: Regress the dependent variable $Y_i$ on the predicted values $\hat{X}_i$ and any other exogenous variables in the model. The estimated coefficient on $\hat{X}_i$ is the IV estimate of the causal effect of $X_i$ on $Y_i$.

The 2SLS estimator is consistent and asymptotically normal under the assumptions of relevance and exogeneity of the instrument. However, it can be inefficient if the instrument is weak, meaning that the correlation between the instrument and the endogenous variable is low.

## Weak Instruments

Weak instruments are a common problem in instrumental variables estimation. When the correlation between the instrument and the endogenous variable is low, the 2SLS estimator can be biased and have large standard errors, leading to unreliable inference. Several diagnostic tests and robust estimation methods have been developed to address the issue of weak instruments, such as the F-test of the first-stage regression, the Anderson-Rubin test, and the limited information maximum likelihood (LIML) estimator.

## Applications and Extensions

Instrumental variables estimation has been widely used in various fields, including economics, epidemiology, and social sciences, to estimate causal effects in the presence of endogeneity. The method has been extended to various settings, such as panel data, difference-in-differences, and regression discontinuity designs, to address different sources of endogeneity and exploit various sources of variation in the data.

In summary, instrumental variables is a powerful method for estimating causal effects in the presence of endogeneity. By using a valid instrument that is correlated with the endogenous variable but uncorrelated with the error term, the IV method can provide consistent and unbiased estimates of the causal effect. However, the choice of a valid instrument and the issue of weak instruments are crucial challenges in the application of this method.
