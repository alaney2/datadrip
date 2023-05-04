# Partially Observable Markov Decision Process

A Partially Observable Markov Decision Process (POMDP) is a mathematical framework used to model decision-making problems where the state of the system is not fully observable. POMDPs are an extension of Markov Decision Processes (MDPs) and are used in various fields such as robotics, control theory, and economics.

## Definition

A POMDP is defined by a tuple $(S, A, T, R, Z, O, \gamma)$, where:

- $S$ is a finite set of states.
- $A$ is a finite set of actions.
- $T$ is a set of transition probabilities $T(s,a,s') = P(s'|s,a)$.
- $R$ is a reward function $R(s,a)$.
- $Z$ is a set of observation probabilities $Z(o|s,a)$.
- $O$ is a set of observations.
- $\gamma$ is a discount factor.

The difference between a POMDP and an MDP is that in a POMDP, the agent does not directly observe the state of the system. Instead, the agent receives an observation that is probabilistically related to the underlying state. The observation function $Z(o|s,a)$ specifies the probability of observing $o$ given that the system is in state $s$ and the agent takes action $a$.

## Belief State

Since the agent does not know the true state of the system, it maintains a belief state $b_t$, which is a probability distribution over the states $S$ at time $t$. The belief state is updated using Bayes' rule:

$$
b_{t+1}(s') = \frac{Z(o_{t+1}|s',a) \sum_{s \in S} T(s,a,s')b_t(s)}{\sum_{s'' \in S} Z(o_{t+1}|s'',a) \sum_{s \in S} T(s,a,s'')b_t(s)}
$$

where $o_{t+1}$ is the observation received at time $t+1$.

## Policy

The goal of the agent is to maximize the expected sum of discounted rewards:

$$
\sum_{t=0}^\infty \gamma^t R(s_t,a_t)
$$

where $s_t$ is the state at time $t$ and $a_t$ is the action taken at time $t$. Since the agent does not know the true state of the system, it must choose actions based on its belief state. A policy $\pi(b)$ maps a belief state to a probability distribution over actions.

## Solving POMDPs

Solving POMDPs is computationally expensive since the belief state is a probability distribution over the states. Exact solutions are only possible for small problems. Approximate solutions include:

- **Value Iteration**: This algorithm iteratively computes the optimal value function for a given policy. The optimal policy is then obtained by selecting the action that maximizes the value function at each belief state.
- **Policy Iteration**: This algorithm iteratively improves a given policy by computing the optimal value function for the policy and then updating the policy based on the value function.
- **Monte Carlo Tree Search**: This algorithm builds a search tree by simulating trajectories from the current belief state. The tree is then used to select actions that maximize the expected sum of discounted rewards.

## Applications

POMDPs are used in various fields such as robotics, control theory, and economics. In robotics, POMDPs are used to model problems such as robot localization and navigation. In control theory, POMDPs are used to model problems such as optimal control of stochastic systems. In economics, POMDPs are used to model problems such as decision-making under uncertainty.

## Further Readings

- Sutton, R. S., & Barto, A. G. (2018). Reinforcement learning: An introduction. MIT press.
- Thrun, S., Burgard, W., & Fox, D. (2005). Probabilistic robotics. MIT press.
- Kochenderfer, M. J., & Wheeler, T. A. (2019). Partially observable markov decision processes: Algorithms and applications. Morgan & Claypool.
