# Uniform Convergence

**Uniform convergence** is a property of a sequence of functions where the rate of convergence is the same at all points in the domain of the function. It is a stronger form of convergence than pointwise convergence, which only requires that the sequence of functions converges at each point in the domain.

In mathematical terms, a sequence of functions $(f_n)$ defined on a set $E$ converges uniformly to a limit function $f$ on $E$ if for every $\epsilon > 0$ there exists an $N \in \mathbb{N}$ such that for all $n \geq N$ and $x \in E$, $|f_n(x) - f(x)| < \epsilon$. 

Uniform convergence is important in the study of analysis, particularly in the study of power series and Fourier series. It is also useful in the study of approximation theory, where it is used to show that certain classes of functions can be approximated by simpler functions.

## Prerequisites

To understand uniform convergence, one should have a solid understanding of pointwise convergence, continuity, and compactness. 

**Pointwise convergence** is a property of a sequence of functions where the sequence of values at each point in the domain converges to the corresponding value of the limit function. 

**Continuity** is a property of a function where small changes in the input result in small changes in the output. 

**Compactness** is a property of a set where every open cover of the set has a finite subcover. 

## Examples

Consider the sequence of functions $(f_n)$ defined on the interval $[0,1]$ by $f_n(x) = x^n$. The pointwise limit of this sequence is the function 

$$f(x) = \begin{cases} 
      0 & x \in [0,1) \\
      1 & x = 1 
   \end{cases}
$$

However, this sequence does not converge uniformly to $f$ on $[0,1]$. To see this, suppose $\epsilon = \frac{1}{2}$ and $N$ is an integer greater than $\frac{\ln(\frac{1}{2})}{\ln(1-\delta)}$ for some $\delta \in (0,1)$. Then for $n \geq N$ and $x = 1 - \delta$, we have 

$$|f_n(x) - f(x)| = |(1 - \delta)^n - 1| > \frac{1}{2}$$ 

which violates the definition of uniform convergence. 

On the other hand, the sequence of functions $(g_n)$ defined on the interval $[0,1]$ by $g_n(x) = \frac{x}{1+nx}$ converges uniformly to the function $g(x) = 0$ on $[0,1]$. To see this, suppose $\epsilon > 0$ and choose $N$ such that $N > \frac{1}{\epsilon}$. Then for $n \geq N$ and $x \in [0,1]$, we have 

$$|g_n(x) - g(x)| = \frac{x}{1+nx} \leq \frac{1}{n} < \epsilon$$

which satisfies the definition of uniform convergence. 

## Further Readings

For more information on uniform convergence and related concepts, see the following topics:

- **Cauchy criterion** explains the Cauchy criterion for uniform convergence of a sequence of functions.
- **Asymptotic analysis** discusses the use of uniform convergence in asymptotic analysis.
- **Epsilon-delta definition** explains the epsilon-delta definition of uniform continuity.
