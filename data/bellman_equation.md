# Bellman Equation

The Bellman equation is a fundamental concept in reinforcement learning (RL) and dynamic programming (DP). It is named after Richard Bellman, who formalized the principle of optimality in DP. The Bellman equation expresses the relationship between the value of a state or state-action pair and the expected immediate reward and the expected value of the next state or state-action pair.

In RL and DP, the value of a state or state-action pair is defined as the expected cumulative reward starting from that state or state-action pair. The Bellman equation provides a recursive definition of the value function, which is a mapping from states or state-action pairs to their corresponding values. 

## Formal Definition

The Bellman equation is defined as follows:

- For a state-value function V(s):
$$V(s) = \sum_{a} \pi(a|s) \sum_{s', r} p(s', r|s, a) [r + \gamma V(s')]$$

- For a state-action-value function Q(s, a):
$$Q(s, a) = \sum_{s', r} p(s', r|s, a) [r + \gamma \sum_{a'} \pi(a'|s') Q(s', a')]$$

where $\pi(a|s)$ is the policy, which is a mapping from states to probabilities of selecting each action, $p(s', r|s, a)$ is the probability of transitioning from state s to state s' with reward r, $\gamma$ is the discount factor, which determines the importance of future rewards, and $a'$ is the action selected by the policy in state s'.

The Bellman equation is a recursive equation that expresses the value of a state or state-action pair in terms of the values of its successor states or state-action pairs. The Bellman equation is a key component of many RL and DP algorithms, such as value iteration, policy iteration, Q-learning, and SARSA.

## Applications

The Bellman equation has numerous applications in RL and DP. It is used to compute the optimal value function and policy, which are the solutions to the RL and DP problems. The Bellman equation can be solved exactly using dynamic programming methods, such as value iteration and policy iteration, when the transition probabilities and rewards are known. 

In practice, the transition probabilities and rewards are often unknown, and the Bellman equation must be estimated using sample trajectories. This leads to algorithms such as Q-learning and SARSA, which are model-free RL methods that estimate the Q-function using temporal difference learning.

## Conclusion

The Bellman equation is a cornerstone of RL and DP. It provides a recursive definition of the value function, which is used to compute the optimal policy and value function in RL and DP problems. The Bellman equation can be solved exactly using dynamic programming methods when the transition probabilities and rewards are known, or estimated using sample trajectories in model-free RL methods. The Bellman equation is a powerful and versatile tool that is essential for understanding and solving many RL and DP problems.
