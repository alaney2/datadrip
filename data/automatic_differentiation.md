# Automatic Differentiation

Automatic Differentiation (AD) is a powerful technique used in machine learning to numerically evaluate the derivatives of a function. AD is an alternative to symbolic differentiation and finite difference approximation techniques. Symbolic differentiation involves computing the derivatives of mathematical functions by using analytical methods, while finite difference approximation involves approximating the derivative of a function using finite differences.

AD computes the derivative of a function by recursively applying the chain rule of differentiation. The chain rule is a calculus rule which states that the derivative of a composite function is equal to the product of the derivatives of its individual functions. 

AD comes in two main flavors, reverse mode and forward mode differentiation. Reverse mode differentiation is commonly used in deep learning, while forward mode differentiation is commonly used in optimization.

## Reverse Mode Differentiation

Reverse mode differentiation is a form of automatic differentiation where the derivatives are computed starting from the output of the function and working backwards to the input variables. This is useful when the function has a single output but many inputs, which is often the case in deep learning.

Reverse mode AD works by computing the function's derivative with respect to its output and then using the chain rule to compute the derivative with respect to each input variable. This process is known as backpropagation and is a key component of deep learning.

## Forward Mode Differentiation

Forward mode differentiation is a form of automatic differentiation where the derivatives are computed starting from the input variables and working forwards to the output. This technique is useful when the function has a single input but many outputs, which is often the case in optimization.

Forward mode AD works by computing the function's derivative with respect to each input variable and then using the chain rule to compute the derivative with respect to the output. This process is known as the forward mode differentiation and is a key component of optimization.

## Conclusion

Automatic Differentiation is a powerful technique used in machine learning and optimization to numerically evaluate the derivatives of a function. It comes in two main flavors, reverse mode and forward mode differentiation, which are used depending on the nature of the problem. Reverse mode differentiation is commonly used in deep learning, while forward mode differentiation is commonly used in optimization. AD has enabled the use of complex models in machine learning and optimization that would have been impossible to compute using symbolic differentiation or finite difference approximation techniques.
