# Hamiltonian Monte Carlo

Hamiltonian Monte Carlo (HMC) is a Markov Chain Monte Carlo (MCMC) method used for sampling from complex, high-dimensional probability distributions. It is particularly useful in Bayesian inference, where it is often necessary to sample from the posterior distribution of model parameters. HMC combines concepts from Hamiltonian dynamics and Monte Carlo methods to efficiently explore the target distribution and generate samples with low autocorrelation.

## Background

In Bayesian inference, the goal is to compute the posterior distribution of model parameters given observed data. This involves calculating the product of the likelihood function and the prior distribution, and then normalizing it. However, in many cases, the normalization constant is intractable, and it is necessary to resort to sampling-based methods like MCMC to approximate the posterior distribution.

MCMC methods, such as the Metropolis-Hastings algorithm and Gibbs sampling, generate a sequence of samples from the target distribution by constructing a Markov chain with the desired stationary distribution. However, these methods can be inefficient in high-dimensional spaces or when the target distribution has strong correlations between variables. HMC addresses these issues by using Hamiltonian dynamics to explore the target distribution more efficiently.

## Hamiltonian Dynamics

Hamiltonian dynamics is a mathematical framework used to describe the motion of particles in classical mechanics. It is based on the concept of a Hamiltonian function, which represents the total energy of a system, consisting of kinetic and potential energies. The Hamiltonian function is defined as:


$$

H(\mathbf{q}, \mathbf{p}) = U(\mathbf{q}) + K(\mathbf{p})

$$


where $\mathbf{q}$ and $\mathbf{p}$ are the position and momentum vectors, respectively, $U(\mathbf{q})$ is the potential energy, and $K(\mathbf{p})$ is the kinetic energy. The equations of motion for the system are given by Hamilton's equations:


$$

\frac{d\mathbf{q}}{dt} = \frac{\partial H}{\partial \mathbf{p}}

$$



$$

\frac{d\mathbf{p}}{dt} = -\frac{\partial H}{\partial \mathbf{q}}

$$


These equations describe the time evolution of the position and momentum of particles in the system.

## HMC Algorithm

The HMC algorithm uses Hamiltonian dynamics to generate proposals for the MCMC method. The basic idea is to introduce auxiliary momentum variables $\mathbf{p}$ and define a joint distribution over the position variables $\mathbf{q}$ (corresponding to the model parameters) and the momentum variables:


$$

p(\mathbf{q}, \mathbf{p}) \propto \exp(-H(\mathbf{q}, \mathbf{p}))

$$


The target distribution is the marginal distribution of the position variables:


$$

p(\mathbf{q}) = \int p(\mathbf{q}, \mathbf{p}) d\mathbf{p}

$$


The HMC algorithm proceeds as follows:

1. Initialize the position vector $\mathbf{q}$ and the momentum vector $\mathbf{p}$.
2. Repeat for a specified number of iterations:
    1. Sample a new momentum vector $\mathbf{p}^*$ from a Gaussian distribution.
    2. Simulate the Hamiltonian dynamics for a fixed number of steps using a numerical integrator, such as the leapfrog method. This generates a new proposal for the position vector $\mathbf{q}^*$.
    3. Compute the acceptance probability:

    
$$

    \alpha(\mathbf{q}^*, \mathbf{p}^*; \mathbf{q}, \mathbf{p}) = \min\left(1, \frac{\exp(-H(\mathbf{q}^*, \mathbf{p}^*))}{\exp(-H(\mathbf{q}, \mathbf{p}))}\right)
    
$$


    4. Accept or reject the proposal according to the acceptance probability. If accepted, set $\mathbf{q} = \mathbf{q}^*$; otherwise, keep the current position vector.

The HMC algorithm generates samples from the target distribution by simulating the Hamiltonian dynamics, which allows it to efficiently explore the high-dimensional space and generate proposals with low autocorrelation. The choice of the numerical integrator and the number of steps in the simulation are crucial for the performance of the algorithm.

## Advantages and Limitations

HMC has several advantages over other MCMC methods:

- It can efficiently explore high-dimensional spaces and generate samples with low autocorrelation.
- It is less sensitive to the choice of tuning parameters, such as the step size and the number of steps in the simulation.
- It can be easily parallelized, which makes it suitable for large-scale problems.

However, HMC also has some limitations:

- It requires the gradient of the target distribution, which can be computationally expensive to compute for some models.
- It can be sensitive to the choice of the numerical integrator and the simulation parameters.
- It may not perform well when the target distribution has strong correlations between variables or when the geometry of the distribution is not well-suited for Hamiltonian dynamics.

Several extensions and improvements of HMC have been proposed to address these limitations, such as the No-U-Turn Sampler (NUTS), Stochastic Gradient Hamiltonian Monte Carlo (SGHMC), Riemannian Manifold Hamiltonian Monte Carlo (RMHMC), and Adaptive Hamiltonian Monte Carlo (AHMC).
