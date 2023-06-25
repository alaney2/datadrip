# Multiple Linear Regression

Multiple linear regression is a statistical technique used to model the relationship between a dependent variable and multiple independent variables. It is an extension of simple linear regression, which models the relationship between a dependent variable and a single independent variable. In multiple linear regression, the goal is to find the best-fitting linear equation that describes the relationship between the dependent variable and the independent variables.

## Model

The multiple linear regression model can be represented as:


$$

y = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + \cdots + \beta_p x_p + \epsilon

$$


where:

- $y$ is the dependent variable
- $x_1, x_2, \ldots, x_p$ are the independent variables
- $\beta_0, \beta_1, \ldots, \beta_p$ are the regression coefficients
- $\epsilon$ is the error term

The goal is to estimate the regression coefficients $\beta_0, \beta_1, \ldots, \beta_p$ that minimize the sum of the squared differences between the observed values of the dependent variable and the values predicted by the model.

## Estimation

There are several methods to estimate the regression coefficients in a multiple linear regression model. Two of the most common methods are the least squares method and the gradient descent method.

### Least Squares Method

The least squares method is a mathematical technique used to find the best-fitting line by minimizing the sum of the squared differences between the observed values and the predicted values. In the context of multiple linear regression, the least squares estimates of the regression coefficients can be obtained by solving the following normal equations:


$$

X^T X \beta = X^T y

$$


where:

- $X$ is the matrix of independent variables, with each row representing an observation and each column representing an independent variable
- $y$ is the vector of observed values of the dependent variable
- $\beta$ is the vector of regression coefficients

The solution to the normal equations can be obtained using matrix algebra:


$$

\beta = (X^T X)^{-1} X^T y

$$


### Gradient Descent Method

Gradient descent is an iterative optimization algorithm used to find the minimum of a function. In the context of multiple linear regression, the gradient descent method can be used to find the regression coefficients that minimize the sum of the squared differences between the observed values and the predicted values. The algorithm starts with an initial guess for the regression coefficients and iteratively updates the coefficients by moving in the direction of the steepest decrease in the cost function.

The cost function for multiple linear regression is given by:


$$

J(\beta) = \frac{1}{2n} \sum_{i=1}^n (y_i - \hat{y}_i)^2

$$


where:

- $n$ is the number of observations
- $y_i$ is the observed value of the dependent variable for the $i$-th observation
- $\hat{y}_i$ is the predicted value of the dependent variable for the $i$-th observation

The gradient of the cost function with respect to the regression coefficients is given by:


$$

\nabla J(\beta) = -\frac{1}{n} X^T (y - X\beta)

$$


The gradient descent algorithm updates the regression coefficients using the following update rule:


$$

\beta^{(t+1)} = \beta^{(t)} - \alpha \nabla J(\beta^{(t)})

$$


where:

- $t$ is the iteration number
- $\alpha$ is the learning rate

The algorithm converges when the change in the cost function between consecutive iterations is smaller than a predefined threshold.

## Assumptions

Multiple linear regression makes several assumptions about the data:

1. Linearity: The relationship between the dependent variable and the independent variables is linear.
2. Independence: The observations are independent of each other.
3. Homoscedasticity: The variance of the error term is constant across all levels of the independent variables.
4. Normality: The error term follows a normal distribution.

Violations of these assumptions can lead to biased or inefficient estimates of the regression coefficients.

## Model Evaluation

There are several metrics that can be used to evaluate the performance of a multiple linear regression model. Some of the most common metrics are:

- R-squared: The proportion of the variance in the dependent variable that is explained by the independent variables. R-squared ranges from 0 to 1, with higher values indicating a better fit.
- Adjusted R-squared: A modified version of R-squared that takes into account the number of independent variables in the model. Adjusted R-squared is generally preferred over R-squared when comparing models with different numbers of independent variables.
- Mean squared error (MSE): The average of the squared differences between the observed values and the predicted values. Lower values of MSE indicate a better fit.
- Root mean squared error (RMSE): The square root of the mean squared error. RMSE has the same units as the dependent variable and can be used to compare the performance of different models.

## Regularization

In cases where the number of independent variables is large or there is multicollinearity among the independent variables, regularization techniques can be used to improve the performance of the multiple linear regression model. Some common regularization techniques are ridge regression, lasso regression, principal component regression, and partial least squares regression. These techniques add a penalty term to the cost function, which helps to reduce the complexity of the model and prevent overfitting.
