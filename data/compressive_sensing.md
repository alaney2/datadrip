# Compressive Sensing

Compressive sensing (CS) is a signal processing technique that enables the reconstruction of sparse signals from a small number of linear measurements. It is based on the idea that if a signal has a sparse representation in some basis, it can be recovered from a small number of measurements by exploiting this sparsity. Compressive sensing has found applications in various fields, such as image processing, radar, and wireless communication.

## Background

Traditionally, signal acquisition follows the Nyquist-Shannon sampling theorem, which states that a continuous-time signal must be sampled at least at twice its highest frequency to avoid aliasing and to enable perfect reconstruction. However, this approach can lead to a large number of samples, especially for high-frequency signals, and may not be feasible in some applications due to storage or computational constraints.

Compressive sensing offers an alternative approach to signal acquisition by exploiting the sparsity of the signal in some domain. A signal is considered sparse if most of its coefficients in a certain basis are zero or close to zero. For example, an image may have a sparse representation in the wavelet domain, where most wavelet coefficients are zero or small. By leveraging this sparsity, compressive sensing can recover the original signal from a small number of linear measurements, often much fewer than required by the Nyquist-Shannon sampling theorem.

## Mathematical Formulation

Let $\boldsymbol{x} \in \mathbb{R}^N$ be a sparse signal with $K$ non-zero coefficients in a certain basis, and let $\boldsymbol{y} \in \mathbb{R}^M$ be the linear measurements of $\boldsymbol{x}$, where $M < N$. The measurement process can be modeled as:


$$

\boldsymbol{y} = \boldsymbol{A}\boldsymbol{x}

$$


where $\boldsymbol{A} \in \mathbb{R}^{M \times N}$ is the measurement matrix. The goal of compressive sensing is to recover $\boldsymbol{x}$ from $\boldsymbol{y}$ and $\boldsymbol{A}$.

Since $M < N$, the problem is underdetermined, and there are infinitely many solutions that satisfy the equation. However, by exploiting the sparsity of $\boldsymbol{x}$, it is possible to find a unique solution. One common approach is to solve the following optimization problem:


$$

\min_{\boldsymbol{x}} \|\boldsymbol{x}\|_0 \quad \text{subject to} \quad \boldsymbol{y} = \boldsymbol{A}\boldsymbol{x}

$$


where $\|\boldsymbol{x}\|_0$ denotes the $l_0$-norm, which counts the number of non-zero elements in $\boldsymbol{x}$. This problem is known as the $l_0$-minimization problem and is NP-hard. However, under certain conditions on $\boldsymbol{A}$, such as the Restricted Isometry Property (RIP), the $l_0$-minimization problem can be relaxed to the $l_1$-minimization problem, which is convex and can be solved efficiently:


$$

\min_{\boldsymbol{x}} \|\boldsymbol{x}\|_1 \quad \text{subject to} \quad \boldsymbol{y} = \boldsymbol{A}\boldsymbol{x}

$$


where $\|\boldsymbol{x}\|_1$ denotes the $l_1$-norm, which is the sum of the absolute values of the elements in $\boldsymbol{x}$.

## Reconstruction Algorithms

There are several algorithms for reconstructing the sparse signal from the linear measurements. Some popular methods include:

1. **Basis Pursuit (BP)**: This method solves the $l_1$-minimization problem using linear programming techniques. It has been shown that under certain conditions, the solution of the $l_1$-minimization problem is equivalent to the solution of the $l_0$-minimization problem, and thus the original sparse signal can be recovered exactly.

2. **Orthogonal Matching Pursuit (OMP)**: This is a greedy algorithm that iteratively selects the columns of the measurement matrix that best match the current residual. At each iteration, the algorithm projects the residual onto the selected columns and updates the sparse signal estimate. The algorithm terminates when a stopping criterion is met, such as a maximum number of iterations or a desired residual error.

3. **Total Variation Minimization (TVM)**: This method is particularly useful for reconstructing piecewise constant signals, such as images. It involves minimizing the total variation of the signal, which is the sum of the absolute differences between adjacent elements, subject to the linear measurements. This can be formulated as a convex optimization problem and solved using various techniques, such as the split Bregman method or the alternating direction method of multipliers (ADMM).

## Applications

Compressive sensing has been applied to various fields, including:

- **Image Processing**: In image compression, CS can be used to reduce the number of measurements required to represent an image, leading to more efficient storage and transmission. In image reconstruction, CS can be used to recover high-resolution images from low-resolution measurements, such as in single-pixel cameras or magnetic resonance imaging (MRI).

- **Radar**: In radar systems, CS can be used to reduce the number of samples required for target detection and localization, leading to faster processing and reduced power consumption.

- **Wireless Communication**: In wireless communication systems, CS can be used to reduce the number of samples required for channel estimation and signal detection, leading to more efficient use of the available bandwidth and improved performance.

- **Sensor Networks**: In sensor networks, CS can be used to reduce the amount of data that needs to be transmitted from the sensors to a central processing unit, leading to reduced power consumption and increased network lifetime.

In summary, compressive sensing is a powerful signal processing technique that enables the reconstruction of sparse signals from a small number of linear measurements. By exploiting the sparsity of the signal in some domain, CS can overcome the limitations of traditional sampling methods and find applications in various fields, such as image processing, radar, and wireless communication.
