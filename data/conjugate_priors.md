# Conjugate Priors

In Bayesian statistics, conjugate priors are a class of prior probability distributions that, when combined with a likelihood function from the same family, yield a posterior distribution that is also from the same family. Conjugate priors are useful in Bayesian inference because they simplify the computation of the posterior distribution, making it easier to update beliefs in light of new data.

## Background

In Bayesian inference, we update our beliefs about a parameter $\theta$ given observed data $X$ by combining a prior distribution $p(\theta)$, which represents our initial beliefs about $\theta$, with a likelihood function $p(X|\theta)$, which represents the probability of observing the data given the parameter. The result is a posterior distribution $p(\theta|X)$, which represents our updated beliefs about $\theta$ after observing the data. Mathematically, this process is described by Bayes' theorem:


$$

p(\theta|X) = \frac{p(X|\theta)p(\theta)}{p(X)}

$$


The denominator $p(X)$ is often difficult to compute, as it involves integrating over all possible values of $\theta$. However, if the prior distribution $p(\theta)$ is a conjugate prior for the likelihood function $p(X|\theta)$, then the posterior distribution $p(\theta|X)$ will be from the same family as the prior, and the computation of the posterior becomes much simpler.

## Definition

A prior distribution $p(\theta)$ is said to be a conjugate prior for a likelihood function $p(X|\theta)$ if the posterior distribution $p(\theta|X)$ is in the same family as the prior distribution. More formally, let $F$ be a family of probability distributions. A distribution $p(\theta)$ from $F$ is a conjugate prior for a likelihood function $p(X|\theta)$ if, for any $X$ and $\theta$,


$$

p(\theta|X) \propto p(X|\theta)p(\theta)

$$


is also a distribution from $F$.

## Examples

There are several well-known examples of conjugate priors in Bayesian statistics. Some of the most common ones include:

1. **Beta-Binomial conjugacy**: The Beta distribution is a conjugate prior for the Binomial likelihood function. If the prior distribution for the probability of success $\theta$ in a Bernoulli trial is a Beta distribution with parameters $\alpha$ and $\beta$, and the observed data consists of $n$ trials with $k$ successes, then the posterior distribution for $\theta$ is also a Beta distribution with parameters $\alpha + k$ and $\beta + n - k$.

2. **Gamma-Poisson conjugacy**: The Gamma distribution is a conjugate prior for the Poisson likelihood function. If the prior distribution for the rate parameter $\lambda$ of a Poisson process is a Gamma distribution with parameters $\alpha$ and $\beta$, and the observed data consists of $n$ events with a total count of $k$, then the posterior distribution for $\lambda$ is also a Gamma distribution with parameters $\alpha + k$ and $\beta + n$.

3. **Dirichlet-Multinomial conjugacy**: The Dirichlet distribution is a conjugate prior for the Multinomial likelihood function. If the prior distribution for the probability vector $\boldsymbol{\theta}$ of a Multinomial distribution is a Dirichlet distribution with parameters $\boldsymbol{\alpha}$, and the observed data consists of $n$ trials with counts $\boldsymbol{k}$ for each category, then the posterior distribution for $\boldsymbol{\theta}$ is also a Dirichlet distribution with parameters $\boldsymbol{\alpha} + \boldsymbol{k}$.

## Properties

Conjugate priors have several useful properties that make them particularly well-suited for Bayesian inference:

1. **Computational simplicity**: Because the posterior distribution is in the same family as the prior distribution, the computation of the posterior is often much simpler than it would be with a non-conjugate prior. This can be especially important in situations where the data is updated frequently, as the posterior distribution can be updated easily with each new observation.

2. **Interpretability**: Conjugate priors often have interpretable parameters that can be updated in a straightforward manner as new data is observed. For example, in the Beta-Binomial conjugacy, the parameters of the Beta distribution can be interpreted as "pseudo-counts" of successes and failures, and the posterior distribution is simply obtained by adding the observed counts to the prior pseudo-counts.

3. **Conjugate priors as regularizers**: In some cases, conjugate priors can be seen as a form of regularization, as they impose a prior belief on the parameters that can help prevent overfitting. For example, the Lasso and Ridge regression techniques in linear regression can be interpreted as using conjugate priors on the regression coefficients.

Despite these advantages, conjugate priors are not always the best choice for a given problem, as they may not accurately represent the true prior beliefs about the parameters. In such cases, non-conjugate priors or other techniques, such as Markov chain Monte Carlo (MCMC) methods, may be more appropriate for Bayesian inference.
