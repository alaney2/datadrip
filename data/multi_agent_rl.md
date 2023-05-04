# Multi Agent RL

Multi Agent Reinforcement Learning (MARL) is a subfield of Reinforcement Learning (RL) that deals with the problem of learning in multi-agent environments. In MARL, multiple agents interact with each other and the environment, and each agent's objective is to maximize its own reward function. The agents may have different objectives, and their actions may affect the rewards of other agents. 

MARL is a challenging problem because the agents must learn to coordinate their actions to achieve a common goal, while also competing with each other for resources. This requires the agents to reason about the intentions and beliefs of other agents, and to adapt their behavior accordingly. 

## Approaches to Multi Agent RL

There are two main approaches to MARL: 

### Centralized Training, Decentralized Execution (CTDE)

In CTDE, a centralized agent is trained to make decisions for all the agents, but during execution, each agent acts independently based on its own observations. This approach simplifies the learning problem, but may not scale well to large numbers of agents or complex environments. 

### Decentralized Training, Decentralized Execution (DTDE)

In DTDE, each agent is trained independently using its own observations and rewards. This approach is more scalable and can handle complex environments, but may require more training data and may be more difficult to coordinate the agents. 

## Applications of Multi Agent RL

MARL has many applications in real-world scenarios, such as:

- Traffic control: multiple autonomous vehicles must coordinate to optimize traffic flow and avoid collisions. 
- Robotics: multiple robots must coordinate to perform tasks such as assembly or search and rescue. 
- Game AI: multiple agents must compete or cooperate to win a game. 

## Challenges in Multi Agent RL

MARL poses several challenges that are not present in single-agent RL, such as:

- Non-stationarity: the environment may change as the agents learn, making it difficult to generalize from past experience. 
- Credit assignment: it may be difficult to assign credit for a reward to a particular agent, especially if the agents are cooperating. 
- Exploration-exploitation tradeoff: the agents must balance exploring new actions with exploiting actions that have worked well in the past. 

## Further Readings

- "Multi-Agent Reinforcement Learning in Competitive Environments" by L. Panait and S. Luke
- "Multi-Agent Reinforcement Learning in Cooperative Environments" by T. Tan
- "Multi-Agent Reinforcement Learning with Heterogeneous Agents" by R. Lowe et al.
