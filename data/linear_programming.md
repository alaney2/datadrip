# Linear Programming

Linear programming (LP) is a method to achieve the best outcome in a mathematical model whose requirements are represented by linear relationships. It is a special case of mathematical programming (also known as mathematical optimization).

## Definition

More formally, linear programming is a technique for the optimization of a linear objective function, subject to linear equality and linear inequality constraints. Its feasible region is a convex polytope, which is a set defined as the intersection of finitely many half spaces, each of which is defined by a linear inequality. Its objective function is a real-valued affine (linear) function defined on this polyhedron. A linear programming algorithm finds a point in the polyhedron where this function has the smallest (or largest) value if such a point exists.

Linear programs are problems that can be expressed in canonical form as:


$$

\begin{align*}
\text{Minimize:} & \mathbf{c}^\top \mathbf{x} \\
\text{Subject to:} & A\mathbf{x} \leq \mathbf{b} \\
& \mathbf{x} \geq 0
\end{align*}

$$


where $\mathbf{x}$ represents the vector of variables (to be determined), $\mathbf{c}$ and $\mathbf{b}$ are vectors of (known) coefficients, $A$ is a (known) matrix of coefficients, and $\mathbf{c}^\top \mathbf{x}$ is the dot product of the vectors $\mathbf{c}$ and $\mathbf{x}$.

## Applications

Linear programming can be applied to various fields of study. It is widely used in mathematics, and to a lesser extent in business, economics, and for some engineering problems. Industries that use linear programming models include transportation, energy, telecommunications, and manufacturing. It has proven useful in modeling diverse types of problems in planning, routing, scheduling, assignment, and design.

## Algorithms

The most popular linear programming algorithm is the Simplex Method, which is an iterative method for getting the most feasible solution. In each iteration, the Simplex method makes a step towards the solution. If the problem has an optimal solution, the method will find it.

Another important algorithm used in linear programming is the Interior Point Method, which unlike the Simplex method, moves through the interior of the feasible region.

## Duality

Every linear programming problem, referred to as a primal problem, can be converted into a dual problem, which provides an upper bound to the optimal value of the primal problem. In matrix form, we can express the primal problem as:


$$

\begin{align*}
\text{Maximize:} & \mathbf{c}^\top \mathbf{x} \\
\text{Subject to:} & A\mathbf{x} \leq \mathbf{b} \\
& \mathbf{x} \geq 0
\end{align*}

$$


The corresponding symmetric dual problem is:


$$

\begin{align*}
\text{Minimize:} & \mathbf{b}^\top \mathbf{y} \\
\text{Subject to:} & A^\top \mathbf{y} \geq \mathbf{c} \\
& \mathbf{y} \geq 0
\end{align*}

$$


The strong duality theorem states that if the primal problem has an optimal solution, $\mathbf{x}^*$, then the dual problem also has an optimal solution, $\mathbf{y}^*$, and $\mathbf{c}^\top \mathbf{x}^* = \mathbf{b}^\top \mathbf{y}^*$.
