# Planar Flows

Planar flows are a type of normalizing flow, which are used in machine learning to transform simple probability distributions into more complex ones. They are particularly useful in the context of variational inference and generative modeling, where the goal is to learn a complex distribution over high-dimensional data. Planar flows are a simple and computationally efficient type of normalizing flow that can be used to improve the expressiveness of variational distributions in variational autoencoders (VAEs).

## Background

Normalizing flows are a family of invertible transformations that can be used to transform a simple base distribution, such as a multivariate Gaussian, into a more complex distribution. The change of variables formula allows us to compute the density of the transformed distribution given the density of the base distribution and the Jacobian of the transformation. In the context of variational inference, normalizing flows can be used to improve the expressiveness of the variational distribution, which is typically chosen to be a simple distribution for computational reasons. By transforming the simple distribution with a normalizing flow, we can obtain a more flexible distribution that better approximates the true posterior distribution.

Planar flows were introduced by Rezende and Mohamed in their 2015 paper "Variational Inference with Normalizing Flows" as a simple and computationally efficient type of normalizing flow. The transformation used in planar flows is given by:


$$

z' = z + u \cdot \tanh(w^T z + b)

$$


where $z$ is the input, $z'$ is the output, and $u$, $w$, and $b$ are learnable parameters. The Jacobian of this transformation is given by:


$$

\frac{\partial z'}{\partial z} = I + u \cdot \frac{\partial \tanh(w^T z + b)}{\partial z}

$$


where $I$ is the identity matrix. The determinant of the Jacobian can be computed efficiently using the matrix determinant lemma:


$$

\det\left(\frac{\partial z'}{\partial z}\right) = \det\left(I + u \cdot \frac{\partial \tanh(w^T z + b)}{\partial z}\right) = 1 + u^T \cdot \frac{\partial \tanh(w^T z + b)}{\partial z}

$$


The change of variables formula can then be used to compute the density of the transformed distribution:


$$

p(z') = p(z) \cdot \left|\det\left(\frac{\partial z'}{\partial z}\right)\right|

$$


## Applications

Planar flows can be used in a variety of machine learning applications, including:

1. **Variational Inference**: In variational inference, the goal is to approximate a complex posterior distribution with a simpler variational distribution. By using planar flows to transform the simple distribution, we can obtain a more expressive distribution that better approximates the true posterior.

2. **Generative Modeling**: In generative modeling, the goal is to learn a distribution over high-dimensional data. Planar flows can be used to transform a simple base distribution, such as a multivariate Gaussian, into a more complex distribution that better models the data.

3. **Density Estimation**: Planar flows can be used for non-parametric density estimation, where the goal is to estimate the probability density function of a given dataset. By transforming a simple base distribution with a planar flow, we can obtain a more flexible distribution that better fits the data.

## Limitations and Extensions

While planar flows are simple and computationally efficient, they have some limitations. One limitation is that they may not be expressive enough to model very complex distributions. In practice, this can be mitigated by stacking multiple planar flows together to form a more expressive normalizing flow. However, this can increase the computational cost and make it more difficult to train the model.

There are also several extensions and alternative types of normalizing flows that have been proposed to address the limitations of planar flows. Some of these include:

1. **Inverse Autoregressive Flows (IAFs)**: IAFs are a type of normalizing flow that use an autoregressive model to define the transformation. They can be more expressive than planar flows and have been shown to improve the performance of variational autoencoders.

2. **Real NVP, Glow, and Coupling Layers**: These are types of normalizing flows that use a coupling layer to define the transformation. They can be more expressive than planar flows and have been used in a variety of generative modeling tasks.

3. **Masked Autoregressive Flows (MAFs)**: MAFs are a type of normalizing flow that use a masked autoregressive model to define the transformation. They can be more expressive than planar flows and have been used for density estimation and generative modeling tasks.

In summary, planar flows are a simple and computationally efficient type of normalizing flow that can be used to improve the expressiveness of variational distributions in variational autoencoders and other machine learning applications. While they have some limitations, they can be combined with other types of normalizing flows to form more expressive models.
