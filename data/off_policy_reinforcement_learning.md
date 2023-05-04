# Off Policy Reinforcement Learning

Off Policy Reinforcement Learning is a type of reinforcement learning where the agent learns from a policy that is different from the one it is currently following. In other words, the agent learns from a behavior policy while following a target policy. This is in contrast to On Policy Reinforcement Learning, where the agent learns from the same policy that it is following.

Off Policy Reinforcement Learning is useful in situations where the target policy is optimal, but it is difficult to sample from it. For example, in a game of chess, the optimal policy may be to always make the best move, but it is difficult to sample from this policy because there are so many possible moves.

One popular algorithm for Off Policy Reinforcement Learning is Q-Learning. Q-Learning is a model-free algorithm that learns the optimal action-value function $Q^*(s,a)$, which gives the expected return for taking action $a$ in state $s$ and following the optimal policy thereafter. The algorithm updates the action-value function using the Bellman equation:

$$Q_{t+1}(s_t,a_t) \leftarrow Q_t(s_t,a_t) + \alpha [r_{t+1} + \gamma \max_a Q_t(s_{t+1},a) - Q_t(s_t,a_t)]$$

where $Q_t(s_t,a_t)$ is the action-value function at time $t$, $r_{t+1}$ is the reward received after taking action $a_t$ in state $s_t$ and transitioning to state $s_{t+1}$, $\alpha$ is the learning rate, and $\gamma$ is the discount factor.

Another popular algorithm for Off Policy Reinforcement Learning is Importance Sampling. Importance Sampling is a technique for estimating the expected value of a function under one distribution, given samples from another distribution. In the context of Off Policy Reinforcement Learning, Importance Sampling can be used to estimate the expected return of the target policy using samples from the behavior policy.

Off Policy Reinforcement Learning has many applications, including robotics, game playing, and autonomous driving. It is a powerful technique for learning optimal policies in situations where it is difficult to sample from the target policy.

## Further Readings

- Monte Carlo Methods
- Temporal Difference Learning
- Deep Reinforcement Learning
