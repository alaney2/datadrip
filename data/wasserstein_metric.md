# Wasserstein Metric

The Wasserstein metric, also known as the Earth Mover's Distance (EMD), is a measure of the distance between two probability distributions over a given metric space. It is a key concept in the field of optimal transport theory, and has found extensive applications in machine learning, particularly in the training of Generative Adversarial Networks (GANs).

## Definition

Given two probability measures $P$ and $Q$ defined on a metric space $(X, d)$, the $p$-Wasserstein distance between $P$ and $Q$ is defined as:


$$

W_p(P, Q) = \left( \inf_{\gamma \in \Gamma(P, Q)} \int_{X \times X} d(x, y)^p d\gamma(x, y) \right)^{1/p}

$$


where $\Gamma(P, Q)$ is the set of all joint distributions $\gamma(x, y)$ whose marginals are respectively $P$ and $Q$. The infimum is taken over all such joint distributions.

## Properties

The Wasserstein metric has several desirable properties that make it useful in practice:

1. **Metric:** The Wasserstein distance is a true metric, satisfying the properties of non-negativity, identity of indiscernibles, symmetry, and the triangle inequality.

2. **Geometric Interpretation:** The Wasserstein distance can be interpreted as the minimum cost of transporting mass in converting the distribution $P$ into the distribution $Q$.

3. **Continuity:** The Wasserstein distance provides a notion of continuity between probability distributions, even when the supports of the distributions do not overlap.

## Applications in Machine Learning

The Wasserstein metric has been used extensively in machine learning, particularly in the training of Generative Adversarial Networks (GANs). The Wasserstein GAN (WGAN) is a variant of the traditional GAN that uses the Wasserstein distance as the loss function to measure the difference between the generated and real distributions. This leads to more stable training and higher quality generated samples.

Another application is in the field of domain adaptation, where the Wasserstein distance is used to measure the discrepancy between the source and target domains.

## Conclusion

The Wasserstein metric is a powerful tool in the field of machine learning, providing a robust and geometrically intuitive way to compare probability distributions. Its properties make it particularly well-suited to applications in generative modeling and domain adaptation.
