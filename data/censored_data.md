# Censored Data

Censored data is a type of incomplete data that occurs when the exact value of a variable is not observed, but some information about its value is available. In the context of survival analysis, censored data refers to the situation where the event of interest (e.g., death, failure, or any other event) has not been observed for some subjects during the study period. Censoring can occur for various reasons, such as loss to follow-up, study termination, or the occurrence of a competing event.

There are three main types of censoring: right censoring, left censoring, and interval censoring.

## Right Censoring

Right censoring is the most common type of censoring in survival analysis. It occurs when the event of interest has not been observed for a subject by the end of the study period. In this case, the exact event time is unknown, but it is known that the event occurred after the last observation time. Right censoring can be classified into two types: non-informative and informative.

### Non-informative Right Censoring

Non-informative right censoring occurs when the censoring mechanism is independent of the event time. In other words, the probability of being censored is not related to the subject's survival time. This type of censoring is considered less problematic because it does not introduce bias in the estimation of survival probabilities.

### Informative Right Censoring

Informative right censoring occurs when the censoring mechanism is dependent on the event time. In this case, the probability of being censored is related to the subject's survival time, which can lead to biased estimates of survival probabilities. This type of censoring is more challenging to handle and requires more advanced statistical methods.

## Left Censoring

Left censoring occurs when the event of interest has already occurred before the start of the study period. In this case, the exact event time is unknown, but it is known that the event occurred before the first observation time. Left censoring is less common than right censoring and requires different statistical methods for handling the incomplete data.

## Interval Censoring

Interval censoring occurs when the event of interest is known to have occurred within a specific time interval, but the exact event time is unknown. This type of censoring can be seen as a combination of left and right censoring, where the event time is bounded by two known time points.

## Handling Censored Data

Several statistical methods have been developed to handle censored data in survival analysis. Some of the most popular methods include the Kaplan-Meier estimator, the Cox proportional hazards model, and the accelerated failure time model.

### Kaplan-Meier Estimator

The Kaplan-Meier estimator is a nonparametric method for estimating the survival function from censored data. It is based on the product-limit method and provides an estimate of the probability of surviving beyond a given time point. The Kaplan-Meier estimator is widely used in medical research and other fields where survival data is common.

### Cox Proportional Hazards Model

The Cox proportional hazards model is a semi-parametric regression model for analyzing the relationship between multiple covariates and the hazard function in the presence of censored data. The model assumes that the hazard function is proportional across different levels of the covariates, which allows for the estimation of hazard ratios without specifying the baseline hazard function. The Cox model is widely used in epidemiology and other fields for analyzing the effects of risk factors on survival outcomes.

### Accelerated Failure Time Model

The accelerated failure time (AFT) model is a parametric regression model for analyzing the relationship between multiple covariates and the survival time in the presence of censored data. The AFT model assumes that the effect of the covariates is to accelerate or decelerate the event time by a constant factor. This model is less commonly used than the Cox model but can provide more efficient estimates under certain conditions.

In conclusion, censored data is a common issue in survival analysis and requires specialized statistical methods to handle the incomplete information. The choice of the appropriate method depends on the type of censoring, the distribution of the event times, and the research question of interest.
