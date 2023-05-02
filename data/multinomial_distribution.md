# Multinomial Distribution

The Multinomial Distribution is a probability distribution that describes the likelihood of observing a certain number of outcomes in a set of multiple discrete outcomes. It is a generalization of the binomial distribution, which describes the likelihood of observing a certain number of successes in a fixed number of trials.

## Definition

The Multinomial Distribution is defined as follows:

Suppose there are $K$ possible outcomes, and an experiment is conducted $n$ times, where each trial can result in any of the $K$ outcomes. Let $p_1, p_2, ..., p_K$ be the probabilities of observing each of the $K$ outcomes on a single trial, and let $x_1, x_2, ..., x_K$ be the observed counts of each outcome over the $n$ trials. Then, the probability of observing the counts $x_1, x_2, ..., x_K$ is given by the Multinomial Distribution:

$$P(X_1=x_1, X_2=x_2, ..., X_K=x_K) = {n \choose x_1, x_2, ..., x_K}p_1^{x_1}p_2^{x_2}...p_K^{x_K}$$

where ${n \choose x_1, x_2, ..., x_K}$ is the multinomial coefficient:

$${n \choose x_1, x_2, ..., x_K} = \frac{n!}{x_1!x_2!...x_K!}$$

## Properties

The Multinomial Distribution has several properties that are important to understand:

- The mean and variance of the Multinomial Distribution are:

$$E[X_i] = np_i$$

$$Var[X_i] = np_i(1 - p_i)$$

- The sum of the counts $x_1, x_2, ..., x_K$ is always equal to $n$.
- The Multinomial Distribution is a discrete distribution, meaning that the possible outcomes are countable.
- The Multinomial Distribution is a generalization of the binomial distribution, which describes the likelihood of observing a certain number of successes in a fixed number of trials with two possible outcomes.

## Applications

The Multinomial Distribution has several applications in machine learning and statistics:

- In natural language processing, the Multinomial Distribution is often used to model the probability distribution over a set of words in a document.
- In topic modeling, the Multinomial Distribution is used to model the probability distribution over a set of topics in a corpus of documents.
- In clustering algorithms such as k-means, the Multinomial Distribution is often used to model the probability distribution over a set of discrete features.
- In Bayesian statistics, the Multinomial Distribution is often used as a prior distribution for the parameters of a categorical distribution.

## Further Readings

- Binomial Distribution
- Poisson Distribution
- Beta Distribution
- Dirichlet Distribution
- Categorical Distribution
