# AdaBound Optimizer

AdaBound is an optimization algorithm for training deep learning models, proposed by Luo et al. in 2019. It is designed to combine the advantages of both Adaptive Gradient Methods (such as Adam) and Stochastic Gradient Descent (SGD). The main idea behind AdaBound is to employ dynamic bounds on the learning rates of the adaptive methods, which allows the algorithm to converge to an optimal solution in a similar manner as SGD.

## Background

Adaptive gradient methods, such as Adam, AdaGrad, and RMSProp, have gained popularity in training deep learning models due to their ability to adapt the learning rate for each parameter individually. This can lead to faster convergence and better performance on certain tasks. However, these methods have been shown to generalize poorly compared to SGD, especially in the later stages of training.

The authors of AdaBound argue that the poor generalization of adaptive methods is due to their unbounded learning rates, which can cause the model to overshoot the optimal solution. To address this issue, AdaBound introduces dynamic bounds on the learning rates, which are gradually tightened during training. This allows the algorithm to enjoy the fast convergence of adaptive methods in the early stages of training, while converging to an optimal solution similar to SGD in the later stages.

## Algorithm

The AdaBound algorithm is an extension of the Adam optimizer. It maintains the first and second moment estimates of the gradients, denoted by $m_t$ and $v_t$, respectively. The update rule for the parameters $w_t$ is given by:


$$

w_{t+1} = w_t - \frac{\alpha_t}{\sqrt{v_t} + \epsilon} \cdot m_t

$$


where $\alpha_t$ is the learning rate at time step $t$, and $\epsilon$ is a small constant to prevent division by zero.

In AdaBound, the learning rate $\alpha_t$ is replaced with a bounded learning rate $\alpha_t^{\prime}$, which is computed as follows:


$$

\alpha_t^{\prime} = \min(\alpha_t, \frac{1}{\sqrt{v_t} + \epsilon} \cdot \gamma_t)

$$


where $\gamma_t$ is a dynamic bound on the learning rate, which is updated at each time step according to:


$$

\gamma_t = \gamma_{\text{init}} + \frac{t}{T} (\gamma_{\text{final}} - \gamma_{\text{init}})

$$


Here, $\gamma_{\text{init}}$ and $\gamma_{\text{final}}$ are the initial and final bounds on the learning rate, and $T$ is the total number of training steps. The authors recommend setting $\gamma_{\text{init}} = 0.1$ and $\gamma_{\text{final}} = 1$.

The update rule for the parameters in AdaBound is then given by:


$$

w_{t+1} = w_t - \frac{\alpha_t^{\prime}}{\sqrt{v_t} + \epsilon} \cdot m_t

$$


## Implementation

Most deep learning frameworks, such as TensorFlow and PyTorch, provide built-in support for the Adam optimizer. To implement AdaBound, one can simply modify the learning rate update rule in the existing Adam implementation.

Here is an example implementation of AdaBound in PyTorch:

```python
import torch
from torch.optim import Optimizer

class AdaBound(Optimizer):
    def __init__(self, params, lr=1e-3, betas=(0.9, 0.999), final_lr=0.1, gamma=1e-3,
                 eps=1e-8, weight_decay=0, amsbound=False):
        defaults = dict(lr=lr, betas=betas, final_lr=final_lr, gamma=gamma, eps=eps,
                        weight_decay=weight_decay, amsbound=amsbound)
        super(AdaBound, self).__init__(params, defaults)

    def step(self, closure=None):
        loss = None
        if closure is not None:
            loss = closure()

        for group in self.param_groups:
            for p in group['params']:
                if p.grad is None:
                    continue
                grad = p.grad.data
                if grad.is_sparse:
                    raise RuntimeError('AdaBound does not support sparse gradients')

                state = self.state[p]

                # State initialization
                if len(state) == 0:
                    state['step'] = 0
                    state['exp_avg'] = torch.zeros_like(p.data)
                    state['exp_avg_sq'] = torch.zeros_like(p.data)

                exp_avg, exp_avg_sq = state['exp_avg'], state['exp_avg_sq']
                beta1, beta2 = group['betas']

                state['step'] += 1

                if group['weight_decay'] != 0:
                    grad = grad.add(group['weight_decay'], p.data)

                # Decay the first and second moment running average coefficient
                exp_avg.mul_(beta1).add_(1 - beta1, grad)
                exp_avg_sq.mul_(beta2).addcmul_(1 - beta2, grad, grad)

                denom = exp_avg_sq.sqrt().add_(group['eps'])

                bias_correction1 = 1 - beta1 ** state['step']
                bias_correction2 = 1 - beta2 ** state['step']
                step_size = group['lr'] * (bias_correction1 / bias_correction2).sqrt()

                # Applies bounds on actual learning rate
                final_lr = group['final_lr'] * group['lr'] / group['base_lr']
                lower_bound = final_lr * (1 - 1 / (group['gamma'] * state['step'] + 1))
                upper_bound = final_lr * (1 + 1 / (group['gamma'] * state['step']))
                step_size = torch.full_like(denom, step_size)
                step_size.div_(denom).clamp_(lower_bound, upper_bound).mul_(exp_avg)

                p.data.add_(-step_size)

        return loss
```

## Conclusion

AdaBound is a promising optimization algorithm that combines the advantages of adaptive gradient methods and SGD. It has been shown to achieve better generalization performance than Adam on several benchmark datasets. However, it is worth noting that there are other recent optimizers, such as AMSBound and RAdam, that also address the generalization issues of adaptive methods and may provide better performance in certain scenarios.
