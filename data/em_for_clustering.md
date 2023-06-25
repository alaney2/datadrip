# EM for Clustering

The Expectation-Maximization (EM) algorithm is a popular iterative method used for clustering and density estimation. It is particularly useful for clustering data when the underlying distribution is a mixture of Gaussian distributions, known as Gaussian Mixture Models (GMMs). In this context, EM is used to estimate the parameters of the GMM, which can then be used to assign data points to clusters.

## Gaussian Mixture Models

A Gaussian Mixture Model is a probabilistic model that represents a mixture of several Gaussian distributions. The probability density function of a GMM is given by:


$$

p(\mathbf{x}) = \sum_{k=1}^K \pi_k \mathcal{N}(\mathbf{x} | \mathbf{\mu}_k, \mathbf{\Sigma}_k)

$$


where $\mathbf{x}$ is a data point, $K$ is the number of Gaussian components, $\pi_k$ is the mixing coefficient for the $k$-th Gaussian component, $\mathcal{N}(\mathbf{x} | \mathbf{\mu}_k, \mathbf{\Sigma}_k)$ is the Gaussian distribution with mean $\mathbf{\mu}_k$ and covariance matrix $\mathbf{\Sigma}_k$. The mixing coefficients $\pi_k$ must satisfy the constraints $\pi_k \ge 0$ and $\sum_{k=1}^K \pi_k = 1$.

The goal of clustering with GMMs is to estimate the parameters $\mathbf{\Theta} = \{\pi_k, \mathbf{\mu}_k, \mathbf{\Sigma}_k\}_{k=1}^K$ that best describe the data, and then assign each data point to the Gaussian component with the highest probability.

## Expectation-Maximization Algorithm

The Expectation-Maximization algorithm is an iterative method used to find the maximum likelihood estimates of the parameters $\mathbf{\Theta}$ in the presence of latent variables. In the context of GMMs, the latent variables are the component assignments of each data point.

The EM algorithm consists of two steps: the Expectation (E) step and the Maximization (M) step. These steps are repeated until convergence, which is usually determined by a small change in the log-likelihood or a maximum number of iterations.

### Expectation Step

In the E-step, the algorithm computes the posterior probabilities of the component assignments for each data point, given the current estimates of the parameters $\mathbf{\Theta}$. This is done using Bayes' theorem:


$$

\gamma_{ik} = p(z_i = k | \mathbf{x}_i, \mathbf{\Theta}) = \frac{\pi_k \mathcal{N}(\mathbf{x}_i | \mathbf{\mu}_k, \mathbf{\Sigma}_k)}{\sum_{j=1}^K \pi_j \mathcal{N}(\mathbf{x}_i | \mathbf{\mu}_j, \mathbf{\Sigma}_j)}

$$


where $\gamma_{ik}$ is the posterior probability that the $i$-th data point belongs to the $k$-th Gaussian component.

### Maximization Step

In the M-step, the algorithm updates the estimates of the parameters $\mathbf{\Theta}$ using the posterior probabilities computed in the E-step. The updated parameters are given by:


$$

\pi_k^{new} = \frac{1}{N} \sum_{i=1}^N \gamma_{ik}

$$



$$

\mathbf{\mu}_k^{new} = \frac{\sum_{i=1}^N \gamma_{ik} \mathbf{x}_i}{\sum_{i=1}^N \gamma_{ik}}

$$



$$

\mathbf{\Sigma}_k^{new} = \frac{\sum_{i=1}^N \gamma_{ik} (\mathbf{x}_i - \mathbf{\mu}_k^{new})(\mathbf{x}_i - \mathbf{\mu}_k^{new})^T}{\sum_{i=1}^N \gamma_{ik}}

$$


where $N$ is the number of data points.

## Relationship with K-Means Clustering

EM for clustering with GMMs can be seen as a generalization of the K-means clustering algorithm. In K-means, each cluster is represented by a centroid, and data points are assigned to the nearest centroid. In GMMs, each cluster is represented by a Gaussian distribution, and data points are assigned to the Gaussian component with the highest probability.

The EM algorithm can be seen as a "soft" version of K-means, where data points have a probability of belonging to each cluster, rather than a hard assignment. In fact, if the covariance matrices of the GMM are constrained to be proportional to the identity matrix, the EM algorithm reduces to the K-means algorithm.

## Model Selection

One of the challenges in using GMMs for clustering is choosing the appropriate number of Gaussian components $K$. A common approach to model selection is to use the Bayesian Information Criterion (BIC), which balances the goodness of fit of the model with its complexity:


$$

\text{BIC}(\mathbf{\Theta}) = -2 \log p(\mathbf{X} | \mathbf{\Theta}) + d \log N

$$


where $d$ is the number of parameters in the model, and $N$ is the number of data points. The model with the lowest BIC is preferred.

Another approach to model selection is to use cross-validation, where the data is split into training and validation sets, and the model with the best performance on the validation set is chosen.

## Conclusion

EM for clustering is a powerful method for clustering data when the underlying distribution is a mixture of Gaussian distributions. The algorithm iteratively estimates the parameters of the GMM and assigns data points to clusters based on their probabilities. EM for clustering can be seen as a generalization of K-means clustering and is particularly useful when the clusters have different shapes and orientations. Model selection techniques such as BIC and cross-validation can be used to choose the appropriate number of Gaussian components for the GMM.
