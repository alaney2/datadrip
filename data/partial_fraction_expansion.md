# Partial Fraction Expansion

Partial fraction expansion, also known as partial fraction decomposition, is a technique used in algebra and calculus to simplify complex rational expressions by breaking them down into simpler fractions. This method is particularly useful when dealing with Laplace transforms and inverse Laplace transforms, as it allows for easier calculation of these transforms.

## Definition

Given a rational function $R(x) = \frac{P(x)}{Q(x)}$, where $P(x)$ and $Q(x)$ are polynomials, the goal of partial fraction expansion is to express $R(x)$ as a sum of simpler rational functions with denominators that are factors of $Q(x)$. The process involves finding constants such that the sum of these simpler fractions is equal to the original rational function.

## Method

To perform partial fraction expansion, follow these steps:

1. **Factor the denominator**: Factor the polynomial $Q(x)$ into its irreducible factors. These factors can be linear, quadratic, or higher-degree polynomials.

2. **Determine the form of the partial fractions**: For each factor of the denominator, write down a corresponding fraction with an appropriate numerator. The numerator should have a degree one less than the degree of the denominator's factor. For example, if the factor is linear (degree 1), the numerator should be a constant. If the factor is quadratic (degree 2), the numerator should be a linear polynomial.

3. **Find the constants**: Equate the original rational function with the sum of the partial fractions and solve for the constants in the numerators of the partial fractions.

### Example

Consider the rational function $R(x) = \frac{3x^2 + 5x - 2}{x^3 + 2x^2 - x - 2}$. We want to find the partial fraction expansion of this function.

1. Factor the denominator: $x^3 + 2x^2 - x - 2 = (x - 1)(x^2 + 3x + 2)$.

2. Determine the form of the partial fractions:

   - For the linear factor $(x - 1)$, the corresponding fraction is $\frac{A}{x - 1}$, where $A$ is a constant.
   - For the quadratic factor $(x^2 + 3x + 2)$, the corresponding fraction is $\frac{Bx + C}{x^2 + 3x + 2}$, where $B$ and $C$ are constants.

3. Find the constants:

   - Equate the original rational function with the sum of the partial fractions:

     
$$
\frac{3x^2 + 5x - 2}{x^3 + 2x^2 - x - 2} = \frac{A}{x - 1} + \frac{Bx + C}{x^2 + 3x + 2}
$$


   - Clear the denominators by multiplying both sides by $(x - 1)(x^2 + 3x + 2)$:

     
$$
3x^2 + 5x - 2 = A(x^2 + 3x + 2) + (Bx + C)(x - 1)
$$


   - Expand and collect terms:

     
$$
3x^2 + 5x - 2 = (A + B)x^2 + (3A + B - C)x + 2A - C
$$


   - Equate the coefficients of the corresponding powers of $x$:

     
$$
\begin{cases}
     A + B = 3 \\
     3A + B - C = 5 \\
     2A - C = -2
     \end{cases}
$$


   - Solve the system of equations to find $A = 1$, $B = 2$, and $C = 5$.

The partial fraction expansion of the given rational function is:


$$
R(x) = \frac{3x^2 + 5x - 2}{x^3 + 2x^2 - x - 2} = \frac{1}{x - 1} + \frac{2x + 5}{x^2 + 3x + 2}
$$


## Applications

Partial fraction expansion is widely used in various fields of mathematics and engineering. Some of its applications include:

- **Laplace transforms**: In control theory and signal processing, partial fraction expansion is used to simplify the calculation of Laplace transforms and inverse Laplace transforms. By breaking down a complex rational function into simpler fractions, it becomes easier to find the corresponding time-domain function using known Laplace transform pairs and properties.

- **Integration**: Partial fraction expansion is a powerful technique for integrating rational functions. By expressing a rational function as a sum of simpler fractions, it becomes easier to find the antiderivative using basic integration techniques, such as substitution or integration by parts.

- **Differential equations**: In the study of ordinary differential equations, partial fraction expansion is used to find the particular solution of a non-homogeneous linear differential equation with constant coefficients. By expressing the forcing function as a sum of simpler fractions, it becomes easier to find the particular solution using known methods, such as undetermined coefficients or variation of parameters.
