# Numerical Integration

Numerical Integration is a branch of calculus that deals with approximating the definite integral of a function. This technique is used when the antiderivative of the function is not known or is too difficult to compute. Numerical integration involves dividing the interval of integration into smaller subintervals and then approximating the area under the curve of the function in each subinterval using various numerical techniques.

## Trapezoidal Rule

The Trapezoidal Rule is one of the simplest numerical integration methods. It approximates the area under the curve of a function by dividing the interval of integration into smaller subintervals and approximating the area of each subinterval with a trapezoid. The formula for the Trapezoidal Rule is given by:

$$\int_a^bf(x)dx \approx \frac{b-a}{2n}\left(f(a) + 2\sum_{i=1}^{n-1}f(x_i) + f(b)\right)$$

where $n$ is the number of subintervals and $x_i = a + ih$ where $h = \frac{b-a}{n}$.

## Simpson's Rule

Simpson's Rule is a more accurate numerical integration method. It approximates the area under the curve of a function by dividing the interval of integration into smaller subintervals and approximating the area of each subinterval with a parabola. The formula for Simpson's Rule is given by:

$$\int_a^bf(x)dx \approx \frac{b-a}{6}\left(f(a) + 4f\left(\frac{a+b}{2}\right) + f(b)\right)$$

## Gauss-Legendre Quadrature

Gauss-Legendre Quadrature is a numerical integration method that uses a set of predetermined weights and nodes to approximate the integral of a function. The formula for Gauss-Legendre Quadrature is given by:

$$\int_a^bf(x)dx \approx \frac{b-a}{2}\sum_{i=1}^n w_i f\left(\frac{(b-a)x_i + (b+a)}{2}\right)$$

where $x_i$ are the nodes and $w_i$ are the corresponding weights.

## Monte Carlo Integration

Monte Carlo Integration is a numerical integration method that uses random sampling to approximate the integral of a function. It involves generating random points within the interval of integration and then calculating the average value of the function at those points. The formula for Monte Carlo Integration is given by:

$$\int_a^bf(x)dx \approx (b-a)\frac{1}{n}\sum_{i=1}^nf(x_i)$$

where $x_i$ are random points within the interval of integration.

Numerical Integration is a powerful tool in mathematical analysis and is widely used in various fields such as physics, engineering, and finance. By choosing an appropriate numerical integration method, one can accurately estimate the integral of a function even when the antiderivative is not known.
