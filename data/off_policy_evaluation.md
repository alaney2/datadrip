# Off Policy Evaluation

Off policy evaluation is a technique used in reinforcement learning to evaluate the performance of a policy using data generated by a different policy. This is useful in situations where the optimal policy is not known and the agent must explore different policies to learn the optimal one. 

## Importance Sampling

Importance sampling is a technique used in off policy evaluation to estimate the expected value of a function under a different distribution than the one used to generate the data. This is done by re-weighting the samples according to the ratio of the target and behavior policies. The importance sampling estimator is given by:

$$\hat{V}_{\pi}(s) = \frac{\sum_{t=0}^{T-1} \rho_{t+1:t} G_t}{\sum_{t=0}^{T-1} \rho_{t+1:t}}$$

where $\rho_{t+1:t}$ is the ratio of the target policy and behavior policy at time $t$.

## Doubly Robust Estimators

Doubly robust estimators are a class of off policy evaluation methods that combine importance sampling with a model-based approach. They are more robust to model misspecification than importance sampling alone. The doubly robust estimator is given by:

$$\hat{V}_{\pi}(s) = \hat{V}_{\text{IS}}(s) + \hat{V}_{\text{model}}(s) - \hat{c}_{\text{IS}}(s)$$

where $\hat{V}_{\text{IS}}(s)$ is the importance sampling estimator, $\hat{V}_{\text{model}}(s)$ is the model-based estimator, and $\hat{c}_{\text{IS}}(s)$ is the importance sampling estimate of the state-action value function.

## Counterfactual Evaluation

Counterfactual evaluation is a technique used in off policy evaluation to estimate the performance of a policy by counterfactually changing the actions taken by the behavior policy. This is done by estimating the value of the state-action pairs that were not actually taken by the behavior policy. The counterfactual estimator is given by:

$$\hat{V}_{\pi}(s) = \frac{\sum_{a} \pi(a|s) \hat{q}(s,a) w(s,a)}{\sum_{a} b(a|s) w(s,a)}$$

where $\hat{q}(s,a)$ is the estimated state-action value function, $\pi(a|s)$ is the target policy, $b(a|s)$ is the behavior policy, and $w(s,a)$ is the propensity score, which is the ratio of the target and behavior policies.

## Inverse Reinforcement Learning

Inverse reinforcement learning is a technique used to learn the reward function of an environment from expert demonstrations. This can be used in off policy evaluation to estimate the performance of a policy by comparing it to the expert demonstrations. The inverse reinforcement learning algorithm learns a reward function that explains the observed behavior of the expert and then uses this reward function to evaluate the performance of the policy. 

Off policy evaluation is an important technique in reinforcement learning that allows agents to learn optimal policies without directly optimizing them. It is a useful tool in situations where the optimal policy is not known and the agent must explore different policies to learn the optimal one.
