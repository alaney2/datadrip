# Dirichlet Multinomial Distribution

The Dirichlet Multinomial Distribution is a probability distribution that arises in the context of Bayesian statistics when dealing with categorical data. It is a compound distribution, meaning that it is formed by combining two other distributions: the Dirichlet distribution and the Multinomial distribution. The Dirichlet distribution is used as a prior distribution for the parameters of the Multinomial distribution, resulting in a posterior distribution that is also a Dirichlet Multinomial distribution. This property makes the Dirichlet Multinomial distribution a conjugate prior for the Multinomial distribution.

## Multinomial Distribution

The Multinomial distribution is a generalization of the Binomial distribution for categorical data with more than two categories. It models the number of occurrences of each category in a fixed number of independent and identically distributed (i.i.d.) trials. The probability mass function (PMF) of the Multinomial distribution is given by:


$$

P(\mathbf{x} | \mathbf{p}, n) = \frac{n!}{x_1! \cdots x_k!} p_1^{x_1} \cdots p_k^{x_k}

$$


where $\mathbf{x} = (x_1, \ldots, x_k)$ is a vector of non-negative integer counts for each category, $\mathbf{p} = (p_1, \ldots, p_k)$ is a probability vector with $\sum_{i=1}^k p_i = 1$, and $n = \sum_{i=1}^k x_i$ is the total number of trials.

## Dirichlet Distribution

The Dirichlet distribution is a multivariate continuous probability distribution that is a generalization of the Beta distribution for more than two categories. It is defined on the $(k-1)$-dimensional simplex, which is the set of all probability vectors $\mathbf{p} = (p_1, \ldots, p_k)$ with $\sum_{i=1}^k p_i = 1$. The probability density function (PDF) of the Dirichlet distribution is given by:


$$

P(\mathbf{p} | \boldsymbol{\alpha}) = \frac{1}{B(\boldsymbol{\alpha})} \prod_{i=1}^k p_i^{\alpha_i - 1}

$$


where $\boldsymbol{\alpha} = (\alpha_1, \ldots, \alpha_k)$ is a vector of positive real-valued parameters called concentration parameters, and $B(\boldsymbol{\alpha})$ is the multivariate Beta function, which is a normalization constant ensuring that the PDF integrates to 1.

## Dirichlet Multinomial Distribution

The Dirichlet Multinomial distribution is formed by combining the Dirichlet distribution as a prior distribution for the parameters of the Multinomial distribution. Given a set of observed counts $\mathbf{x}$, the posterior distribution of the parameters $\mathbf{p}$ is given by:


$$

P(\mathbf{p} | \mathbf{x}, \boldsymbol{\alpha}) \propto P(\mathbf{x} | \mathbf{p}, n) P(\mathbf{p} | \boldsymbol{\alpha})

$$


By substituting the PMF of the Multinomial distribution and the PDF of the Dirichlet distribution, we obtain:


$$

P(\mathbf{p} | \mathbf{x}, \boldsymbol{\alpha}) \propto \frac{n!}{x_1! \cdots x_k!} \prod_{i=1}^k p_i^{x_i + \alpha_i - 1}

$$


This expression is proportional to the PDF of a Dirichlet distribution with parameters $\boldsymbol{\alpha} + \mathbf{x} = (\alpha_1 + x_1, \ldots, \alpha_k + x_k)$. Therefore, the posterior distribution is also a Dirichlet distribution:


$$

P(\mathbf{p} | \mathbf{x}, \boldsymbol{\alpha}) = \text{Dir}(\mathbf{p} | \boldsymbol{\alpha} + \mathbf{x})

$$


The marginal distribution of the observed counts $\mathbf{x}$, also known as the Dirichlet Multinomial distribution, can be obtained by integrating out the parameters $\mathbf{p}$:


$$

P(\mathbf{x} | \boldsymbol{\alpha}, n) = \int P(\mathbf{x} | \mathbf{p}, n) P(\mathbf{p} | \boldsymbol{\alpha}) d\mathbf{p} = \frac{n!}{x_1! \cdots x_k!} \frac{B(\boldsymbol{\alpha} + \mathbf{x})}{B(\boldsymbol{\alpha})}

$$


The mean and variance of the Dirichlet Multinomial distribution can be computed in terms of the concentration parameters $\boldsymbol{\alpha}$ and the total number of trials $n$:

- Mean: $\mathbb{E}[x_i] = n \frac{\alpha_i}{\sum_{j=1}^k \alpha_j}$
- Variance: $\text{Var}(x_i) = n \frac{\alpha_i (\sum_{j=1}^k \alpha_j - \alpha_i)}{(\sum_{j=1}^k \alpha_j)^2 (\sum_{j=1}^k \alpha_j + 1)}$

## Applications

The Dirichlet Multinomial distribution has several applications in machine learning, natural language processing, and computational biology. Some of the most common applications include:

- Topic modeling: In Latent Dirichlet Allocation (LDA), the Dirichlet Multinomial distribution is used to model the distribution of words in documents and the distribution of topics in a corpus.
- Bayesian classification: In Bayesian classifiers, the Dirichlet Multinomial distribution can be used as a prior distribution for the class-conditional probabilities of categorical features.
- Population genetics: In population genetics, the Dirichlet Multinomial distribution can be used to model the distribution of genetic variants in a population.

Inference algorithms for the Dirichlet Multinomial distribution include Gibbs sampling, variational inference, and expectation-maximization.
