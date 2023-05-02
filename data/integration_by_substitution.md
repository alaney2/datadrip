# Integration By Substitution

**Integration by substitution** is a technique used to evaluate integrals that cannot be solved by simple integration techniques like integration by parts, partial fractions, or trigonometric substitution. It is also known as **u-substitution** and is one of the most commonly used methods for evaluating integrals. 

## How It Works

The integration by substitution method involves substituting a variable in the integral expression with a different variable. This substitution can make the integral easier to solve. 

For example, consider the integral:

$$\int x \cos(x^2) dx$$

This integral cannot be solved by simple integration techniques. However, by making the substitution:

$$u = x^2$$

We get:

$$\frac{du}{dx} = 2x$$

$$dx = \frac{du}{2x}$$

Substituting this back into the integral expression, we get:

$$\int x \cos(x^2) dx = \frac{1}{2} \int \cos(u) du$$

This integral can be easily solved using integration by parts or by using the table of integrals. 

## Steps Involved

The following are the steps involved in evaluating integrals using the integration by substitution technique:

1. Identify the part of the integrand that can be simplified by substitution.
2. Choose a new variable u and substitute it into the integration expression.
3. Calculate the differential of the new variable u.
4. Substitute the differential of the new variable for the corresponding differential of the old variable.
5. Simplify the integral using algebraic manipulation.
6. Evaluate the integral.

## Example

Consider the integral:

$$\int \frac{x^2}{(1+x^3)^2} dx$$

We can simplify this integral by making the substitution:

$$u = 1 + x^3$$

We get:

$$\frac{du}{dx} = 3x^2$$

$$dx = \frac{du}{3x^2}$$

Substituting this back into the integral expression, we get:

$$\int \frac{x^2}{(1+x^3)^2} dx = \frac{1}{3} \int \frac{du}{u^2}$$

This integral can be easily solved using the table of integrals. 

## Conclusion

Integration by substitution is a powerful tool that can be used to evaluate integrals that cannot be solved by simple integration techniques. It involves substituting a variable in the integral expression with a different variable to make the integral easier to solve. This technique is widely used in mathematics, physics, and engineering.
