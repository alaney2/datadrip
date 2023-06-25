# Stepwise Regression

Stepwise regression is a method of fitting regression models in which the choice of predictive variables is carried out by an automatic procedure. It is used primarily when dealing with multiple regression models, where there are multiple predictor variables. The goal of stepwise regression is to select the best subset of predictor variables that minimizes some model selection criteria, such as the Akaike Information Criterion (AIC) or the Bayesian Information Criterion (BIC).

There are two main types of stepwise regression: forward selection and backward elimination. In forward selection, the procedure starts with an empty model and adds predictor variables one at a time, based on the improvement in the model selection criterion. In backward elimination, the procedure starts with a full model containing all predictor variables and removes them one at a time, based on the deterioration in the model selection criterion. A third approach, called bidirectional elimination or stepwise selection, combines both forward selection and backward elimination.

## Forward Selection

In forward selection, the procedure starts with an empty model, which contains only the intercept term. At each step, the predictor variable that provides the greatest improvement in the model selection criterion is added to the model. This process is repeated until no further improvement can be obtained by adding more predictor variables.

The algorithm for forward selection can be summarized as follows:

1. Start with an empty model (i.e., a model with only the intercept term).
2. For each predictor variable not in the model, calculate the improvement in the model selection criterion when the variable is added to the model.
3. If the improvement in the model selection criterion is significant, add the predictor variable with the largest improvement to the model.
4. Repeat steps 2 and 3 until no further improvement can be obtained by adding more predictor variables.

## Backward Elimination

In backward elimination, the procedure starts with a full model containing all predictor variables. At each step, the predictor variable that causes the smallest deterioration in the model selection criterion when removed from the model is eliminated. This process is repeated until no further improvement can be obtained by removing more predictor variables.

The algorithm for backward elimination can be summarized as follows:

1. Start with a full model containing all predictor variables.
2. For each predictor variable in the model, calculate the deterioration in the model selection criterion when the variable is removed from the model.
3. If the deterioration in the model selection criterion is not significant, remove the predictor variable with the smallest deterioration from the model.
4. Repeat steps 2 and 3 until no further improvement can be obtained by removing more predictor variables.

## Bidirectional Elimination (Stepwise Selection)

Bidirectional elimination, also known as stepwise selection, combines both forward selection and backward elimination. At each step, the procedure considers both adding a predictor variable to the model and removing a predictor variable from the model. The choice between adding and removing a predictor variable is based on the improvement or deterioration in the model selection criterion.

The algorithm for bidirectional elimination can be summarized as follows:

1. Start with an initial model, which can be either an empty model or a full model.
2. For each predictor variable not in the model, calculate the improvement in the model selection criterion when the variable is added to the model.
3. For each predictor variable in the model, calculate the deterioration in the model selection criterion when the variable is removed from the model.
4. If the improvement in the model selection criterion is significant, add the predictor variable with the largest improvement to the model. If the deterioration in the model selection criterion is not significant, remove the predictor variable with the smallest deterioration from the model.
5. Repeat steps 2 through 4 until no further improvement can be obtained by adding or removing predictor variables.

## Model Selection Criteria

The choice of predictor variables in stepwise regression is based on the improvement or deterioration in some model selection criterion. Two common model selection criteria used in stepwise regression are the Akaike Information Criterion (AIC) and the Bayesian Information Criterion (BIC).

The AIC is defined as:


$$

\text{AIC} = 2k - 2\ln(L),

$$


where $k$ is the number of parameters in the model, and $L$ is the likelihood of the model. The BIC is defined as:


$$

\text{BIC} = k\ln(n) - 2\ln(L),

$$


where $n$ is the number of observations. Both AIC and BIC penalize the addition of more parameters to the model, with BIC imposing a stronger penalty than AIC.

In stepwise regression, the goal is to minimize the model selection criterion. In forward selection, a predictor variable is added to the model if it results in a significant improvement in the model selection criterion. In backward elimination, a predictor variable is removed from the model if its removal does not result in a significant deterioration in the model selection criterion.

## Limitations and Alternatives

Stepwise regression has some limitations. One limitation is that it can result in overfitting, especially when the number of predictor variables is large relative to the number of observations. Another limitation is that the procedure can be sensitive to the choice of model selection criterion, with different criteria potentially leading to different sets of predictor variables being selected.

There are several alternative methods for variable selection in multiple regression, including ridge regression, lasso regression, elastic net regression, principal component regression, and partial least squares regression. These methods can help address some of the limitations of stepwise regression, such as overfitting and sensitivity to the choice of model selection criterion.
