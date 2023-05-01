# Value Iteration

Value iteration is a method for solving Markov decision processes (MDPs) that involve finding an optimal policy for an agent to follow in order to maximize a cumulative reward over time. It is a type of dynamic programming algorithm that makes use of the Bellman equations to iteratively improve the estimate of the optimal value function for each state in the MDP.

## Prerequisites

Before diving into value iteration, it is recommended that one is familiar with the following concepts:

- **Markov decision process (MDP):** a mathematical framework for modeling decision-making in situations where outcomes are partly random and partly under the control of a decision-maker.
- **Bellman equations:** a set of recursive equations that describe the relationship between the value of a state and the values of its successor states in an MDP.
- **Dynamic programming:** a method for solving complex problems by breaking them down into smaller subproblems and solving each subproblem independently.
- **Reinforcement learning:** a type of machine learning where an agent learns to take actions in an environment in order to maximize a cumulative reward signal.
- **MDP solving algorithms:** various methods for solving MDPs, including value iteration, policy iteration, and Monte Carlo methods.

## How Value Iteration Works

Value iteration is a type of dynamic programming algorithm that involves iteratively improving an estimate of the optimal value function for each state in an MDP. The value function represents the expected cumulative reward that an agent can expect to receive when starting from a particular state and following an optimal policy.

The algorithm starts with an initial estimate of the value function for each state, which could be a random guess or a function that is known to be close to the true value function. Then, it repeatedly applies the Bellman optimality equation to update the value function for each state:

$$V_{k+1}(s) = \max_a \sum_{s',r} p(s',r|s,a)[r + \gamma V_k(s')]$$

where $V_k(s)$ is the estimate of the optimal value function for state $s$ at the $k$th iteration, $a$ is an action that the agent can take in state $s$, $p(s',r|s,a)$ is the probability of transitioning to state $s'$ and receiving reward $r$ when taking action $a$ in state $s$, $\gamma$ is a discount factor that determines the importance of future rewards, and $V_k(s')$ is the estimate of the optimal value function for state $s'$ at the $k$th iteration.

The algorithm continues to iterate until the estimate of the value function for each state converges to the true value function. This is guaranteed to happen as long as the MDP satisfies certain conditions, such as having a finite number of states and actions and having a discount factor that is less than 1.

Once the value function has been computed, an optimal policy can be obtained by selecting the action that maximizes the expected cumulative reward in each state:

$$\pi^*(s) = \arg\max_a \sum_{s',r} p(s',r|s,a)[r + \gamma V^*(s')]$$

where $V^*(s)$ is the true optimal value function for state $s$.

## Further Readings

- **Q-learning:** a popular reinforcement learning algorithm that learns an action-value function directly, without estimating the value function.
- **Policy iteration:** another dynamic programming algorithm for solving MDPs that involves iteratively improving a policy and the value function that corresponds to that policy.
- **Monte Carlo tree search:** a tree search algorithm often used in game playing that uses Monte Carlo simulation to estimate the values of states.
- **Actor-critic methods:** a type of reinforcement learning algorithm that combines the advantages of both value-based and policy-based methods.
- **Deep reinforcement learning:** the use of deep neural networks to approximate the value or policy function in reinforcement learning.
- **Inverse reinforcement learning:** a type of reinforcement learning where the goal is to learn the reward function given a set of observed behavior.
