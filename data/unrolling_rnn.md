# Unrolling RNN

Unrolling a Recurrent Neural Network (RNN) involves expanding the network into a finite number of layers. In contrast, a standard RNN is a dynamic network that processes sequences of inputs and outputs in a time-dependent manner. Unrolling a network is essentially a way of visualizing the network architecture over a finite period of time.

## How it Works

In an RNN, each neuron receives an input from the previous neuron in the same layer and from the neurons in the previous time step. During the forward pass, the hidden state of the network is updated at each time step by applying the activation function to the weighted sum of the inputs. The output of the network is then generated based on the final hidden state.

Unrolling a network involves creating a fixed number of copies of the network architecture, where each copy represents a different time step. In other words, the network is "unfolded" over a fixed time horizon. The input at each time step is then fed into the corresponding copy of the network, with the hidden state being passed from one copy to the next.

During training, the network weights are updated using backpropagation through time (BPTT). This involves computing the gradients of the loss function with respect to the weights at each time step, and then propagating the gradients backwards through time. Since the network is unrolled over a fixed time horizon, the backpropagation algorithm can be applied to each copy of the network separately.

## Advantages and Disadvantages

Unrolling a network has some advantages over using a dynamic network. For example, it can make it easier to understand and debug the network architecture. It can also simplify the implementation of the backpropagation algorithm. Additionally, unrolling a network can make it easier to parallelize the computations, since each copy of the network can be computed independently.

However, unrolling a network can also have some disadvantages. For example, it can be computationally expensive, especially if the time horizon is large. It can also lead to issues with vanishing and exploding gradients, which can make it difficult to train the network. Finally, unrolling a network can make it difficult to handle variable-length inputs and outputs.

## Further Readings

- Vanishing Gradient Problem
- Long Short-Term Memory
- Gated Recurrent Unit
