# Double DQN

Double Deep Q-Network (Double DQN) is an extension of the Deep Q-Network (DQN) algorithm that aims to address the overestimation problem of the Q-values in DQN. The overestimation problem occurs when the Q-values are estimated using the same network for both selecting and evaluating actions, leading to an overestimation of the Q-values. Double DQN addresses this problem by using two separate networks for selecting and evaluating actions.

## Background

DQN is a reinforcement learning algorithm that uses a neural network to approximate the Q-function, which estimates the expected future reward for each action in a given state. DQN has been shown to be effective in a variety of tasks, including playing Atari games and controlling robotic systems. However, DQN suffers from the overestimation problem, which can lead to suboptimal policies.

## Double DQN

Double DQN addresses the overestimation problem by using two separate networks: a target network and an online network. The target network is used to evaluate the Q-values for the next state, while the online network is used to select the action with the highest Q-value for the current state. The Q-values are then estimated using the target network, which is updated periodically to match the online network.

The update rule for Double DQN is similar to that of DQN, with the addition of the target network. The loss function for Double DQN is defined as:

$$L(\theta) = \mathbb{E}_{(s,a,r,s') \sim D}[(r + \gamma Q_{\theta^-}(s', argmax_{a'}Q_{\theta}(s',a')) - Q_{\theta}(s,a))^2]$$

where $\theta$ and $\theta^-$ are the parameters of the online and target networks, respectively, $D$ is the replay buffer, $s$ is the current state, $a$ is the selected action, $r$ is the reward, $s'$ is the next state, and $\gamma$ is the discount factor.

## Advantages

Double DQN has been shown to outperform DQN in a variety of tasks, including Atari games and robotic control. By using two separate networks, Double DQN is able to reduce the overestimation of the Q-values, leading to more accurate estimates and better policies.

## Further Readings

- Dueling DQN
- Prioritized Experience Replay
- Actor-Critic Methods
