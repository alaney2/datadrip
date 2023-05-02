# Differentiability

In calculus, differentiability is a property of functions that describes their rate of change at a particular point. A function is said to be differentiable at a point if it has a well-defined derivative at that point. 

## Definition and Properties

A function $f(x)$ is said to be differentiable at a point $x=a$ if the limit 

$$ f'(a) = \lim_{h \to 0} \frac{f(a+h)-f(a)}{h} $$

exists. If $f(x)$ is differentiable at all points in its domain, then it is said to be a differentiable function.

If a function is differentiable at a point, then it must also be continuous at that point. However, the converse is not necessarily true. There exist functions that are continuous at a point but not differentiable at that point. 

Some examples of differentiable functions include polynomials, trigonometric functions, and exponential functions. 

## Differentiability and Optimization

Differentiability is a crucial property in optimization problems, where the goal is to find the maximum or minimum value of a function. If a function is differentiable, we can use the derivative to find critical points, where the derivative is equal to zero. These critical points can then be used to determine whether the function has a maximum, minimum, or saddle point.

## Differentiability in Machine Learning

Differentiability plays a key role in machine learning, particularly in deep learning. In neural networks, the backpropagation algorithm is used to compute the gradients of the loss function with respect to the weights of the network. This algorithm relies on the differentiability of the activation functions used in the network. 

## Conclusion

Differentiability is an important property of functions in calculus, optimization, and machine learning. It allows us to compute derivatives and gradients, which are essential for solving a wide range of problems.
