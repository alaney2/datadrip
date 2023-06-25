# Causal Inference in Policy Evaluation

Causal inference in policy evaluation is the process of estimating the causal effects of a policy or intervention on a target population. It aims to answer the question, "What would have happened if the policy had not been implemented?" This is a challenging task because the true causal effect is often not directly observable, as it requires comparing the outcomes of the same individuals or groups under different treatment conditions. To address this issue, researchers use various statistical and econometric techniques to estimate causal effects by comparing the outcomes of treated and control groups.

## Counterfactuals and Potential Outcomes Framework

The foundation of causal inference in policy evaluation is the concept of counterfactuals, which are hypothetical scenarios representing what would have happened in the absence of the treatment or policy. The potential outcomes framework, introduced by Donald Rubin, formalizes this idea by defining two potential outcomes for each individual or unit: the outcome under treatment ($Y_i(1)$) and the outcome under control ($Y_i(0)$). The causal effect of the treatment for an individual is the difference between these two potential outcomes:


$$

\tau_i = Y_i(1) - Y_i(0)

$$


However, we can only observe one of these potential outcomes for each individual, depending on whether they received the treatment or not. This is known as the fundamental problem of causal inference.

## Causal Graphs

Causal graphs, also known as directed acyclic graphs (DAGs), are a useful tool for representing causal relationships between variables. In a causal graph, nodes represent variables, and directed edges represent causal relationships between variables. By encoding assumptions about the causal structure of the data, causal graphs can help researchers identify sources of confounding and guide the selection of appropriate methods for estimating causal effects.

## Methods for Estimating Causal Effects

There are several methods for estimating causal effects in policy evaluation, each with its own assumptions and limitations. Some of the most common methods include:

### Propensity Score Matching

Propensity score matching is a method for estimating causal effects by matching treated and control units based on their propensity scores, which are the estimated probabilities of receiving the treatment given their observed characteristics. The idea is to create a matched sample of treated and control units that have similar propensity scores, which should balance the distribution of observed covariates between the two groups. The causal effect can then be estimated by comparing the average outcomes of the matched treated and control units.

### Instrumental Variables

Instrumental variables (IV) is a method for estimating causal effects when there is unmeasured confounding between the treatment and outcome variables. The key idea is to find a variable (the instrument) that is related to the treatment but not directly related to the outcome, except through its effect on the treatment. By using the instrument as a source of exogenous variation in the treatment, the IV method can estimate the causal effect of the treatment on the outcome, even in the presence of unmeasured confounding.

### Difference-in-Differences

Difference-in-differences (DiD) is a method for estimating causal effects in panel data settings, where data are collected for the same units over multiple time periods. The DiD method compares the changes in outcomes for treated and control units before and after the implementation of a policy or intervention. The key assumption of the DiD method is that, in the absence of the treatment, the treated and control units would have followed parallel trends in their outcomes over time.

### Regression Discontinuity Design

Regression discontinuity design (RDD) is a method for estimating causal effects when there is a sharp discontinuity in the assignment of treatment based on a continuous variable, known as the running variable. The RDD method compares the outcomes of units just above and below the threshold of the running variable, assuming that these units are similar in all other respects. The causal effect is estimated as the discontinuity in the outcome variable at the threshold of the running variable.

### Synthetic Control Method

The synthetic control method is a method for estimating causal effects in comparative case studies, where a single treated unit is compared to a weighted combination of control units that best approximate the pre-treatment characteristics of the treated unit. The synthetic control method can be seen as an extension of the DiD method to settings with a small number of treated units and a large number of potential control units.

### Causal Forests

Causal forests are a machine learning method for estimating heterogeneous causal effects in observational data. They are an extension of random forests, a popular method for nonparametric regression and classification. Causal forests use a modified splitting criterion that aims to minimize the mean squared error of the estimated causal effects, rather than the prediction error of the outcome variable. By estimating causal effects at the individual level, causal forests can provide insights into the heterogeneity of treatment effects across different subgroups of the population.

## Conclusion

Causal inference in policy evaluation is a critical task for understanding the effectiveness of policies and interventions. By using a combination of theoretical frameworks, such as counterfactuals and causal graphs, and statistical methods, such as propensity score matching and instrumental variables, researchers can estimate the causal effects of policies and inform evidence-based decision-making. However, it is important to recognize the assumptions and limitations of these methods and to carefully consider the causal structure of the data when selecting an appropriate method for policy evaluation.
