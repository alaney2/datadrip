# Change of Variables Formula

The change of variables formula is a mathematical technique used in probability theory and statistics to transform a random variable from one distribution to another. It is particularly useful in machine learning and artificial intelligence applications, where it is often necessary to manipulate probability distributions to perform tasks such as sampling, optimization, and inference.

In this article, we will discuss the change of variables formula for both univariate and multivariate random variables, and provide examples of how it can be applied in practice.

## Univariate Change of Variables

Suppose we have a continuous random variable $X$ with probability density function (PDF) $f_X(x)$, and we want to transform it into a new random variable $Y = g(X)$, where $g$ is a differentiable and invertible function. The change of variables formula allows us to find the PDF of $Y$, denoted by $f_Y(y)$, in terms of the PDF of $X$.

The formula is given by:


$$

f_Y(y) = f_X(g^{-1}(y)) \left| \frac{d}{dy} g^{-1}(y) \right|

$$


Here, $g^{-1}(y)$ is the inverse function of $g$, and $\frac{d}{dy} g^{-1}(y)$ is the derivative of the inverse function with respect to $y$. The absolute value of the derivative ensures that the resulting PDF is non-negative.

### Example: Exponential Distribution

Let $X$ be a random variable with an exponential distribution, which has the PDF:


$$

f_X(x) = \lambda e^{-\lambda x}, \quad x \geq 0

$$


where $\lambda > 0$ is the rate parameter. Now, let $Y = g(X) = -\ln(X/\lambda)$. The inverse function is $g^{-1}(y) = \lambda e^{-y}$. The derivative of the inverse function with respect to $y$ is:


$$

\frac{d}{dy} g^{-1}(y) = -\lambda e^{-y}

$$


Applying the change of variables formula, we get:


$$

f_Y(y) = f_X(\lambda e^{-y}) \left| -\lambda e^{-y} \right| = e^{-y}, \quad y \geq 0

$$


Thus, $Y$ has an exponential distribution with rate parameter 1.

## Multivariate Change of Variables

The change of variables formula can be extended to multivariate random variables. Suppose we have a random vector $\mathbf{X} = (X_1, X_2, \dots, X_n)$ with joint PDF $f_{\mathbf{X}}(\mathbf{x})$, and we want to transform it into a new random vector $\mathbf{Y} = \mathbf{g}(\mathbf{X})$, where $\mathbf{g} = (g_1, g_2, \dots, g_n)$ is a vector of differentiable and invertible functions.

The multivariate change of variables formula is given by:


$$

f_{\mathbf{Y}}(\mathbf{y}) = f_{\mathbf{X}}(\mathbf{g}^{-1}(\mathbf{y})) \left| \det \frac{\partial \mathbf{g}^{-1}(\mathbf{y})}{\partial \mathbf{y}} \right|

$$


Here, $\frac{\partial \mathbf{g}^{-1}(\mathbf{y})}{\partial \mathbf{y}}$ is the Jacobian matrix of the inverse function, and $\det \frac{\partial \mathbf{g}^{-1}(\mathbf{y})}{\partial \mathbf{y}}$ is its determinant. The absolute value of the determinant ensures that the resulting joint PDF is non-negative.

### Example: Bivariate Normal Distribution

Let $\mathbf{X} = (X_1, X_2)$ be a random vector with a bivariate normal distribution, which has the joint PDF:


$$

f_{\mathbf{X}}(\mathbf{x}) = \frac{1}{2\pi\sigma_1\sigma_2\sqrt{1-\rho^2}} \exp \left( -\frac{1}{2(1-\rho^2)} \left[ \frac{(x_1-\mu_1)^2}{\sigma_1^2} - 2\rho\frac{(x_1-\mu_1)(x_2-\mu_2)}{\sigma_1\sigma_2} + \frac{(x_2-\mu_2)^2}{\sigma_2^2} \right] \right)

$$


where $\mu_1, \mu_2$ are the means, $\sigma_1, \sigma_2$ are the standard deviations, and $\rho$ is the correlation coefficient. Now, let $\mathbf{Y} = \mathbf{g}(\mathbf{X}) = (Y_1, Y_2) = (\frac{X_1-\mu_1}{\sigma_1}, \frac{X_2-\mu_2}{\sigma_2})$. The inverse function is $\mathbf{g}^{-1}(\mathbf{y}) = (\mu_1 + \sigma_1 y_1, \mu_2 + \sigma_2 y_2)$.

The Jacobian matrix of the inverse function is:


$$

\frac{\partial \mathbf{g}^{-1}(\mathbf{y})}{\partial \mathbf{y}} =
\begin{bmatrix}
\frac{\partial (\mu_1 + \sigma_1 y_1)}{\partial y_1} & \frac{\partial (\mu_1 + \sigma_1 y_1)}{\partial y_2} \\
\frac{\partial (\mu_2 + \sigma_2 y_2)}{\partial y_1} & \frac{\partial (\mu_2 + \sigma_2 y_2)}{\partial y_2}
\end{bmatrix} =
\begin{bmatrix}
\sigma_1 & 0 \\
0 & \sigma_2
\end{bmatrix}

$$


The determinant of the Jacobian matrix is $\det \frac{\partial \mathbf{g}^{-1}(\mathbf{y})}{\partial \mathbf{y}} = \sigma_1\sigma_2$. Applying the multivariate change of variables formula, we get:


$$

f_{\mathbf{Y}}(\mathbf{y}) = f_{\mathbf{X}}(\mu_1 + \sigma_1 y_1, \mu_2 + \sigma_2 y_2) \left| \sigma_1\sigma_2 \right| = \frac{1}{2\pi\sqrt{1-\rho^2}} \exp \left( -\frac{1}{2(1-\rho^2)} \left[ y_1^2 - 2\rho y_1 y_2 + y_2^2 \right] \right)

$$


Thus, $\mathbf{Y}$ has a bivariate normal distribution with means 0, standard deviations 1, and correlation coefficient $\rho$.
