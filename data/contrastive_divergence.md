# Contrastive Divergence

Contrastive Divergence (CD) is a method used in machine learning, particularly in the training of Boltzmann Machines and other energy-based models. It is an approximation to the gradient of the log-likelihood and is used to update the parameters of the model. CD is a faster alternative to other methods such as Markov Chain Monte Carlo (MCMC) methods, which are typically used for this purpose.

## Overview

Contrastive Divergence was proposed by Geoffrey Hinton as a faster learning algorithm for Boltzmann Machines. The idea behind CD is to avoid the computationally expensive step of running the Markov chain to equilibrium. Instead, the chain is run for a fixed number of steps and the difference between the initial and final states is used to update the parameters of the model.

## Algorithm

The Contrastive Divergence algorithm can be summarized as follows:

1. Start with a training example and run a Gibbs sampling chain for $k$ steps to get a sample.
2. Compute the difference between the outer products of the initial and final states.
3. Use this difference to update the parameters of the model.

The parameter update rule in CD is given by:


$$
\Delta \theta = \epsilon (E_{data}[\theta] - E_{model}[\theta])
$$


where $\epsilon$ is the learning rate, $E_{data}[\theta]$ is the expectation under the data distribution, and $E_{model}[\theta]$ is the expectation under the model distribution.

## Advantages and Disadvantages

Contrastive Divergence has the advantage of being faster than other methods such as MCMC. This is because it avoids the need to run the Markov chain to equilibrium, which can be computationally expensive.

However, CD is an approximation and does not always converge to the true gradient of the log-likelihood. This can lead to suboptimal solutions in some cases. Despite this, CD has been found to work well in practice, especially when used with models such as Restricted Boltzmann Machines.

## Applications

Contrastive Divergence is used in a variety of applications in machine learning and deep learning. It is commonly used in the training of Boltzmann Machines and other energy-based models. It is also used in the training of Deep Belief Networks, a type of deep learning model that consists of multiple layers of stochastic, latent variables.
