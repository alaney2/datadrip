# Trust Region Policy Optimization

Trust Region Policy Optimization (TRPO) is a reinforcement learning algorithm used for optimizing policies in Markov Decision Processes (MDPs). It is a model-free, on-policy algorithm that uses a trust region approach to ensure that the policy update does not deviate too far from the current policy. 

## Background

TRPO is a type of policy gradient method, which is a class of reinforcement learning algorithms that optimize policies by directly computing the gradient of the expected reward with respect to the policy parameters. Policy gradient methods have been shown to be effective in high-dimensional and continuous action spaces, where value-based methods such as Q-learning may struggle. 

TRPO was introduced by Schulman et al. in 2015 as a way to address some of the limitations of previous policy gradient methods, such as the difficulty in choosing appropriate step sizes and the tendency for updates to be too aggressive and lead to policy collapse. 

## Algorithm

The TRPO algorithm works by iteratively optimizing the policy by taking steps in the direction of the policy gradient while ensuring that the update does not deviate too far from the current policy. This is achieved by constraining the size of the policy update using a trust region, which is a region around the current policy where the update is guaranteed to improve the policy performance. 

The objective function for TRPO is given by:

$$ J(\theta) = \mathbb{E}_{\tau \sim p_{\theta_{old}}} \left[ \sum_{t=0}^T r(s_t, a_t) \right] $$

where $\theta$ are the policy parameters, $\theta_{old}$ are the parameters from the previous iteration, $\tau$ is a trajectory sampled from the current policy, $p_{\theta_{old}}$ is the probability distribution over trajectories under the old policy, $r(s_t, a_t)$ is the reward function, and $T$ is the time horizon. 

The policy update is then given by:

$$ \theta_{new} = \arg\max_{\theta} L_{\theta_{old}}(\theta) $$

where $L_{\theta_{old}}(\theta)$ is the surrogate objective function:

$$ L_{\theta_{old}}(\theta) = \mathbb{E}_{\tau \sim p_{\theta_{old}}} \left[ \frac{\pi_{\theta}(a_t|s_t)}{\pi_{\theta_{old}}(a_t|s_t)} A^{\pi_{\theta_{old}}}(s_t, a_t) \right] $$

where $\pi_{\theta}(a_t|s_t)$ is the probability of taking action $a_t$ in state $s_t$ under the policy $\pi_{\theta}$, $\pi_{\theta_{old}}(a_t|s_t)$ is the probability under the old policy, and $A^{\pi_{\theta_{old}}}(s_t, a_t)$ is the advantage function, which measures how much better it is to take action $a_t$ in state $s_t$ under the new policy compared to the old policy. 

The trust region constraint is then imposed by solving the following optimization problem:

$$ \max_{\theta} L_{\theta_{old}}(\theta) \quad \text{s.t.} \quad D_{KL}(\pi_{\theta_{old}} || \pi_{\theta}) \leq \delta $$

where $D_{KL}(\pi_{\theta_{old}} || \pi_{\theta})$ is the Kullback-Leibler divergence between the old policy and the new policy, and $\delta$ is the maximum allowed divergence. This constraint ensures that the policy update is not too far from the old policy, while still allowing for significant improvements in policy performance. 

## Further Readings

- Proximal Policy Optimization
- Deep Deterministic Policy Gradient
- Asynchronous Advantage Actor-Critic
