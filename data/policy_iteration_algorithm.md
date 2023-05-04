# Policy Iteration Algorithm

The Policy Iteration Algorithm is a method used in reinforcement learning to find the optimal policy for an agent in a Markov Decision Process (MDP). It is a combination of two steps: policy evaluation and policy improvement. The algorithm starts with an initial policy and iteratively improves it until the optimal policy is found.

## Policy Evaluation

In the first step of the algorithm, the value function of the current policy is evaluated. The value function represents the expected total reward that the agent will receive by following the policy from a particular state. The value function is defined as:

$$V^{\pi}(s) = \sum_{a} \pi(a|s) \sum_{s',r} p(s',r|s,a)[r + \gamma V^{\pi}(s')]$$

where $s$ is the current state, $a$ is the action taken, $s'$ is the next state, $r$ is the reward received, $\pi(a|s)$ is the probability of taking action $a$ in state $s$, $p(s',r|s,a)$ is the probability of transitioning to state $s'$ and receiving reward $r$ given action $a$ in state $s$, and $\gamma$ is the discount factor.

The value function can be computed using iterative methods such as the Bellman equation or the Value Iteration Algorithm.

## Policy Improvement

In the second step of the algorithm, the policy is improved based on the value function computed in the previous step. The new policy is obtained by selecting the action that maximizes the expected total reward from the current state, according to the value function. The new policy is then evaluated again using the value function, and the process is repeated until convergence.

The policy improvement step can be formalized as:

$$\pi'(s) = \arg\max_{a} \sum_{s',r} p(s',r|s,a)[r + \gamma V^{\pi}(s')]$$

where $\pi'(s)$ is the new policy for state $s$.

## Advantages and Disadvantages

The Policy Iteration Algorithm has several advantages over other reinforcement learning algorithms. It is guaranteed to converge to the optimal policy in a finite number of iterations, and it can handle both finite and infinite MDPs. It also has a low sample complexity, meaning that it requires fewer samples to learn the optimal policy compared to other algorithms.

However, the Policy Iteration Algorithm can be computationally expensive, especially for large MDPs. It also requires knowledge of the transition probabilities and reward function, which may not be available in some real-world applications.

## Further Readings

- Monte Carlo Tree Search
- Actor-Critic Algorithm
