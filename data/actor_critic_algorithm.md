# Actor Critic Algorithm

The Actor Critic Algorithm is a type of reinforcement learning algorithm that combines the benefits of both policy-based and value-based methods. It is a model-free algorithm that learns to maximize the expected cumulative reward by iteratively updating two separate models: the actor and the critic.

## Actor Model

The actor model is responsible for selecting actions based on the current state of the environment. It learns a policy that maps states to actions, and its goal is to maximize the expected cumulative reward. The actor model is typically implemented as a neural network that takes the state as input and outputs a probability distribution over the possible actions.

## Critic Model

The critic model is responsible for estimating the value function of the current state. It learns to predict the expected cumulative reward starting from the current state, and its goal is to provide feedback to the actor model. The critic model is typically implemented as a neural network that takes the state as input and outputs a scalar value representing the expected cumulative reward.

## Algorithm

The Actor Critic Algorithm works by iteratively updating the actor and critic models based on the observed rewards. At each time step, the agent observes the current state of the environment, selects an action using the actor model, and receives a reward from the environment. The critic model is then used to estimate the expected cumulative reward starting from the current state, and the difference between the estimated reward and the actual reward is used to update the actor and critic models.

The update rule for the critic model is typically based on the temporal difference error, which is the difference between the estimated reward and the reward actually received:

$$\delta_t = r_t + \gamma V(s_{t+1}) - V(s_t)$$

where $r_t$ is the reward received at time step $t$, $s_t$ is the state at time step $t$, $V(s_t)$ is the estimated value of the state $s_t$, $V(s_{t+1})$ is the estimated value of the next state $s_{t+1}$, and $\gamma$ is the discount factor.

The update rule for the actor model is typically based on the policy gradient, which is the gradient of the expected cumulative reward with respect to the parameters of the actor model:

$$\nabla_\theta J(\theta) = \mathbb{E}_{s_t \sim p(s_t), a_t \sim \pi_\theta(a_t|s_t)}[\nabla_\theta \log \pi_\theta(a_t|s_t) Q(s_t, a_t)]$$

where $\theta$ are the parameters of the actor model, $J(\theta)$ is the expected cumulative reward, $p(s_t)$ is the distribution over states, $\pi_\theta(a_t|s_t)$ is the policy learned by the actor model, and $Q(s_t, a_t)$ is the estimated value of taking action $a_t$ in state $s_t$.

## Applications

The Actor Critic Algorithm has been successfully applied to a wide range of problems, including robotics, game playing, and natural language processing. It is particularly useful in environments with high-dimensional state and action spaces, where traditional value-based methods may struggle to converge.

## Further Readings

- Actor Critic Architecture
- Asynchronous Advantage Actor Critic
- Deep Deterministic Policy Gradient
