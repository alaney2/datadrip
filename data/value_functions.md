# Value Functions

Value functions are an essential concept in reinforcement learning (RL) that help an agent to evaluate the quality of its actions in a given state. They are used to estimate the expected return of an agent in a given state or state-action pair. The expected return is the sum of the discounted rewards that an agent can expect to receive from that state onwards. 

In RL, there are two types of value functions: state-value functions and action-value functions. 

## State-Value Functions

A state-value function, denoted as V(s), estimates the expected return of an agent starting from a particular state s. It represents how good it is for an agent to be in a particular state. The state-value function is defined as follows:

$$V(s) = \mathbb{E}[G_t | S_t = s]$$

where G_t is the total discounted reward from time step t onwards, and S_t is the state at time step t. 

The state-value function can be computed using dynamic programming methods such as the Bellman equation. The Bellman equation for the state-value function is as follows:

$$V(s) = \sum_{a} \pi(a|s) \sum_{s',r} p(s',r|s,a)[r + \gamma V(s')]$$

where $\pi(a|s)$ is the probability of taking action a in state s, p(s',r|s,a) is the probability of transitioning to state s' and receiving reward r after taking action a in state s, and $\gamma$ is the discount factor.

## Action-Value Functions

An action-value function, denoted as Q(s,a), estimates the expected return of an agent starting from a particular state s and taking a particular action a. It represents how good it is for an agent to take a particular action in a particular state. The action-value function is defined as follows:

$$Q(s,a) = \mathbb{E}[G_t | S_t = s, A_t = a]$$

where A_t is the action taken at time step t.

The action-value function can also be computed using dynamic programming methods such as the Bellman equation. The Bellman equation for the action-value function is as follows:

$$Q(s,a) = \sum_{s',r} p(s',r|s,a)[r + \gamma \sum_{a'} \pi(a'|s') Q(s',a')]$$

where $\pi(a'|s')$ is the probability of taking action a' in state s', and the summation is over all possible actions a' in state s'.

## Conclusion

Value functions are a fundamental concept in RL that help an agent to evaluate the quality of its actions in a given state. State-value functions estimate the expected return of an agent starting from a particular state, while action-value functions estimate the expected return of an agent starting from a particular state and taking a particular action. Both types of value functions can be computed using dynamic programming methods such as the Bellman equation.
