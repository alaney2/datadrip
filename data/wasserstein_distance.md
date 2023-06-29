# Wasserstein Distance

The Wasserstein distance, also known as the Earth Mover's Distance (EMD), is a measure of the distance between two probability distributions over a given metric space. It originated from the field of optimal transport in mathematics, where it is used to quantify the cost of transporting mass in converting one distribution into another.

## Definition

Given two probability measures $P$ and $Q$ defined on a metric space $(X, d)$, the $p$-th order Wasserstein distance is defined as:


$$

W_p(P, Q) = \left( \inf_{\gamma \in \Gamma(P, Q)} \int_{X \times X} d(x, y)^p d\gamma(x, y) \right)^{1/p}

$$


where $\Gamma(P, Q)$ denotes the set of all joint distributions $\gamma(x, y)$ whose marginals are respectively $P$ and $Q$. The infimum is taken over all such $\gamma$.

## Properties

The Wasserstein distance has several desirable properties, which make it a useful tool in various fields, including machine learning:

1. **Metric:** The Wasserstein distance is a metric on the space of probability measures, satisfying the properties of non-negativity, identity of indiscernibles, symmetry, and the triangle inequality.

2. **Lower Semi-Continuity:** The Wasserstein distance is lower semi-continuous with respect to weak convergence of probability measures. This property is particularly useful in the study of convergence of random variables and stochastic processes.

3. **Interpolation:** The Wasserstein distance provides a natural way to interpolate between probability measures. This property is exploited in the field of optimal transport to define the notion of a geodesic in the space of probability measures.

## Applications in Machine Learning

In machine learning, the Wasserstein distance has found applications in various areas:

- **Generative Adversarial Networks (GANs):** The Wasserstein GAN (WGAN) is a variant of the traditional GAN that uses the Wasserstein distance as the loss function to train the generator and discriminator. This leads to more stable training and better quality of generated samples.

- **Domain Adaptation:** The Wasserstein distance can be used to measure the discrepancy between the source and target distributions in domain adaptation problems, and to guide the learning of a model that can generalize well to the target domain.

- **Reinforcement Learning:** The Wasserstein distance can be used to define a metric on the space of policies, which can be used to guide the exploration of the policy space in reinforcement learning algorithms.

## Conclusion

The Wasserstein distance is a powerful tool in the field of machine learning, providing a robust and principled way to measure the distance between probability distributions. Its properties and applications make it a fundamental concept in many areas of machine learning, including generative models, domain adaptation, and reinforcement learning.
