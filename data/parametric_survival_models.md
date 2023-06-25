# Parametric Survival Models

Parametric survival models are a class of statistical models used to analyze time-to-event data, also known as survival data. These models assume a specific parametric distribution for the underlying survival or hazard function, which allows for more efficient estimation of model parameters and enables extrapolation beyond the observed data. Parametric survival models are widely used in various fields, including medicine, engineering, and social sciences.

## Survival Analysis

Survival analysis is a branch of statistics that deals with the analysis of time-to-event data. The main goal of survival analysis is to estimate and compare survival or hazard functions, which describe the probability of an event occurring (e.g., death, failure, or recovery) over time. Survival analysis techniques can handle right-censored data, which occurs when the event of interest has not been observed for some subjects by the end of the study period.

## Parametric Models

Parametric survival models assume a specific parametric distribution for the survival or hazard function. Commonly used distributions include the exponential, Weibull, log-normal, log-logistic, and generalized gamma distributions. The choice of distribution depends on the characteristics of the data and the underlying assumptions about the shape of the survival or hazard function.

The survival function, $S(t)$, represents the probability of survival beyond time $t$. The hazard function, $h(t)$, represents the instantaneous rate of failure at time $t$ given survival up to that time. The relationship between the survival and hazard functions is given by:


$$

S(t) = \exp\left(-\int_0^t h(u) du\right)

$$


Parametric models can be specified in terms of the survival function, the hazard function, or the cumulative hazard function, which is the integral of the hazard function over time.

## Maximum Likelihood Estimation

The parameters of a parametric survival model are typically estimated using maximum likelihood estimation (MLE). MLE is a statistical method that finds the parameter values that maximize the likelihood of the observed data given the model. For censored survival data, the likelihood function is a product of the probability density function (PDF) for the observed event times and the survival function for the censored times. The MLE estimates can be obtained by solving the score equations, which are the first-order partial derivatives of the log-likelihood function with respect to the parameters.

## Types of Parametric Survival Models

There are two main types of parametric survival models: accelerated failure time (AFT) models and proportional hazards (PH) models.

### Accelerated Failure Time Models

AFT models assume that the effect of covariates on the survival time is multiplicative. In other words, the covariates act as time-scaling factors that accelerate or decelerate the failure process. The AFT model can be written as:


$$

\log(T) = \mu + \boldsymbol{\beta}^T \boldsymbol{X} + \epsilon

$$


where $T$ is the survival time, $\mu$ is the baseline log-survival time, $\boldsymbol{\beta}$ is a vector of regression coefficients, $\boldsymbol{X}$ is a vector of covariates, and $\epsilon$ is an error term with a specified distribution.

### Proportional Hazards Models

PH models assume that the effect of covariates on the hazard function is multiplicative. In other words, the covariates act as hazard-scaling factors that proportionally increase or decrease the hazard rate. The PH model can be written as:


$$

h(t) = h_0(t) \exp(\boldsymbol{\beta}^T \boldsymbol{X})

$$


where $h(t)$ is the hazard function, $h_0(t)$ is the baseline hazard function, $\boldsymbol{\beta}$ is a vector of regression coefficients, and $\boldsymbol{X}$ is a vector of covariates.

## Model Selection and Assessment

Selecting the appropriate parametric distribution and model type for a given dataset is an important step in the analysis. Model selection can be based on theoretical considerations, graphical methods (e.g., plotting the empirical survival or hazard function), or statistical criteria, such as the Akaike information criterion (AIC) or the Bayesian information criterion (BIC).

Model assessment involves checking the goodness-of-fit and the validity of the model assumptions. Residual-based methods, such as Cox-Snell residuals or deviance residuals, can be used to assess the fit of the model to the data. Diagnostic plots, such as the log-log survival plot or the hazard function plot, can be used to visually assess the fit and the assumptions of the model.

## Conclusion

Parametric survival models are a powerful tool for analyzing time-to-event data when a specific parametric distribution can be assumed for the survival or hazard function. These models allow for efficient estimation of model parameters and enable extrapolation beyond the observed data. The choice of distribution and model type depends on the characteristics of the data and the underlying assumptions about the shape of the survival or hazard function. Model selection and assessment are crucial steps in the analysis to ensure the validity and reliability of the results.
