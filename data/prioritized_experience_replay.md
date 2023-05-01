# Prioritized Experience Replay

**Prioritized Experience Replay (PER)** is a method used in Reinforcement Learning (RL) to improve the efficiency of learning by prioritizing the experiences that the agent learns from. It was introduced in a 2015 paper by Tom Schaul, John Quan, Ioannis Antonoglou, and David Silver of Google DeepMind. 

## Background

In RL, the agent learns to perform an action in a given state based on a reward signal that it receives from the environment. The agent's goal is to maximize the total expected reward over time, which is known as the **return**. The agent learns by interacting with the environment and observing the consequences of its actions. The set of experiences that the agent collects during its interaction with the environment is known as the **experience replay buffer**.

Experience replay is a technique used in RL to improve learning efficiency by randomly sampling experiences from the replay buffer during the training process. By doing so, it reduces the correlations between consecutive experiences, making learning more efficient. 

## The PER Algorithm

The PER algorithm extends the basic experience replay algorithm by prioritizing the experiences that the agent learns from. The intuition behind this is that some experiences are more important than others for learning, and so the agent should focus on those experiences. The priority of an experience is based on a measure of how much the agent can learn from it, which is known as the **TD error**. 

The TD error is the difference between the predicted Q-value and the actual Q-value for an experience. The Q-value is the expected return that the agent will receive by taking a particular action in a given state. The predicted Q-value is calculated using a neural network, while the actual Q-value is calculated using the Bellman equation, which is a recursive equation that relates the Q-value of a state-action pair to the Q-values of the next state-action pairs. The TD error is calculated as follows:

$$ TD\_error = (r + \gamma \max_{a'}Q(s',a',\theta_i^{-}) - Q(s,a,\theta_i))^{\alpha} $$

where $r$ is the reward received for the action, $\gamma$ is the discount factor, $s'$ is the next state, $a'$ is the next action, $Q(s,a,\theta_i)$ is the predicted Q-value, $Q(s',a',\theta_i^{-})$ is the target Q-value calculated using the target network, $\theta_i$ is the parameters of the neural network at time step $i$, and $\alpha$ is a hyperparameter that controls the degree of prioritization.

The TD error is then used to assign a priority to each experience. The experiences with higher TD errors are given higher priorities and are more likely to be sampled during the training process. The probability of sampling an experience is given by:

$$ P(i) = \frac{p_i^{\beta}}{\sum_k p_k^{\beta}} $$

where $p_i$ is the priority of experience $i$, $\beta$ is a hyperparameter that controls the degree of importance sampling, and the sum is taken over all experiences in the replay buffer.

## Advantages of PER

PER has several advantages over the basic experience replay algorithm:

- It reduces the number of experiences required for learning, making learning more efficient.
- It focuses the agent's attention on important experiences, making learning more effective.
- It reduces the variance of the updates to the neural network, making learning more stable.
- It can be combined with other RL algorithms, such as Double Q-learning and Dueling Network Architectures, to further improve learning performance.

## Further Readings

- Double Q-learning
- Dueling Network Architectures
- Rainbow Algorithm
- Actor-Critic Methods
- Asynchronous Methods
- Batch Normalization
- Exploration vs Exploitation
- Imitation Learning
- Online Learning
- Policy Gradient Methods
