# Actor Critic Methods

Actor-critic methods are a class of reinforcement learning algorithms that combine value function approximation and policy gradient methods. In this approach, a critic estimates the value function, while an actor learns a policy that maximizes the expected reward. 

These methods are particularly useful in settings where the state space is continuous and high-dimensional, as well as in problems where the reward signal is sparse or delayed. They have been successfully applied in a wide range of domains, including robotics, game playing, and natural language processing.

## Prerequisites

In order to understand actor-critic methods, one should have a solid understanding of the following topics:

- Reinforcement learning: the study of how an agent can learn to take actions in an environment in order to maximize a cumulative reward signal.
- Policy gradient methods: a class of reinforcement learning algorithms that optimize the policy directly, by estimating the gradient of the expected reward with respect to the policy parameters.
- Value function approximation: the use of function approximation techniques, such as neural networks or linear models, to estimate the value function in a reinforcement learning setting.
- Markov decision processes: a mathematical framework for modeling decision-making problems, where the future state depends only on the current state and action, and not on the past history.
- Dynamic programming: a family of algorithms that solve complex problems by breaking them down into simpler subproblems, and solving them recursively.
- Monte Carlo methods: a class of algorithms that estimate the value function by sampling trajectories from the environment and averaging the rewards.
- Temporal difference learning: a class of algorithms that estimate the value function by bootstrapping from the next time step, rather than waiting until the end of the episode.
- Neural networks: a class of machine learning models that are inspired by the structure and function of the brain.

## How Actor Critic Methods Work

In actor-critic methods, the critic estimates the value function, which is defined as the expected cumulative reward from a given state, under a given policy. The actor learns a policy that maximizes the expected reward, by using the gradient of the expected reward with respect to the policy parameters.

Formally, let $s$ be the current state, $a$ be the current action, $r$ be the current reward, and $\pi_\theta$ be the policy, parameterized by $\theta$. The critic estimates the value function $V(s)$, while the actor updates the policy parameters $\theta$ as follows:

$$\theta \leftarrow \theta + \alpha \nabla_\theta \log \pi_\theta(a|s) (r - V(s))$$

where $\alpha$ is the learning rate, and $\nabla_\theta \log \pi_\theta(a|s)$ is the score function, which measures the sensitivity of the policy to changes in the parameters. 

The critic updates the value function by minimizing the mean squared error between the estimated value and the actual reward:

$$\minimize_{\theta_V} \frac{1}{2} (r + \gamma V(s') - V(s))^2$$

where $\gamma$ is the discount factor, and $s'$ is the next state.

## Further Readings

- Deep Reinforcement Learning: a subfield of reinforcement learning that uses deep neural networks to approximate the value function or policy.
- On-policy vs Off-policy: a comparison of different reinforcement learning algorithms based on whether they update the policy based on the current policy or a different one.
- Natural Gradient Methods: a class of optimization algorithms that use the Riemannian geometry of the parameter space to update the policy parameters more efficiently.
- Distributed RL: a technique for scaling up reinforcement learning algorithms to large-scale problems and distributed environments.
- Multi-Agent RL: a variant of reinforcement learning where multiple agents interact with each other and learn to coordinate their actions.
- Hierarchical RL: a framework for decomposing a complex problem into a hierarchy of smaller subproblems, and learning policies for each level of the hierarchy.
- Imitation Learning: a technique for learning a policy from expert demonstrations, without requiring the agent to explore the environment.
- Inverse RL: a technique for inferring the reward function from observed behavior, without requiring the reward function to be specified explicitly.
- Reward Design: the process of designing a reward function that incentivizes the agent to achieve the desired behavior.
