# Dreamer

Dreamer is a deep reinforcement learning algorithm that combines model-based and model-free approaches to learn from raw sensory inputs. It was introduced by Danijar Hafner, Timothy Lillicrap, Ian Fischer, Ruben Villegas, David Ha, Honglak Lee, and James Davidson in 2019. Dreamer is capable of learning long-term planning and exploration in complex environments, making it a promising algorithm for robotics and other real-world applications.

## Model-Based Reinforcement Learning

Dreamer uses a model-based approach to learn a world model, which is a learned representation of the environment that can be used to simulate future states and rewards. The world model is trained using a variational autoencoder (VAE) to learn a compressed representation of the input, and a dynamics model to predict the next state and reward given an action and the current state. The world model is used to generate imaginary rollouts, which are used to train the policy and value function.

## Model-Free Reinforcement Learning

Dreamer also uses a model-free approach to learn a policy and value function. The policy is learned using an actor-critic method, specifically soft actor-critic (SAC), which is a variant of the deep deterministic policy gradient (DDPG) algorithm. The value function is learned using a temporal difference (TD) learning algorithm.

## Combining Model-Based and Model-Free Approaches

Dreamer combines the model-based and model-free approaches by using the world model to generate imaginary rollouts, which are used to train the policy and value function. The policy and value function are then used to generate real rollouts, which are used to update the world model. This iterative process allows Dreamer to learn both short-term and long-term planning, as well as exploration in complex environments.

## Further Readings

- World Models: https://worldmodels.github.io/
- Deep Dream: https://ai.googleblog.com/2015/06/inceptionism-going-deeper-into-neural.html
- Generative Adversarial Networks: https://arxiv.org/abs/1406.2661
