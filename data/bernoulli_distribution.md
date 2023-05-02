# Bernoulli Distribution

Bernoulli distribution is a discrete probability distribution that takes the value 1 with probability *p* and the value 0 with probability *1 - p*, where *p* is a parameter of the distribution. It is a special case of the binomial distribution, where the number of trials is 1. 

Bernoulli distribution is commonly used in various areas of statistics, machine learning, and artificial intelligence, particularly in binary classification problems. It has a simple mathematical form and can be used to model events that have only two possible outcomes such as success or failure, heads or tails, or yes or no.

## Probability Mass Function

The probability mass function (PMF) of a Bernoulli distribution with parameter *p* is defined as:

$$P(X=k) = p^k(1-p)^{1-k}$$

where *k* is either 0 or 1.

## Mean and Variance

The mean (or expected value) of a Bernoulli distribution is given by:

$$E(X) = p$$

and the variance is given by:

$$Var(X) = p(1-p)$$

## Applications

Bernoulli distribution has several applications in various fields, including:

- **Binary classification**: In machine learning, Bernoulli distribution is used to model binary classification problems where the goal is to predict whether an input belongs to one of two classes.
- **A/B testing**: Bernoulli distribution is used in A/B testing to model the probability of a user taking a particular action (such as clicking on a button) given a particular variation of a website.
- **Randomized algorithms**: Bernoulli distribution is used in randomized algorithms to simulate coin flips or other binary choices.
- **Signal detection theory**: In psychology, Bernoulli distribution is used to model signal detection theory, which is concerned with the ability to differentiate between information-bearing patterns and random patterns that distract from the information.

## Further Readings

- Geometric Distribution
- Negative Binomial Distribution
- Hypergeometric Distribution
- Poisson Distribution
- Exponential Distribution
- Gamma Distribution
- Beta Distribution
