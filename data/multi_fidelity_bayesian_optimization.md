# Multi Fidelity Bayesian Optimization

Multi Fidelity Bayesian Optimization (MFBO) is an extension of Bayesian Optimization (BO) that aims to optimize expensive black-box functions by leveraging information from lower fidelity approximations. In many real-world optimization problems, evaluations of the objective function can be computationally expensive or time-consuming. MFBO addresses this issue by incorporating cheaper, lower fidelity approximations of the objective function to guide the optimization process more efficiently.

## Bayesian Optimization

Bayesian Optimization is a global optimization technique for black-box functions that combines a probabilistic surrogate model, usually Gaussian Processes (GPs), with an acquisition function to guide the search for the optimal solution. The surrogate model is used to approximate the true objective function, and the acquisition function determines the next point to evaluate based on the current surrogate model. The main components of BO are:

1. **Surrogate Model**: A probabilistic model that approximates the true objective function. Gaussian Processes are commonly used due to their ability to model uncertainty and provide a posterior distribution over the function values.
2. **Acquisition Function**: A function that determines the next point to evaluate based on the current surrogate model. Common acquisition functions include Expected Improvement (EI), Upper Confidence Bound (UCB), and Probability of Improvement (PI).

## Multi Fidelity Models

In MFBO, the objective function is assumed to have multiple fidelities, where each fidelity corresponds to a different approximation of the true function. Lower fidelity approximations are cheaper to evaluate but may be less accurate, while higher fidelity approximations are more expensive but provide more accurate information. The goal is to leverage the cheaper, lower fidelity approximations to guide the optimization process and reduce the number of expensive, high fidelity evaluations required to find the optimal solution.

Multi fidelity models can be constructed using various techniques, such as:

1. **Co-Kriging**: An extension of Gaussian Processes that models the correlation between different fidelities.
2. **Multi Fidelity Gaussian Processes (MFGP)**: A Gaussian Process model that incorporates multiple fidelities by learning a linear combination of the lower fidelity models.
3. **Deep Multi Fidelity Gaussian Processes (DMFGP)**: A hierarchical Gaussian Process model that learns a non-linear combination of the lower fidelity models.

## Acquisition Functions for Multi Fidelity Bayesian Optimization

Acquisition functions in MFBO are designed to balance the trade-off between exploration and exploitation while considering the cost of evaluating different fidelities. Some popular acquisition functions for MFBO are:

1. **Multi Fidelity Expected Improvement (MFEI)**: An extension of the Expected Improvement acquisition function that incorporates the cost of evaluating different fidelities.
2. **Multi Fidelity Upper Confidence Bound (MFUCB)**: An extension of the Upper Confidence Bound acquisition function that considers the cost of evaluating different fidelities.
3. **Multi Fidelity Knowledge Gradient (MFKG)**: A knowledge gradient-based acquisition function that accounts for the cost of evaluating different fidelities.

## Applications of Multi Fidelity Bayesian Optimization

MFBO has been successfully applied to various optimization problems, including:

1. **Hyperparameter tuning**: Optimizing the hyperparameters of machine learning models, where lower fidelity approximations can be obtained by training models on smaller subsets of the data or for fewer iterations.
2. **Aerospace design**: Optimizing the design of aircraft and spacecraft, where lower fidelity approximations can be obtained using simplified physics models or lower resolution simulations.
3. **Material discovery**: Optimizing the properties of materials, where lower fidelity approximations can be obtained using cheaper experimental techniques or lower accuracy computational models.

## Conclusion

Multi Fidelity Bayesian Optimization is a powerful technique for optimizing expensive black-box functions by leveraging information from lower fidelity approximations. By incorporating cheaper, lower fidelity evaluations, MFBO can significantly reduce the computational cost and time required to find the optimal solution in various real-world optimization problems.
