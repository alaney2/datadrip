# Long Short Term Memory

Long Short Term Memory (LSTM) is a type of Recurrent Neural Network (RNN) architecture that addresses the vanishing and exploding gradient problem, allowing for the training of networks with long-term dependencies. LSTMs were first introduced by Hochreiter and Schmidhuber in 1997.

## Architecture

LSTMs use a memory cell, which is responsible for holding the previous state and allowing it to flow through the network. The memory cell has three gates:

1. Forget Gate: determines which information to discard from the cell.
2. Input Gate: determines which information to add to the cell.
3. Output Gate: determines which information to output from the cell.

The gates use a sigmoid activation function to output a value between 0 and 1, which represents how much information to let through. The forget and input gates also use a tanh activation function to scale the values.

## Training

LSTMs are trained using Backpropagation Through Time (BPTT) and Gradient Descent Optimization. BPTT is used to calculate the gradients at every time step, while Gradient Descent Optimization is used to update the weights.

## Applications

LSTMs have been successfully applied in a variety of fields, including natural language processing, speech recognition, image captioning, and video analysis.

## Further Readings

- Gated Recurrent Units
- Transformer Architecture
- Attention Mechanisms
