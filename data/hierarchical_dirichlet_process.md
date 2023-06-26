# Hierarchical Dirichlet Process

The Hierarchical Dirichlet Process (HDP) is a Bayesian nonparametric model that extends the Dirichlet Process (DP) to allow for the sharing of mixture components across multiple groups. It is particularly useful for modeling data with an unknown number of clusters or topics, where the number of clusters or topics can be inferred from the data itself. HDP is widely used in natural language processing, bioinformatics, and other fields where data can be naturally divided into groups.

## Background

The Dirichlet Process is a stochastic process used in Bayesian nonparametrics to define a distribution over distributions. It is parameterized by a base distribution $G_0$ and a concentration parameter $\alpha$. The DP can be used to define a mixture model, where the number of mixture components is infinite, and the components are drawn from the base distribution $G_0$. However, the DP does not allow for sharing of mixture components across different groups of data.

The HDP was introduced by Teh et al. in 2006 as an extension of the DP to address this limitation. The HDP defines a hierarchical model, where the base distribution $G_0$ is itself drawn from a Dirichlet Process, and the mixture components for each group are drawn from a shared base distribution. This allows for the sharing of mixture components across groups, while still allowing for an infinite number of components.

## Model

The HDP can be described using the following generative process:

1. Draw a global base distribution $G_0 \sim \text{DP}(\alpha_0, H)$, where $H$ is a base measure and $\alpha_0$ is a concentration parameter.
2. For each group $j = 1, \dots, J$:
    1. Draw a group-specific distribution $G_j \sim \text{DP}(\alpha_j, G_0)$.
    2. For each data point $i = 1, \dots, n_j$ in group $j$:
        1. Draw a mixture component $z_{ji} \sim G_j$.
        2. Draw a data point $x_{ji} \sim F(z_{ji})$, where $F$ is a likelihood function parameterized by the mixture component $z_{ji}$.

The HDP can be represented using a stick-breaking construction, where the global base distribution $G_0$ is represented as an infinite sum of weighted atoms, and the group-specific distributions $G_j$ are represented as a re-weighting of the atoms in $G_0$. This representation allows for efficient inference algorithms, such as Gibbs sampling and variational inference.

## Inference

Inference in the HDP involves estimating the posterior distribution of the latent variables given the observed data. This can be done using Markov Chain Monte Carlo (MCMC) methods, such as Gibbs sampling, or using variational inference.

Gibbs sampling is a popular MCMC method for HDP inference, where the sampler iteratively samples from the conditional distribution of each latent variable given the current values of the other latent variables and the observed data. The Chinese Restaurant Franchise (CRF) representation of the HDP, which is based on the Chinese Restaurant Process (CRP), provides an intuitive way to perform Gibbs sampling in the HDP.

Variational inference is an alternative to MCMC methods for HDP inference, which involves optimizing a lower bound on the marginal likelihood of the observed data. Variational inference for the HDP can be performed using the stick-breaking representation of the HDP, where the variational distribution is chosen to be a truncated stick-breaking process.

## Applications

The HDP has been widely used in various applications, including:

- Topic modeling: The HDP can be used as a nonparametric extension of Latent Dirichlet Allocation (LDA), allowing for the number of topics to be inferred from the data. This is known as the HDP-LDA model.
- Clustering: The HDP can be used for clustering data with an unknown number of clusters, where the number of clusters can be inferred from the data.
- Bioinformatics: The HDP has been used for modeling gene expression data, where the groups correspond to different tissues or experimental conditions, and the mixture components correspond to different gene expression patterns.

## Conclusion

The Hierarchical Dirichlet Process is a powerful Bayesian nonparametric model that allows for the sharing of mixture components across multiple groups of data. It has been widely used in various applications, including topic modeling, clustering, and bioinformatics. Inference in the HDP can be performed using MCMC methods, such as Gibbs sampling, or using variational inference.
