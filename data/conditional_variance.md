# Conditional Variance

Conditional variance is a statistical concept that measures the degree of variability of a random variable given that another random variable has taken on a specific value. In other words, it is the variance of a random variable Y given that another random variable X has taken on a specific value x. 

## Definition

The conditional variance of Y given X = x is defined as:

$$ \text{Var}(Y|X=x) = \text{E}[(Y-\text{E}(Y|X=x))^2|X=x] $$

where $\text{E}(Y|X=x)$ denotes the conditional expectation of Y given X = x.

## Properties

- The conditional variance is always non-negative: $\text{Var}(Y|X=x) \ge 0$.
- If Y and X are independent, then the conditional variance of Y given X = x is equal to the unconditional variance of Y: $\text{Var}(Y|X=x) = \text{Var}(Y)$.
- If X is a constant, then the conditional variance of Y given X = x is equal to the variance of Y: $\text{Var}(Y|X=x) = \text{Var}(Y)$.
- The law of total variance states that:

$$ \text{Var}(Y) = \text{E}[\text{Var}(Y|X)] + \text{Var}(\text{E}(Y|X)) $$

## Application

Conditional variance is commonly used in regression analysis to evaluate the fit of a model. In linear regression, the variance of the residuals can be decomposed into the sum of the conditional variance of the response variable and the variance of the error term. 

## Further Readings

- Conditional Mean
- Conditional Distribution
- Multivariate Normal Distribution
- Linear Regression
- Time Series Analysis
