# Polynomial Regression

Polynomial regression is a type of regression analysis in which the relationship between the independent variable $x$ and the dependent variable $y$ is modeled as an $n$-th degree polynomial. In other words, it is an extension of linear regression that allows for modeling more complex, nonlinear relationships between variables. Polynomial regression can be used for various purposes, such as curve fitting, forecasting, and discovering underlying trends in data.

## Formulation

In linear regression, the relationship between the independent variable $x$ and the dependent variable $y$ is modeled as a linear function:


$$

y = \beta_0 + \beta_1 x + \epsilon

$$


where $\beta_0$ and $\beta_1$ are the coefficients to be estimated, and $\epsilon$ is the error term. In polynomial regression, the relationship is modeled as an $n$-th degree polynomial:


$$

y = \beta_0 + \beta_1 x + \beta_2 x^2 + \cdots + \beta_n x^n + \epsilon

$$


where $n$ is the degree of the polynomial, and $\beta_i$ are the coefficients to be estimated. The goal is to find the coefficients that minimize the sum of squared residuals, which is the difference between the observed values and the predicted values.

## Estimation

The estimation of the coefficients in polynomial regression can be done using the least squares method, which is the same method used in linear regression. The main difference is that the design matrix $X$ now contains additional columns for the higher-degree terms of the independent variable. Specifically, the design matrix for polynomial regression of degree $n$ is given by:


$$

X = \begin{bmatrix}
1 & x_1 & x_1^2 & \cdots & x_1^n \\
1 & x_2 & x_2^2 & \cdots & x_2^n \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
1 & x_m & x_m^2 & \cdots & x_m^n
\end{bmatrix}

$$


where $m$ is the number of observations. The least squares estimates of the coefficients can be obtained by solving the normal equations:


$$

\hat{\beta} = (X^TX)^{-1}X^Ty

$$


where $\hat{\beta}$ is the vector of estimated coefficients, and $y$ is the vector of observed values of the dependent variable.

## Model Selection

Choosing the appropriate degree of the polynomial is an important aspect of polynomial regression. A low-degree polynomial may not capture the underlying trend in the data, leading to underfitting. On the other hand, a high-degree polynomial may fit the noise in the data, leading to overfitting. To avoid these issues, various model selection techniques can be used, such as cross-validation, Akaike Information Criterion (AIC), and Bayesian Information Criterion (BIC).

## Regularization

Regularization techniques, such as ridge regression and LASSO, can be applied to polynomial regression to prevent overfitting and improve the generalization of the model. Ridge regression adds a penalty term to the sum of squared residuals, which is proportional to the sum of squared coefficients. LASSO adds a penalty term proportional to the sum of absolute values of the coefficients. These penalties shrink the coefficients towards zero, reducing the complexity of the model and preventing overfitting.

## Limitations and Alternatives

Polynomial regression has some limitations. First, it assumes that the relationship between the independent and dependent variables can be modeled by a polynomial function, which may not always be the case. Second, it is sensitive to the choice of the degree of the polynomial, which can lead to underfitting or overfitting.

There are alternative methods for modeling nonlinear relationships between variables, such as kernel regression, splines, and generalized additive models. These methods offer more flexibility in modeling complex relationships and can overcome some of the limitations of polynomial regression.
