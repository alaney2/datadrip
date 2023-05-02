# Discrete Distributions

Discrete distributions are a type of probability distribution that describes the probability of each possible outcome in a discrete set of values. They are commonly used in statistics and probability theory to model random variables that can take only a finite or countably infinite number of values.

## Probability Mass Function (PMF)

The probability mass function (PMF) of a discrete distribution gives the probability of each possible outcome in the set of values that the random variable can take. It is a function that maps each possible outcome to its probability. The PMF must satisfy two conditions:

1. The PMF is non-negative for every possible outcome.
2. The sum of the PMF over all possible outcomes is equal to one.

The PMF can be written as:

$$P(X = x_i) = p_i$$

where $X$ is the random variable, $x_i$ is a possible outcome, and $p_i$ is the probability of $X$ taking the value $x_i$.

## Examples of Discrete Distributions

### Bernoulli Distribution

The Bernoulli distribution is a discrete distribution that models a single trial of a binary experiment, where the outcome is either success or failure. The PMF of a Bernoulli distribution is:

$$P(X = x) = p^x(1-p)^{1-x}$$

where $p$ is the probability of success and $x$ is 0 for failure and 1 for success.

### Binomial Distribution

The binomial distribution is a discrete distribution that models the number of successes in a fixed number of independent and identically distributed (i.i.d.) trials of a binary experiment. The PMF of a binomial distribution is:

$$P(X = k) = {{n}\choose{k}}p^k(1-p)^{n-k}$$

where $n$ is the number of trials, $k$ is the number of successes, $p$ is the probability of success in a single trial, and ${n\choose k}$ is the binomial coefficient.

### Poisson Distribution

The Poisson distribution is a discrete distribution that models the number of events occurring in a fixed interval of time or space, where the events are rare and independent. The PMF of a Poisson distribution is:

$$P(X = k) = \frac{\lambda^k e^{-\lambda}}{k!}$$

where $\lambda$ is the average rate of events per interval and $k$ is the number of events.

## Conclusion

Discrete distributions are a fundamental concept in probability theory and statistics. They provide a way to model random variables that can take only a finite or countably infinite number of values. The PMF of a discrete distribution gives the probability of each possible outcome, subject to the two conditions that it must be non-negative and sum to one. The Bernoulli, binomial, and Poisson distributions are examples of commonly used discrete distributions.
