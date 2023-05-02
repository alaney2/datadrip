# MUNIT

MUNIT (Multimodal UNsupervised Image-to-image Translation) is a generative model that can learn to translate images from one domain to another without paired training data. This means that MUNIT can translate an image from one style to another, without knowing which specific image corresponds to the same object in both styles.

MUNIT is based on the idea of disentangled representations, where the underlying factors of variation in the data are separated into independent and interpretable components. This allows MUNIT to learn a shared representation space between the two domains, where the content information is shared and the style information is separated.

## How it works

MUNIT consists of two main components: an encoder and a decoder. The encoder maps an input image into a shared latent space, while the decoder maps the latent code into an output image. The key innovation of MUNIT is the use of a separate style code for each image. This means that the encoder produces a content code that is shared across all images, while the style code is specific to each image.

To train the model, MUNIT uses a combination of adversarial losses, reconstruction losses, and cycle-consistency losses. The adversarial losses ensure that the generated images are realistic, while the reconstruction losses ensure that the generated images are faithful to the original images. The cycle-consistency losses ensure that the model can translate images in both directions, and that the translated images can be translated back to the original domain.

## Applications

MUNIT has a wide range of applications, including style transfer, image-to-image translation, domain adaptation, and image synthesis. MUNIT has been used for tasks such as converting images between different styles (e.g. summer to winter), converting sketches to photos, and generating realistic images from text descriptions.

## Further Readings

- UNIT: https://arxiv.org/abs/1703.00848
- CyCADA: https://arxiv.org/abs/1711.03213
