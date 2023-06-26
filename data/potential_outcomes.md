# Potential Outcomes

Potential outcomes, also known as the Rubin causal model or Neyman-Rubin model, is a framework for causal inference in statistics and social sciences. The potential outcomes framework provides a way to define causal effects, estimate them from data, and make causal inferences. It is particularly useful for analyzing observational data, where randomized experiments are not possible or ethical.

## Overview

The potential outcomes framework is based on the idea of counterfactuals, which are hypothetical scenarios that could have occurred under different treatment conditions. In this framework, each unit (e.g., individual, firm, country) has a set of potential outcomes, one for each possible treatment level. The causal effect of a treatment is defined as the difference between the potential outcomes under different treatment levels.

For example, consider a study on the effect of a job training program on earnings. Each individual in the study has two potential outcomes: their earnings if they participate in the program (treatment group) and their earnings if they do not participate in the program (control group). The causal effect of the program for an individual is the difference between these two potential outcomes.

## Estimating Causal Effects

The main challenge in estimating causal effects using the potential outcomes framework is that we can only observe one potential outcome for each unit, depending on the treatment they actually received. This is known as the fundamental problem of causal inference. To overcome this problem, researchers often rely on assumptions and statistical methods to estimate the missing potential outcomes.

One common assumption is the stable unit treatment value assumption (SUTVA), which states that the potential outcome for a unit depends only on its own treatment level and not on the treatment levels of other units. This assumption is crucial for identifying causal effects, as it allows researchers to estimate the missing potential outcomes using the observed outcomes of other units with similar characteristics.

Several statistical methods have been developed to estimate causal effects under the potential outcomes framework, including:

1. **Matching**: This method involves pairing treated and control units with similar observed characteristics, and then comparing their outcomes to estimate the causal effect. Propensity score matching is a popular matching technique that uses the propensity score, which is the probability of receiving treatment given the observed characteristics, to match treated and control units.

2. **Instrumental variables**: This method uses an external variable, called an instrument, that is related to the treatment but not directly related to the potential outcomes. The instrumental variable can help estimate the causal effect of the treatment by providing a source of exogenous variation in treatment assignment.

3. **Difference-in-differences**: This method compares the changes in outcomes for treated and control units before and after the treatment. The difference-in-differences estimator assumes that the treated and control units would have followed parallel trends in the absence of treatment, and it estimates the causal effect as the difference in the changes in outcomes between the two groups.

4. **Regression discontinuity design**: This method exploits a discontinuity in the treatment assignment rule to estimate the causal effect of the treatment. The regression discontinuity design assumes that units just above and below the discontinuity threshold are similar, and it compares their outcomes to estimate the causal effect.

## Limitations and Extensions

The potential outcomes framework has some limitations, including its reliance on untestable assumptions (e.g., SUTVA, ignorability) and its focus on average treatment effects, which may not capture heterogeneous treatment effects across different subgroups or contexts. However, the framework has been extended and refined over time to address these limitations and incorporate more complex causal structures, such as causal graphs and mediation analysis.

Despite its limitations, the potential outcomes framework has been widely adopted in various fields, including economics, political science, and public health, as a rigorous and intuitive approach to causal inference. It has also been integrated with machine learning and artificial intelligence techniques to develop more advanced methods for estimating causal effects from large-scale and high-dimensional data.
