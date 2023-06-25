# Extended Kalman Filter

The Extended Kalman Filter (EKF) is an extension of the Kalman Filter, a popular recursive state estimation algorithm for linear systems with Gaussian noise. The EKF is designed to handle nonlinear systems, which are common in real-world applications such as robotics, navigation, and sensor fusion. The EKF approximates the nonlinear system by linearizing it around the current state estimate, and then applying the standard Kalman Filter equations. This linearization is typically done using the first-order Taylor series expansion, also known as the Jacobian.

## Nonlinear System Model

A nonlinear system can be described by the following state-space model:


$$

x_{k+1} = f(x_k, u_k) + w_k \\
z_k = h(x_k) + v_k

$$


where $x_k$ is the state vector at time $k$, $u_k$ is the control input, $z_k$ is the observation, $f$ and $h$ are nonlinear functions representing the system dynamics and observation model, respectively, and $w_k$ and $v_k$ are Gaussian noise processes with zero mean and covariance matrices $Q_k$ and $R_k$, respectively.

## Linearization

The EKF linearizes the nonlinear system by computing the Jacobian matrices $F_k$ and $H_k$ at each time step. The Jacobian matrix is the matrix of first-order partial derivatives of a function with respect to its variables. For the system dynamics function $f$ and observation model $h$, the Jacobian matrices are defined as:


$$

F_k = \frac{\partial f}{\partial x}(x_k, u_k) \\
H_k = \frac{\partial h}{\partial x}(x_k)

$$


These matrices are used to approximate the nonlinear system as a linear system, which can then be processed using the standard Kalman Filter equations.

## Extended Kalman Filter Algorithm

The EKF algorithm consists of two main steps: prediction and update. The prediction step computes the a priori state estimate and its covariance, while the update step computes the a posteriori state estimate and its covariance based on the observation.

1. **Prediction:**

    a. Compute the a priori state estimate:

    
$$

    \hat{x}_{k+1|k} = f(\hat{x}_{k|k}, u_k)
    
$$


    b. Compute the a priori covariance estimate:

    
$$

    P_{k+1|k} = F_k P_{k|k} F_k^T + Q_k
    
$$


2. **Update:**

    a. Compute the Kalman gain:

    
$$

    K_{k+1} = P_{k+1|k} H_{k+1}^T (H_{k+1} P_{k+1|k} H_{k+1}^T + R_{k+1})^{-1}
    
$$


    b. Compute the a posteriori state estimate:

    
$$

    \hat{x}_{k+1|k+1} = \hat{x}_{k+1|k} + K_{k+1} (z_{k+1} - h(\hat{x}_{k+1|k}))
    
$$


    c. Compute the a posteriori covariance estimate:

    
$$

    P_{k+1|k+1} = (I - K_{k+1} H_{k+1}) P_{k+1|k}
    
$$


The EKF algorithm is initialized with an initial state estimate $\hat{x}_{0|0}$ and its covariance $P_{0|0}$. The algorithm is then run recursively for each time step, updating the state estimate and its covariance based on the control input and observation.

## Limitations and Alternatives

The EKF has some limitations, mainly due to its linearization approach. The linearization can introduce errors in the state estimate, especially when the system is highly nonlinear or the noise is non-Gaussian. Moreover, the EKF can be computationally expensive, as it requires the calculation of Jacobian matrices and matrix inversions at each time step.

There are alternative algorithms that address some of these limitations, such as the Unscented Kalman Filter (UKF) and the Particle Filter (PF). The UKF uses a deterministic sampling approach called the Unscented Transform to approximate the nonlinear system, while the PF uses a set of random samples (particles) to represent the state distribution. Both of these methods can provide better performance in certain situations, depending on the specific characteristics of the system and noise.
