# Approximate Dynamic Programming

**Approximate Dynamic Programming (ADP)** is a class of reinforcement learning algorithms that use function approximation to solve large-scale Markov decision processes (MDPs). It is a generalization of **Dynamic Programming (DP)**, which is a method for solving MDPs by iteratively computing the optimal value function and policy.

ADP algorithms are used in situations where the state space of an MDP is too large to be represented explicitly, making it infeasible to apply DP directly. Instead, ADP algorithms use function approximation techniques to represent the value function or policy implicitly, allowing them to scale to much larger problems.

## Background

ADP is based on the principle of **Bellman's equation**, which expresses the optimal value function of an MDP in terms of the optimal value function of its successor states. The Bellman equation can be written as:

$$V^*(s) = \max_{a \in A} \sum_{s' \in S} P(s' | s, a) [R(s,a,s') + \gamma V^*(s')]$$

where $V^*(s)$ is the optimal value function, $s$ is the current state, $a$ is the action taken, $s'$ is the next state, $P(s' | s, a)$ is the probability of transitioning from state $s$ to state $s'$ under action $a$, $R(s,a,s')$ is the reward obtained from transitioning from state $s$ to state $s'$ under action $a$, and $\gamma$ is the discount factor.

DP algorithms solve the Bellman equation by iteratively computing the optimal value function and policy until convergence. However, this approach is computationally expensive and infeasible for large-scale problems.

## Function Approximation

ADP algorithms use function approximation techniques to represent the value function or policy implicitly, allowing them to scale to much larger problems. Function approximation involves approximating the value function or policy using a set of basis functions, such as linear or nonlinear functions.

The most common function approximation technique used in ADP is **linear function approximation**, which involves approximating the value function or policy using a linear combination of basis functions. The linear function approximation can be written as:

$$\hat{V}(s,w) = \sum_{i=1}^n w_i \phi_i(s)$$

where $\hat{V}(s,w)$ is the approximate value function, $w$ is the weight vector, $\phi_i(s)$ is the $i$-th basis function, and $n$ is the number of basis functions.

## ADP Algorithms

There are several ADP algorithms, including **Q-Learning**, **SARSA**, and **Actor-Critic**. These algorithms use function approximation to represent the value function or policy implicitly, allowing them to scale to much larger problems.

Q-Learning is a model-free ADP algorithm that learns the optimal Q-value function by iteratively updating the Q-value estimates using the Bellman equation. SARSA is a model-free ADP algorithm that learns the Q-value function by iteratively updating the Q-value estimates using the Bellman equation and the current policy. Actor-Critic is a model-based ADP algorithm that learns the policy and value function simultaneously by using an actor network to represent the policy and a critic network to represent the value function.

## Applications

ADP algorithms have been successfully applied to a wide range of problems, including robotics, game playing, and finance. For example, ADP algorithms have been used to control the motion of robots, play games such as chess and Go, and optimize trading strategies in finance.

## Conclusion

ADP is a class of reinforcement learning algorithms that use function approximation to solve large-scale MDPs. It is a generalization of DP and is used in situations where the state space of an MDP is too large to be represented explicitly. ADP algorithms use function approximation techniques to represent the value function or policy implicitly, allowing them to scale to much larger problems. There are several ADP algorithms, including Q-Learning, SARSA, and Actor-Critic, which have been successfully applied to a wide range of problems.
