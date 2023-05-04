# Dueling Double DQN

Dueling Double DQN is a reinforcement learning algorithm that combines the advantages of both Double DQN and Dueling Network Architecture. It was introduced in the paper "Dueling Network Architectures for Deep Reinforcement Learning" by Ziyu Wang et al. in 2016.

## Double DQN

Double DQN is an extension of the Deep Q-Network (DQN) algorithm that addresses the overestimation problem of Q-values. In DQN, the Q-values are estimated using a neural network that takes the state as input and outputs the Q-values for each action. However, this can lead to overestimation of Q-values, especially when the neural network is not well-trained.

Double DQN addresses this problem by using two neural networks: one to select the best action and another to evaluate the Q-value of that action. The first network is used to select the action with the highest Q-value, while the second network is used to estimate the Q-value of that action. This reduces the overestimation of Q-values and leads to better performance.

## Dueling Network Architecture

Dueling Network Architecture is a neural network architecture that separates the estimation of the state value and the advantage value. The state value represents the value of being in a certain state, while the advantage value represents the advantage of taking a certain action in that state.

By separating these two values, the network can learn which states are valuable and which actions are advantageous, independently. This leads to better performance and faster learning.

## Combining Double DQN and Dueling Network Architecture

Dueling Double DQN combines the advantages of both Double DQN and Dueling Network Architecture. It uses two neural networks to estimate the Q-values, one for the state value and one for the advantage value. The Q-values are then combined to obtain the final Q-value for each action.

This approach reduces the overestimation of Q-values and allows the network to learn the value of each state and the advantage of each action, independently. This leads to better performance and faster learning.

## Conclusion

Dueling Double DQN is a powerful reinforcement learning algorithm that combines the advantages of Double DQN and Dueling Network Architecture. It addresses the overestimation problem of Q-values and allows the network to learn the value of each state and the advantage of each action, independently. This leads to better performance and faster learning.
