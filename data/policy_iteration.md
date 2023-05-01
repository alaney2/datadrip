# Policy Iteration

Policy iteration is a technique used in reinforcement learning to find the optimal policy for a given Markov decision process (MDP). It is a type of dynamic programming algorithm that alternates between policy evaluation and policy improvement. The goal is to find the policy that maximizes the expected discounted reward over the long run.

## Prerequisites

To fully understand policy iteration, one should have knowledge of the following topics:

- Markov Decision Process: Policy iteration is a technique used to find the optimal policy for a given MDP. Thus, it is essential to have an understanding of MDP and its components.
- Dynamic Programming: Policy iteration is a type of dynamic programming algorithm. Hence, one should be familiar with dynamic programming concepts such as the Bellman equation and value iteration.
- Bellman Equation: The Bellman equation is a recursive equation that expresses the relationship between the value of a state and the values of its successor states. It is an essential concept in dynamic programming.
- Value Iteration: Value iteration is a dynamic programming algorithm used to find the optimal value function for a given MDP. It is used as a sub-procedure in policy iteration.
- Q-Learning: Q-learning is a type of reinforcement learning algorithm that learns the optimal action-value function for a given MDP. It is an alternative to policy iteration.
- Reinforcement Learning: Policy iteration is a technique used in reinforcement learning. Hence, one should have a basic understanding of reinforcement learning concepts.
- Stochastic Processes: Many MDPs are stochastic processes. Hence, it is essential to have knowledge of stochastic processes.
- Probability Theory: Probability theory is the foundation of stochastic processes. Hence, one should be familiar with probability theory concepts such as conditional probability and Bayes' theorem.

## How Policy Iteration Works

Policy iteration alternates between two steps: policy evaluation and policy improvement. The algorithm starts with an initial policy, which may be a random policy or a pre-defined policy. 

### Policy Evaluation

In the policy evaluation step, the algorithm calculates the value function for the current policy. The value function of a state is the expected discounted reward starting from that state and following the current policy. The value function is calculated recursively using the Bellman equation:

$$ V_{k+1}(s) = \sum_{a} \pi(a|s) \sum_{s',r} p(s',r|s,a)[r + \gamma V_k(s')] $$

where $s$ is the current state, $a$ is the current action, $s'$ is the next state, $r$ is the reward obtained from the transition $(s,a,s')$, $\pi(a|s)$ is the probability of taking action $a$ in state $s$ under the current policy, $p(s',r|s,a)$ is the probability of transitioning to state $s'$ and receiving reward $r$ from state $s$ by taking action $a$, $\gamma$ is the discount factor, and $V_k(s)$ is the value function of state $s$ at iteration $k$.

The policy evaluation step continues until the value function converges to a stable value function $V^{\pi}(s)$ that satisfies the Bellman equation:

$$ V^{\pi}(s) = \sum_{a} \pi(a|s) \sum_{s',r} p(s',r|s,a)[r + \gamma V^{\pi}(s')] $$

### Policy Improvement

In the policy improvement step, the algorithm improves the current policy by selecting the action that maximizes the expected discounted reward starting from the current state:

$$ \pi_{k+1}(s) = \arg\max_a \sum_{s',r} p(s',r|s,a)[r + \gamma V^{\pi_k}(s')] $$

where $\pi_{k+1}(s)$ is the new policy at iteration $k+1$, and $\pi_k(s)$ is the current policy at iteration $k$.

The policy improvement step continues until the policy converges to a stable policy $\pi^*$ that satisfies the optimality condition:

$$ \pi^*(s) = \arg\max_a \sum_{s',r} p(s',r|s,a)[r + \gamma V^{\pi^*}(s')] $$

## Further Readings

- Actor-Critic Methods: Actor-critic methods combine value-based and policy-based methods to improve the efficiency of reinforcement learning algorithms.
- Deep Reinforcement Learning: Deep reinforcement learning is a subfield of reinforcement learning that uses deep neural networks to approximate the value function or policy.
- Monte Carlo Methods: Monte Carlo methods are a family of algorithms used to estimate the value function or policy based on randomly sampled episodes.
- Temporal Difference Learning: Temporal difference learning is a family of algorithms used to update the value function or policy based on the difference between the expected and actual rewards.
- Multi-Agent Reinforcement Learning: Multi-agent reinforcement learning is a subfield of reinforcement learning that deals with multiple agents interacting with each other in a shared environment.
