# Jensen-Shannon Divergence

Jensen-Shannon Divergence (JSD) is a measure of similarity between two probability distributions. It is derived from the Kullback-Leibler Divergence (KLD), which is a measure of the difference between two probability distributions. JSD is symmetric and always non-negative, making it a useful metric for comparing probability distributions in various applications, such as natural language processing, image processing, and machine learning.

## Definition

Given two probability distributions $P$ and $Q$, the Jensen-Shannon Divergence is defined as the average of the Kullback-Leibler Divergences between each distribution and their average distribution $M = \frac{1}{2}(P + Q)$:


$$

JSD(P, Q) = \frac{1}{2} \left( KLD(P \parallel M) + KLD(Q \parallel M) \right)

$$


where $KLD(P \parallel Q)$ is the Kullback-Leibler Divergence from $P$ to $Q$:


$$

KLD(P \parallel Q) = \sum_{i} P(i) \log \frac{P(i)}{Q(i)}

$$


The JSD is always non-negative and symmetric, meaning that $JSD(P, Q) = JSD(Q, P)$.

## Properties

1. **Non-negativity**: The Jensen-Shannon Divergence is always non-negative, i.e., $JSD(P, Q) \geq 0$. This is because the Kullback-Leibler Divergence is always non-negative, and the JSD is the average of two KLDs.

2. **Symmetry**: The Jensen-Shannon Divergence is symmetric, i.e., $JSD(P, Q) = JSD(Q, P)$. This is because the JSD is the average of the KLDs between each distribution and their average distribution, and the order of the distributions does not affect the result.

3. **Triangle inequality**: The Jensen-Shannon Divergence does not satisfy the triangle inequality, i.e., $JSD(P, Q) + JSD(Q, R) \nleq JSD(P, R)$ for some probability distributions $P$, $Q$, and $R$. Therefore, it is not a true metric in the mathematical sense. However, the square root of the JSD does satisfy the triangle inequality and is a valid metric, known as the Jensen-Shannon Distance.

4. **Upper bound**: The Jensen-Shannon Divergence is upper-bounded by the logarithm of the number of possible events in the probability distributions, i.e., $JSD(P, Q) \leq \log n$ for discrete distributions with $n$ possible events. This is because the maximum value of the KLD is $\log n$, and the JSD is the average of two KLDs.

5. **Lower bound**: The Jensen-Shannon Divergence is lower-bounded by zero, i.e., $JSD(P, Q) \geq 0$. The JSD is equal to zero if and only if the two probability distributions are identical, i.e., $P = Q$.

## Applications

Jensen-Shannon Divergence has various applications in machine learning, natural language processing, and image processing. Some of the common applications include:

1. **Document similarity**: In natural language processing, JSD can be used to measure the similarity between two documents by comparing their term frequency distributions.

2. **Clustering**: In unsupervised learning, JSD can be used as a distance metric for clustering algorithms, such as k-means or hierarchical clustering, to group similar data points together.

3. **Image comparison**: In image processing, JSD can be used to compare the color histograms of two images to determine their similarity.

4. **Feature selection**: In machine learning, JSD can be used as a criterion for selecting informative features by comparing the distribution of a feature in different classes.

5. **Model comparison**: In Bayesian inference, JSD can be used to compare the posterior distributions of different models to determine which model best explains the observed data.

## Conclusion

Jensen-Shannon Divergence is a useful measure of similarity between two probability distributions, with applications in various fields, such as machine learning, natural language processing, and image processing. It is derived from the Kullback-Leibler Divergence and has several desirable properties, such as non-negativity and symmetry. Despite not being a true metric, the square root of the JSD is a valid metric and can be used as a distance measure in clustering algorithms and other applications.
