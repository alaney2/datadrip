# Minimum Description Length

The Minimum Description Length (MDL) principle is a model selection criterion in machine learning and statistics, based on the idea of data compression. It was introduced by Jorma Rissanen in the 1970s as an alternative to the Bayesian approach for model selection. The MDL principle is closely related to information theory and Kolmogorov complexity, and it can be seen as a formalization of Occam's razor principle, which states that the simplest explanation for a given set of data is usually the best one.

## Overview

The main idea behind the MDL principle is to find the model that provides the shortest description of the data, considering both the complexity of the model and the goodness of fit to the data. In other words, the MDL principle tries to balance the trade-off between model complexity and model accuracy. This is important because overly complex models can lead to overfitting, while overly simple models can lead to underfitting.

The MDL principle can be applied to various types of models, such as linear regression, decision trees, and neural networks. In general, the MDL principle can be used for model selection, model comparison, and model averaging.

## Formalization

The MDL principle can be formalized using the concepts of information theory, such as entropy and coding length. Given a set of data $D$ and a model $M$, the description length $L(D, M)$ is defined as the sum of the description length of the model $L(M)$ and the description length of the data given the model $L(D|M)$:


$$

L(D, M) = L(M) + L(D|M)

$$


The goal is to find the model $M^*$ that minimizes the description length $L(D, M)$:


$$

M^* = \arg\min_{M} L(D, M)

$$


The description length $L(M)$ can be interpreted as a measure of the complexity of the model, while the description length $L(D|M)$ can be interpreted as a measure of the goodness of fit of the model to the data. In practice, the description lengths can be approximated using various coding schemes, such as Huffman coding or arithmetic coding.

## Connection to Bayesian Inference

The MDL principle can be related to Bayesian inference through the concept of the posterior probability of a model given the data. In Bayesian inference, the posterior probability of a model $M$ given the data $D$ is proportional to the product of the prior probability of the model $P(M)$ and the likelihood of the data given the model $P(D|M)$:


$$

P(M|D) \propto P(M) P(D|M)

$$


Taking the negative logarithm of the posterior probability, we obtain the following expression:


$$

- \log P(M|D) = - \log P(M) - \log P(D|M) + C

$$


where $C$ is a constant that does not depend on the model. Comparing this expression with the description length $L(D, M)$, we can see that the MDL principle can be interpreted as a form of Bayesian inference with a specific choice of prior probabilities and coding schemes.

## Applications

The MDL principle has been applied to various problems in machine learning and statistics, such as:

- Model selection: Choosing the best model from a set of candidate models based on the MDL criterion.
- Model comparison: Comparing the performance of different models based on their description lengths.
- Model averaging: Combining the predictions of multiple models by weighting them according to their description lengths.
- Feature selection: Selecting the most relevant features for a given task based on the MDL criterion.
- Clustering: Finding the optimal number of clusters in a dataset based on the MDL criterion.

## Limitations and Extensions

The MDL principle has some limitations and challenges, such as:

- Computational complexity: The computation of the description lengths can be computationally expensive, especially for large datasets and complex models.
- Sensitivity to coding schemes: The MDL principle depends on the choice of coding schemes for the models and the data, which can affect the results.
- Lack of a unique solution: In some cases, the MDL principle may not provide a unique solution, leading to ambiguities in model selection.

Despite these limitations, the MDL principle has been extended and refined in various ways, such as the Normalized Maximum Likelihood (NML) criterion, the Stochastic Complexity (SC) criterion, and the Prequential (Predictive) MDL criterion. These extensions address some of the limitations and provide more robust and efficient methods for model selection and comparison.
