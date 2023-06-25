# Causal Inference in Social Sciences

Causal inference is the process of determining the cause-and-effect relationship between variables. In social sciences, causal inference is essential for understanding the impact of policies, interventions, and other factors on outcomes of interest. This article provides an overview of the main methods and techniques used in causal inference in social sciences, including potential outcomes framework, observational studies, randomized controlled trials, propensity score matching, instrumental variables, difference-in-differences, and regression discontinuity design.

## Potential Outcomes Framework

The potential outcomes framework, also known as the Rubin Causal Model, is a fundamental concept in causal inference. It provides a formal way to define causal effects and helps to clarify the assumptions needed for causal inference. In this framework, each unit (e.g., individual, firm, or country) has a set of potential outcomes, one for each possible treatment level. The causal effect of a treatment is defined as the difference between the potential outcomes under different treatment levels.

The main challenge in causal inference is that we can only observe one potential outcome for each unit, depending on the treatment received. This is known as the fundamental problem of causal inference. To overcome this problem, researchers rely on various assumptions and methods to estimate the causal effects of interest.

## Observational Study

An observational study is a study in which the treatment assignment is not controlled by the researcher but is instead determined by factors outside the study. In such studies, there is a risk of confounding, which occurs when the treatment assignment is correlated with unobserved factors that also affect the outcome. This can lead to biased estimates of causal effects.

To address the issue of confounding, researchers use various techniques to control for observed and unobserved confounders, such as regression adjustment, matching, and weighting. These methods aim to create a comparison group that is similar to the treated group in terms of observed characteristics, thereby reducing the bias due to confounding.

## Randomized Controlled Trial

A randomized controlled trial (RCT) is an experimental study in which the treatment assignment is determined by randomization. By randomly assigning units to treatment and control groups, RCTs ensure that both observed and unobserved factors are balanced between the groups, eliminating confounding and allowing for unbiased estimation of causal effects.

RCTs are considered the gold standard for causal inference, but they are not always feasible or ethical to conduct in social sciences. In such cases, researchers rely on observational data and other methods to estimate causal effects.

## Propensity Score Matching

Propensity score matching (PSM) is a method used to control for confounding in observational studies. The propensity score is the probability of receiving the treatment given the observed characteristics of a unit. By matching treated and control units with similar propensity scores, PSM creates a comparison group that is similar to the treated group in terms of observed characteristics, reducing the bias due to confounding.

PSM can be implemented using various matching algorithms, such as nearest neighbor matching, caliper matching, and kernel matching. The choice of matching algorithm and the specification of the propensity score model can affect the quality of the matched sample and the resulting causal estimates.

## Instrumental Variables

Instrumental variables (IV) is a method used to estimate causal effects when there is unobserved confounding or measurement error in the treatment variable. An instrumental variable is a variable that is correlated with the treatment but not with the unobserved confounders or the outcome, except through its effect on the treatment.

The IV method uses the variation in the treatment induced by the instrument to estimate the causal effect of the treatment on the outcome. This method relies on several assumptions, such as the relevance of the instrument (i.e., its correlation with the treatment) and its exogeneity (i.e., its independence from the unobserved confounders and the outcome).

## Difference-in-Differences

Difference-in-differences (DiD) is a method used to estimate causal effects in panel data settings, where data are collected for multiple units over time. The DiD method compares the changes in outcomes for treated and control units before and after the treatment, assuming that the treatment effect is constant over time and that the treatment and control groups would have followed parallel trends in the absence of the treatment.

DiD can be implemented using regression models with fixed effects or with synthetic control methods, which create a synthetic control group by weighting the control units to match the pre-treatment characteristics and trends of the treated unit.

## Regression Discontinuity Design

Regression discontinuity design (RDD) is a method used to estimate causal effects when the treatment assignment is determined by a continuous variable (the running variable) and there is a discontinuity in the probability of receiving the treatment at a certain threshold. The RDD method compares the outcomes of units just above and below the threshold, assuming that the treatment effect is local and that the units close to the threshold are similar in terms of unobserved characteristics.

RDD can be implemented using local regression methods, such as local linear regression or local polynomial regression, and requires the choice of a bandwidth, which determines the range of units included in the estimation.

In conclusion, causal inference in social sciences is a complex and challenging task that requires careful consideration of the assumptions and methods used to estimate causal effects. By understanding the strengths and limitations of different methods, researchers can make informed decisions about the best approach to answer their research questions and contribute to the advancement of knowledge in their field.
