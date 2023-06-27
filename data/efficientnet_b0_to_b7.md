# EfficientNet B0 to B7

EfficientNet is a family of convolutional neural networks (CNNs) designed for efficient image classification. It was introduced by Mingxing Tan and Quoc V. Le in their 2019 paper, "EfficientNet: Rethinking Model Scaling for Convolutional Neural Networks." The EfficientNet models, ranging from B0 to B7, are designed to achieve state-of-the-art accuracy while being computationally efficient.

## Background

Before EfficientNet, researchers focused on scaling up CNNs by increasing their depth, width, or input resolution. However, these methods often led to a trade-off between accuracy and computational efficiency. EfficientNet addresses this issue by introducing a new scaling method called compound scaling, which scales all three dimensions (depth, width, and resolution) together.

## Compound Scaling

Compound scaling is based on the observation that if the input image resolution is increased, the network needs more layers (depth) to capture the additional information and more channels (width) to capture the fine-grained patterns. The authors of EfficientNet propose a compound scaling method that uniformly scales all three dimensions using a constant ratio. Given a baseline network and a scaling factor $\phi$, the depth, width, and resolution are scaled as follows:

- Depth: $d = \alpha^\phi$
- Width: $w = \beta^\phi$
- Resolution: $r = \gamma^\phi$

where $\alpha$, $\beta$, and $\gamma$ are constants that determine how much each dimension should be scaled. The authors found that the best values for these constants are $\alpha = 1.2$, $\beta = 1.1$, and $\gamma = 1.15$, which were obtained by a grid search on the baseline network.

## Baseline Network: EfficientNet-B0

The baseline network, EfficientNet-B0, is a relatively small CNN with 5.3 million parameters and a top-1 accuracy of 76.3% on the ImageNet dataset. It is built using mobile inverted bottleneck convolution (MBConv) layers, which were introduced in MobileNetV2. MBConv layers use depthwise separable convolutions and linear bottlenecks to reduce the number of parameters and computational cost.

The architecture of EfficientNet-B0 is as follows:

1. Stem: A 3x3 convolution with 32 filters, stride 2
2. MBConv1: 1 MBConv layer with 1x1 expansion, 3x3 depthwise convolution, and 1x1 projection, 16 filters
3. MBConv6: 2 MBConv layers with 6x6 expansion, 3x3 depthwise convolution, and 1x1 projection, 24 filters, stride 2
4. MBConv6: 2 MBConv layers with 6x6 expansion, 5x5 depthwise convolution, and 1x1 projection, 40 filters, stride 2
5. MBConv6: 3 MBConv layers with 6x6 expansion, 3x3 depthwise convolution, and 1x1 projection, 80 filters, stride 2
6. MBConv6: 3 MBConv layers with 6x6 expansion, 5x5 depthwise convolution, and 1x1 projection, 112 filters
7. MBConv6: 4 MBConv layers with 6x6 expansion, 5x5 depthwise convolution, and 1x1 projection, 192 filters, stride 2
8. MBConv6: 1 MBConv layer with 6x6 expansion, 3x3 depthwise convolution, and 1x1 projection, 320 filters
9. Head: A 1x1 convolution with 1280 filters, global average pooling, and a fully connected layer with 1000 output units (for ImageNet classification)

## EfficientNet-B1 to B7

EfficientNet-B1 to B7 are obtained by scaling the baseline network (B0) using the compound scaling method. The scaling factors for each model are as follows:

- B1: $\phi = 1$, 7.8 million parameters, 78.8% top-1 accuracy
- B2: $\phi = 2$, 9.2 million parameters, 79.8% top-1 accuracy
- B3: $\phi = 3$, 12 million parameters, 81.1% top-1 accuracy
- B4: $\phi = 4$, 19 million parameters, 82.6% top-1 accuracy
- B5: $\phi = 5$, 30 million parameters, 83.3% top-1 accuracy
- B6: $\phi = 6$, 43 million parameters, 84.0% top-1 accuracy
- B7: $\phi = 7$, 66 million parameters, 84.4% top-1 accuracy

## Applications and Transfer Learning

EfficientNet models have been widely adopted for various computer vision tasks, such as object detection, semantic segmentation, and fine-grained classification. They are often used as feature extractors in transfer learning, where the pre-trained weights on ImageNet are used to initialize the network, and the model is fine-tuned on a specific task.

## Conclusion

EfficientNet is a family of CNNs that achieve state-of-the-art accuracy while being computationally efficient. The compound scaling method introduced in EfficientNet allows for uniform scaling of depth, width, and resolution, leading to better trade-offs between accuracy and efficiency. The EfficientNet models, ranging from B0 to B7, have been widely adopted for various computer vision tasks and transfer learning.
