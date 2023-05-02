# Gated Recurrent Unit

The Gated Recurrent Unit (GRU) is a type of Recurrent Neural Network (RNN) architecture that is widely used in Natural Language Processing (NLP) and other sequential data applications. It was introduced by Kyunghyun Cho, Bart van Merrienboer, Caglar Gulcehre, Dzmitry Bahdanau, and Yoshua Bengio in 2014.

A GRU has similar architecture to a standard RNN, but it also includes gating mechanisms that help to selectively update and reset the hidden state of the network. This gating mechanism helps to mitigate the vanishing gradient problem, which is a common issue with standard RNNs.

## Architecture

A GRU cell has two gates: a reset gate and an update gate. The reset gate determines how much of the previous hidden state should be forgotten, while the update gate determines how much of the new input should be added to the hidden state. The output of the GRU cell is a combination of the current hidden state and the candidate activation, which is the activation of the input and current hidden state.

Mathematically, the reset gate and update gate are defined as:

$$r_t = \sigma(W_r \cdot [h_{t-1}, x_t])$$

$$z_t = \sigma(W_z \cdot [h_{t-1}, x_t])$$

where $W_r$ and $W_z$ are weight matrices, $h_{t-1}$ is the previous hidden state, and $x_t$ is the current input. $\sigma$ is the sigmoid activation function.

The candidate activation and new hidden state are defined as:

$$\tilde{h}_t = \tanh(W \cdot [r_t \circ h_{t-1}, x_t])$$

$$h_t = (1 - z_t) \circ h_{t-1} + z_t \circ \tilde{h}_t$$

where $\circ$ is the element-wise multiplication operation and $W$ is the weight matrix.

## Advantages of GRU

GRUs have several advantages over standard RNNs:

- They are computationally less expensive than Long Short-Term Memory (LSTM) networks, while still providing similar performance.
- They are easier to train than LSTMs because they have fewer parameters.
- They are more interpretable than LSTMs because they have fewer gates.

## Further Readings

- Dilated Recurrent Neural Networks
- Vanishing Gradients Problem
