# Nested Sampling

Nested Sampling is a numerical integration technique used in Bayesian inference to compute the evidence, also known as the marginal likelihood, of a model. It was introduced by John Skilling in 2004 as an alternative to traditional Markov Chain Monte Carlo (MCMC) methods. Nested Sampling is particularly useful for problems with high-dimensional parameter spaces and complex likelihood functions, where MCMC methods may struggle to efficiently explore the parameter space.

## Overview

In Bayesian inference, the evidence is the normalization constant of the posterior distribution, which is required to compute the posterior probabilities of different models. The evidence is given by the integral:


$$

Z = \int L(\theta) \pi(\theta) d\theta

$$


where $L(\theta)$ is the likelihood function, $\pi(\theta)$ is the prior distribution, and $\theta$ represents the model parameters. Computing this integral is often challenging, especially for high-dimensional models with complex likelihood functions.

Nested Sampling addresses this problem by transforming the integral into a one-dimensional integral over the prior mass, which is defined as the cumulative probability of the prior distribution:


$$

X(\lambda) = \int_{L(\theta) > \lambda} \pi(\theta) d\theta

$$


where $\lambda$ is a threshold likelihood value. The evidence can then be computed as:


$$

Z = \int_0^1 L(X) dX

$$


where $L(X)$ is the likelihood function as a function of the prior mass. This one-dimensional integral can be estimated more efficiently than the original multi-dimensional integral, especially for high-dimensional models.

## Algorithm

The Nested Sampling algorithm proceeds as follows:

1. Draw a set of $N$ samples from the prior distribution, $\pi(\theta)$, and compute their likelihoods, $L(\theta)$.
2. Find the sample with the lowest likelihood, $L_{\text{min}}$, and set it aside.
3. Replace the discarded sample with a new sample drawn from the prior distribution, but with the constraint that its likelihood must be greater than $L_{\text{min}}$. This can be achieved using rejection sampling, MCMC, or other sampling techniques.
4. Repeat steps 2 and 3 for a fixed number of iterations or until a convergence criterion is met.
5. Estimate the evidence by numerically integrating the likelihood function over the prior mass using the collected samples.

The Nested Sampling algorithm generates a set of samples that are uniformly distributed in the prior mass, which allows for efficient estimation of the evidence. Additionally, the algorithm provides an estimate of the uncertainty in the evidence, which can be used to assess the reliability of the result.

## Advantages and Limitations

Nested Sampling has several advantages over traditional MCMC methods:

- It is more efficient at exploring high-dimensional parameter spaces and complex likelihood functions, as it focuses on regions of high likelihood.
- It provides an estimate of the evidence and its uncertainty, which is required for model comparison in Bayesian inference.
- It can be combined with other sampling techniques, such as MCMC or Sequential Monte Carlo, to improve the efficiency of the algorithm.

However, Nested Sampling also has some limitations:

- The algorithm requires the specification of a likelihood threshold, which can be difficult to choose in practice.
- The efficiency of the algorithm depends on the choice of the sampling technique used to draw new samples, and some techniques may be more suitable for certain problems than others.
- The algorithm can be sensitive to the choice of the number of samples, $N$, and the convergence criterion.

Despite these limitations, Nested Sampling has been successfully applied to a wide range of problems in Bayesian inference, including model selection, parameter estimation, and uncertainty quantification.
