# Thompson Sampling

Thompson Sampling is a probabilistic algorithm used for decision-making problems, particularly in the context of the multi-armed bandit problem. It is a Bayesian approach that balances exploration and exploitation by using probability distributions to select actions.

## Bayesian Inference

Bayesian inference is a statistical approach that involves updating prior beliefs based on new evidence. In the context of Thompson Sampling, Bayesian inference is used to update the probability distributions over the expected rewards of each action. This allows the algorithm to learn from past experiences and make better decisions over time.

## Probability Distributions

Probability distributions are used in Thompson Sampling to model the uncertainty over the expected rewards of each action. The most commonly used distributions are the Beta distribution and the Gaussian distribution. The Beta distribution is used for binary outcomes, while the Gaussian distribution is used for continuous outcomes.

## Bandit Algorithms

The multi-armed bandit problem is a classic problem in decision-making that involves selecting actions from a set of options, each with an unknown reward distribution. Bandit algorithms are used to solve this problem by balancing exploration and exploitation to maximize the cumulative reward over time. Thompson Sampling is one of the most popular bandit algorithms due to its simplicity and effectiveness.

## Further Readings

- Multi-Armed Bandit Problem
- Reinforcement Learning
- Monte Carlo Methods
