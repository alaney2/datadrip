# Restricted Boltzmann Machines

Restricted Boltzmann Machines (RBMs) are a type of generative stochastic artificial neural network that can learn a probability distribution over its set of inputs. RBMs have found applications in dimensionality reduction, classification, collaborative filtering, feature learning, topic modeling, and even many-body quantum mechanics. They are a simplified version of the general Boltzmann machines, with the restriction that there are no connections between nodes within the same layer.

## Structure

An RBM consists of two layers of nodes: a visible layer and a hidden layer. The visible layer represents the input data, while the hidden layer represents latent variables that capture the structure in the data. Each node in the visible layer is connected to every node in the hidden layer, but there are no connections between nodes within the same layer. This bipartite structure is the main restriction that differentiates RBMs from general Boltzmann machines.

## Energy Function

RBMs are energy-based models, which means that they associate an energy value with each configuration of the visible and hidden nodes. The energy function of an RBM is defined as:


$$

E(v, h) = -\sum_{i=1}^m\sum_{j=1}^n w_{ij} v_i h_j - \sum_{i=1}^m a_i v_i - \sum_{j=1}^n b_j h_j

$$


where $v$ and $h$ are the visible and hidden nodes, $w_{ij}$ is the weight between visible node $i$ and hidden node $j$, $a_i$ and $b_j$ are the biases of visible node $i$ and hidden node $j$, and $m$ and $n$ are the number of visible and hidden nodes, respectively.

The probability distribution over the visible and hidden nodes is given by the Boltzmann distribution:


$$

P(v, h) = \frac{1}{Z} e^{-E(v, h)}

$$


where $Z$ is the partition function, which is the sum of the exponential of the negative energy over all possible configurations of the visible and hidden nodes:


$$

Z = \sum_{v, h} e^{-E(v, h)}

$$


## Learning

The goal of training an RBM is to learn the weights and biases that maximize the likelihood of the training data. This is typically done using gradient-based optimization methods, such as stochastic gradient descent. However, computing the gradient of the log-likelihood with respect to the parameters is intractable due to the partition function. Instead, an approximation called contrastive divergence is used.

Contrastive divergence is a fast learning algorithm that approximates the gradient by performing Gibbs sampling for a small number of steps. The basic idea is to start with a visible vector from the training data, sample a hidden vector given the visible vector, then sample a new visible vector given the hidden vector, and so on. After a few steps, the difference between the initial and final visible vectors is used to update the weights and biases.

## Applications

RBMs have been used in a wide range of applications, including:

1. **Dimensionality reduction**: RBMs can be used to learn a lower-dimensional representation of the input data, which can be useful for visualization, compression, or denoising.
2. **Classification**: RBMs can be used as a feature extractor for supervised learning tasks, such as image or text classification. The learned features can be fed into a classifier, such as a support vector machine or a logistic regression model.
3. **Collaborative filtering**: RBMs have been used to model user preferences in recommender systems, by learning a joint probability distribution over users and items.
4. **Feature learning**: RBMs can be used to learn useful features from unlabeled data, which can then be used for supervised learning tasks or other unsupervised learning tasks, such as clustering.
5. **Topic modeling**: RBMs have been used to learn latent topics in text data, by modeling the joint distribution of words and topics.

## Extensions

There are several extensions of RBMs that have been proposed to address various limitations or to model different types of data:

1. **Deep Belief Networks**: A deep belief network (DBN) is a hierarchical generative model that consists of multiple layers of RBMs stacked on top of each other. DBNs can be trained in a greedy layer-wise fashion, which makes them more scalable than training a single large RBM.
2. **Deep Boltzmann Machines**: A deep Boltzmann machine (DBM) is a generalization of RBMs that allows for multiple layers of hidden nodes. DBMs can be trained using a combination of contrastive divergence and a layer-wise pretraining procedure.
3. **Gaussian-Bernoulli RBMs**: Gaussian-Bernoulli RBMs are a variant of RBMs that can model continuous-valued data by using Gaussian visible units instead of binary units.
4. **Convolutional RBMs**: Convolutional RBMs are a variant of RBMs that incorporate convolutional layers, which makes them more suitable for modeling grid-structured data, such as images.

Overall, RBMs are a powerful and versatile unsupervised learning technique that has been successfully applied to a wide range of problems in machine learning and artificial intelligence.
