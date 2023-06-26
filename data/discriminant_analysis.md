# Discriminant Analysis

Discriminant Analysis is a statistical technique used in the field of machine learning and pattern recognition for classifying data into different groups or classes. It is a supervised learning method, which means that it requires labeled data for training. Discriminant Analysis aims to find a linear or quadratic combination of features that best separates the data into different classes. There are two main types of Discriminant Analysis: Linear Discriminant Analysis (LDA) and Quadratic Discriminant Analysis (QDA).

## Linear Discriminant Analysis (LDA)

Linear Discriminant Analysis is a linear method for dimensionality reduction and classification. It aims to find the linear combination of features that best separates the data into different classes. LDA assumes that the data within each class is normally distributed and that the covariance matrices of the classes are equal. The main idea behind LDA is to maximize the between-class variance while minimizing the within-class variance.

Given a dataset with $n$ samples and $p$ features, the goal of LDA is to find a projection matrix $W$ that maps the original $p$-dimensional data to a lower-dimensional space, such that the between-class variance is maximized and the within-class variance is minimized. The between-class variance is defined as the variance of the class means in the projected space, while the within-class variance is defined as the sum of the variances of each class in the projected space.

To find the optimal projection matrix $W$, LDA solves the following optimization problem:


$$

W = \arg\max_W \frac{|W^T S_B W|}{|W^T S_W W|}

$$


where $S_B$ is the between-class scatter matrix and $S_W$ is the within-class scatter matrix. The scatter matrices are defined as:


$$

S_B = \sum_{i=1}^k n_i (\mu_i - \mu)(\mu_i - \mu)^T

$$



$$

S_W = \sum_{i=1}^k \sum_{x \in C_i} (x - \mu_i)(x - \mu_i)^T

$$


where $k$ is the number of classes, $n_i$ is the number of samples in class $i$, $\mu_i$ is the mean of class $i$, and $\mu$ is the overall mean of the data.

The optimal projection matrix $W$ is formed by the eigenvectors corresponding to the largest eigenvalues of the matrix $S_W^{-1} S_B$. Once the projection matrix is found, the data can be projected onto the lower-dimensional space for classification or visualization purposes.

## Quadratic Discriminant Analysis (QDA)

Quadratic Discriminant Analysis is an extension of LDA that allows for quadratic decision boundaries. Unlike LDA, QDA does not assume that the covariance matrices of the classes are equal. This allows for more flexibility in modeling the data, but it also requires more parameters to be estimated, which can lead to overfitting if the sample size is small.

The main idea behind QDA is to model the data within each class as a multivariate normal distribution with a class-specific mean vector and covariance matrix. Given a new data point, QDA computes the posterior probability of the point belonging to each class using Bayes' theorem and assigns the point to the class with the highest posterior probability.

The posterior probability of a data point $x$ belonging to class $i$ is given by:


$$

P(C_i | x) = \frac{P(x | C_i) P(C_i)}{P(x)}

$$


where $P(x | C_i)$ is the likelihood of $x$ given class $i$, $P(C_i)$ is the prior probability of class $i$, and $P(x)$ is the marginal probability of $x$. Assuming that the data within each class is normally distributed, the likelihood of $x$ given class $i$ can be computed using the multivariate normal density function:


$$

P(x | C_i) = \frac{1}{(2\pi)^{p/2} |\Sigma_i|^{1/2}} \exp\left(-\frac{1}{2}(x - \mu_i)^T \Sigma_i^{-1} (x - \mu_i)\right)

$$


where $\mu_i$ and $\Sigma_i$ are the mean vector and covariance matrix of class $i$, respectively.

To classify a new data point, QDA computes the posterior probabilities for each class and assigns the point to the class with the highest probability. The decision boundaries between the classes are quadratic, which allows for more complex separation of the data compared to LDA.

## Applications and Limitations

Discriminant Analysis is widely used in various fields, such as pattern recognition, image processing, and bioinformatics, for classification and dimensionality reduction tasks. Some advantages of Discriminant Analysis include its simplicity, interpretability, and computational efficiency. However, it also has some limitations, such as the assumptions of normality and equal covariance matrices (for LDA), which may not hold in practice. In cases where these assumptions are violated, other classification methods, such as Support Vector Machines or Logistic Regression, may be more appropriate.
