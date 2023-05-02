# Hypergeometric Distribution

The hypergeometric distribution is a discrete probability distribution that describes the probability of having k successes in a sample of size n drawn without replacement from a finite population of size N that contains exactly K successes.

The probability mass function of the hypergeometric distribution is given by:

$$ P(X=k) = \frac{\binom{K}{k}\binom{N-K}{n-k}}{\binom{N}{n}} $$

where X is the random variable denoting the number of successes in the sample of size n, K is the number of successes in the population, N is the population size, and n is the sample size.

The hypergeometric distribution is used in situations where the sampling is done without replacement, such as in quality control, where a batch of items is inspected and a sample is selected without returning the items to the batch. It is also used in genetics, where the distribution can be used to model the probability of observing a certain number of heterozygous individuals in a population.

## Properties

The mean and variance of the hypergeometric distribution are given by:

$$ \mu = \frac{nK}{N} $$

$$ \sigma^2 = n\frac{K}{N}\left(1-\frac{K}{N}\right)\frac{N-n}{N-1} $$

## Relationship with Other Distributions

The hypergeometric distribution is related to other discrete probability distributions, such as the binomial distribution, the multinomial distribution, the Poisson distribution, the negative binomial distribution, and the geometric distribution.

The binomial distribution can be used as an approximation of the hypergeometric distribution when the sample size is much smaller than the population size, or when the population size is infinite.

The multinomial distribution can be used to generalize the hypergeometric distribution to the case where there are more than two possible outcomes.

The Poisson distribution can be used as an approximation of the hypergeometric distribution when the population size is very large and the number of successes is very small.

The negative binomial distribution and the geometric distribution can be used to model the number of trials needed to obtain a certain number of successes in a sequence of independent Bernoulli trials.

## References

1. Casella, G., & Berger, R. L. (2002). Statistical inference (Vol. 2). Pacific Grove, CA: Duxbury.
2. Ross, S. M. (2009). Introduction to probability and statistics for engineers and scientists (4th ed.). Amsterdam: Elsevier Academic Press.
