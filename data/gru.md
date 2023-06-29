# Gated Recurrent Unit (GRU)

The Gated Recurrent Unit (GRU) is a type of recurrent neural network (RNN) architecture used in the field of deep learning. GRUs, introduced by Cho et al. in 2014, are a variation of Long Short-Term Memory (LSTM) units, another type of RNN architecture. They are designed to solve the vanishing gradient problem which is a common issue with standard RNNs.

## Architecture

The GRU has gating units similar to the LSTM, but has a fewer number of gates and does not have a separate memory cell. It combines the forget and input gates into a single "update gate". It also merges the cell state and hidden state, and makes some other changes. The GRU's fewer gates and merged state result in a lighter and faster model.

The GRU has two gates:

1. **Update Gate (z)**: This gate decides what information should be thrown away or kept. It uses the sigmoid function to squash the value between 0 and 1.

2. **Reset Gate (r)**: This gate is used to decide how much past information to forget.

## Equations

The equations for a GRU are as follows:

1. Update Gate: $z_t = \sigma(W_z . [h_{t-1}, x_t])$

2. Reset Gate: $r_t = \sigma(W_r . [h_{t-1}, x_t])$

3. Candidate Hidden State: $\tilde{h}_t = tanh(W . [r_t * h_{t-1}, x_t])$

4. Final Hidden State: $h_t = (1 - z_t) * h_{t-1} + z_t * \tilde{h}_t$

where $.$ denotes the dot product, $*$ denotes element-wise multiplication, $h_{t-1}$ is the previous hidden state, $x_t$ is the input at time $t$, and $\sigma$ and $tanh$ are the sigmoid and hyperbolic tangent activation functions, respectively.

## Applications

GRUs are used in various applications such as language modelling, speech recognition, and even in music composition. They are particularly useful in tasks that require modeling of temporal dynamics, where the order of the inputs matters.

## Advantages and Disadvantages

The main advantage of GRUs is that they can model temporal dependencies of different time scales. They are also simpler and faster to compute than LSTMs due to having fewer tensor operations.

However, GRUs may not perform as well as LSTMs on tasks that require modeling longer sequences due to their lack of a separate memory cell. The choice between GRUs and LSTMs often depends on the specific requirements of the task at hand.
