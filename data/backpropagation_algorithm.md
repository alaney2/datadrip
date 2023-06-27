# Backpropagation Algorithm

The Backpropagation Algorithm is a supervised learning method used to train artificial neural networks (ANNs). It is a type of optimization algorithm that minimizes the error between the predicted output and the actual output by adjusting the weights and biases of the network. The algorithm is based on the gradient descent method and uses the chain rule of calculus to compute the gradient of the loss function with respect to each weight and bias.

## Overview

The backpropagation algorithm consists of two main steps: the forward pass and the backward pass. In the forward pass, the input is passed through the network to compute the predicted output. This involves computing the weighted sum of the inputs for each neuron, passing the result through an activation function, and repeating this process for each layer in the network.

Once the predicted output is obtained, the error between the predicted output and the actual output is calculated using a loss function. The goal of the backpropagation algorithm is to minimize this error by adjusting the weights and biases of the network.

In the backward pass, the gradient of the loss function with respect to each weight and bias is computed. This is done by applying the chain rule of calculus, which allows us to compute the gradient of a composite function by multiplying the gradients of its constituent functions. The computed gradients are then used to update the weights and biases of the network using the gradient descent method.

## Forward Pass

The forward pass involves computing the output of the network for a given input. This is done by passing the input through each layer of the network and applying the activation function to the weighted sum of the inputs for each neuron. The output of the last layer is the predicted output of the network.

For a given input $x$, the weighted sum of the inputs for a neuron $j$ in layer $l$ is computed as:


$$

z_j^{(l)} = \sum_{i=1}^{n} w_{ji}^{(l)} x_i^{(l-1)} + b_j^{(l)}

$$


where $w_{ji}^{(l)}$ is the weight connecting neuron $i$ in layer $l-1$ to neuron $j$ in layer $l$, $x_i^{(l-1)}$ is the output of neuron $i$ in layer $l-1$, $b_j^{(l)}$ is the bias of neuron $j$ in layer $l$, and $n$ is the number of neurons in layer $l-1$.

The output of neuron $j$ in layer $l$ is then computed by applying the activation function $f$ to the weighted sum:


$$

x_j^{(l)} = f(z_j^{(l)})

$$


## Backward Pass

The backward pass involves computing the gradient of the loss function with respect to each weight and bias in the network. This is done using the chain rule of calculus, which allows us to compute the gradient of a composite function by multiplying the gradients of its constituent functions.

The gradient of the loss function $L$ with respect to the output of neuron $j$ in layer $l$ is computed as:


$$

\frac{\partial L}{\partial x_j^{(l)}} = \sum_{k=1}^{m} \frac{\partial L}{\partial z_k^{(l+1)}} \frac{\partial z_k^{(l+1)}}{\partial x_j^{(l)}}

$$


where $m$ is the number of neurons in layer $l+1$. The gradient of the loss function with respect to the weighted sum of the inputs for neuron $j$ in layer $l$ is computed as:


$$

\frac{\partial L}{\partial z_j^{(l)}} = \frac{\partial L}{\partial x_j^{(l)}} \frac{\partial x_j^{(l)}}{\partial z_j^{(l)}} = \frac{\partial L}{\partial x_j^{(l)}} f'(z_j^{(l)})

$$


where $f'(z_j^{(l)})$ is the derivative of the activation function with respect to the weighted sum.

Finally, the gradient of the loss function with respect to the weight connecting neuron $i$ in layer $l-1$ to neuron $j$ in layer $l$ is computed as:


$$

\frac{\partial L}{\partial w_{ji}^{(l)}} = \frac{\partial L}{\partial z_j^{(l)}} \frac{\partial z_j^{(l)}}{\partial w_{ji}^{(l)}} = \frac{\partial L}{\partial z_j^{(l)}} x_i^{(l-1)}

$$


and the gradient of the loss function with respect to the bias of neuron $j$ in layer $l$ is computed as:


$$

\frac{\partial L}{\partial b_j^{(l)}} = \frac{\partial L}{\partial z_j^{(l)}} \frac{\partial z_j^{(l)}}{\partial b_j^{(l)}} = \frac{\partial L}{\partial z_j^{(l)}}

$$


## Weight and Bias Updates

Once the gradients of the loss function with respect to the weights and biases have been computed, they are used to update the weights and biases using the gradient descent method. The weights and biases are updated as follows:


$$

w_{ji}^{(l)} = w_{ji}^{(l)} - \alpha \frac{\partial L}{\partial w_{ji}^{(l)}}

$$



$$

b_j^{(l)} = b_j^{(l)} - \alpha \frac{\partial L}{\partial b_j^{(l)}}

$$


where $\alpha$ is the learning rate, a hyperparameter that controls the step size of the gradient descent updates.

The backpropagation algorithm is typically applied iteratively, with the weights and biases being updated after each forward and backward pass through the network. The algorithm is terminated when the error between the predicted output and the actual output is minimized, or when a predefined number of iterations have been performed.

## Conclusion

The backpropagation algorithm is a fundamental technique for training artificial neural networks. It is based on the gradient descent method and uses the chain rule of calculus to compute the gradient of the loss function with respect to the weights and biases of the network. The algorithm consists of two main steps: the forward pass, in which the input is passed through the network to compute the predicted output, and the backward pass, in which the gradient of the loss function is computed and used to update the weights and biases. The backpropagation algorithm has been widely used in various applications of machine learning and deep learning, including image recognition, natural language processing, and reinforcement learning.
