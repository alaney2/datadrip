# Quasi-Likelihood

Quasi-likelihood is a statistical method used for estimating parameters in models when the likelihood function is not available or difficult to compute. It is a generalization of the maximum likelihood estimation (MLE) method and is particularly useful when dealing with non-normal or non-independent data. Quasi-likelihood estimation relaxes some of the assumptions of MLE, such as the need for a specific probability distribution, and can provide consistent and asymptotically normal estimates of parameters even when the true distribution is not known.

## Background

Quasi-likelihood was introduced by Nelder and Wedderburn in 1972 as a method for estimating parameters in generalized linear models (GLMs). In GLMs, the response variable is assumed to follow an exponential family distribution, and the relationship between the response variable and the predictors is modeled through a link function. MLE is typically used to estimate the parameters in GLMs. However, MLE requires the specification of a probability distribution for the response variable, which may not always be appropriate or known.

Quasi-likelihood estimation provides a more flexible approach by only requiring the specification of a variance function, which relates the variance of the response variable to its mean. This allows for the estimation of parameters in models where the true distribution is not known or does not belong to the exponential family.

## Method

The quasi-likelihood method is based on the concept of a quasi-score function, which is a generalization of the score function used in MLE. The quasi-score function is defined as the derivative of the quasi-likelihood with respect to the parameters of interest. The quasi-likelihood function is given by:


$$

Q(\theta) = \sum_{i=1}^{n} q(y_i, \mu_i(\theta))

$$


where $Q(\theta)$ is the quasi-likelihood, $q(y_i, \mu_i(\theta))$ is the quasi-likelihood contribution for the $i$-th observation, $y_i$ is the observed response, $\mu_i(\theta)$ is the expected value of the response given the parameters $\theta$, and $n$ is the number of observations.

The quasi-score function is then given by:


$$

U(\theta) = \frac{\partial Q(\theta)}{\partial \theta}

$$


The quasi-likelihood estimates of the parameters are obtained by solving the equation $U(\theta) = 0$. This is similar to the MLE method, where the estimates are obtained by solving the score equation.

## Properties

Quasi-likelihood estimation has several desirable properties, including:

1. **Consistency**: Under certain regularity conditions, the quasi-likelihood estimates are consistent, meaning that they converge to the true parameter values as the sample size increases.

2. **Asymptotic normality**: The quasi-likelihood estimates are asymptotically normally distributed, which allows for the construction of confidence intervals and hypothesis tests.

3. **Robustness**: Quasi-likelihood estimation is robust to misspecification of the variance function, meaning that the estimates remain consistent even if the true variance function is different from the assumed one.

4. **Efficiency**: Under certain conditions, the quasi-likelihood estimates are asymptotically efficient, meaning that they achieve the minimum possible variance among all consistent estimators.

## Applications

Quasi-likelihood estimation is widely used in various fields, including:

- **Generalized linear models**: Quasi-likelihood is used to estimate parameters in GLMs when the response variable does not follow an exponential family distribution or when the distribution is not known.

- **Robust regression**: Quasi-likelihood can be used to estimate parameters in linear regression models when the error distribution is not normal, providing robust estimates that are less sensitive to outliers and non-normality.

- **Generalized estimating equations**: Quasi-likelihood is used in the estimation of parameters in generalized estimating equations (GEEs), which are used for the analysis of correlated data, such as longitudinal or clustered data.

- **Sandwich estimators**: Quasi-likelihood estimation can be combined with sandwich estimators to obtain robust standard errors for the parameter estimates, which are valid even when the variance function is misspecified.

## Limitations

Despite its advantages, quasi-likelihood estimation has some limitations:

- It requires the specification of a variance function, which may not always be known or easy to determine.

- The method does not provide a direct way to estimate the variance of the parameter estimates, although this can be addressed using sandwich estimators or other techniques.

- Quasi-likelihood estimation may not be as efficient as MLE when the true distribution is known and belongs to the exponential family.

In summary, quasi-likelihood is a flexible and robust method for estimating parameters in models when the likelihood function is not available or difficult to compute. It has been widely used in various fields, including generalized linear models, robust regression, generalized estimating equations, and sandwich estimators.
