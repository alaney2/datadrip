# R Squared

R Squared, also known as the coefficient of determination, is a statistical measure that represents the proportion of the variance in the dependent variable that can be explained by the independent variable(s) in a regression model. It is a popular metric for evaluating the performance of regression models, particularly linear regression.

R Squared ranges from 0 to 1, with higher values indicating a better fit of the model to the data. An R Squared value of 0 means that the model does not explain any of the variance in the dependent variable, while an R Squared value of 1 means that the model explains all of the variance.

## Calculation

R Squared is calculated using the following formula:


$$

R^2 = 1 - \frac{SS_{res}}{SS_{tot}}

$$


Where:

- $R^2$ is the R Squared value
- $SS_{res}$ is the sum of squared residuals, which represents the unexplained variance in the dependent variable
- $SS_{tot}$ is the total sum of squares, which represents the total variance in the dependent variable

The sum of squared residuals is calculated as:


$$

SS_{res} = \sum_{i=1}^{n} (y_i - \hat{y}_i)^2

$$


Where:

- $y_i$ is the observed value of the dependent variable for the $i$-th observation
- $\hat{y}_i$ is the predicted value of the dependent variable for the $i$-th observation

The total sum of squares is calculated as:


$$

SS_{tot} = \sum_{i=1}^{n} (y_i - \bar{y})^2

$$


Where:

- $\bar{y}$ is the mean of the observed values of the dependent variable

## Interpretation

R Squared is often used to assess the goodness of fit of a regression model. A higher R Squared value indicates that the model explains a larger proportion of the variance in the dependent variable, which generally suggests a better fit. However, it is important to note that a high R Squared value does not necessarily imply that the model is appropriate for the data or that it will make accurate predictions.

One limitation of R Squared is that it can be sensitive to the addition of irrelevant variables to the model. As more variables are added, the R Squared value will generally increase, even if the new variables do not contribute to the explanation of the dependent variable's variance. This can lead to overfitting, where the model becomes too complex and performs poorly on new data.

To address this issue, the adjusted R Squared can be used. The adjusted R Squared takes into account the number of independent variables in the model and adjusts the R Squared value accordingly. It is defined as:


$$

\text{Adjusted } R^2 = 1 - \frac{(1 - R^2)(n - 1)}{n - k - 1}

$$


Where:

- $n$ is the number of observations
- $k$ is the number of independent variables in the model

The adjusted R Squared will generally be lower than the R Squared value, and it will penalize models with a large number of irrelevant variables.

## Applications

R Squared is widely used in various fields, including economics, finance, biology, and social sciences, to evaluate the performance of regression models. It is particularly useful for comparing different models and selecting the one that best fits the data.

Some common applications of R Squared include:

- Assessing the explanatory power of a linear regression model
- Comparing the performance of different regression models
- Identifying the most important variables in a multiple regression model
- Evaluating the impact of adding or removing variables from a regression model

In conclusion, R Squared is a valuable metric for assessing the performance of regression models, but it should be used with caution. It is essential to consider other factors, such as the appropriateness of the model, the assumptions of the regression analysis, and the potential for overfitting, when interpreting R Squared values.
