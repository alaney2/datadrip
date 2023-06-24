# Radial Flows

Radial flows are a type of normalizing flow, which are used to transform simple probability distributions into more complex ones. They are particularly useful in the context of variational inference and generative modeling, where the goal is to learn a rich and expressive distribution over the data. Radial flows are a simple and computationally efficient type of normalizing flow, making them an attractive choice for certain applications.

## Background

Normalizing flows are a class of invertible transformations that can be used to transform a simple base distribution, such as a multivariate Gaussian, into a more complex distribution that better captures the structure of the data. The key idea behind normalizing flows is to apply a series of invertible transformations to the base distribution, with each transformation being designed to capture a specific aspect of the data distribution. By composing multiple transformations together, a normalizing flow can learn a rich and expressive distribution over the data.

Radial flows are a specific type of normalizing flow that are designed to be simple and computationally efficient. They are based on the idea of applying a radial transformation to the input, which has the effect of stretching or compressing the input along radial lines emanating from a central point. This can be useful for capturing certain types of structure in the data, such as radial symmetry or rotation invariance.

## Definition

A radial flow is defined by the following transformation:


$$

z = f(x) = x + \beta h(\alpha, r)(x - x_0)

$$


where $x$ is the input, $z$ is the output, $x_0$ is a learnable parameter representing the center of the transformation, $\alpha$ is a learnable parameter controlling the width of the transformation, $\beta$ is a learnable parameter controlling the strength of the transformation, $r = ||x - x_0||$ is the radial distance from the center, and $h(\alpha, r)$ is a scalar function that determines the shape of the transformation.

The function $h(\alpha, r)$ is typically chosen to be smooth and differentiable, with the property that $h(\alpha, r) \rightarrow 0$ as $r \rightarrow \infty$. This ensures that the transformation has a local effect, with the input being mostly unchanged far away from the center. A common choice for $h(\alpha, r)$ is the following function:


$$

h(\alpha, r) = \frac{1}{\alpha + r}

$$


This choice of $h(\alpha, r)$ results in a transformation that is smooth and differentiable, with a simple and computationally efficient form.

## Inverse and Jacobian

In order to use a radial flow as part of a normalizing flow, it is necessary to compute both the inverse of the transformation and the Jacobian determinant of the transformation. The inverse of a radial flow is given by:


$$

x = f^{-1}(z) = z - \beta h(\alpha, r)(z - x_0)

$$


The Jacobian determinant of a radial flow can be computed using the change of variables formula, which relates the density of the input and output distributions:


$$

\log p(z) = \log p(x) - \log \left|\det \frac{\partial f(x)}{\partial x}\right|

$$


For a radial flow, the Jacobian determinant can be computed as:


$$

\det \frac{\partial f(x)}{\partial x} = 1 + \beta \left(1 - h(\alpha, r)\right) \frac{\partial h(\alpha, r)}{\partial r}

$$


This expression can be computed efficiently, making radial flows an attractive choice for normalizing flows that require fast computation of the Jacobian determinant.

## Applications

Radial flows are particularly useful in the context of variational inference and generative modeling, where the goal is to learn a rich and expressive distribution over the data. They can be used as part of a normalizing flow to transform a simple base distribution, such as a multivariate Gaussian, into a more complex distribution that better captures the structure of the data.

Some specific applications of radial flows include:

- Variational autoencoders (VAEs): Radial flows can be used as part of the encoder or decoder in a VAE, allowing the model to learn a more expressive distribution over the latent space.
- Generative adversarial networks (GANs): Radial flows can be used as part of the generator in a GAN, allowing the model to generate more diverse and realistic samples.
- Bayesian neural networks: Radial flows can be used to model the posterior distribution over the weights of a neural network, allowing for more accurate uncertainty estimation and better generalization.

## Limitations and Extensions

While radial flows are simple and computationally efficient, they have some limitations. In particular, they are limited in their ability to capture complex, high-dimensional distributions, as they only apply a radial transformation to the input. This can make them less expressive than other types of normalizing flows, such as planar flows or more advanced flows like Real NVP, Glow, or MAF.

Despite these limitations, radial flows can still be useful in certain applications, and they can be combined with other types of normalizing flows to create more expressive models. Additionally, radial flows can be extended and modified in various ways, such as by using different functions for $h(\alpha, r)$ or by incorporating additional learnable parameters.
