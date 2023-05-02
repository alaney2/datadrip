# Dirichlet Distribution

The Dirichlet distribution is a family of continuous probability distributions that are defined over the probability simplex, which is a high-dimensional space that represents all the possible probability distributions of a categorical variable. Dirichlet distributions are commonly used in Bayesian inference and machine learning to model the prior probability distribution over the parameters of a multinomial distribution.

## Definition

A Dirichlet distribution is parameterized by a vector $\boldsymbol{\alpha} = (\alpha_1, \alpha_2, \ldots, \alpha_K)$ of $K$ positive shape parameters. The probability density function of a $K$-dimensional Dirichlet distribution is given by:

$$
\text{Dir}(\mathbf{x} | \boldsymbol{\alpha}) = \frac{1}{B(\boldsymbol{\alpha})} \prod_{i=1}^{K} x_i^{\alpha_i - 1} \quad \text{for} \quad 0 \le x_i \le 1, \sum_{i=1}^{K} x_i = 1,
$$

where $\mathbf{x} = (x_1, x_2, \ldots, x_K)$ is a $K$-dimensional probability vector (i.e., $0 \le x_i \le 1$ and $\sum_{i=1}^{K} x_i = 1$), and $B(\boldsymbol{\alpha})$ is the multivariate Beta function given by:

$$
B(\boldsymbol{\alpha}) = \frac{\prod_{i=1}^{K} \Gamma(\alpha_i)}{\Gamma(\sum_{i=1}^{K} \alpha_i)},
$$

where $\Gamma(\cdot)$ is the gamma function.

## Properties

### Mean and Variance

The expected value (mean) and covariance matrix of a Dirichlet distribution are given by:

$$
\mathbb{E}[\mathbf{x}] = \frac{1}{\sum_{i=1}^{K} \alpha_i} (\alpha_1, \alpha_2, \ldots, \alpha_K),
$$

and

$$
\text{Cov}[\mathbf{x}] = \frac{1}{(\sum_{i=1}^{K} \alpha_i)^2 (\sum_{i=1}^{K} \alpha_i + 1)} \begin{bmatrix} \alpha_1 (\sum_{i=1}^{K} \alpha_i - \alpha_1) & -\alpha_1 \alpha_2 & \cdots & -\alpha_1 \alpha_K \\ -\alpha_2 \alpha_1 & \alpha_2 (\sum_{i=1}^{K} \alpha_i - \alpha_2) & \cdots & -\alpha_2 \alpha_K \\ \vdots & \vdots & \ddots & \vdots \\ -\alpha_K \alpha_1 & -\alpha_K \alpha_2 & \cdots & \alpha_K (\sum_{i=1}^{K} \alpha_i - \alpha_K) \end{bmatrix},
$$

respectively.

### Conjugacy

The Dirichlet distribution is a conjugate prior of the multinomial distribution. This means that if the prior distribution over the parameters of a multinomial distribution is a Dirichlet distribution, then the posterior distribution is also a Dirichlet distribution. This property makes the Dirichlet distribution a popular choice for Bayesian inference with multinomial data.

### Marginal and Conditional Distributions

The marginal distribution over any subset of the components of a Dirichlet-distributed random vector is also a Dirichlet distribution. Moreover, the conditional distribution of any component of a Dirichlet-distributed random vector given the values of the other components is also a Dirichlet distribution.

## Applications

The Dirichlet distribution has many applications in machine learning and Bayesian inference, including:

- **Topic modeling**: Latent Dirichlet Allocation (LDA) is a generative probabilistic model that uses a Dirichlet prior over the topic probabilities of each document and a multinomial likelihood to model the word frequencies in each document.
- **Clustering**: The Dirichlet Process is a nonparametric Bayesian clustering method that uses a Dirichlet process prior to model the distribution over the number of clusters and the distribution of points within each cluster.
- **Natural language processing**: The Dirichlet-multinomial distribution is a generalization of the multinomial distribution that uses a Dirichlet prior over the parameters of the multinomial distribution to model the frequency distribution of words in a document.

## Further Readings

- Dirichlet Process
- Dirichlet-multinomial Distribution
- Latent Dirichlet Allocation
- Hierarchical Dirichlet Process
- Bayesian Nonparametrics
- Bayesian Model Selection
