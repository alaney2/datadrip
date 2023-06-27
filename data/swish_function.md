# Swish Function

The Swish function is an activation function used in artificial neural networks (ANNs) to introduce non-linearity into the model. Activation functions play a crucial role in ANNs, as they determine the output of a neuron based on its input. The Swish function was introduced by researchers at Google Brain in 2017 as an alternative to the widely used Rectified Linear Unit (ReLU) function.

## Definition

The Swish function is defined as:


$$

f(x) = x \cdot \sigma(\beta x)

$$


where $x$ is the input to the neuron, $\sigma$ is the sigmoid function, and $\beta$ is a trainable parameter. The sigmoid function is defined as:


$$

\sigma(x) = \frac{1}{1 + e^{-x}}

$$


When $\beta = 1$, the Swish function simplifies to:


$$

f(x) = x \cdot \sigma(x)

$$


## Properties

The Swish function has several properties that make it suitable for use in ANNs:

1. **Smoothness**: The Swish function is smooth and differentiable, which makes it easier for optimization algorithms to find the optimal weights during training.

2. **Non-linearity**: The Swish function introduces non-linearity into the model, allowing the ANN to learn complex patterns and relationships in the data.

3. **Unboundedness**: Unlike some other activation functions, such as the sigmoid and hyperbolic tangent functions, the Swish function is unbounded. This means that its output can take on any value, which can help prevent the vanishing gradient problem during training.

4. **Trainable parameter**: The $\beta$ parameter in the Swish function can be learned during training, allowing the model to adapt the activation function to the specific problem at hand.

## Comparison with ReLU

The Rectified Linear Unit (ReLU) function is one of the most popular activation functions in ANNs due to its simplicity and effectiveness. The ReLU function is defined as:


$$

f(x) = \max(0, x)

$$


Compared to the ReLU function, the Swish function has some advantages:

1. **Smoothness**: The Swish function is smooth and differentiable, while the ReLU function is not differentiable at $x = 0$. This can make optimization algorithms more effective when using the Swish function.

2. **Trainable parameter**: The Swish function has a trainable parameter, $\beta$, which allows the model to adapt the activation function to the specific problem. The ReLU function does not have any trainable parameters.

However, the Swish function also has some disadvantages compared to the ReLU function:

1. **Computational complexity**: The Swish function is more computationally expensive than the ReLU function due to the presence of the sigmoid function and the multiplication operation.

2. **Less interpretable**: The ReLU function has a simple interpretation as a "switch" that turns on or off based on the input value. The Swish function is more complex and may be harder to interpret.

## Applications

The Swish function has been used in various deep learning architectures, such as convolutional neural networks (CNNs) and recurrent neural networks (RNNs). It has been shown to improve the performance of some models compared to using the ReLU function, especially in deeper networks.

In addition to its use in ANNs, the Swish function has also been applied to other machine learning algorithms, such as support vector machines (SVMs) and decision trees, as a non-linear transformation of the input features.

## Conclusion

The Swish function is an activation function used in artificial neural networks that offers some advantages over the popular ReLU function, such as smoothness, non-linearity, and a trainable parameter. However, it also has some disadvantages, such as increased computational complexity and reduced interpretability. The choice of activation function depends on the specific problem and the desired trade-offs between performance, complexity, and interpretability.
