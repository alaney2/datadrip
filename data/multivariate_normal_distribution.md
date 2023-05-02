# Multivariate Normal Distribution

The **multivariate normal distribution** is a probability distribution that describes the probability distribution of a random vector in a multi-dimensional space. It is a generalization of the univariate normal distribution to higher dimensions. The multivariate normal distribution is also known as the multivariate Gaussian distribution because it is a multivariate version of the Gaussian distribution.

## Definition

A $p$-dimensional random vector $\mathbf{X} = (X_1, X_2, \ldots, X_p)^T$ follows a multivariate normal distribution, denoted by $\mathbf{X} \sim N_p(\boldsymbol{\mu}, \boldsymbol{\Sigma})$, if its probability density function (PDF) is given by:

$$f(\mathbf{x}; \boldsymbol{\mu}, \boldsymbol{\Sigma}) = \frac{1}{(2\pi)^{\frac{p}{2}}|\boldsymbol{\Sigma}|^{\frac{1}{2}}} \exp\left(-\frac{1}{2}(\mathbf{x}-\boldsymbol{\mu})^T\boldsymbol{\Sigma}^{-1}(\mathbf{x}-\boldsymbol{\mu})\right)$$

where $\boldsymbol{\mu}$ is a $p$-dimensional vector of mean values, and $\boldsymbol{\Sigma}$ is a $p \times p$ positive definite symmetric matrix of covariance values.

## Properties

The multivariate normal distribution has several important properties:

- The mean vector $\boldsymbol{\mu}$ determines the center of the distribution and the covariance matrix $\boldsymbol{\Sigma}$ determines the shape of the distribution.

- The marginal distribution of any subset of components of a multivariate normal distribution is also normal.

- Any linear combination of the components of a multivariate normal distribution is also normal.

- The maximum likelihood estimator of the mean vector is the sample mean vector, and the maximum likelihood estimator of the covariance matrix is the sample covariance matrix.

- If $\mathbf{X} \sim N_p(\boldsymbol{\mu}, \boldsymbol{\Sigma})$, then the distribution of $\mathbf{Y} = \mathbf{AX} + \mathbf{b}$, where $\mathbf{A}$ is a $q \times p$ matrix and $\mathbf{b}$ is a $q$-dimensional vector, is also multivariate normal, with mean $\mathbf{A}\boldsymbol{\mu} + \mathbf{b}$ and covariance matrix $\mathbf{A}\boldsymbol{\Sigma}\mathbf{A}^T$.

## Applications

The multivariate normal distribution has many applications in statistics, machine learning, and other fields. Some examples include:

- In finance, the multivariate normal distribution is used to model the joint distribution of multiple stock prices or other financial variables.

- In image processing, the multivariate normal distribution is used to model the joint distribution of pixel values in an image.

- In machine learning, the multivariate normal distribution is often used as a prior distribution for Bayesian models or as a generative model for unsupervised learning.

- In data analysis, the multivariate normal distribution is used in many multivariate techniques, such as principal component analysis, canonical correlation analysis, and discriminant analysis.

## Further Readings

- **Multivariate Analysis**: This book by K.V. Mardia, J.T. Kent, and J.M. Bibby provides a comprehensive introduction to multivariate analysis, including the multivariate normal distribution.

- **Covariance Matrix**: This Wikipedia page provides an overview of the covariance matrix, which is a key component of the multivariate normal distribution.

- **Principal Component Analysis**: This Wikipedia page provides an overview of principal component analysis, which is a technique for reducing the dimensionality of multivariate data.

- **Canonical Correlation Analysis**: This Wikipedia page provides an overview of canonical correlation analysis, which is a technique for finding linear combinations of variables that are maximally correlated across two datasets.

- **Multivariate Regression Analysis**: This article by David J. Olive provides an introduction to multivariate regression analysis, which is a technique for modeling the relationship between multiple predictor variables and a response variable.

- **Factor Analysis**: This Wikipedia page provides an overview of factor analysis, which is a technique for finding latent variables that underlie a set of observed variables.

- **Discriminant Analysis**: This Wikipedia page provides an overview of discriminant analysis, which is a technique for finding linear combinations of variables that can be used to classify observations into different groups.

- **Bayesian Networks**: This book by Nir Friedman and Daphne Koller provides a comprehensive introduction to Bayesian networks, which are graphical models that can be used to represent and reason about uncertain knowledge.
