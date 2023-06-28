# Introduction to Semidefinite Relaxation

Semidefinite relaxation (SDR) is a technique used in optimization theory, particularly in the field of convex optimization. It is used to transform a non-convex optimization problem into a convex one, which can then be solved more easily using standard convex optimization methods. 

## Overview

The basic idea behind SDR is to replace a non-convex constraint in an optimization problem with a semidefinite one. A semidefinite constraint is one that requires a matrix to be positive semidefinite, meaning that all its eigenvalues are non-negative. This type of constraint is convex, and so the resulting optimization problem is also convex.

## Semidefinite Relaxation in Practice

In practice, SDR is often used in the context of quadratic programming problems. These are optimization problems where the objective function is quadratic and the constraints are linear. Quadratic programming problems are not always convex, and so SDR can be used to transform them into convex problems.

The process of applying SDR to a quadratic programming problem involves replacing the quadratic objective function with a linear one, and replacing the linear constraints with semidefinite ones. This is done by introducing a new variable that represents the matrix of the quadratic form in the objective function, and then imposing the constraint that this matrix is positive semidefinite.

## Applications of Semidefinite Relaxation

SDR has a wide range of applications in various fields. In machine learning, it is used in the training of support vector machines, a type of supervised learning model. In signal processing, it is used in the design of digital filters. In control theory, it is used in the design of controllers for dynamical systems.

## Limitations of Semidefinite Relaxation

While SDR is a powerful tool for solving non-convex optimization problems, it is not without its limitations. One of the main limitations is that the solution obtained by SDR is not always feasible for the original non-convex problem. This is because the semidefinite relaxation of a non-convex problem is a relaxation, meaning that it is a superset of the original problem. Therefore, while the solution to the relaxed problem is guaranteed to be optimal for the relaxed problem, it is not guaranteed to be feasible or optimal for the original problem.

In spite of these limitations, semidefinite relaxation remains a valuable tool in the field of optimization theory, and its use continues to be explored in various applications.
