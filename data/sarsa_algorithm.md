# Sarsa Algorithm

The Sarsa algorithm is a reinforcement learning technique used to learn the optimal policy for an agent in a Markov decision process (MDP). It is an on-policy method that updates the Q-values of state-action pairs based on the current policy being followed by the agent.

## Background

Reinforcement learning is a type of machine learning where an agent learns to take actions in an environment to maximize a reward signal. The agent interacts with the environment by taking actions and receiving feedback in the form of rewards. The goal of the agent is to learn a policy that maximizes the expected cumulative reward over time.

In an MDP, the agent interacts with the environment in discrete time steps. At each time step, the agent observes the current state of the environment and selects an action to take. The environment transitions to a new state and the agent receives a reward based on the transition. The goal of the agent is to learn a policy that maximizes the expected cumulative reward over time.

## Sarsa Algorithm

The Sarsa algorithm is an on-policy method that updates the Q-values of state-action pairs based on the current policy being followed by the agent. The Q-value of a state-action pair is the expected cumulative reward that the agent will receive by taking that action in that state and following the current policy thereafter.

The update rule for the Sarsa algorithm is as follows:

$$Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha [r_{t+1} + \gamma Q(s_{t+1}, a_{t+1}) - Q(s_t, a_t)]$$

where:
- $Q(s_t, a_t)$ is the Q-value of the current state-action pair
- $\alpha$ is the learning rate
- $r_{t+1}$ is the reward received after taking action $a_t$ in state $s_t$ and transitioning to state $s_{t+1}$
- $\gamma$ is the discount factor
- $Q(s_{t+1}, a_{t+1})$ is the Q-value of the next state-action pair
- $s_t$ is the current state
- $a_t$ is the current action

The Sarsa algorithm updates the Q-values of state-action pairs in a sample-based manner. It uses the current policy to select actions and updates the Q-values based on the rewards received and the Q-values of the next state-action pairs. The algorithm continues to update the Q-values until convergence.

## Conclusion

The Sarsa algorithm is a reinforcement learning technique used to learn the optimal policy for an agent in an MDP. It is an on-policy method that updates the Q-values of state-action pairs based on the current policy being followed by the agent. The algorithm updates the Q-values in a sample-based manner and continues to update them until convergence. The Sarsa algorithm is a useful technique for solving problems in reinforcement learning and has applications in various domains.
