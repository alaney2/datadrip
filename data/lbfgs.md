# Limited-memory Broyden-Fletcher-Goldfarb-Shanno Algorithm (L-BFGS)

The Limited-memory Broyden-Fletcher-Goldfarb-Shanno (L-BFGS) algorithm is a popular optimization algorithm used in machine learning and deep learning. It is a quasi-Newton method, which means that it is a type of optimization algorithm that uses an approximation of the Hessian matrix to find the minimum of a function.

## Background

The L-BFGS algorithm was developed by Jorge Nocedal in 1980s. It is an extension of the Broyden-Fletcher-Goldfarb-Shanno (BFGS) algorithm, which is another quasi-Newton method. The L-BFGS algorithm was designed to address the large scale optimization problems that the BFGS algorithm cannot handle efficiently.

## Algorithm

The L-BFGS algorithm is an iterative algorithm that tries to find the minimum of a function by updating the current estimate of the minimum. At each iteration, the algorithm uses the current estimate of the minimum and the gradient of the function to update the estimate. The update is done by approximating the inverse Hessian matrix using the information from the previous iterations. The approximation is done in a way that allows the algorithm to use only a limited amount of memory.

The L-BFGS algorithm has several advantages over other optimization algorithms like gradient descent and conjugate gradient method. It is particularly effective for problems with a large number of variables, as it only needs to store a limited number of vectors to approximate the Hessian matrix. This makes it memory-efficient and faster than other methods.

## Applications

The L-BFGS algorithm is widely used in machine learning and deep learning. It is often used to train models that have a large number of parameters, such as neural networks. It has been shown to be effective in optimizing the loss function in these models and achieving state-of-the-art performance in many tasks.

## Further Readings

- L-BFGS-B Algorithm
- Conjugate Gradient Method
- Stochastic Gradient Descent
