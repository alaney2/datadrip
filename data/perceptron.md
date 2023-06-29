# Perceptron

The perceptron is a type of artificial neuron or the simplest form of a neural network. It was developed by Frank Rosenblatt in 1957. The perceptron is a binary classifier that makes its predictions based on a linear predictor function combining a set of weights with the feature vector.

## Concept

The perceptron algorithm learns the weights for the input signals in order to draw a linear decision boundary that allows us to discriminate between the two linearly separable classes +1 (positive class) and -1 (negative class). 

The decision function that the perceptron algorithm uses can be described as follows:


$$

\phi(z) = 
\begin{cases} 
1 & \text{if } z \geq \theta \\
-1 & \text{otherwise}
\end{cases}

$$


where $z$ is the net input, which is a linear combination of the weights and the input features, and $\theta$ is a threshold value.

## Learning Algorithm

The perceptron learning rule is quite simple and can be summarized by the following steps:

1. Initialize the weights to 0 or small random numbers.
2. For each training sample $x^{(i)}$, perform the following steps:
    a. Compute the output value $\hat{y}$.
    b. Update the weights.

The output value is the class label predicted by the unit step function that we defined earlier, and the simultaneous update of each weight $w_j$ in the weight vector $w$ can be more formally written as:


$$

w_j := w_j + \Delta w_j

$$


The value for updating the weights at each increment is calculated by the perceptron learning rule:


$$

\Delta w_j = \eta (y^{(i)} - \hat{y}^{(i)})x_j^{(i)}

$$


where $\eta$ is the learning rate (a constant between 0.0 and 1.0), $y^{(i)}$ is the true class label of the i-th training sample, and $\hat{y}^{(i)}$ is the predicted class label.

## Limitations

The perceptron is a simple algorithm suitable for linearly separable data, i.e., classes that can be separated by a hyperplane in the feature space. However, if the classes cannot be separated perfectly by such a linear decision boundary, the weights will never stop updating unless the iterations are limited somehow.

Another limitation of the perceptron is that it doesn't provide probability estimates for the predictions, which are useful for many applications.

## Extensions

The perceptron serves as the basis for many other machine learning algorithms. The multilayer perceptron (MLP), for example, is a direct extension of the perceptron. It consists of multiple layers of perceptrons, also known as a neural network, and uses a different activation function. The MLP can solve problems which the perceptron can't by learning non-linear models.
