# Model Based Reinforcement Learning

Model Based Reinforcement Learning is a subfield of Reinforcement Learning that uses an explicitly learned model of the environment to make decisions. In traditional Reinforcement Learning, agents learn directly from interaction with the environment, but in Model Based Reinforcement Learning, the agent first learns a model of the environment, and then uses that model to make decisions.

## Background

Model Based Reinforcement Learning is an extension of Reinforcement Learning, which is a subfield of Machine Learning concerned with learning to make decisions in an environment. In Reinforcement Learning, an agent interacts with the environment by taking actions and receiving rewards. The goal of the agent is to learn a policy that maximizes its cumulative reward over time. 

In traditional Reinforcement Learning, the agent learns directly from interaction with the environment, using methods such as Monte Carlo methods, Temporal Difference Learning, and Q-Learning. These methods can be effective, but they can also be slow, especially in large and complex environments.

## Model Based Reinforcement Learning

Model Based Reinforcement Learning is an alternative approach to Reinforcement Learning that uses an explicitly learned model of the environment to make decisions. The model can be used to simulate the environment, allowing the agent to plan ahead and make more informed decisions.

The model can be learned using a variety of techniques, including Dynamic Programming, Monte Carlo Methods, and Temporal Difference Learning. Once the model is learned, it can be used to plan actions using techniques such as Value Iteration and Policy Iteration.

Model Based Reinforcement Learning has several advantages over traditional Reinforcement Learning. First, it can be more sample efficient, as the agent can use the model to simulate the environment and learn from simulated experience, rather than having to rely solely on real experience. Second, it can lead to more accurate and reliable decision-making, as the agent can use the model to predict the consequences of its actions before taking them. Finally, it can be more interpretable, as the agent's decision-making can be traced back to the learned model.

## Applications

Model Based Reinforcement Learning has been applied to a variety of domains, including robotics, video games, and finance. One notable application is in the game of chess, where a model-based approach was used to develop the Deep Blue chess-playing program that famously defeated world champion Garry Kasparov in 1997.

## Further Readings

- World Models: https://arxiv.org/abs/1803.10122
- Dreamer: https://arxiv.org/abs/1912.01603
- Planning with Value Functions: https://www.aaai.org/ocs/index.php/AAAI/AAAI16/paper/viewFile/12298/11779
- Model-Based RL in Real World: https://arxiv.org/abs/1804.00360
- Uncertainty in Model-Based RL: https://arxiv.org/abs/1906.08253
- Transfer Learning in Model-Based RL: https://arxiv.org/abs/1907.02057
- Exploration in Model-Based RL: https://arxiv.org/abs/2005.05951
- Multi-Task Model-Based RL: https://arxiv.org/abs/1802.08757
- Inverse Reinforcement Learning: https://ai.stanford.edu/~ang/papers/icml00-irl.pdf
- Imitation Learning: https://www.cs.cmu.edu/~sross1/publications/Ross-AIMagazine2011.pdf
