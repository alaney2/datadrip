# AdamW

AdamW is an extension of the Adam optimization algorithm that addresses the problem of weight decay. Weight decay is a regularization technique that adds a penalty term to the loss function to encourage the model to have smaller weights. However, traditional weight decay methods can lead to poor optimization performance when combined with adaptive gradient methods like Adam.

AdamW introduces a new formulation for weight decay that improves optimization performance. Instead of adding the weight decay penalty to the loss function, it is added directly to the weight update step. This ensures that the weight decay affects only the weight parameters and not the adaptive learning rates.

The weight decay term in AdamW is given by:

$$
w_t = w_{t-1} - \eta\frac{\partial L}{\partial w_{t-1}} - \lambda\eta w_{t-1}
$$

where $w_t$ is the weight parameter at time $t$, $\eta$ is the learning rate, $\frac{\partial L}{\partial w_{t-1}}$ is the gradient of the loss function with respect to the weight parameter at time $t-1$, and $\lambda$ is the weight decay coefficient.

AdamW also uses a modified update rule for the adaptive learning rates. Instead of using the moving average of the squared gradients, AdamW uses the moving average of the gradients that are not affected by weight decay. This ensures that the adaptive learning rates are not influenced by the weight decay term.

AdamW has been shown to improve the performance of deep learning models on various tasks, including image classification, object detection, and natural language processing.

## Prerequisites

To fully understand AdamW, one should have knowledge of the following topics:

- Stochastic Gradient Descent
- Backpropagation
- Weight Decay

## Further Readings

For more information on related topics, consider reading:

- AMSGrad
- Adam
- Adagrad
