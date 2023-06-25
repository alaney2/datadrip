# Multivariate Kernel Density Estimation

Multivariate Kernel Density Estimation (KDE) is a nonparametric technique for estimating the probability density function (PDF) of a random variable. It is particularly useful when the underlying distribution of the data is unknown or difficult to model parametrically. In contrast to univariate KDE, which deals with a single variable, multivariate KDE is used to estimate the joint PDF of multiple variables.

## Background

Given a set of data points $\{x_1, x_2, \dots, x_n\}$, the goal of KDE is to estimate the PDF $f(x)$ of the underlying distribution. In the univariate case, the kernel density estimator is given by:


$$

\hat{f}(x) = \frac{1}{nh} \sum_{i=1}^n K\left(\frac{x - x_i}{h}\right)

$$


where $K(\cdot)$ is a kernel function, $h$ is the bandwidth, and $n$ is the number of data points. The kernel function is a symmetric, non-negative function that integrates to one, ensuring that the estimated PDF also integrates to one.

In the multivariate case, the data points are vectors $\{x_1, x_2, \dots, x_n\} \in \mathbb{R}^d$, where $d$ is the number of dimensions (variables). The multivariate kernel density estimator is given by:


$$

\hat{f}(x) = \frac{1}{n|H|^{1/2}} \sum_{i=1}^n K\left(H^{-1/2}(x - x_i)\right)

$$


where $H$ is a $d \times d$ bandwidth matrix, and $|H|$ denotes the determinant of $H$. The multivariate kernel function $K(\cdot)$ is a generalization of the univariate kernel function to multiple dimensions.

## Kernel Functions

There are several popular choices for kernel functions in multivariate KDE, including:

1. Gaussian Kernel:


$$

K(x) = \frac{1}{(2\pi)^{d/2}} e^{-\frac{1}{2} x^T x}

$$


The Gaussian kernel is the most commonly used kernel in multivariate KDE due to its smoothness and computational efficiency.

2. Epanechnikov Kernel:


$$

K(x) = \frac{3^d}{4^d \pi^{d/2}} (1 - x^T x) \mathbb{1}_{\{x^T x \le 1\}}

$$


The Epanechnikov kernel is a compactly supported kernel, meaning it is zero outside a certain range. This can lead to faster computation times, but may result in less smooth estimates.

3. Uniform Kernel:


$$

K(x) = \frac{1}{2^d} \mathbb{1}_{\{||x||_\infty \le 1\}}

$$


The uniform kernel is another compactly supported kernel, but it is less smooth than the Epanechnikov kernel.

## Bandwidth Selection

The choice of the bandwidth matrix $H$ is crucial for the performance of the multivariate KDE. A small bandwidth may result in an overfitting, leading to a noisy estimate, while a large bandwidth may result in an underfitting, leading to a too smooth estimate. There are several methods for selecting the bandwidth matrix, including:

1. Rule of thumb: This method provides a simple, quick estimate of the bandwidth matrix based on the sample covariance matrix and the number of data points. For the Gaussian kernel, the rule of thumb bandwidth matrix is given by:


$$

H = \left(\frac{4}{d+2}\right)^{\frac{2}{d+4}} n^{-\frac{2}{d+4}} \Sigma

$$


where $\Sigma$ is the sample covariance matrix.

2. Cross-validation: This method involves minimizing the mean integrated squared error (MISE) or another error measure using cross-validation techniques, such as leave-one-out cross-validation or k-fold cross-validation.

3. Plug-in methods: These methods estimate the optimal bandwidth matrix by plugging in estimates of the unknown quantities in the asymptotic expression for the optimal bandwidth.

## Applications

Multivariate KDE has numerous applications in various fields, including:

1. Data visualization: Multivariate KDE can be used to create contour plots or heatmaps to visualize the distribution of multivariate data.

2. Anomaly detection: By estimating the PDF of the data, multivariate KDE can be used to identify outliers or unusual observations.

3. Density-based clustering: Algorithms such as mean-shift clustering rely on multivariate KDE to identify clusters in the data.

4. Dimensionality reduction: Techniques like kernel principal component analysis (KPCA) use multivariate KDE to project high-dimensional data onto a lower-dimensional space while preserving the structure of the data.

5. Bayesian inference: Multivariate KDE can be used to estimate the likelihood function in Bayesian inference problems, particularly when the likelihood function is difficult to model parametrically.

6. Regression and classification: Multivariate KDE can be used in nonparametric regression and classification problems, such as kernel regression and kernel discriminant analysis.
