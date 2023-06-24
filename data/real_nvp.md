# Real NVP

Real NVP (Real-valued Non-Volume Preserving) is a generative model based on normalizing flows, a class of deep learning models designed to learn complex probability distributions. Real NVP is particularly useful for tasks such as density estimation, image synthesis, and unsupervised representation learning. It was introduced by Laurent Dinh, Jascha Sohl-Dickstein, and Samy Bengio in their 2016 paper, "Density estimation using Real NVP."

## Background

Normalizing flows are a class of generative models that learn a bijection (a one-to-one and onto mapping) between a simple base distribution (e.g., Gaussian) and a complex target distribution (e.g., the distribution of natural images). The key idea behind normalizing flows is to transform the base distribution into the target distribution by applying a sequence of invertible transformations. The change of variables formula allows us to compute the likelihood of the target distribution given the likelihood of the base distribution and the Jacobian determinant of the transformations.

Real NVP extends the idea of normalizing flows by introducing a specific type of invertible transformation called an affine coupling layer. This layer is designed to be both expressive and computationally efficient, making it suitable for high-dimensional data such as images.

## Affine Coupling Layer

The affine coupling layer is the core building block of Real NVP. It is an invertible transformation that operates on a subset of the input dimensions, leaving the other dimensions unchanged. Specifically, given an input vector $x \in \mathbb{R}^D$, the affine coupling layer splits $x$ into two parts, $x_a$ and $x_b$, and applies an affine transformation to $x_b$ conditioned on $x_a$. The transformation is defined as follows:


$$

y_b = x_b \odot \exp(s(x_a)) + t(x_a),

$$


where $s(x_a)$ and $t(x_a)$ are neural networks that output scaling and translation factors, respectively, and $\odot$ denotes element-wise multiplication. The inverse transformation is given by:


$$

x_b = (y_b - t(x_a)) \odot \exp(-s(x_a)).

$$


The Jacobian determinant of the affine coupling layer is easy to compute, as it is simply the product of the scaling factors:


$$

\log \left| \det \frac{\partial y}{\partial x} \right| = \sum_i s_i(x_a).

$$


By stacking multiple affine coupling layers and alternating the partitioning of the input dimensions, Real NVP can learn complex, high-dimensional distributions.

## Training and Sampling

Real NVP is trained by maximizing the log-likelihood of the target distribution given the base distribution and the affine coupling layers. This is equivalent to minimizing the negative log-likelihood:


$$

\mathcal{L}(\theta) = -\frac{1}{N} \sum_{i=1}^N \log p_\theta(x^{(i)}),

$$


where $p_\theta(x)$ is the likelihood of the target distribution, $x^{(i)}$ are the training samples, and $\theta$ are the parameters of the affine coupling layers.

To generate samples from the learned distribution, we first sample from the base distribution and then apply the inverse transformations of the affine coupling layers in reverse order:


$$

x = F^{-1}(z; \theta),

$$


where $z \sim p(z)$ is a sample from the base distribution and $F^{-1}$ is the inverse of the composite transformation.

## Advantages and Limitations

Real NVP has several advantages over other generative models, such as Variational Autoencoders (VAEs) and Generative Adversarial Networks (GANs). First, it provides an exact likelihood estimation, which is useful for tasks such as density estimation and model selection. Second, it allows for efficient sampling and inference, as the forward and inverse transformations are both computationally efficient. Finally, it is more stable to train than GANs, as it does not suffer from mode collapse or the vanishing gradient problem.

However, Real NVP also has some limitations. The main limitation is that the expressiveness of the model depends on the choice of the partitioning scheme and the architecture of the affine coupling layers. In practice, finding a good partitioning scheme and architecture can be challenging, especially for high-dimensional data. Additionally, Real NVP may require a large number of affine coupling layers to model complex distributions, which can lead to increased memory and computational requirements.

## Extensions and Related Work

Several extensions and improvements have been proposed for Real NVP and normalizing flows in general. Some notable examples include:

- Glow: An extension of Real NVP that introduces invertible 1x1 convolutions and improved partitioning schemes for better expressiveness and computational efficiency.
- Masked Autoregressive Flow (MAF): A normalizing flow based on autoregressive models that can be more expressive than Real NVP but requires sequential computation.
- Inverse Autoregressive Flow (IAF): A variant of MAF that allows for efficient parallel computation at the cost of increased memory requirements.
- Neural Autoregressive Flow (NAF): A normalizing flow that combines the expressiveness of autoregressive models with the computational efficiency of Real NVP.
- Planar Flows and Radial Flows: Earlier normalizing flow models that use simpler transformations but may be less expressive than Real NVP.

In summary, Real NVP is a powerful generative model based on normalizing flows that can learn complex probability distributions and perform tasks such as density estimation, image synthesis, and unsupervised representation learning. Its main building block, the affine coupling layer, is both expressive and computationally efficient, making it suitable for high-dimensional data. However, the choice of partitioning scheme and architecture can be challenging, and the model may require a large number of layers to capture complex distributions.
