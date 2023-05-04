# Expected Sarsa Algorithm

The Expected Sarsa Algorithm is a reinforcement learning algorithm that is used to estimate the optimal action-value function of a Markov Decision Process (MDP). It is an extension of the Sarsa algorithm, which is a model-free on-policy control algorithm that learns the optimal policy by estimating the action-value function. The Expected Sarsa algorithm is similar to the Sarsa algorithm, but instead of using the actual next action to estimate the action-value function, it uses the expected value of the next action.

## Algorithm

The Expected Sarsa algorithm is a model-free on-policy control algorithm that learns the optimal policy by estimating the action-value function. The algorithm updates the action-value function at each time step using the following equation:

$$Q(S_t, A_t) \leftarrow Q(S_t, A_t) + \alpha \left[R_{t+1} + \gamma \sum_{a} \pi(a|S_{t+1}) Q(S_{t+1}, a) - Q(S_t, A_t)\right]$$

where:

- $Q(S_t, A_t)$ is the estimated action-value function for state $S_t$ and action $A_t$
- $\alpha$ is the learning rate
- $R_{t+1}$ is the reward received after taking action $A_t$ in state $S_t$
- $\gamma$ is the discount factor
- $\pi(a|S_{t+1})$ is the probability of taking action $a$ in state $S_{t+1}$ under the current policy

The difference between the Sarsa algorithm and the Expected Sarsa algorithm is in the calculation of the expected value of the next action. In the Sarsa algorithm, the actual next action is used, while in the Expected Sarsa algorithm, the expected value of the next action is used. The expected value is calculated as follows:

$$\sum_{a} \pi(a|S_{t+1}) Q(S_{t+1}, a)$$

## Advantages

The Expected Sarsa algorithm has several advantages over the Sarsa algorithm:

- It is more robust to noisy rewards and transitions because it uses the expected value of the next action instead of the actual next action.
- It can learn the optimal policy more efficiently because it uses the expected value of the next action instead of the actual next action, which can reduce the variance of the updates.
- It can handle continuous action spaces because it does not require the actual next action to be taken.

## Further Readings

- Deep Q Networks
- Monte Carlo Methods
- Temporal Difference Learning
