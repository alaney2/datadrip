# Normalizing Flows

Normalizing Flows is a type of generative model that learns a bijective mapping from a simple probability distribution to a complex one, enabling the generation of high-quality samples from the latter distribution. This is achieved by transforming the simple distribution via a series of invertible transformations, also known as flows, in such a way that the resulting distribution is more complex and better approximates the true distribution. 

The basic idea behind Normalizing Flows is to transform a simple distribution, such as a Gaussian distribution, into a more complex one, such as a multimodal distribution, by applying a sequence of invertible transformations. The resulting distribution can then be used to generate new samples, which are obtained by applying the inverse transformations to samples drawn from the complex distribution. 

The transformations used in Normalizing Flows must be invertible and have a tractable Jacobian determinant, which is required to compute the likelihood of the resulting distribution. Some popular transformations used in Normalizing Flows include affine transformations, which scale and shift the input, and autoregressive transformations, which model the conditional distribution of each variable given the previous ones. 

One of the key advantages of Normalizing Flows over other generative models, such as Generative Adversarial Networks (GANs) and Variational Autoencoders (VAEs), is that they can be easily used for density estimation and likelihood-based inference. This is because the likelihood of the resulting distribution can be computed exactly using the change of variables formula and the Jacobian matrix of the transformations. 

Normalizing Flows have been successfully applied to a wide range of applications, including image generation, text generation, and Bayesian inference. Some popular variants of Normalizing Flows include flow-based models, which use a sequence of coupling layers to transform the input, and inverse autoregressive flow, which uses an autoregressive transformation in the inverse direction. 

Overall, Normalizing Flows are a powerful and flexible approach to generative modeling that can be used for a wide range of tasks, including density estimation, likelihood-based inference, and sample generation. They offer several advantages over other generative models, including exact likelihood computation and easy integration with Bayesian inference.
