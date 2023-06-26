# Categorical Distribution

The Categorical Distribution, also known as the Generalized Bernoulli Distribution, is a discrete probability distribution that describes the probability of observing one of $K$ distinct categories or classes. It is a generalization of the Bernoulli Distribution, which is used to model binary outcomes. The Categorical Distribution is often used in machine learning and artificial intelligence to model the probability distribution over a finite set of discrete outcomes, such as the classes in a classification problem.

## Definition

Let $X$ be a discrete random variable that can take one of $K$ distinct values, denoted as $\{1, 2, \dots, K\}$. The Categorical Distribution is defined by a probability mass function (PMF) that assigns a probability $p_i$ to each possible outcome $i$, where $0 \leq p_i \leq 1$ and $\sum_{i=1}^K p_i = 1$. The PMF of the Categorical Distribution can be written as:


$$

P(X=i) = p_i, \quad i = 1, 2, \dots, K

$$


The parameters of the Categorical Distribution are the probabilities $p_i$, which can be represented as a probability vector $\mathbf{p} = (p_1, p_2, \dots, p_K)$.

## Properties

1. **Support**: The support of the Categorical Distribution is the set of integers $\{1, 2, \dots, K\}$, which represent the $K$ distinct categories.

2. **Mean**: The mean of the Categorical Distribution is given by:


$$

\mu = \sum_{i=1}^K i \cdot p_i

$$


3. **Variance**: The variance of the Categorical Distribution is given by:


$$

\sigma^2 = \sum_{i=1}^K i^2 \cdot p_i - \mu^2

$$


4. **Entropy**: The entropy of the Categorical Distribution, which measures the average amount of information (uncertainty) contained in the distribution, is given by:


$$

H(X) = -\sum_{i=1}^K p_i \log p_i

$$


## Applications in Machine Learning

The Categorical Distribution is widely used in machine learning and artificial intelligence, particularly in classification problems. Some common applications include:

1. **Multiclass Classification**: In multiclass classification problems, the goal is to assign an input to one of $K$ distinct classes. The Categorical Distribution can be used to model the probability distribution over the classes, with the predicted class being the one with the highest probability.

2. **Softmax Regression**: Softmax Regression, also known as Multinomial Logistic Regression, is a generalization of logistic regression for multiclass classification problems. The softmax function is used to convert the output of a linear model into a probability distribution over the classes, which can be modeled by a Categorical Distribution.

3. **Topic Modeling**: In topic modeling, the goal is to discover the underlying topics in a collection of documents. The Categorical Distribution can be used to model the distribution of words in a document given a topic, as well as the distribution of topics in a document.

4. **Reinforcement Learning**: In reinforcement learning, the Categorical Distribution can be used to model the policy, which is the probability distribution over actions given a state.

5. **Natural Language Processing**: In natural language processing tasks, such as language modeling and machine translation, the Categorical Distribution can be used to model the probability distribution over words or tokens in a vocabulary.

## Relationship to Other Distributions

1. **Bernoulli Distribution**: The Bernoulli Distribution is a special case of the Categorical Distribution when $K=2$. In this case, the Categorical Distribution models the probability of success ($p_1$) and failure ($p_2$), with $p_1 + p_2 = 1$.

2. **Multinomial Distribution**: The Multinomial Distribution is a generalization of the Categorical Distribution for multiple independent trials. In the Multinomial Distribution, the probability of observing a specific combination of outcomes in $n$ independent trials, each with a Categorical Distribution, is given by the multinomial probability mass function.

3. **Dirichlet Distribution**: The Dirichlet Distribution is a continuous probability distribution over the space of probability vectors $\mathbf{p}$. It is often used as a prior distribution in Bayesian inference for the parameters of a Categorical Distribution or a Multinomial Distribution.
