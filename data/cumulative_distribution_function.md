# Cumulative Distribution Function

In probability theory and statistics, the Cumulative Distribution Function (CDF) is a function that describes the probability that a random variable $X$ takes on a value less than or equal to a given value $x$. It is a fundamental concept in the study of probability distributions and is used to describe the behavior of random variables and their associated probabilities.

## Definition

Let $X$ be a random variable with a probability distribution. The Cumulative Distribution Function $F_X(x)$ of $X$ is defined as:


$$

F_X(x) = P(X \le x)

$$


where $P(X \le x)$ denotes the probability that the random variable $X$ takes on a value less than or equal to $x$. The function $F_X(x)$ is non-decreasing and right-continuous, which means that for any $x_1 < x_2$, we have $F_X(x_1) \le F_X(x_2)$, and for any sequence of values $x_n$ converging to $x$ from the right, we have $F_X(x_n) \to F_X(x)$ as $n \to \infty$.

## Types of Random Variables

The definition of the CDF applies to both continuous and discrete random variables. For continuous random variables, the CDF is related to the Probability Density Function (PDF) by the following integral:


$$

F_X(x) = \int_{-\infty}^x f_X(t) dt

$$


where $f_X(t)$ is the PDF of the random variable $X$. The PDF is the derivative of the CDF, provided that the derivative exists:


$$

f_X(x) = \frac{dF_X(x)}{dx}

$$


For discrete random variables, the CDF is related to the Probability Mass Function (PMF) by the following sum:


$$

F_X(x) = \sum_{t \le x} p_X(t)

$$


where $p_X(t)$ is the PMF of the random variable $X$.

## Properties

The CDF has several important properties that are useful in the study of probability distributions:

1. **Non-decreasing**: The CDF is a non-decreasing function, which means that for any $x_1 < x_2$, we have $F_X(x_1) \le F_X(x_2)$. This property reflects the fact that the probability of a random variable taking on a value less than or equal to $x$ increases as $x$ increases.

2. **Right-continuous**: The CDF is right-continuous, which means that for any sequence of values $x_n$ converging to $x$ from the right, we have $F_X(x_n) \to F_X(x)$ as $n \to \infty$. This property ensures that the CDF is well-defined for all values of $x$.

3. **Range**: The range of the CDF is the interval $[0, 1]$. This property follows from the fact that the CDF represents probabilities, which are always between 0 and 1.

4. **Limits**: The limits of the CDF are given by:

   
$$

   \lim_{x \to -\infty} F_X(x) = 0
   
$$


   and

   
$$

   \lim_{x \to \infty} F_X(x) = 1
   
$$


   These properties follow from the fact that the probability of a random variable taking on a value less than $-\infty$ is 0, and the probability of a random variable taking on a value less than or equal to $\infty$ is 1.

5. **Joint CDF**: The joint CDF of two random variables $X$ and $Y$ is defined as:

   
$$

   F_{X, Y}(x, y) = P(X \le x, Y \le y)
   
$$


   The joint CDF has similar properties to the univariate CDF and can be used to study the joint behavior of multiple random variables.

## Applications

The CDF is a fundamental concept in probability theory and statistics and has numerous applications in various fields. Some of the main applications of the CDF include:

1. **Describing probability distributions**: The CDF provides a complete description of the probability distribution of a random variable. By knowing the CDF, one can compute probabilities, quantiles, and other characteristics of the distribution.

2. **Hypothesis testing**: The CDF is used in hypothesis testing to determine the distribution of test statistics under the null hypothesis. This allows researchers to compute p-values and make decisions about the validity of their hypotheses.

3. **Confidence intervals**: The CDF is used to construct confidence intervals for parameters of interest, such as the mean or variance of a population. By knowing the CDF, one can determine the range of values that are likely to contain the true parameter value with a specified level of confidence.

4. **Model fitting**: The CDF is used to fit probability models to data by comparing the empirical CDF of the data to the theoretical CDF of the model. This can be done using goodness-of-fit tests, such as the Kolmogorov-Smirnov test or the Anderson-Darling test.

5. **Simulation**: The CDF is used in simulation studies to generate random samples from a given probability distribution. By inverting the CDF, one can obtain random samples that follow the desired distribution.
