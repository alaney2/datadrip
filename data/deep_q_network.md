# Deep Q Network

A **Deep Q Network (DQN)** is a type of reinforcement learning algorithm that uses a deep neural network to approximate the Q-value function. The Q-value function is a measure of the expected future reward for taking a particular action in a given state. 

DQNs were first introduced by Mnih et al. in their 2013 paper, "Playing Atari with Deep Reinforcement Learning." Since then, they have been used in a variety of applications, including robotics, game playing, and autonomous driving.

## How it Works

The DQN algorithm is based on the Q-learning algorithm, which is a type of reinforcement learning algorithm that learns to make decisions by maximizing a reward signal. In Q-learning, the agent learns to estimate the Q-value function by iteratively updating its estimates based on the Bellman equation:

$$Q(s,a) \leftarrow Q(s,a) + \alpha(r + \gamma \max_{a'} Q(s',a') - Q(s,a))$$

where $s$ is the current state, $a$ is the action taken in that state, $r$ is the reward received for taking that action, $s'$ is the next state, $\alpha$ is the learning rate, and $\gamma$ is the discount factor.

In DQN, the Q-value function is approximated using a deep neural network. The neural network takes the current state as input and outputs a Q-value for each possible action. The agent then selects the action with the highest Q-value.

During training, the DQN algorithm uses experience replay to improve the stability and efficiency of learning. Experience replay involves storing the agent's experiences (i.e., state, action, reward, and next state) in a replay buffer and randomly sampling from the buffer to train the neural network. This helps to decorrelate the agent's experiences and reduce the likelihood of overfitting.

## Advantages and Limitations

One advantage of DQN is its ability to learn directly from high-dimensional sensory inputs, such as images. This makes it well-suited for applications such as game playing and robotics.

However, DQN has some limitations. One limitation is that it can be slow to converge, especially in complex environments. Another limitation is that it can be prone to overestimating Q-values, which can lead to suboptimal policies.

## Further Readings

- Double Q-learning: a modification of the DQN algorithm that addresses the problem of overestimation.
- Dueling network architecture: a modification of the DQN architecture that separates the estimation of the state value and the advantage of each action.
- Prioritized experience replay: a modification of the experience replay mechanism that prioritizes experiences based on their expected learning progress.
