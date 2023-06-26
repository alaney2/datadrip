# Probability Mass Functions

A probability mass function (PMF) is a function that describes the probability distribution of a discrete random variable. In other words, it gives the probability that a discrete random variable takes on a specific value. PMFs are used in probability theory and statistics to model and analyze discrete events, such as the number of heads obtained in a series of coin flips or the number of defective items in a batch of products.

## Definition

Let $X$ be a discrete random variable with a finite or countably infinite number of possible outcomes. The probability mass function of $X$, denoted as $p_X(x)$ or simply $p(x)$, is a function that maps each possible value $x$ of $X$ to its probability:


$$

p_X(x) = P(X = x)

$$


where $P(X = x)$ is the probability that the random variable $X$ takes on the value $x$. The PMF satisfies the following properties:

1. Non-negativity: $p_X(x) \geq 0$ for all $x$.
2. Normalization: $\sum_x p_X(x) = 1$, where the sum is taken over all possible values of $x$.

## Examples

### Example 1: Coin Flip

Consider a fair coin flip, where the random variable $X$ represents the outcome of the flip, with $X = 0$ for tails and $X = 1$ for heads. The probability mass function for this random variable is:


$$

p_X(x) = \begin{cases}
    \frac{1}{2} & \text{if } x = 0 \text{ or } x = 1 \\
    0 & \text{otherwise}
\end{cases}

$$


### Example 2: Rolling a Die

Let $X$ be a random variable representing the outcome of rolling a fair six-sided die. The possible values of $X$ are the integers from 1 to 6, and the probability mass function is:


$$

p_X(x) = \begin{cases}
    \frac{1}{6} & \text{if } x = 1, 2, 3, 4, 5, 6 \\
    0 & \text{otherwise}
\end{cases}

$$


## Expectation and Variance

The expectation (or mean) of a discrete random variable $X$ with probability mass function $p_X(x)$ is defined as:


$$

E[X] = \sum_x x \cdot p_X(x)

$$


The expectation represents the average value of the random variable over a large number of trials.

The variance of a discrete random variable $X$ is a measure of the dispersion or spread of the distribution and is defined as:


$$

Var(X) = E[(X - E[X])^2] = \sum_x (x - E[X])^2 \cdot p_X(x)

$$


The standard deviation of $X$ is the square root of the variance:


$$

\sigma_X = \sqrt{Var(X)}

$$


## Joint Probability Mass Functions

A joint probability mass function (JPMF) describes the probability distribution of two or more discrete random variables. Let $X$ and $Y$ be two discrete random variables. The joint probability mass function of $X$ and $Y$, denoted as $p_{X,Y}(x, y)$ or simply $p(x, y)$, is a function that maps each pair of values $(x, y)$ to their joint probability:


$$

p_{X,Y}(x, y) = P(X = x, Y = y)

$$


The JPMF satisfies the following properties:

1. Non-negativity: $p_{X,Y}(x, y) \geq 0$ for all $x$ and $y$.
2. Normalization: $\sum_x \sum_y p_{X,Y}(x, y) = 1$, where the sums are taken over all possible values of $x$ and $y$.

The marginal probability mass functions of $X$ and $Y$ can be obtained from the JPMF by summing over the other variable:


$$

p_X(x) = \sum_y p_{X,Y}(x, y) \\
p_Y(y) = \sum_x p_{X,Y}(x, y)

$$


## Conditional Probability Mass Functions

The conditional probability mass function of a discrete random variable $X$ given the value of another discrete random variable $Y$ is defined as:


$$

p_{X|Y}(x|y) = \frac{p_{X,Y}(x, y)}{p_Y(y)}

$$


provided that $p_Y(y) > 0$. The conditional PMF describes the probability distribution of $X$ when the value of $Y$ is known.

## Conclusion

Probability mass functions are fundamental tools in probability theory and statistics for modeling and analyzing discrete random variables. They provide a way to describe the probability distribution of a discrete random variable, as well as to compute expectations, variances, and conditional probabilities. Joint probability mass functions extend the concept to multiple discrete random variables, allowing for the study of their joint and marginal distributions.
