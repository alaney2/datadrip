# Akaike Information Criterion

The Akaike Information Criterion (AIC) is a model selection technique used in statistics and machine learning to choose the best model among a set of candidate models. It was developed by Hirotugu Akaike in 1974 and is based on the concept of information theory. AIC estimates the relative quality of each model by balancing the goodness of fit and the complexity of the model. The goal is to select a model that provides the best trade-off between fitting the data well and being parsimonious.

## Definition

Given a set of candidate models, the AIC is defined as:


$$

\text{AIC} = 2k - 2\ln(\mathcal{L})

$$


where $k$ is the number of parameters in the model, and $\mathcal{L}$ is the maximum likelihood of the model. The first term, $2k$, represents the complexity of the model, while the second term, $-2\ln(\mathcal{L})$, represents the goodness of fit. Lower AIC values indicate better models.

The AIC can be used to compare different models by calculating the AIC for each model and selecting the one with the lowest AIC value. It is important to note that the AIC is only useful for comparing models that are fit to the same dataset.

## Assumptions and Properties

The AIC is based on several assumptions:

1. The true model is not among the candidate models.
2. The candidate models are nested or have the same likelihood function.
3. The sample size is large enough for asymptotic properties to hold.

Under these assumptions, the AIC has several desirable properties:

1. Consistency: As the sample size increases, the probability of selecting the true model approaches 1.
2. Asymptotic efficiency: The AIC converges to the true model at a faster rate than other model selection criteria, such as the Bayesian Information Criterion (BIC).
3. Parsimony: The AIC tends to select models with fewer parameters, which helps prevent overfitting.

## Limitations

There are some limitations to using the AIC for model selection:

1. The AIC is not invariant under reparameterization, meaning that the AIC value may change if the model is expressed in a different form.
2. The AIC is sensitive to the choice of likelihood function, which may lead to different results for different likelihoods.
3. The AIC assumes that the true model is not among the candidate models, which may not always be the case.
4. The AIC is not appropriate for models with non-nested likelihood functions or small sample sizes.

## Extensions and Alternatives

Several extensions and alternatives to the AIC have been proposed to address its limitations:

1. The corrected AIC (AICc) is an extension of the AIC that adjusts for small sample sizes. It is defined as:

   
$$

   \text{AICc} = \text{AIC} + \frac{2k(k+1)}{n-k-1}
   
$$


   where $n$ is the sample size. The AICc converges to the AIC as the sample size increases.

2. The Bayesian Information Criterion (BIC) is another model selection criterion that balances goodness of fit and model complexity. It is defined as:

   
$$

   \text{BIC} = k\ln(n) - 2\ln(\mathcal{L})
   
$$


   The BIC tends to favor simpler models than the AIC and is consistent under different assumptions.

3. The Minimum Description Length (MDL) is a model selection criterion based on information theory that aims to minimize the amount of information needed to describe the data and the model. The MDL is closely related to the AIC and BIC but has different properties and assumptions.

4. Cross-validation is a model selection technique that estimates the predictive performance of a model by dividing the data into training and validation sets. Cross-validation can be used as an alternative to the AIC when the assumptions of the AIC do not hold or when the goal is to select a model with good predictive performance.

In conclusion, the Akaike Information Criterion is a widely used model selection technique that balances goodness of fit and model complexity. It has several desirable properties and can be extended or replaced by alternative criteria when its assumptions do not hold.
