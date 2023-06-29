# Gated Recurrent Units

Gated Recurrent Units (GRUs) are a type of recurrent neural network (RNN) architecture used in the field of deep learning. They were introduced by Kyunghyun Cho et al. in 2014 as a simpler alternative to Long Short-Term Memory (LSTM) units, another popular RNN architecture.

## Overview

GRUs, like LSTMs, are designed to solve the vanishing gradient problem in traditional RNNs. This problem arises during the training process, specifically during backpropagation, where the gradients of the loss function with respect to the model parameters become very small. As a result, the weights of the network are not updated significantly, leading to poor performance.

The GRU unit controls the flow of information like the LSTM unit but without having a separate memory cell. It has two gates, a reset gate and an update gate.

## Architecture

The GRU has two gates:

1. **Reset Gate**: The reset gate determines how to combine the new input with the previous memory, and can discard the previous memory entirely.
2. **Update Gate**: The update gate defines how much of the previous memory to keep around. If we set the update gate to 1, we will not keep any of the previous memory.

The GRU unit modifies the standard recurrent unit to be able to discard its previous state based on the current input. This allows it to capture dependencies of different time scales. For example, it can decide to forget the current stored state and just store the current input, or it can keep the current stored state and ignore the current input.

## Equations

The equations for a GRU are as follows:


$$

r_t = \sigma(W_r \cdot [h_{t-1}, x_t])

$$



$$

z_t = \sigma(W_z \cdot [h_{t-1}, x_t])

$$



$$

\tilde{h}_t = tanh(W \cdot [r_t * h_{t-1}, x_t])

$$



$$

h_t = (1 - z_t) * h_{t-1} + z_t * \tilde{h}_t

$$


where $h_t$ is the hidden state at time $t$, $x_t$ is the input at time $t$, $r_t$ is the reset gate, and $z_t$ is the update gate. The symbol $*$ denotes element-wise multiplication.

## Applications

GRUs are used in various applications such as natural language processing, speech recognition, and time series prediction. They have been successful in tasks that involve sequential data, and they are particularly effective when the problem requires learning long-term dependencies.

## Conclusion

In summary, Gated Recurrent Units are a powerful tool in the field of deep learning for handling sequential data. They offer a simpler alternative to LSTMs with comparable performance, making them a popular choice for many applications.
