# Real NVP and Density Estimation

Real NVP (Non-Volume Preserving) is a type of normalizing flow, which is a class of generative models used for density estimation. Normalizing flows are a family of invertible neural networks that learn to transform a simple probability distribution (e.g., Gaussian) into a more complex distribution that represents the data. Real NVP is particularly useful for tasks such as image generation, where it can learn to generate realistic images by modeling the distribution of pixel intensities.

## Background

Normalizing flows are based on the change of variables formula, which relates the probability density of a random variable to the probability density of a transformed variable. Given a random variable $X$ with density $p_X(x)$ and an invertible transformation $f: X \rightarrow Y$, the density of the transformed variable $Y = f(X)$ is given by:


$$

p_Y(y) = p_X(f^{-1}(y)) \cdot \left| \det \frac{\partial f^{-1}(y)}{\partial y} \right|

$$


The key idea behind normalizing flows is to learn the transformation $f$ such that the transformed variable $Y$ follows a simple distribution (e.g., Gaussian). By doing so, the model can generate new samples from the data distribution by first sampling from the simple distribution and then applying the inverse transformation $f^{-1}$.

## Real NVP

Real NVP is a specific type of normalizing flow that uses a series of coupling layers to perform the transformation. Each coupling layer is an invertible transformation that updates a subset of the input variables while keeping the other variables fixed. The coupling layers are designed such that their Jacobian determinant is easy to compute, which is essential for evaluating the density of the transformed variable.

In Real NVP, the coupling layers are defined as follows:


$$

y_{1:d} = x_{1:d}

$$



$$

y_{d+1:D} = x_{d+1:D} \odot \exp(s(x_{1:d})) + t(x_{1:d})

$$


Here, $x$ and $y$ are the input and output variables, $D$ is the dimensionality of the data, $d$ is the number of variables that are kept fixed, and $s$ and $t$ are neural networks that output scaling and translation factors, respectively. The symbol $\odot$ denotes element-wise multiplication.

The inverse transformation can be computed as:


$$

x_{1:d} = y_{1:d}

$$



$$

x_{d+1:D} = (y_{d+1:D} - t(y_{1:d})) \odot \exp(-s(y_{1:d}))

$$


The Jacobian determinant of the coupling layer is given by:


$$

\det \frac{\partial y}{\partial x} = \exp \left( \sum_{i=d+1}^D s(x_{1:d})_i \right)

$$


This expression is easy to compute, which makes Real NVP well-suited for density estimation tasks.

## Training

Real NVP is trained by maximizing the log-likelihood of the data under the model. Given a dataset $\{x^{(i)}\}_{i=1}^N$, the log-likelihood is given by:


$$

\mathcal{L} = \frac{1}{N} \sum_{i=1}^N \log p_X(x^{(i)})

$$


Using the change of variables formula, the log-likelihood can be expressed in terms of the transformed variable $Y$ and the Jacobian determinant:


$$

\mathcal{L} = \frac{1}{N} \sum_{i=1}^N \left( \log p_Y(y^{(i)}) + \log \left| \det \frac{\partial f^{-1}(y^{(i)})}{\partial y^{(i)}} \right| \right)

$$


The model is trained using gradient-based optimization algorithms such as stochastic gradient descent or Adam.

## Applications

Real NVP has been successfully applied to various tasks, including:

- Image generation: Real NVP can learn to generate realistic images by modeling the distribution of pixel intensities. It has been used to generate images of natural scenes, faces, and handwritten digits, among others.
- Density estimation: Real NVP can be used to estimate the density of high-dimensional data, which is useful for tasks such as anomaly detection and model comparison.
- Variational inference: Real NVP can be used as a flexible variational family in variational inference algorithms, which are used for approximate Bayesian inference in complex probabilistic models.

## Conclusion

Real NVP is a powerful generative model for density estimation that leverages the change of variables formula and coupling layers to learn complex data distributions. Its ability to generate realistic samples and estimate densities makes it a valuable tool in various applications, including image generation, anomaly detection, and variational inference.
