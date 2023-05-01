# Temporal Difference Learning

Temporal Difference (TD) learning is a reinforcement learning (RL) technique that combines ideas from both Monte Carlo (MC) methods and Dynamic Programming (DP) methods. TD learning is a model-free approach, meaning it does not require a complete model of the environment, and it can learn from incomplete or noisy information.

TD learning algorithms estimate the value function of a policy by updating the value function based on a sample of the observed reward and state transitions. It uses the difference between two estimates of the value function to update the current estimate. The difference is called the temporal difference.

TD learning has several advantages over other RL methods. It is more efficient than MC methods because it updates the value function after each time step instead of waiting until the end of an episode. It is also more effective than DP methods because it can handle large state spaces and does not require a complete model of the environment.

## TD(0) Algorithm

TD(0) is a simple TD learning algorithm that updates the value function after each time step using the following equation:

$$V(s_t) \leftarrow V(s_t) + \alpha[r_{t+1} + \gamma V(s_{t+1}) - V(s_t)]$$

where $V(s_t)$ is the estimated value of state $s_t$, $\alpha$ is the learning rate, $r_{t+1}$ is the observed reward at time step $t+1$, $\gamma$ is the discount factor that determines the importance of future rewards, and $s_{t+1}$ is the next state observed at time step $t+1$.

The algorithm starts with an initial estimate of the value function for each state and updates the estimate after each time step. The learning rate determines how much the estimate is updated based on the difference between the observed and predicted reward.

## SARSA Algorithm

SARSA is a TD learning algorithm that updates the value function based on the observed state, action, reward, and next state. It stands for State-Action-Reward-State-Action and uses the following update equation:

$$Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha[r_{t+1} + \gamma Q(s_{t+1}, a_{t+1}) - Q(s_t, a_t)]$$

where $Q(s_t, a_t)$ is the estimated value of taking action $a_t$ in state $s_t$, $\alpha$ is the learning rate, $r_{t+1}$ is the observed reward at time step $t+1$, $\gamma$ is the discount factor that determines the importance of future rewards, $s_{t+1}$ is the next state observed at time step $t+1$, and $a_{t+1}$ is the next action taken in state $s_{t+1}$.

SARSA is an on-policy algorithm, meaning it updates the value function based on the policy being followed. It is useful for problems where the agent must interact with the environment in real-time, such as robotics or game playing.

## Q-Learning Algorithm

Q-learning is a TD learning algorithm that updates the value function based on the observed state, action, reward, and maximum value of the next state. It uses the following update equation:

$$Q(s_t, a_t) \leftarrow Q(s_t, a_t) + \alpha[r_{t+1} + \gamma \max_{a} Q(s_{t+1}, a) - Q(s_t, a_t)]$$

where $Q(s_t, a_t)$ is the estimated value of taking action $a_t$ in state $s_t$, $\alpha$ is the learning rate, $r_{t+1}$ is the observed reward at time step $t+1$, $\gamma$ is the discount factor that determines the importance of future rewards, $s_{t+1}$ is the next state observed at time step $t+1$, and $\max_{a} Q(s_{t+1}, a)$ is the maximum value of taking any action in the next state.

Q-learning is an off-policy algorithm, meaning it updates the value function based on the policy that maximizes the value function. It is useful for problems where the agent can explore the environment freely and learn from experience.

## Further Readings

- SARSA Algorithm
- Expected SARSA Algorithm
- Deep Q Networks
- Double Q Learning
- Prioritized Experience Replay
- Actor-Critic Methods
- Asynchronous Advantage Actor-Critic
- Model-Based RL
- Off-Policy Evaluation
- Multi-Agent Reinforcement Learning
