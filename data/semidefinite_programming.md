# Semidefinite Programming

Semidefinite programming (SDP) is a subfield of convex optimization that involves finding the optimal solution to a linear objective function subject to linear matrix inequality constraints. SDP is a powerful tool in various fields, including control theory, signal processing, and quantum information theory.

## Overview

In SDP, the optimization problem involves finding a symmetric positive semidefinite matrix X that satisfies the constraints defined by a set of linear matrix inequalities. The objective function is a linear function of X. A matrix X is said to be positive semidefinite if all its eigenvalues are non-negative. 

The optimization problem can be expressed in the following form:

$$\begin{aligned}
\text{minimize} \quad & \langle C, X \rangle \\
\text{subject to} \quad & \langle A_i, X \rangle = b_i, \quad i = 1, 2, \ldots, m \\
& X \succeq 0, \\
\end{aligned}$$

where $C$ and $A_i$ are symmetric matrices, $\langle C, X \rangle = \text{tr}(CX)$ is the inner product between $C$ and $X$, and $\succeq$ denotes the positive semidefinite matrix inequality.

## Applications

SDP has a wide range of applications in various fields, including:

- **Control theory:** SDP can be used to design controllers that stabilize linear dynamical systems subject to constraints.
- **Signal processing:** SDP can be used in spectral estimation and filter design problems.
- **Quantum information theory:** SDP is used to solve problems related to quantum entanglement and quantum channel capacity.

## Solvers

Several software packages are available for solving SDP problems, including:

- **SDPT3:** A MATLAB solver for SDP problems.
- **CVX:** A MATLAB-based software for disciplined convex programming that can also solve SDP problems.
- **MOSEK:** A commercial solver that can solve large-scale SDP problems.

## Further Readings

- "SDP and SOS for Optimization" by Pablo A. Parrilo and Rekha R. Thomas.
- "Introduction to Semidefinite Relaxation" by Lieven Vandenberghe.
- "Convex Optimization and Semidefinite Programming" by Lieven Vandenberghe and Stephen Boyd.
- "Applications of Semidefinite Programming" by Shmuel Friedland and Henry Wolkowicz.
