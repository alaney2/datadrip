# Binomial Distribution

The binomial distribution is a probability distribution that describes the number of successes in a fixed number of independent trials, where each trial has the same probability of success. It is a common distribution in statistics and is used to model a wide range of phenomena, from the number of heads obtained from flipping a coin a fixed number of times to the number of successful sales calls made by a telemarketer in a day.

## Definition

Suppose that an experiment consists of $n$ independent trials, where each trial results in a success with probability $p$ and a failure with probability $1-p$. Let $X$ be the random variable that represents the number of successes in these $n$ trials. Then $X$ follows a binomial distribution with parameters $n$ and $p$, denoted as $X \sim \text{Bin}(n,p)$, if the probability mass function of $X$ is given by:

$$P(X=k) = {n \choose k} p^k (1-p)^{n-k}, \quad k=0,1,2,\dots,n,$$

where ${n \choose k}=\frac{n!}{k!(n-k)!}$ is the binomial coefficient.

## Properties

The binomial distribution has the following properties:

- Mean: $\mu = np$
- Variance: $\sigma^2 = np(1-p)$
- Moment generating function: $M_X(t) = (pe^t + 1 - p)^n$

## Applications

The binomial distribution is used in a variety of applications, such as:

- Quality control: The number of defective items in a sample of fixed size from a production line can be modeled using a binomial distribution.
- Elections: The number of votes obtained by a candidate in a fixed number of polling stations can be modeled using a binomial distribution.
- Finance: The number of successful trades made by a trader in a fixed number of trading days can be modeled using a binomial distribution.

## Further Readings

- Negative binomial distribution: A generalization of the binomial distribution that allows for an arbitrary number of failures before a fixed number of successes is achieved.
- Hypergeometric distribution: A distribution that models the number of successes in a fixed number of trials without replacement from a finite population of size $N$.
- Poisson distribution: A distribution that models the number of rare events in a fixed interval of time or space.
- Central limit theorem: A theorem that states that the sum of independent and identically distributed random variables tends to follow a normal distribution as the sample size increases, regardless of the underlying distribution of the variables.
- Confidence intervals: A range of values around a sample statistic that is likely to contain the true population parameter with a given level of confidence.
- Hypothesis testing: A statistical procedure for testing a hypothesis about a population parameter using a sample statistic.
