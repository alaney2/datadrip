# Log Likelihood

In probability theory, the **log likelihood** is a logarithmic transformation of the likelihood function that is commonly used in statistical inference. It measures the agreement between the observed data and a statistical model by comparing the probability of observing the data under the model. The log likelihood is often used as an objective function to estimate the parameters of a model by maximizing it. 

## Mathematical Definition

The log likelihood of a set of independent and identically distributed (i.i.d.) random variables $X_1, X_2, ..., X_n$ with a probability density function $f(x;\theta)$, where $\theta$ is a vector of parameters, is defined as:

$$
\ell(\theta | x_1, x_2, ..., x_n) = \sum_{i=1}^n \ln f(x_i;\theta)
$$

where $\ln$ is the natural logarithm. The log likelihood can be interpreted as the sum of the logarithmic probabilities of observing each data point under the model.

## Maximum Likelihood Estimation

The log likelihood plays a central role in maximum likelihood estimation (MLE), which is a method for estimating the parameters of a statistical model by maximizing the log likelihood. The MLE of the parameter vector $\theta$ is defined as:

$$
\hat{\theta}_{MLE} = \text{argmax}_{\theta} \ \ell(\theta | x_1, x_2, ..., x_n)
$$

where $\text{argmax}$ denotes the value of $\theta$ that maximizes the log likelihood. 

## Properties

The log likelihood has several properties that make it a useful tool for statistical inference:

- **Additivity**: The log likelihood of the joint distribution of multiple i.i.d. random variables is equal to the sum of the log likelihoods of each variable, i.e., $\ell(\theta | x_1, x_2, ..., x_n) = \sum_{i=1}^n \ell(\theta | x_i)$.
- **Invariance**: The log likelihood is invariant to one-to-one transformations of the parameter vector, i.e., if $\theta' = g(\theta)$ for some invertible function $g$, then $\ell(\theta' | x_1, x_2, ..., x_n) = \ell(\theta | x_1, x_2, ..., x_n)$.
- **Asymptotic Normality**: Under certain regularity conditions, the MLE of the parameter vector $\theta$ is asymptotically normally distributed with mean $\theta$ and covariance matrix equal to the inverse of the Fisher information matrix evaluated at $\theta$.

## Applications

The log likelihood is widely used in various fields of science and engineering, including:

- **Model Selection**: The log likelihood can be used to compare different models by computing their log likelihoods and selecting the model with the highest log likelihood.
- **Hypothesis Testing**: The log likelihood ratio test is a statistical test that uses the difference between the log likelihoods of two models to test a hypothesis.
- **Bayesian Inference**: The log likelihood is a key ingredient in Bayesian inference, which involves updating a prior distribution over the parameters of a model based on the observed data to obtain a posterior distribution.
- **Neural Networks**: The log likelihood is often used as a loss function for training neural networks, particularly for probabilistic models such as variational autoencoders and generative adversarial networks.

## Further Readings

- Bayesian Inference
- Information Criteria
- Cross Entropy Loss
- KL Divergence
- Monte Carlo Methods
