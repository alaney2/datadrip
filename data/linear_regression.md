# Linear Regression

Linear regression is a widely used statistical method for modeling the relationship between a dependent variable and one or more independent variables. It assumes a linear relationship between the variables and tries to find the best-fit line to predict the value of the dependent variable based on the values of the independent variable(s).

## Simple Linear Regression

Simple linear regression involves a single independent variable and a dependent variable. The goal is to find the line of best fit that minimizes the sum of the squared residuals between the predicted and actual values. The equation for a simple linear regression model is:

$$y = \beta_0 + \beta_1x + \epsilon$$

where y is the dependent variable, x is the independent variable, $\beta_0$ is the intercept, $\beta_1$ is the slope, and $\epsilon$ is the error term.

## Multiple Linear Regression

Multiple linear regression extends simple linear regression to include multiple independent variables. The equation for a multiple linear regression model is:

$$y = \beta_0 + \beta_1x_1 + \beta_2x_2 + ... + \beta_nx_n + \epsilon$$

where y is the dependent variable, $x_1, x_2, ..., x_n$ are the independent variables, $\beta_0$ is the intercept, $\beta_1, \beta_2, ..., \beta_n$ are the slopes, and $\epsilon$ is the error term.

## Gradient Descent

Gradient descent is an optimization algorithm used to find the values of the coefficients that minimize the sum of the squared residuals. It works by iteratively adjusting the coefficients in the direction of the negative gradient of the cost function until convergence. 

## Matrix Multiplication

Matrix multiplication is a fundamental operation in linear algebra. In the context of linear regression, it is used to represent the relationship between the independent variables and the dependent variable(s). The coefficients of the model can be represented as a matrix and the independent variables can be represented as a matrix of data points. The predicted values can be obtained by multiplying the coefficient matrix by the data matrix.

## Mean Squared Error

Mean squared error is a commonly used metric for evaluating the performance of a regression model. It measures the average of the squared differences between the predicted and actual values. The goal is to minimize this metric to obtain the best-fit line.

## Further Readings

- Logistic Regression
- Ridge Regression
- Lasso Regression
