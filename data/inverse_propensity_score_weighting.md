# Inverse Propensity Score Weighting

Inverse Propensity Score Weighting (IPSW) is a method used in causal inference to estimate the average treatment effect (ATE) in observational studies. It is based on the propensity score, which is the probability of receiving treatment given a set of observed covariates. The main idea behind IPSW is to reweight the observed data to create a pseudo-population in which treatment assignment is independent of the observed covariates, thus mimicking a randomized controlled trial.

## Propensity Score

The propensity score, denoted as $e(X)$, is the conditional probability of receiving treatment given a set of observed covariates $X$. It can be estimated using various methods, such as logistic regression, where the outcome variable is the treatment assignment and the predictor variables are the observed covariates. The propensity score is used to balance the distribution of covariates between treated and control groups, reducing confounding bias.

## Estimating Average Treatment Effect

The average treatment effect (ATE) is the difference in the expected outcomes between treated and control groups. In observational studies, the ATE cannot be directly estimated because the treatment assignment is not random and may be influenced by the observed covariates. The goal of IPSW is to estimate the ATE by reweighting the observed data to create a pseudo-population in which treatment assignment is independent of the observed covariates.

The inverse propensity score weighting estimator for the ATE is given by:


$$

\hat{ATE} = \frac{1}{N}\sum_{i=1}^N \frac{W_i}{e(X_i)}Y_i - \frac{1}{N}\sum_{i=1}^N \frac{1-W_i}{1-e(X_i)}Y_i

$$


where $N$ is the number of observations, $W_i$ is the treatment assignment (1 for treated, 0 for control), $e(X_i)$ is the propensity score for observation $i$, and $Y_i$ is the outcome for observation $i$. The first term in the equation represents the average outcome in the treated group, weighted by the inverse of the propensity score, and the second term represents the average outcome in the control group, weighted by the inverse of the complement of the propensity score.

## Assumptions

IPSW relies on several assumptions to provide unbiased estimates of the ATE:

1. **Unconfoundedness**: Treatment assignment is independent of the potential outcomes, conditional on the observed covariates. This means that there are no unobserved confounders that affect both treatment assignment and the outcome.

2. **Overlap**: There is a positive probability of receiving treatment for all values of the observed covariates. This ensures that the propensity score is bounded away from 0 and 1, preventing extreme weights that could lead to unstable estimates.

3. **Correct specification**: The propensity score model is correctly specified. If the model is misspecified, the estimated propensity scores may not balance the covariates between treated and control groups, leading to biased estimates of the ATE.

## Limitations

Inverse propensity score weighting has some limitations:

1. **Sensitivity to model misspecification**: If the propensity score model is misspecified, the estimated propensity scores may not balance the covariates between treated and control groups, leading to biased estimates of the ATE.

2. **Extreme weights**: If the propensity score is close to 0 or 1 for some observations, the inverse propensity score weights can be very large, leading to unstable estimates of the ATE. This issue can be mitigated by using stabilized weights or trimming the weights.

3. **Efficiency**: IPSW can be less efficient than other methods, such as matching or doubly robust estimation, in terms of the precision of the estimated ATE.

Despite these limitations, inverse propensity score weighting is a widely used method in causal inference due to its simplicity and ability to handle a large number of covariates. It can also be combined with other methods, such as doubly robust estimation, to improve its performance.
