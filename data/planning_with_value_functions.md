# Planning With Value Functions

Planning with value functions is a technique used in reinforcement learning to determine the optimal policy for an agent to take in a given environment. It involves estimating the value of each state or state-action pair in the environment, and using these estimates to determine the best course of action for the agent to take.

## Value Functions

A value function is a function that estimates the expected return an agent will receive by starting in a particular state or state-action pair and following a given policy. There are two types of value functions: state value functions and action value functions.

### State Value Functions

A state value function, denoted as V(s), estimates the expected return an agent will receive by starting in state s and following a given policy. It is defined as follows:

$$V(s) = \mathbb{E}[R_t + \gamma R_{t+1} + \gamma^2 R_{t+2} + ... | S_t = s]$$

where R_t is the reward received at time t, and gamma is a discount factor that determines the importance of future rewards.

### Action Value Functions

An action value function, denoted as Q(s, a), estimates the expected return an agent will receive by starting in state s, taking action a, and following a given policy. It is defined as follows:

$$Q(s, a) = \mathbb{E}[R_t + \gamma R_{t+1} + \gamma^2 R_{t+2} + ... | S_t = s, A_t = a]$$

where A_t is the action taken at time t.

## Planning with Value Functions

Planning with value functions involves using the estimated value functions to determine the optimal policy for an agent to take in a given environment. There are several algorithms that can be used for planning with value functions, including value iteration, policy iteration, and Q-learning.

### Value Iteration

Value iteration is an algorithm used to determine the optimal value function for a given environment. It involves iteratively updating the value function until it converges to the optimal value function. The algorithm is as follows:

1. Initialize the value function V(s) to arbitrary values for all states s.
2. Repeat until convergence:
    a. For each state s, update the value function using the Bellman equation:
    
    $$V(s) \leftarrow \max_a \sum_{s', r} p(s', r | s, a)[r + \gamma V(s')]$$
    
    where p(s', r | s, a) is the probability of transitioning to state s' and receiving reward r when taking action a in state s.
    
### Policy Iteration

Policy iteration is an algorithm used to determine the optimal policy for a given environment. It involves iteratively improving the policy until it converges to the optimal policy. The algorithm is as follows:

1. Initialize the policy pi(a | s) to arbitrary values for all states s and actions a.
2. Repeat until convergence:
    a. Evaluate the policy by calculating the value function V(s) for the policy using the Bellman equation:
    
    $$V(s) = \sum_{a} \pi(a | s) \sum_{s', r} p(s', r | s, a)[r + \gamma V(s')]$$
    
    b. Improve the policy by selecting the action that maximizes the action value function Q(s, a) for each state s:
    
    $$\pi'(a | s) = \begin{cases} 1 & \text{if } a = \arg\max_{a'} Q(s, a') \\ 0 & \text{otherwise} \end{cases}$$
    
    c. If the policy has not changed, stop. Otherwise, go back to step 2.
    
### Q-Learning

Q-learning is a model-free algorithm used to determine the optimal action value function for a given environment. It involves iteratively updating the action value function using the Bellman equation. The algorithm is as follows:

1. Initialize the action value function Q(s, a) to arbitrary values for all states s and actions a.
2. Repeat until convergence:
    a. Select an action a using an exploration strategy, such as epsilon-greedy.
    b. Observe the reward r and next state s'.
    c. Update the action value function using the Bellman equation:
    
    $$Q(s, a) \leftarrow Q(s, a) + \alpha [r + \gamma \max_{a'} Q(s', a') - Q(s, a)]$$
    
    where alpha is the learning rate.

## Conclusion

Planning with value functions is a powerful technique used in reinforcement learning to determine the optimal policy for an agent to take in a given environment. By estimating the value of each state or state-action pair, algorithms such as value iteration, policy iteration, and Q-learning can be used to determine the best course of action for the agent to take.
