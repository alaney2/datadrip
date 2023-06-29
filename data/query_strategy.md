# Q-Learning

Q-Learning is a model-free reinforcement learning algorithm. The goal of Q-Learning is to learn a policy, which tells an agent what action to take under what circumstances. It does not require a model (hence the connotation "model-free") of the environment and can handle problems with stochastic transitions and rewards, without requiring adaptations.

## Overview

Q-Learning was first introduced by Watkins in 1989. The algorithm is used to find an optimal action-selection policy for a Markov Decision Process (MDP). It works by learning an action-value function, and using this function to select which action to take.

The action-value function, also known as Q-function, is a function $Q: S \times A \rightarrow \mathbb{R}$, where $S$ is the set of states and $A$ is the set of actions. The Q-function is used to approximate the return or the total reward from a state-action pair $(s, a)$.

## Algorithm

The Q-Learning algorithm iteratively updates the Q-values for each state-action pair using the Bellman equation:


$$
Q(s, a) \leftarrow Q(s, a) + \alpha [r + \gamma \max_{a'} Q(s', a') - Q(s, a)]
$$


where:
- $s$ is the current state
- $a$ is the action taken
- $r$ is the immediate reward
- $s'$ is the new state
- $a'$ is the action taken in the new state
- $\alpha$ is the learning rate
- $\gamma$ is the discount factor

The action with the highest Q-value for a given state is selected.

## Advantages and Disadvantages

Q-Learning has several advantages. It is a model-free algorithm, meaning it does not require knowledge of the environment or the transition probabilities. It can also handle problems with stochastic transitions and rewards.

However, Q-Learning also has some disadvantages. It can be slow to converge and the optimal policy is only guaranteed for stationary environments. It also requires a discrete state and action space, which can be a limitation for many real-world problems.

## Extensions

There are several extensions to the Q-Learning algorithm, including Deep Q-Learning, Double Q-Learning, and Dueling Network Architectures for Deep Reinforcement Learning. These extensions aim to improve the performance and stability of Q-Learning, especially in environments with large state-action spaces.
