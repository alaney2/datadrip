# AlexNet

AlexNet is a deep convolutional neural network (CNN) architecture proposed by Alex Krizhevsky, Ilya Sutskever, and Geoffrey Hinton in 2012. It significantly outperformed all the prior competitors and won the ImageNet Large Scale Visual Recognition Challenge (ILSVRC), a prestigious image classification competition. AlexNet is considered a breakthrough in the field of deep learning, as it demonstrated the potential of deep CNNs for image recognition tasks and paved the way for the development of more advanced architectures.

## Architecture

The AlexNet architecture consists of eight layers: five convolutional layers followed by three fully connected layers. The network ends with a softmax layer to produce the final class probabilities. The architecture is as follows:

1. **Convolutional Layer 1**: 96 filters of size 11x11 with a stride of 4 and padding of 0, followed by a ReLU activation function.
2. **Max Pooling Layer 1**: 3x3 filters with a stride of 2 and padding of 0.
3. **Convolutional Layer 2**: 256 filters of size 5x5 with a stride of 1 and padding of 2, followed by a ReLU activation function.
4. **Max Pooling Layer 2**: 3x3 filters with a stride of 2 and padding of 0.
5. **Convolutional Layer 3**: 384 filters of size 3x3 with a stride of 1 and padding of 1, followed by a ReLU activation function.
6. **Convolutional Layer 4**: 384 filters of size 3x3 with a stride of 1 and padding of 1, followed by a ReLU activation function.
7. **Convolutional Layer 5**: 256 filters of size 3x3 with a stride of 1 and padding of 1, followed by a ReLU activation function.
8. **Max Pooling Layer 3**: 3x3 filters with a stride of 2 and padding of 0.
9. **Fully Connected Layer 1**: 4096 neurons with a ReLU activation function.
10. **Fully Connected Layer 2**: 4096 neurons with a ReLU activation function.
11. **Fully Connected Layer 3**: 1000 neurons with a softmax activation function.

## Key Features

### ReLU Activation Function

AlexNet employs the Rectified Linear Unit (ReLU) activation function, which is defined as $f(x) = max(0, x)$. ReLUs are computationally more efficient than other activation functions, such as sigmoid or hyperbolic tangent, and help mitigate the vanishing gradient problem. The use of ReLU activation functions significantly accelerated the training process.

### Local Response Normalization

AlexNet introduces a normalization technique called local response normalization (LRN), which is applied after the first and second convolutional layers. LRN is a form of lateral inhibition that encourages competition among neurons within a local neighborhood. The output of LRN is calculated as:

$$
b_{x,y}^i = a_{x,y}^i \left( k + \frac{\alpha}{n} \sum_{j=\max(0,i-\frac{n}{2})}^{\min(N-1,i+\frac{n}{2})} (a_{x,y}^j)^2 \right)^{-\beta}
$$

Where $a_{x,y}^i$ is the input activation, $b_{x,y}^i$ is the normalized output, $k$, $\alpha$, and $\beta$ are hyperparameters, $n$ is the size of the local neighborhood, and $N$ is the total number of feature maps in the layer. LRN aims to enhance the generalization capability of the network.

### Overlapping Pooling

AlexNet uses overlapping max-pooling layers to reduce the spatial dimensions of the feature maps. Overlapping pooling involves using a stride smaller than the filter size, which results in neighboring pooled regions sharing some of the input values. This technique improves the robustness of the network by reducing overfitting.

### Dropout

To prevent overfitting, AlexNet incorporates dropout, a regularization technique, in the first two fully connected layers. During training, dropout randomly sets a fraction of the neurons to zero, ensuring that the network does not rely on any single neuron too much. The dropout rate used in AlexNet is 0.5.

### Data Augmentation

AlexNet uses data augmentation techniques, such as random cropping, flipping, and RGB channel intensity adjustments, to increase the size of the training dataset and improve the model's generalization capabilities.

### Splitting the Network Across GPUs

At the time of AlexNet's development, the available GPUs had limited memory. To accommodate the large size of the network, the authors split the network across two GPUs, with each GPU responsible for half of the feature maps at each layer. This allowed for faster training and larger batch sizes.

## Impact

AlexNet's success in the ILSVRC-2012 competition marked a turning point in the field of deep learning. It demonstrated that deep CNNs can achieve state-of-the-art performance in image classification tasks, leading to a surge of research in deep learning and the development of more advanced architectures, such as VGG, GoogLeNet, and ResNet. Today, AlexNet is often used as a baseline for comparing new CNN architectures and serves as a starting point for transfer learning tasks.
