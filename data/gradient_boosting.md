# Gradient Boosting

Gradient Boosting is a machine learning technique for regression and classification problems, which produces a prediction model in the form of an ensemble of weak prediction models, typically decision trees. It builds the model in a stage-wise fashion like other boosting methods do, and it generalizes them by allowing optimization of an arbitrary differentiable loss function.

## Overview

The idea of gradient boosting originated in the observation by Leo Breiman that boosting can be interpreted as an optimization algorithm on a suitable cost function. Explicit regression gradient boosting algorithms were subsequently developed by Jerome H. Friedman, with a strong influence from the work of Leo Breiman.

## Methodology

Gradient boosting involves three elements:

1. **A loss function to be optimized.** The loss function used depends on the type of problem being solved. It must be differentiable, but it does not have to be decoupled, as the boosting algorithm will derive the necessary relationship.

2. **A weak learner to make predictions.** Decision trees are used as the weak learner in gradient boosting.

3. **An additive model to add weak learners to minimize the loss function.** Trees are added one at a time, and existing trees in the model are not changed. A gradient descent procedure is used to minimize the loss when adding trees.

## Algorithm

The procedure to perform gradient boosting is as follows:

1. Initialize the model with a constant value, such as the mean of the output variable for regression tasks.

2. For each iteration in the boosting process:

    a. Compute the negative gradient of the loss function for each training sample.

    b. Fit a decision tree to the negative gradient values.

    c. Compute the multiplier for the decision tree by solving a one-dimensional optimization problem.

    d. Update the model by adding the decision tree multiplied by the multiplier.

3. The output for the new instance is predicted by summing the predictions from all decision trees.

## Advantages and Disadvantages

Gradient boosting has several advantages:

- It supports different loss function.
- It works well with interactions.
- It has robustness to outliers in output space (via robust loss functions).

However, it also has some disadvantages:

- It requires careful tuning of different hyper-parameters.
- It may overemphasize outliers and create over-complex trees.
- It has scalability, due to the sequential nature of boosting it can hardly be parallelized.

## Applications

Gradient boosting can be used for both regression and classification problems. It has been used successfully for ranking problems, such as web search ranking and ecology.
