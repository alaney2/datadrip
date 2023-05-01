# Law of Total Expectation

The law of total expectation, also known as the law of iterated expectations, is an important concept in probability theory that helps in calculating expected values of random variables. It is a generalization of the law of total probability and can be used to find the expected value of a random variable given some other information about the system. 

## Definition

Let $X$ and $Y$ be two random variables defined on the same probability space, and $h$ be a function such that $E(|h(X)|)<\infty$. Then the law of total expectation states that:

$$E[h(X)]=E[E[h(X)|Y]]$$

This means that the expected value of $h(X)$ can be calculated by taking the conditional expectation of $h(X)$ given $Y$, and then taking the expected value of that conditional expectation.

## Intuition

The intuition behind the law of total expectation is that it allows us to break down a complex expectation into simpler conditional expectations. Instead of trying to calculate the expected value of $h(X)$ directly, we can first condition on $Y$ and then calculate the expected value of $h(X)$ given that $Y$ takes on a particular value. We can then take the average of these expected values over all possible values of $Y$ to get the final expected value of $h(X)$.

## Example

Suppose $X$ and $Y$ are two random variables such that $X$ takes on values $1$ and $2$ with equal probability, and $Y$ takes on values $0$ and $1$ with probabilities $p$ and $1-p$ respectively. Let $h(X)=X^2$. Then we can use the law of total expectation to find $E[h(X)]$ as follows:

$$E[h(X)]=E[E[h(X)|Y]]=E[h(X)|Y=0]P(Y=0)+E[h(X)|Y=1]P(Y=1)$$

Now, we can calculate the conditional expectations $E[h(X)|Y=0]$ and $E[h(X)|Y=1]$ as follows:

$$E[h(X)|Y=0]=E[X^2|Y=0]=\frac{1^2+2^2}{2}=1.5$$

$$E[h(X)|Y=1]=E[X^2|Y=1]=\frac{1^2+2^2}{2}=1.5$$

Substituting these values in the earlier equation, we get:

$$E[h(X)]=1.5p+1.5(1-p)=1.5$$

Hence, the expected value of $X^2$ is $1.5$.

## Uses

The law of total expectation is used in various fields such as statistics, machine learning, and signal processing. It is particularly useful in Bayesian statistics, where it is used to calculate posterior probabilities of events given some prior probabilities and observed data. It is also used in decision theory to calculate expected utilities of different decisions. In machine learning, it is used to calculate expected losses or rewards in reinforcement learning and to estimate parameters in hidden Markov models.

## Conclusion

The law of total expectation is a powerful tool in probability theory that allows us to calculate expected values of random variables by breaking down complex expectations into simpler conditional expectations. It is widely used in various fields such as statistics, machine learning, and signal processing.
