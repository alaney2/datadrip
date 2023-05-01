# Cumulative Distribution Functions

In probability theory and statistics, **cumulative distribution functions (CDF)** are used to describe the probability distribution of a random variable. A CDF is a function that maps the probability of the variable being less than or equal to a certain value. It is a way to summarize the entire probability distribution of a random variable in one function. 

## Definition

Let X be a continuous or discrete random variable, and F be its CDF. Then F is defined as:

$$F(x)=P(X\le x)$$

where P is the probability measure.

For continuous random variables, the CDF is a continuous function that is non-decreasing, right-continuous, and has a limit of 0 as x approaches negative infinity and a limit of 1 as x approaches positive infinity. For discrete random variables, the CDF is a step function that jumps by the probability of the random variable taking a certain value.

## Properties

The following are some important properties of CDFs:

- Non-decreasing: For any two values a and b such that a ≤ b, F(a) ≤ F(b).
- Right-continuous: The limit of F(x) as x approaches any value from the right exists and is equal to F(x) at that value.
- Limiting behavior: As x approaches negative infinity, F(x) approaches 0, and as x approaches positive infinity, F(x) approaches 1.

## Using CDFs

CDFs are useful in many areas of statistics and probability theory. Some common uses include:

### Probability Calculations

Given a CDF, one can calculate the probability of a random variable taking a certain value, or falling within a certain range. For example, the probability that a continuous random variable X falls within the interval (a, b] is given by:

$$P(a < X \le b) = F(b) - F(a)$$

### Inference

CDFs can be used in hypothesis testing and confidence interval estimation. The CDF of a test statistic can be used to calculate the p-value of the test, which measures the strength of evidence against the null hypothesis. Confidence intervals can be constructed using the inverse of the CDF, also known as the quantile function.

### Simulation

CDFs can be used to generate random numbers from a given probability distribution using inverse transform sampling. This technique involves generating uniform random numbers and transforming them using the inverse of the CDF.

## Conclusion

In summary, cumulative distribution functions are an important tool for describing the probability distribution of a random variable. They provide a way to summarize the entire distribution in one function, and can be used for probability calculations, inference, and simulation.
