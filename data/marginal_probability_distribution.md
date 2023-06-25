# Marginal Probability Distribution

In probability theory and statistics, the marginal probability distribution is a probability distribution over a subset of variables in a multivariate distribution. It is obtained by summing or integrating out the other variables in the joint probability distribution. The term "marginal" refers to the fact that the distribution is derived from the joint distribution by considering only a subset of the variables.

## Definition

Given a joint probability distribution $P(X, Y)$ over two random variables $X$ and $Y$, the marginal probability distribution of $X$ is defined as:


$$

P(X) = \sum_{y} P(X, Y=y)

$$


for discrete random variables, or


$$

P(X) = \int_{y} P(X, Y=y) dy

$$


for continuous random variables.

The same process can be applied to obtain the marginal probability distribution of $Y$:


$$

P(Y) = \sum_{x} P(X=x, Y)

$$


for discrete random variables, or


$$

P(Y) = \int_{x} P(X=x, Y) dx

$$


for continuous random variables.

## Example

Suppose we have a joint probability distribution over two discrete random variables $X$ and $Y$ as follows:

|   | Y=1 | Y=2 | Y=3 |
|---|-----|-----|-----|
| X=1 | 0.1 | 0.2 | 0.1 |
| X=2 | 0.1 | 0.2 | 0.1 |
| X=3 | 0.1 | 0.1 | 0.1 |

The marginal probability distribution of $X$ can be obtained by summing the probabilities for each value of $Y$:


$$

P(X=1) = 0.1 + 0.2 + 0.1 = 0.4 \\
P(X=2) = 0.1 + 0.2 + 0.1 = 0.4 \\
P(X=3) = 0.1 + 0.1 + 0.1 = 0.3

$$


Similarly, the marginal probability distribution of $Y$ can be obtained by summing the probabilities for each value of $X$:


$$

P(Y=1) = 0.1 + 0.1 + 0.1 = 0.3 \\
P(Y=2) = 0.2 + 0.2 + 0.1 = 0.5 \\
P(Y=3) = 0.1 + 0.1 + 0.1 = 0.3

$$


## Properties

1. The marginal probability distribution is always non-negative, i.e., $P(X) \geq 0$ for all values of $X$.

2. The sum (or integral) of the marginal probability distribution over all possible values of the variable is equal to 1:

   
$$

   \sum_{x} P(X=x) = 1
   
$$


   for discrete random variables, or

   
$$

   \int_{x} P(X=x) dx = 1
   
$$


   for continuous random variables.

3. The marginal probability distribution can be used to compute the expected value and variance of a random variable:

   
$$

   E[X] = \sum_{x} x P(X=x)
   
$$


   for discrete random variables, or

   
$$

   E[X] = \int_{x} x P(X=x) dx
   
$$


   for continuous random variables.

   
$$

   Var[X] = E[X^2] - (E[X])^2
   
$$


4. The marginal probability distribution is related to the joint probability distribution and the conditional probability distribution through the following equation:

   
$$

   P(X) = \sum_{y} P(X, Y=y) = \sum_{y} P(X|Y=y) P(Y=y)
   
$$


   for discrete random variables, or

   
$$

   P(X) = \int_{y} P(X, Y=y) dy = \int_{y} P(X|Y=y) P(Y=y) dy
   
$$


   for continuous random variables.

## Applications

Marginal probability distributions are widely used in various fields, including artificial intelligence, machine learning, and deep learning. Some specific applications include:

1. Bayesian inference: Marginal probability distributions are used to compute posterior probabilities in Bayesian inference, which is a fundamental concept in probabilistic graphical models, such as Bayesian networks and Markov random fields.

2. Hidden Markov models: Marginal probability distributions are used to compute the probabilities of hidden states in hidden Markov models, which are widely used in speech recognition, natural language processing, and bioinformatics.

3. Naive Bayes classifiers: Marginal probability distributions are used in the naive Bayes classifier, which is a simple and efficient machine learning algorithm for classification tasks.

4. Markov random fields: Marginal probability distributions are used to compute the probabilities of individual variables in Markov random fields, which are widely used in computer vision, image processing, and spatial statistics.
