# Multi-Armed Bandits

Multi-armed bandits are a type of reinforcement learning problem where an agent must choose between multiple actions, each with an unknown reward distribution. The name "multi-armed bandits" comes from the analogy of a gambler at a row of slot machines (or "one-armed bandits") who must decide which machine to play, without knowing the payout probabilities of each machine.

## Problem Formulation

In the multi-armed bandit problem, an agent must choose between $K$ actions, or "arms", at each time step $t$. Choosing an action $a_t$ results in a reward $r_t$ drawn from an unknown probability distribution $p_a$. The goal of the agent is to maximize the total expected reward over a fixed time horizon $T$.

Formally, the problem can be defined as follows:

- At each time step $t$, the agent chooses an action $a_t \in \{1, 2, ..., K\}$.
- The agent receives a reward $r_t$ drawn from an unknown probability distribution $p_a$.
- The agent's goal is to maximize the total expected reward $\sum_{t=1}^T r_t$ over the time horizon $T$.

## Exploration-Exploitation Tradeoff

The key challenge in the multi-armed bandit problem is the exploration-exploitation tradeoff. On one hand, the agent must explore the different actions to learn their reward distributions. On the other hand, the agent must exploit the actions that have shown to be the most rewarding so far.

One common approach to balancing exploration and exploitation is the $\epsilon$-greedy algorithm. This algorithm chooses the action with the highest estimated reward with probability $1-\epsilon$, and chooses a random action with probability $\epsilon$. The parameter $\epsilon$ controls the amount of exploration.

## Algorithms

There are several algorithms for solving the multi-armed bandit problem, each with its own tradeoffs and assumptions. Some popular algorithms include:

- **Upper Confidence Bound (UCB)**: This algorithm chooses the action with the highest upper confidence bound on its estimated reward. The UCB algorithm balances exploration and exploitation by choosing actions that are uncertain but have the potential for high reward.
- **Thompson Sampling**: This algorithm maintains a posterior distribution over the reward distributions of each action, and chooses actions according to their probability of being the best. Thompson Sampling is a Bayesian approach that can handle complex reward distributions.
- **$\epsilon$-Greedy Algorithm**: This algorithm chooses the action with the highest estimated reward with probability $1-\epsilon$, and chooses a random action with probability $\epsilon$. The $\epsilon$-Greedy algorithm is simple and easy to implement, but can be suboptimal in some cases.

## Conclusion

Multi-armed bandits are a fundamental problem in reinforcement learning, and have applications in a wide range of fields, including online advertising, clinical trials, and robotics. There are several algorithms for solving the multi-armed bandit problem, each with its own strengths and weaknesses. The choice of algorithm depends on the specific problem and the available resources.
