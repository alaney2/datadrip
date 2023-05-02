# Negative Binomial Distribution

The **Negative Binomial Distribution** is a probability distribution that models the number of failures in a sequence of independent and identically distributed Bernoulli trials before a specified number of successes is reached. It is a generalization of the **Binomial Distribution** in which the number of trials is not fixed, but rather the distribution continues until a specific number of successes is achieved.

## Definition

A random variable X has a **Negative Binomial Distribution** with parameters r and p if its probability mass function (PMF) is given by:

$$P(X=k) = \binom{k+r-1}{k}(1-p)^rp^k, \quad k=0,1,2,\dots$$

where $r \in \mathbb{N}_0$ is the number of failures before the desired number of successes is reached, $p \in (0,1)$ is the probability of success in each trial, and $\binom{n}{k}$ is the binomial coefficient.

## Mean and Variance

The mean and variance of X are given by:

$$\mu = \frac{r(1-p)}{p}$$

$$\sigma^2 = \frac{r(1-p)}{p^2}$$

## Moment Generating Function

The **Moment Generating Function** (MGF) of X is given by:

$$M_X(t) = \left(\frac{pe^t}{1-(1-p)e^t}\right)^r$$

## Applications

The Negative Binomial Distribution is commonly used in a variety of fields, including:

- Insurance: modeling the number of claims until a certain limit is reached
- Biology: modeling the number of offspring until a certain number of successful births occurs
- Sports: modeling the number of games until a team wins a certain number of games
- Finance: modeling the number of trades until a certain profit level is reached

## Further Readings

- **Zero-Inflated Negative Binomial Distribution**: a variation of the Negative Binomial Distribution that allows for an excess of zero observations
- **Hurdle Negative Binomial Distribution**: a variation of the Negative Binomial Distribution that models data with a large proportion of zeros
- **Geometric Distribution**: a discrete probability distribution that models the number of trials needed to achieve the first success
- **Hypergeometric Distribution**: a discrete probability distribution that models the probability of k successes in n draws without replacement from a finite population of size N that contains K successes
- **Beta Negative Binomial Distribution**: a variation of the Negative Binomial Distribution that uses a beta distribution to model the probability of success
- **Bayesian Inference**: a statistical framework that uses Bayes' theorem to update the probability of a hypothesis as new evidence becomes available
- **Maximum Likelihood Estimation**: a method for estimating the parameters of a statistical model by maximizing the likelihood function
- **GLM Models**: Generalized Linear Models that allow for the specification of a variety of distribution families, including the Negative Binomial Distribution.
