# Causal Inference With Noncompliance

Causal inference with noncompliance is a subfield of causal inference that focuses on estimating causal effects when some individuals do not comply with their assigned treatment. Noncompliance is a common issue in randomized controlled trials (RCTs) and observational studies, where participants may not adhere to the treatment they were assigned or may switch to a different treatment during the study. This can lead to biased estimates of causal effects if not properly accounted for in the analysis.

## Noncompliance and the Potential Outcomes Framework

The potential outcomes framework is a widely used approach for causal inference, which represents the causal effect of a treatment on an individual as the difference between their potential outcomes under treatment and control. In the presence of noncompliance, the potential outcomes framework can be extended to account for different compliance behaviors. 

Suppose we have a binary treatment $Z$ (e.g., assignment to a new drug or a placebo) and a binary outcome $Y$ (e.g., recovery from a disease). We can define the potential outcomes $Y(1)$ and $Y(0)$ as the outcomes that would be observed if the individual were assigned to treatment and control, respectively. In the presence of noncompliance, we also need to consider the actual treatment received, denoted by $D$. We can define the potential treatments $D(1)$ and $D(0)$ as the treatments that would be received if the individual were assigned to treatment and control, respectively.

With these definitions, we can classify individuals into compliance classes based on their potential treatments:

1. Always-takers: Individuals who would receive the treatment regardless of their assignment ($D(1) = D(0) = 1$).
2. Never-takers: Individuals who would not receive the treatment regardless of their assignment ($D(1) = D(0) = 0$).
3. Compliers: Individuals who would receive the treatment if assigned to treatment and not receive it if assigned to control ($D(1) = 1$ and $D(0) = 0$).
4. Defiers: Individuals who would receive the treatment if assigned to control and not receive it if assigned to treatment ($D(1) = 0$ and $D(0) = 1$).

In practice, the compliance classes are unobserved, as we can only observe the actual treatment received and the assignment. However, they play a crucial role in understanding the causal effects of interest and the assumptions needed to identify them.

## Instrumental Variables and the Local Average Treatment Effect

One approach to dealing with noncompliance in causal inference is to use instrumental variables (IVs). An IV is a variable that is related to the treatment assignment but not directly related to the outcome, except through its effect on the treatment. In the context of RCTs, the random assignment itself can be used as an IV, as it is independent of potential outcomes and only affects the outcome through its effect on the treatment received.

The IV approach allows us to estimate the local average treatment effect (LATE), which is the average causal effect for the subpopulation of compliers. The LATE can be estimated as the ratio of the intention-to-treat effect (the difference in outcomes between the assigned treatment and control groups) and the first-stage effect (the difference in treatment received between the assigned treatment and control groups):


$$

\text{LATE} = \frac{E[Y(1) - Y(0) | D(1) = 1, D(0) = 0]}{E[D(1) - D(0) | D(1) = 1, D(0) = 0]}.

$$


The LATE is a useful parameter in many settings, as it represents the causal effect for the individuals who are most likely to be affected by the treatment. However, it is important to note that the LATE may not be generalizable to the entire population, as it only applies to the compliers.

## Principal Stratification

Another approach to dealing with noncompliance in causal inference is principal stratification, which involves conditioning on the compliance classes to estimate causal effects within each class. This approach requires strong assumptions about the relationship between the compliance classes and the potential outcomes, such as the exclusion restriction (the assignment only affects the outcome through its effect on the treatment received) and the monotonicity assumption (there are no defiers).

Under these assumptions, we can estimate causal effects within each compliance class using methods such as maximum likelihood estimation or Bayesian inference. However, the principal stratification approach can be challenging in practice, as the compliance classes are unobserved and must be inferred from the data.

## Conclusion

Causal inference with noncompliance is an important area of research, as noncompliance is a common issue in many empirical studies. Methods such as instrumental variables and principal stratification can help to account for noncompliance and provide unbiased estimates of causal effects. However, these methods rely on strong assumptions and may not be applicable in all settings. Researchers should carefully consider the assumptions and limitations of these methods when analyzing data with noncompliance.
