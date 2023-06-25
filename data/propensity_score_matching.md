# Propensity Score Matching

Propensity Score Matching (PSM) is a statistical technique used in observational studies to estimate the causal effect of a treatment on an outcome by accounting for confounding variables. It was first introduced by Paul Rosenbaum and Donald Rubin in 1983. PSM aims to create a quasi-experimental setting by matching treated and control units with similar propensity scores, which represent the probability of receiving the treatment given a set of observed covariates.

## Background

In randomized controlled trials (RCTs), treatment assignment is random, which ensures that both treated and control groups are, on average, similar in all aspects except for the treatment. This allows for unbiased estimation of the treatment effect. However, in observational studies, treatment assignment is often non-random and may be influenced by confounding variables. These confounders can lead to biased estimates of the treatment effect if not properly accounted for.

Propensity score matching addresses this issue by creating a matched sample of treated and control units with similar propensity scores. The propensity score is defined as the conditional probability of receiving the treatment given a set of observed covariates:


$$

e(X) = P(T = 1 | X)

$$


where $T$ is the treatment indicator, and $X$ is a vector of observed covariates. The propensity score can be estimated using various methods, such as logistic regression or machine learning algorithms.

## Assumptions

PSM relies on two key assumptions:

1. **Unconfoundedness**: Given the propensity score, the treatment assignment is independent of the potential outcomes. This assumption implies that all confounding variables are observed and included in the propensity score model.


$$

(Y_0, Y_1) \perp T | e(X)

$$


2. **Common support**: There is a positive probability of receiving either treatment for all values of the covariates. This assumption ensures that there are comparable treated and control units for each level of the propensity score.


$$

0 < P(T = 1 | X) < 1

$$


If these assumptions hold, the average treatment effect on the treated (ATT) can be estimated as:


$$

ATT = E[Y_1 - Y_0 | T = 1] = E[Y | T = 1] - E[Y | T = 0, e(X) \in C]

$$


where $C$ is the region of common support.

## Matching Methods

There are several methods for matching treated and control units based on their propensity scores:

1. **Nearest neighbor matching**: For each treated unit, find the control unit with the closest propensity score. This method can be done with or without replacement.

2. **Caliper matching**: For each treated unit, find the control unit with the closest propensity score within a predefined caliper (i.e., maximum allowed distance between propensity scores). This method reduces the risk of poor matches but may result in unmatched treated units.

3. **Stratification matching**: Divide the propensity score distribution into strata (e.g., quintiles) and estimate the treatment effect within each stratum. The overall treatment effect is then calculated as a weighted average of the stratum-specific effects.

4. **Kernel and local linear matching**: Use kernel or local linear regression to estimate the counterfactual outcome for each treated unit based on the outcomes of nearby control units, weighted by their propensity score distance.

## Assessing Balance

After matching, it is important to assess the balance of covariates between the treated and control groups. This can be done using standardized mean differences, variance ratios, or graphical methods such as histograms or boxplots. If the matching procedure is successful, the matched groups should be similar in their observed covariates, reducing the risk of confounding bias.

## Limitations

PSM has several limitations:

- It relies on the unconfoundedness assumption, which is untestable. If there are unobserved confounders, PSM may still produce biased estimates of the treatment effect.
- The quality of the matches depends on the choice of matching method and the specification of the propensity score model. Incorrect model specification or poor matching can lead to biased estimates.
- PSM can only estimate the treatment effect for the region of common support. If the treatment and control groups have very different propensity score distributions, the estimated treatment effect may not be generalizable to the entire population.

Despite these limitations, propensity score matching remains a popular and useful tool for estimating causal effects in observational studies when randomized controlled trials are not feasible.
