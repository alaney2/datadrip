# Markov Chain Monte Carlo

Markov Chain Monte Carlo (MCMC) is a class of algorithms for sampling from probability distributions that are difficult or impossible to sample from directly. MCMC generates a Markov chain whose stationary distribution is the target distribution, from which samples can be drawn after the chain has converged.

MCMC is widely used in Bayesian inference and statistical physics, and has applications in many fields such as finance, genetics, and computer vision.

## Probability Distributions

MCMC requires knowledge of the target probability distribution, which is often a posterior distribution in Bayesian inference. The target distribution must be specified up to a normalizing constant, which can be difficult to compute for high-dimensional distributions.

## Bayesian Inference

Bayesian inference is a framework for updating beliefs about a parameter or hypothesis based on observed data. MCMC is often used for inference in complex models where exact inference is infeasible.

## Monte Carlo Integration

Monte Carlo integration is a numerical integration method based on sampling. MCMC can be viewed as a generalization of Monte Carlo integration to the case where the integrand is a probability density function.

## Random Walks

Random walks are a type of Markov chain where the next state is chosen randomly from a set of neighboring states. Many MCMC algorithms use random walks as a proposal distribution.

## Metropolis-Hastings Algorithm

The Metropolis-Hastings algorithm is a popular MCMC algorithm that uses a proposal distribution to generate new states, and accepts or rejects the proposed state based on a acceptance probability that depends on the target distribution.

## Gibbs Sampling

Gibbs sampling is a special case of the Metropolis-Hastings algorithm where the proposal distribution is constructed by sampling from the conditional distributions of the target distribution. Gibbs sampling is often used for sampling from high-dimensional distributions.

## Convergence Criteria

MCMC algorithms generate a Markov chain of samples, and convergence to the target distribution must be assessed. Convergence criteria include visual inspection of trace plots, the Gelman-Rubin diagnostic, and the effective sample size.

## Further Readings

- Hamiltonian Monte Carlo
- Nested Sampling
- Reversible Jump MCMC
- Importance Sampling
- Particle Filters
- Variational Inference
- Bayesian Optimization
- MCMC for Big Data
- MCMC in Nonlinear State Space Models
