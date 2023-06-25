# Competing Risks Analysis

Competing risks analysis is a statistical method used to study the occurrence of multiple events in survival analysis. In this context, competing risks are events that can prevent the occurrence of the event of interest, and their presence can affect the estimation of the probability of the event of interest. Competing risks analysis is particularly useful in medical research, where patients may experience different types of events, such as death from different causes or different types of treatment failure.

## Survival Analysis and Competing Risks

Survival analysis is a branch of statistics that deals with the analysis of time-to-event data, where the event of interest can be death, failure, or any other event. The main goal of survival analysis is to estimate the probability of the event of interest occurring at a given time, given that it has not occurred before that time. This probability is usually represented by the survival function, which is the complement of the cumulative distribution function of the time-to-event variable.

In the presence of competing risks, the interpretation of the survival function becomes more complex, as it represents the probability of not experiencing any of the competing events. To account for competing risks, researchers often use the cumulative incidence function (CIF), which estimates the probability of experiencing the event of interest by a given time, accounting for the presence of competing risks.

## Hazard Function and Competing Risks

The hazard function is another important concept in survival analysis, representing the instantaneous rate of the event of interest occurring at a given time, given that it has not occurred before that time. In the presence of competing risks, the hazard function can be decomposed into cause-specific hazard functions, each representing the instantaneous rate of a specific event occurring at a given time, given that none of the competing events have occurred before that time.

## Kaplan-Meier Estimator and Competing Risks

The Kaplan-Meier estimator is a non-parametric estimator of the survival function, widely used in survival analysis. However, in the presence of competing risks, the Kaplan-Meier estimator can lead to biased estimates of the event of interest's probability, as it does not account for the presence of competing risks. To overcome this limitation, researchers often use the CIF to estimate the probability of the event of interest in the presence of competing risks.

## Cox Proportional Hazards Model and Competing Risks

The Cox proportional hazards model is a semi-parametric regression model used to estimate the hazard function in survival analysis, allowing for the inclusion of covariates. In the presence of competing risks, the Cox model can be extended to account for cause-specific hazard functions, leading to the cause-specific Cox model. This model allows researchers to estimate the effect of covariates on the cause-specific hazard functions, providing insights into the relationship between the covariates and the competing risks.

## Subdistribution Hazard Model

An alternative approach to competing risks analysis is the subdistribution hazard model, also known as the Fine and Gray model. This model directly models the CIF, allowing researchers to estimate the effect of covariates on the cumulative incidence of the event of interest, accounting for the presence of competing risks. The subdistribution hazard model is particularly useful when the focus of the analysis is on the absolute risk of the event of interest, rather than the cause-specific hazard functions.

## Conclusion

Competing risks analysis is an essential tool in survival analysis when multiple events can prevent the occurrence of the event of interest. By accounting for competing risks, researchers can obtain more accurate estimates of the probability of the event of interest and the effect of covariates on the event's occurrence. Several methods, such as the cause-specific Cox model and the subdistribution hazard model, have been developed to handle competing risks in survival analysis, providing valuable insights into the relationship between the competing events and the event of interest.
