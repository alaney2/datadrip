# Boltzmann Machines

A Boltzmann Machine (BM) is a type of stochastic recurrent neural network and energy-based model used for unsupervised learning tasks. It was introduced by Geoffrey Hinton and Terry Sejnowski in 1985. Boltzmann Machines are named after the Austrian physicist Ludwig Boltzmann, who made significant contributions to the field of statistical mechanics. The learning algorithm of Boltzmann Machines is based on the principles of statistical mechanics, particularly the concept of energy minimization.

## Energy-Based Models

Energy-based models (EBMs) are a class of machine learning models that associate a scalar energy value with each configuration of the model's variables. The goal of learning in EBMs is to adjust the model's parameters to minimize the energy of the desired configurations and maximize the energy of undesired configurations. Boltzmann Machines are a type of EBM, where the energy function is defined over the states of binary stochastic units.

## Structure of Boltzmann Machines

A Boltzmann Machine consists of a set of binary stochastic units, which can be either visible or hidden. Visible units represent the observed data, while hidden units capture the underlying structure of the data. The units are connected by symmetric weighted connections, and there are no self-connections. The network can be fully connected, meaning that each unit is connected to every other unit, or it can have a more restricted connectivity pattern.

The energy function of a Boltzmann Machine is defined as:


$$

E(\mathbf{v}, \mathbf{h}) = -\sum_{i, j} w_{ij} v_i h_j - \sum_i a_i v_i - \sum_j b_j h_j

$$


where $\mathbf{v}$ and $\mathbf{h}$ are the visible and hidden unit states, respectively, $w_{ij}$ is the weight of the connection between units $i$ and $j$, $a_i$ and $b_j$ are the biases of the visible and hidden units, respectively, and the sums are taken over all visible-hidden pairs and all visible and hidden units.

The probability distribution over the states of the visible and hidden units is given by the Boltzmann distribution:


$$

P(\mathbf{v}, \mathbf{h}) = \frac{1}{Z} \exp(-E(\mathbf{v}, \mathbf{h}))

$$


where $Z$ is the partition function, which is the sum of the exponential of the negative energy over all possible configurations of the visible and hidden units:


$$

Z = \sum_{\mathbf{v}, \mathbf{h}} \exp(-E(\mathbf{v}, \mathbf{h}))

$$


## Learning in Boltzmann Machines

The learning algorithm for Boltzmann Machines is based on maximum likelihood estimation. The goal is to find the model parameters (weights and biases) that maximize the likelihood of the observed data. The gradient of the log-likelihood with respect to the model parameters can be computed as:


$$

\frac{\partial \log P(\mathbf{v})}{\partial \theta} = \langle \frac{\partial E(\mathbf{v}, \mathbf{h})}{\partial \theta} \rangle_{\mathbf{h}|\mathbf{v}} - \langle \frac{\partial E(\mathbf{v}, \mathbf{h})}{\partial \theta} \rangle_{\mathbf{v}, \mathbf{h}}

$$


where $\theta$ represents the model parameters, and the angle brackets denote expectations with respect to the conditional distribution of the hidden units given the visible units and the joint distribution of the visible and hidden units, respectively.

The learning algorithm consists of two phases: the positive phase and the negative phase. In the positive phase, the model is clamped to the observed data, and the hidden units are sampled from their conditional distribution given the visible units. In the negative phase, the model is allowed to run freely, and both visible and hidden units are sampled from their joint distribution. The gradient of the log-likelihood is then computed as the difference between the statistics of the positive and negative phases.

The learning algorithm can be slow due to the need to sample from the joint distribution of the visible and hidden units. Various techniques have been proposed to speed up learning, such as contrastive divergence and persistent contrastive divergence.

## Variants and Extensions

Several variants and extensions of Boltzmann Machines have been proposed to improve their learning efficiency and expressive power. Some of these include:

- Restricted Boltzmann Machines (RBMs): RBMs are a simplified version of Boltzmann Machines, where the visible and hidden units form a bipartite graph, meaning that there are no connections between visible units or between hidden units. This simplification allows for more efficient learning algorithms, such as contrastive divergence.

- Deep Boltzmann Machines (DBMs): DBMs are a multi-layer extension of Boltzmann Machines, where the hidden units are organized into multiple layers. DBMs can learn hierarchical representations of the data and can be trained using layer-wise pretraining and fine-tuning.

- Convolutional Boltzmann Machines: Convolutional Boltzmann Machines are a variant of Boltzmann Machines that incorporate convolutional layers, which can learn local and translation-invariant features from data with spatial or temporal structure, such as images or time series.

## Applications

Boltzmann Machines and their variants have been applied to various unsupervised learning tasks, such as:

- Feature learning and representation learning: Boltzmann Machines can learn useful features from the data, which can be used as input to other machine learning models or for visualization and analysis.

- Dimensionality reduction: Boltzmann Machines can be used to learn a lower-dimensional representation of the data, which can be useful for data compression, visualization, or denoising.

- Collaborative filtering and recommendation systems: Boltzmann Machines can be used to model the preferences of users and items in a recommendation system, and to predict the preferences of users for new items.

- Generative modeling: Boltzmann Machines can be used to learn a generative model of the data, which can be used for tasks such as data synthesis, inpainting, or denoising.
