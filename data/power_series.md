# Power Series

A power series is an infinite series of the form:

$$\sum_{n=0}^{\infty} a_n(x-c)^n$$

where $a_n$ and $c$ are constants, and $x$ is a variable. This type of series is used to represent functions as an infinite sum of terms, each of which is a power of the variable $x$ multiplied by a constant coefficient $a_n$.

## Convergence and Divergence

Whether a power series converges or diverges depends on the values of the coefficients $a_n$ and the variable $x$. The series will converge if the limit of the ratio of successive terms approaches a finite number as $n$ approaches infinity:

$$\lim_{n\to\infty} \frac{|a_{n+1}(x-c)^{n+1}|}{|a_n(x-c)^n|} = \lim_{n\to\infty} |x-c|\cdot\left|\frac{a_{n+1}}{a_n}\right| = L$$

If $L<1$, the series converges absolutely. If $L>1$, the series diverges. If $L=1$, the series may or may not converge, and further investigation is needed.

## Radius of Convergence

The radius of convergence $R$ of a power series is the maximum value of $|x-c|$ for which the series converges. The radius of convergence can be found using the following formula:

$$R = \frac{1}{\limsup_{n\to\infty}\sqrt[n]{|a_n|}}$$

If $\limsup_{n\to\infty}\sqrt[n]{|a_n|}=0$, then $R=\infty$. If $\limsup_{n\to\infty}\sqrt[n]{|a_n|}=\infty$, then $R=0$.

## Applications

Power series are commonly used in calculus to represent functions as an infinite sum of terms, allowing for easier manipulation and analysis of these functions. They are also used in physics and engineering to model physical phenomena, such as the motion of a pendulum or the behavior of electrical circuits.

## Further Readings

- Maclaurin Series
- Radius of Convergence
- Complex Analysis
