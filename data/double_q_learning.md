# Double Q Learning

Double Q Learning is a reinforcement learning algorithm that addresses the overestimation issue of the traditional Q Learning algorithm. 

## Background

Q Learning is a popular model-free reinforcement learning algorithm used to learn optimal policies in Markov Decision Processes (MDPs). The algorithm approximates the optimal action-value function, Q*(s,a), which represents the expected reward of taking action a in state s and following the optimal policy thereafter. The Q function is updated using the Bellman equation:

$$Q(s,a) \leftarrow Q(s,a) + \alpha [r + \gamma \max_{a'} Q(s',a') - Q(s,a)] $$

where r is the reward received after taking action a in state s and transitioning to state s', alpha is the learning rate, and gamma is the discount factor. 

One issue with Q Learning is that it tends to overestimate the true value of the actions in a given state. This is because the algorithm uses the same set of Q values to both select and evaluate actions, which can lead to a positive feedback loop where high Q values for an action are repeatedly selected and updated even if they are not actually optimal. 

## The Double Q Learning Algorithm

Double Q Learning addresses the overestimation problem by decoupling the action selection and evaluation processes. Instead of using the same set of Q values for both, the algorithm uses two sets of Q values, Q1 and Q2, to select and evaluate actions, respectively. The updated Q values are randomly assigned to either Q1 or Q2 with equal probability. The algorithm then selects actions based on the Q values in Q1 and evaluates them using the Q values in Q2. The Q values are updated using the following equation:

$$Q(s,a) \leftarrow Q(s,a) + \alpha [r + \gamma Q'(s',\arg\max_{a'} Q(s',a'),w) - Q(s,a)] $$

where Q' is the target Q value function, and w is the weights of the neural network used to estimate Q'. The target Q value function is updated periodically using the Q values from the other set of Q values. This decoupling prevents the algorithm from overestimating the true value of actions in a given state, as the action selection and evaluation processes are not biased towards the same set of Q values.

## Advantages and Disadvantages

Double Q Learning has been shown to outperform the traditional Q Learning algorithm in many environments, especially those with high-dimensional state and action spaces. However, the algorithm requires the use of two sets of Q values, which increases the computational and memory requirements of the algorithm. Additionally, the algorithm may still overestimate the value of actions in certain situations, such as when the Q values are initialized to high values.

## Applications

Double Q Learning has been successfully applied to a variety of domains, including robotics, game playing, and autonomous driving. It has also been used in combination with other reinforcement learning techniques, such as prioritized experience replay and dueling network architecture, to further improve performance.

## Further Readings

- Dueling Network Architecture
- Prioritized Experience Replay
- Deep Reinforcement Learning
- Model-Based Reinforcement Learning
- Continuous Control with Deep Reinforcement Learning
- Hindsight Experience Replay
- Multi-Agent Reinforcement Learning
- Imitation Learning
- Inverse Reinforcement Learning
