# Geometric Distribution

The geometric distribution is a probability distribution that models the number of trials required to obtain the first success in a sequence of independent Bernoulli trials, where each trial has the same probability of success.

## Definition

Let X be a random variable representing the number of trials required to obtain the first success in a sequence of independent Bernoulli trials, where p is the probability of success on each trial. Then X follows a geometric distribution with parameter p, denoted as X ~ Geometric(p).

The probability mass function (PMF) of X is given by:

$$P(X=k) = (1-p)^{k-1}p, \text{ for } k=1,2,3,...$$

The mean and variance of X are given by:

$$\mu = \frac{1}{p}$$

$$\sigma^2 = \frac{1-p}{p^2}$$

## Applications

The geometric distribution has various applications in real-world scenarios where the probability of success is constant and the trials are independent. For example:

- In finance, the geometric distribution can be used to model the number of trades required to obtain the first profitable trade in a sequence of independent trades, where each trade has the same probability of being profitable.
- In computer science, the geometric distribution can be used to model the number of unsuccessful attempts required to find the first successful search result on a search engine, where each attempt has the same probability of returning a successful result.
- In biology, the geometric distribution can be used to model the number of DNA sequencing reads required to obtain the first read that matches a given reference sequence, where each read has the same probability of matching the reference sequence.

## Properties

- The geometric distribution is memoryless, meaning that the conditional probability of obtaining the first success on the k+1-th trial given that the first k trials were failures is equal to the unconditional probability of obtaining the first success on the first trial. Formally, P(X=k+j | X>k) = P(X=j), for all k,j >= 1.
- The geometric distribution is a special case of the negative binomial distribution with r=1, where r is the number of successes required.
- The geometric distribution is right-skewed, meaning that it has a longer tail on the right side. Its mode is 1, and its median is ceil(log(0.5)/log(1-p)), which is the smallest integer greater than or equal to the logarithm base 1-p of 0.5.

## Further Readings

- Negative Binomial Distribution
- Poisson Distribution
- Exponential Distribution
- Weibull Distribution
- Gamma Distribution
- Beta Distribution
- Chi-Squared Distribution
- Normal Distribution
- Lognormal Distribution
