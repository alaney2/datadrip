# Progressive Growing of GANs

**Progressive Growing of GANs** refers to a technique used to improve the training of [Generative Adversarial Networks (GANs)](generative_adversarial_networks) by incrementally increasing the resolution of the generated images. This technique was first introduced in 2017 by researchers from NVIDIA.

The traditional approach to training GANs involves generating low-resolution images and then gradually increasing the resolution until the desired output size is achieved. However, this approach is prone to instability during the training process and can sometimes lead to the collapse of the generator. Progressive Growing of GANs addresses these issues by avoiding sudden changes in the resolution of the images and instead gradually increasing the resolution in a controlled manner.

The key idea behind Progressive Growing of GANs is to start with a low-resolution generator and discriminator and gradually increase the resolution of the generated images. This is done by adding new layers to the generator and discriminator as the resolution of the images increases. The lower layers are shared between the different resolutions, allowing the model to leverage the learned features from the previous resolutions.

Progressive Growing of GANs has been shown to produce high-quality images with a high level of detail and realism. It has been used in a variety of applications, such as generating photorealistic images of human faces, animals, and landscapes.

## Prerequisites

To fully understand Progressive Growing of GANs, it is recommended to have a good understanding of the following topics:

- [Generative Adversarial Networks (GANs)](generative_adversarial_networks)
- [Convolutional Neural Networks (CNNs)](convolutional_neural_networks)
- [Neural Style Transfer](neural_style_transfer)

## Further Readings

For those interested in learning more about Progressive Growing of GANs and related topics, the following resources are recommended:

- [Spectral Normalization for Generative Adversarial Networks](spectral_normalization_for_generative_adversarial_networks)
- [Conditional GANs](conditional_gans)
- [CycleGANs](cycle_gans)
- [StyleGANs](style_gans)
