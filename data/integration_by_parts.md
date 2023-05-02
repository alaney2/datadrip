# Integration By Parts

Integration by parts is a technique used in calculus to evaluate integrals of the form $\int u dv$. It is often used when one part of the integrand is easy to differentiate but difficult to integrate, while the other part is easy to integrate but difficult to differentiate.

## Formula

The formula for integration by parts is:

$$\int u dv = uv - \int v du$$

where $u$ and $v$ are functions of $x$, and $du$ and $dv$ are their respective differentials.

## How to Use Integration By Parts

To use integration by parts, one must first choose two functions, $u$ and $dv$. The choice of $u$ is important as it determines $du$. The choice of $dv$ is important as it determines $v$. A common way to choose $u$ is to select the part of the integrand that becomes simpler after differentiation. Once $u$ and $dv$ has been chosen, we find $du$ and $v$ using the following steps:

1. Differentiate $u$ to find $du$.
2. Integrate $dv$ to find $v$.

Once we have found $du$ and $v$, we can substitute them into the integration by parts formula as follows:

$$\int u dv = uv - \int v du$$

where $u$ and $v$ are the functions we chose earlier.

## Example

Let us evaluate the integral $\int x \cos(x) dx$ using integration by parts.

First, we choose $u = x$ and $dv = \cos(x) dx$. Then, we find $du$ and $v$:

$$du = dx$$
$$v = \int \cos(x) dx = \sin(x)$$

Substituting these into the integration by parts formula, we get:

$$\int x \cos(x) dx = x \sin(x) - \int \sin(x) dx$$

Integrating the last term on the right-hand side, we get:

$$\int x \cos(x) dx = x \sin(x) + \cos(x) + C$$

where $C$ is the constant of integration.

## Conclusion

Integration by parts is a powerful technique that can be used to evaluate integrals that are difficult to solve using other methods. By choosing the right functions $u$ and $dv$, we can simplify the integral and make it easier to solve.
