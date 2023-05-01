# Gaussian Processes

Gaussian Processes (GPs) are a class of probabilistic models used in machine learning for regression and classification tasks. A GP is a distribution over functions, where any finite set of function values has a joint Gaussian distribution. Thus, a GP is completely specified by its mean function and covariance function. 

## Definition

Formally, a GP is defined as a collection of random variables $f(x)$, one for each input $x$ in the domain of $f$, such that for any finite subset $X=\{x_1,x_2,...,x_n\}$, the marginal distribution of $f$ over $X$ is a multivariate Gaussian distribution:

$$
f(X) \sim \mathcal{N}(\boldsymbol{\mu}(X),\Sigma(X,X))
$$

where $\boldsymbol{\mu}(X)$ is the mean vector and $\Sigma(X,X)$ is the covariance matrix. 

The covariance function $k(x,x')$ specifies the degree of similarity between two inputs $x$ and $x'$. A common choice for $k$ is the squared exponential kernel:

$$
k(x,x') = \sigma_f^2 \exp \left( -\frac{(x-x')^2}{2l^2} \right)
$$

where $\sigma_f^2$ is the signal variance and $l$ is the length scale. 

## Inference

Inference in GPs involves computing the posterior distribution over functions given observed data, which is also a GP. Given a training set of inputs $\mathbf{X}=\{x_1,x_2,...,x_n\}$ and corresponding outputs $\mathbf{y}=\{y_1,y_2,...,y_n\}$, the posterior distribution over $f$ conditioned on $\mathbf{X}$ and $\mathbf{y}$ is:

$$
p(f|\mathbf{X},\mathbf{y},x) = \mathcal{N}(f|\boldsymbol{\mu}(x),\sigma^2(x))
$$

where $\boldsymbol{\mu}(x)$ is the predictive mean and $\sigma^2(x)$ is the predictive variance. The predictive mean and variance can be computed using the training data and covariance function:

$$
\begin{aligned}
\boldsymbol{\mu}(x) &= \mathbf{k}_*^T (\mathbf{K}+\sigma_n^2 \mathbf{I})^{-1} \mathbf{y} \\
\sigma^2(x) &= k(x,x) - \mathbf{k}_*^T (\mathbf{K}+\sigma_n^2 \mathbf{I})^{-1} \mathbf{k}_*
\end{aligned}
$$

where $\mathbf{k}_*$ is the vector of covariances between the test point $x$ and the training points, $\mathbf{K}$ is the covariance matrix computed from the training data, and $\sigma_n^2$ is the noise variance. 

## Applications

GPs have a wide range of applications in machine learning, such as:

- Regression: GPs are commonly used for regression tasks in which the output values are continuous. 
- Classification: GPs can be used for binary or multi-class classification by using a probit or softmax link function, respectively.
- Optimization: GPs can be used for Bayesian optimization, which is a sequential method for optimizing expensive black-box functions.
- Interpolation: GPs can be used for interpolating missing data in time series or spatial data.
- Active learning: GPs can be used for active learning, in which the model is incrementally trained on the most informative data points.

## Further Readings

- Bayesian Optimization
- Sparse Gaussian Processes
- Deep Gaussian Processes
- Gaussian Process Regression with Missing Data
- Gaussian Process Latent Variable Models
- Active Learning with Gaussian Processes
- Variational Inference and Gaussian Processes
- Gaussian Process Classification
- Multi-Output Gaussian Processes
