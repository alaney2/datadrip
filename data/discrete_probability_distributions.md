# Discrete Probability Distributions

A discrete probability distribution is a probability distribution that describes the probabilities of outcomes for a discrete random variable. A discrete random variable is a random variable that can take on a finite or countably infinite number of distinct values. Examples of discrete random variables include the number of heads in a series of coin flips, the number of defective items in a batch, or the number of customers arriving at a store in a given time period.

Discrete probability distributions are characterized by a probability mass function (PMF), which assigns a probability to each possible outcome of the random variable. The PMF must satisfy two conditions:

1. The probability of each outcome is non-negative: $P(X = x) \geq 0$ for all $x$ in the domain of the random variable $X$.
2. The sum of the probabilities of all possible outcomes is equal to 1: $\sum_{x} P(X = x) = 1$.

In this article, we will discuss some common discrete probability distributions, their properties, and applications.

## Binomial Distribution

The binomial distribution is a discrete probability distribution that describes the number of successes in a fixed number of independent Bernoulli trials with the same probability of success. The probability mass function of the binomial distribution is given by:


$$

P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}

$$


where $n$ is the number of trials, $k$ is the number of successes, $p$ is the probability of success, and $\binom{n}{k}$ is the binomial coefficient, which is the number of ways to choose $k$ successes from $n$ trials.

The mean and variance of the binomial distribution are given by:


$$

\mu = np \\
\sigma^2 = np(1-p)

$$


The binomial distribution is used in various applications, such as modeling the number of defective items in a batch, the number of successful attempts in sports, or the number of votes for a candidate in an election.

## Poisson Distribution

The Poisson distribution is a discrete probability distribution that describes the number of events occurring in a fixed interval of time or space, given a constant average rate of occurrence. The probability mass function of the Poisson distribution is given by:


$$

P(X = k) = \frac{e^{-\lambda} \lambda^k}{k!}

$$


where $k$ is the number of events, $\lambda$ is the average rate of occurrence, and $e$ is the base of the natural logarithm.

The mean and variance of the Poisson distribution are both equal to the average rate of occurrence:


$$

\mu = \sigma^2 = \lambda

$$


The Poisson distribution is used in various applications, such as modeling the number of phone calls received at a call center, the number of accidents at an intersection, or the number of mutations in a DNA sequence.

## Geometric Distribution

The geometric distribution is a discrete probability distribution that describes the number of Bernoulli trials required for the first success. The probability mass function of the geometric distribution is given by:


$$

P(X = k) = (1-p)^{k-1}p

$$


where $k$ is the number of trials and $p$ is the probability of success.

The mean and variance of the geometric distribution are given by:


$$

\mu = \frac{1}{p} \\
\sigma^2 = \frac{1-p}{p^2}

$$


The geometric distribution is used in various applications, such as modeling the number of attempts required to pass a test, the number of coin flips required to get the first head, or the number of job interviews required to get the first job offer.

## Negative Binomial Distribution

The negative binomial distribution is a discrete probability distribution that describes the number of Bernoulli trials required for a fixed number of successes. The probability mass function of the negative binomial distribution is given by:


$$

P(X = k) = \binom{k-1}{r-1} p^r (1-p)^{k-r}

$$


where $k$ is the number of trials, $r$ is the number of successes, and $p$ is the probability of success.

The mean and variance of the negative binomial distribution are given by:


$$

\mu = \frac{r}{p} \\
\sigma^2 = \frac{r(1-p)}{p^2}

$$


The negative binomial distribution is used in various applications, such as modeling the number of attempts required to achieve a certain number of successes, the number of failures before a certain number of successes, or the number of customers arriving at a store before a certain number of purchases.

## Hypergeometric Distribution

The hypergeometric distribution is a discrete probability distribution that describes the number of successes in a fixed number of draws from a finite population without replacement. The probability mass function of the hypergeometric distribution is given by:


$$

P(X = k) = \frac{\binom{K}{k} \binom{N-K}{n-k}}{\binom{N}{n}}

$$


where $N$ is the population size, $K$ is the number of successes in the population, $n$ is the number of draws, and $k$ is the number of successes in the sample.

The mean and variance of the hypergeometric distribution are given by:


$$

\mu = n\frac{K}{N} \\
\sigma^2 = n\frac{K}{N}\frac{N-K}{N}\frac{N-n}{N-1}

$$


The hypergeometric distribution is used in various applications, such as modeling the number of defective items in a sample, the number of successful applicants in a selection process, or the number of species in an ecological survey.

## Multinomial Distribution

The multinomial distribution is a generalization of the binomial distribution to more than two categories. It is a discrete probability distribution that describes the probabilities of counts for each category in a fixed number of independent categorical trials. The probability mass function of the multinomial distribution is given by:


$$

P(X_1 = n_1, \dots, X_k = n_k) = \frac{n!}{n_1! \dots n_k!} p_1^{n_1} \dots p_k^{n_k}

$$


where $n$ is the number of trials, $k$ is the number of categories, $n_i$ is the number of occurrences of category $i$, and $p_i$ is the probability of category $i$.

The mean and variance of the multinomial distribution for each category are given by:


$$

\mu_i = np_i \\
\sigma_i^2 = np_i(1-p_i)

$$


The multinomial distribution is used in various applications, such as modeling the number of occurrences of different categories in a sample, the number of votes for different candidates in an election, or the number of species in an ecological survey.
