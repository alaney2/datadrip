# Disco GANs

Disco GANs, short for "Discovering Cross-domain Relations with Generative Adversarial Networks," is a type of Generative Adversarial Network (GAN) that is used for image-to-image translation. It was introduced by Taeksoo Kim et al. in 2018.

## Overview

Disco GANs are capable of translating images from one domain to another domain, without requiring paired training data. This is done by learning the cross-domain mapping, and then using it to generate new images. Disco GANs make use of a GAN architecture, with an additional cross-domain consistency loss, to ensure that the generated images are both realistic and correspond well to their input.

## Architecture

The architecture of a Disco GAN is similar to that of a standard GAN. It consists of two networks: a generator network and a discriminator network. However, there are some key differences.

The generator network takes an input image from one domain and generates a corresponding image in another domain. This is done using a series of convolutional and deconvolutional layers, similar to a U-Net architecture. The generator is trained to generate images that are both realistic and correspond well to their input.

The discriminator network takes an image from either domain as input and determines whether it is real or fake. In contrast to a standard GAN, the discriminator is trained to classify images as real or fake for both domains. This is done to ensure that the generated images are realistic and correspond well to their input.

## Loss Function

Disco GANs make use of a loss function that combines several different components. The primary loss component is the adversarial loss, which encourages the generator to generate images that are realistic and correspond well to their input. In addition to the adversarial loss, Disco GANs make use of a cross-domain consistency loss, which encourages the generated images to be consistent with their input.

## Applications

Disco GANs have a wide range of applications, including style transfer, image colorization, and even video-to-video translation. They have been used successfully for tasks such as converting day-time images to night-time images, and translating images of horses to images of zebras. 

## Further Readings

- [Wasserstein GAN](wasserstein_gan): A type of GAN that uses a different loss function to improve training stability.
- [Cycle GAN](cycle_gan): A type of GAN that is used for unpaired image-to-image translation.
