# Rejection Sampling

Rejection sampling is a technique used in computational statistics and machine learning to generate random samples from a target distribution $p(x)$, given a proposal distribution $q(x)$ that is easy to sample from. It is a type of Monte Carlo method and is particularly useful when the target distribution is difficult to sample from directly.

## Overview

The main idea behind rejection sampling is to sample from the proposal distribution $q(x)$ and then accept or reject each sample based on a criterion that ensures the accepted samples are distributed according to the target distribution $p(x)$. The acceptance criterion is based on a comparison of the target and proposal distributions at the sampled point, scaled by a constant factor $M$.

The algorithm for rejection sampling is as follows:

1. Choose a proposal distribution $q(x)$ that is easy to sample from and covers the support of the target distribution $p(x)$.
2. Choose a constant $M$ such that $Mq(x) \ge p(x)$ for all $x$ in the support of $p(x)$.
3. Generate a random sample $x$ from the proposal distribution $q(x)$.
4. Generate a random number $u$ uniformly distributed between 0 and 1.
5. If $u \le \frac{p(x)}{Mq(x)}$, accept the sample $x$; otherwise, reject it.
6. Repeat steps 3-5 until the desired number of samples is obtained.

The accepted samples will be distributed according to the target distribution $p(x)$. The efficiency of rejection sampling depends on the choice of the proposal distribution $q(x)$ and the constant $M$. A good proposal distribution should closely resemble the target distribution, and a smaller value of $M$ will result in a higher acceptance rate.

## Example

Suppose we want to generate random samples from a target distribution $p(x)$, which is a mixture of two Gaussian distributions with means $\mu_1$ and $\mu_2$, and standard deviations $\sigma_1$ and $\sigma_2$. The proposal distribution $q(x)$ can be chosen as a Gaussian distribution with mean $\mu_q$ and standard deviation $\sigma_q$, where $\mu_q$ is the average of $\mu_1$ and $\mu_2$, and $\sigma_q$ is the maximum of $\sigma_1$ and $\sigma_2$. The constant $M$ can be chosen as the maximum value of the ratio $\frac{p(x)}{q(x)}$ over the support of $p(x)$.

In this case, the rejection sampling algorithm can be implemented as follows:

1. Generate a random sample $x$ from the proposal distribution $q(x)$, which is a Gaussian distribution with mean $\mu_q$ and standard deviation $\sigma_q$.
2. Calculate the acceptance probability $A(x) = \frac{p(x)}{Mq(x)}$, where $p(x)$ is the target distribution and $M$ is the chosen constant.
3. Generate a random number $u$ uniformly distributed between 0 and 1.
4. If $u \le A(x)$, accept the sample $x$; otherwise, reject it.
5. Repeat steps 1-4 until the desired number of samples is obtained.

The accepted samples will be distributed according to the target distribution $p(x)$, which is the mixture of two Gaussian distributions.

## Limitations and Alternatives

Rejection sampling has some limitations, particularly when dealing with high-dimensional problems or when the target distribution is very different from the proposal distribution. In such cases, the acceptance rate can be very low, making the algorithm inefficient. Moreover, finding a suitable proposal distribution and constant $M$ can be challenging.

There are alternative sampling techniques that can be more efficient in certain situations, such as importance sampling, Gibbs sampling, Metropolis-Hastings algorithm, and sequential Monte Carlo methods. These methods are also based on Monte Carlo principles and can be used to generate random samples from complex target distributions.
