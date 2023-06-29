# Feedforward Neural Network

A **Feedforward Neural Network** (FNN) is a type of artificial neural network where the connections between the nodes do not form a cycle. This is in contrast to recurrent neural networks, which have cycles. The term 'feedforward' comes from the fact that information only travels forward in the network, from the input nodes, through the hidden nodes (if any), and to the output nodes.

## Architecture

The architecture of a feedforward neural network is made up of layers of nodes or neurons. The first layer is the input layer, the last layer is the output layer, and any layers in between are referred to as hidden layers. Each node in a layer is connected to all nodes in the next layer, with each connection having an associated weight. 

The nodes in the input layer represent the features of the input data. The nodes in the hidden layers perform computations on the inputs, and the nodes in the output layer produce the final output of the network.

## Working Principle

The working principle of a feedforward neural network involves two main steps: the forward pass and the backward pass (backpropagation).

In the forward pass, the network takes the input data, performs computations on it using the weights and activation functions, and produces an output. The computations in each node involve taking a weighted sum of the inputs and applying an activation function to it.

In the backward pass, the network uses the backpropagation algorithm to update the weights. This involves computing the gradient of the loss function with respect to the weights, and then adjusting the weights in the direction that reduces the loss.

## Activation Functions

Activation functions play a crucial role in feedforward neural networks. They introduce non-linearity into the network, allowing it to model complex patterns in the data. Commonly used activation functions include the sigmoid function, the hyperbolic tangent function, and the rectified linear unit (ReLU) function.

## Training

Training a feedforward neural network involves iteratively performing the forward pass and the backward pass on the training data, until the weights converge to values that minimize the loss. The loss function measures the difference between the network's output and the actual output for the training data. The gradient descent algorithm is commonly used to update the weights.

## Applications

Feedforward neural networks have a wide range of applications in machine learning and artificial intelligence. They are used in tasks such as image and speech recognition, natural language processing, and financial forecasting, among others.

## Limitations

Despite their versatility, feedforward neural networks have some limitations. They are not suitable for tasks that involve sequential or time-series data, as they do not have a memory of previous inputs. They can also suffer from the vanishing gradient problem during training, which can slow down learning or cause it to get stuck at suboptimal solutions. Furthermore, they require a large amount of data and computational resources to train, especially for complex tasks.
