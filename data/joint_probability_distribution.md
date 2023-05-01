# Joint Probability Distribution

A joint probability distribution is a probability distribution that describes the probability of two or more random variables occurring simultaneously. It specifies the probability of each possible combination of values of the random variables.

## Definition

Let X and Y be two random variables. The joint probability distribution of X and Y, denoted by P(X,Y), is a function that assigns a probability to each possible combination of values of X and Y. It is defined as:

$$ P(X=x,Y=y) = P(\{X=x\} \cap \{Y=y\}) $$

where x and y are values of X and Y, respectively, and $\{X=x\}$ and $\{Y=y\}$ are the events that X=x and Y=y, respectively.

## Properties

The joint probability distribution has the following properties:

- Non-negative: The joint probability distribution is non-negative, i.e., $P(X=x,Y=y) \geq 0$ for all x and y.

- Normalized: The sum of the probabilities over all possible values of X and Y is equal to 1, i.e., $\sum_x \sum_y P(X=x,Y=y) = 1$.

- Marginal probability: The marginal probability distribution of X and Y can be obtained by summing over the other variable, i.e., $P(X=x) = \sum_y P(X=x,Y=y)$ and $P(Y=y) = \sum_x P(X=x,Y=y)$.

- Conditional probability: The conditional probability distribution of one variable given the other can be obtained by dividing the joint probability distribution by the marginal probability distribution of the other variable, i.e., $P(X=x|Y=y) = \frac{P(X=x,Y=y)}{P(Y=y)}$ and $P(Y=y|X=x) = \frac{P(X=x,Y=y)}{P(X=x)}$.

- Independence: X and Y are independent if and only if $P(X=x,Y=y) = P(X=x) \cdot P(Y=y)$ for all x and y.

## Examples

### Dice rolling

Suppose we roll two fair six-sided dice, one red and one green. Let X be the number on the red die and Y be the number on the green die. The joint probability distribution of X and Y is:

|   | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| 1 | 1/36 | 1/36 | 1/36 | 1/36 | 1/36 | 1/36 |
| 2 | 1/36 | 1/36 | 1/36 | 1/36 | 1/36 | 1/36 |
| 3 | 1/36 | 1/36 | 1/36 | 1/36 | 1/36 | 1/36 |
| 4 | 1/36 | 1/36 | 1/36 | 1/36 | 1/36 | 1/36 |
| 5 | 1/36 | 1/36 | 1/36 | 1/36 | 1/36 | 1/36 |
| 6 | 1/36 | 1/36 | 1/36 | 1/36 | 1/36 | 1/36 |

For example, $P(X=3,Y=4) = 1/36$, which means the probability of getting a 3 on the red die and a 4 on the green die is 1/36.

### Coin tossing

Suppose we toss two fair coins. Let X be the number of heads and Y be the difference between the number of heads and tails. The joint probability distribution of X and Y is:

|   | -1 | 0 | 1 |
|---|---|---|---|
| 0 | 0 | 1/4 | 0 |
| 1 | 1/4 | 1/2 | 1/4 |

For example, $P(X=1,Y=-1) = 1/4$, which means the probability of getting one head and one tail and the difference being -1 is 1/4.

## Applications

Joint probability distributions have many applications in statistics, machine learning, and artificial intelligence, such as:

- Bayesian inference: Joint probability distributions are used to represent the joint distribution of the observed data and the parameters of a model in Bayesian inference.

- Markov random fields: Joint probability distributions are used to define the energy function of a Markov random field, which is a probabilistic graphical model used in image processing, computer vision, and natural language processing.

- Reinforcement learning: Joint probability distributions are used to represent the joint distribution of the state, action, and reward in a Markov decision process, which is a mathematical framework used in reinforcement learning.

- Copulas: Joint probability distributions are used to model the dependence structure between random variables using copulas, which are functions that link the marginal distributions to the joint distribution.

## Further Readings

- Conditional probability distribution
- Multivariate probability distribution
- Copulas
- Entropy and information theory
- Bayesian networks
- Markov random fields
- Gaussian processes
- Hidden Markov models
- Monte Carlo methods
- Variational inference
