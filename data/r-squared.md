# R-squared

R-squared, also known as the coefficient of determination, is a statistical measure in regression analysis that determines the proportion of variance in the dependent variable that can be predicted from the independent variable(s). It provides a measure of how well observed outcomes are replicated by the model, based on the proportion of total variation of outcomes explained by the model.

## Definition

The R-squared of a model is the proportion of the variance in the dependent variable that is predictable from the independent variable(s). It is computed as:


$$
 R^2 = 1 - \frac{SS_{res}}{SS_{tot}} 
$$


where $SS_{res}$ is the residual sum of squares and $SS_{tot}$ is the total sum of squares.

The residual sum of squares is the sum of the squares of residuals (the difference between the observed and predicted values). The total sum of squares is the sum of the squares of the difference between each observed outcome and the mean of observed outcomes.

## Interpretation

R-squared ranges from 0 to 1. An R-squared of 100 percent indicates that all changes in the dependent variable are completely explained by changes in the independent variable(s). Conversely, an R-squared of 0 percent indicates that none of the changes in the dependent variable can be explained by changes in the independent variable(s).

However, a high R-squared does not necessarily indicate that the model has a good fit. This is because R-squared does not indicate whether a regression model is adequate. You can have a low R-squared value for a good model, or a high R-squared value for a model that does not fit the data.

## Limitations

R-squared cannot determine whether the coefficient estimates and predictions are biased, which is why you must assess the residual plots. R-squared does not indicate whether a regression model is adequate. You can have a low R-squared value for a good model, or a high R-squared value for a model that does not fit the data.

R-squared also has limitations when comparing models. A model with more predictors may seem to have a better fit simply because it has more terms, but it may also be more complex and less generalizable. This is where adjusted R-squared can be useful, as it adjusts for the number of predictors in the model.

## Conclusion

R-squared is a useful statistical measure for understanding the goodness-of-fit of a regression model. However, it should be used with caution, as a high R-squared value does not necessarily indicate a good model, and it cannot determine whether the coefficient estimates and predictions are biased.
