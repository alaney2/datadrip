# Beta Regression

Beta regression is a type of regression analysis used to model the relationship between a dependent variable, which is assumed to follow a beta distribution, and one or more independent variables. It is a type of generalized linear model (GLM) that extends the linear regression and logistic regression models to handle continuous dependent variables that are bounded between 0 and 1, such as proportions, percentages, and rates.

## Beta Distribution

The beta distribution is a continuous probability distribution defined on the interval (0, 1) and parameterized by two positive shape parameters, $\alpha$ and $\beta$. The probability density function (PDF) of the beta distribution is given by:


$$

f(y; \alpha, \beta) = \frac{\Gamma(\alpha + \beta)}{\Gamma(\alpha)\Gamma(\beta)} y^{\alpha - 1}(1 - y)^{\beta - 1}

$$


where $y \in (0, 1)$, $\alpha > 0$, $\beta > 0$, and $\Gamma(\cdot)$ is the gamma function. The beta distribution is flexible and can take various shapes depending on the values of $\alpha$ and $\beta$. When $\alpha = \beta = 1$, the beta distribution becomes the uniform distribution on (0, 1).

## Model Specification

In beta regression, the dependent variable $Y$ is assumed to follow a beta distribution with parameters $\alpha$ and $\beta$. The mean of the beta distribution, $\mu$, is modeled as a function of the independent variables, $X_1, X_2, \dots, X_p$, through a link function, $g(\cdot)$:


$$

g(\mu) = X\beta

$$


where $X$ is the design matrix containing the values of the independent variables, and $\beta$ is a vector of regression coefficients. The most commonly used link function in beta regression is the logit function, which is defined as:


$$

g(\mu) = \log \frac{\mu}{1 - \mu}

$$


The logit link function ensures that the predicted mean of the dependent variable, $\hat{\mu}$, is always between 0 and 1.

The precision parameter of the beta distribution, $\phi$, can be either fixed or modeled as a function of the independent variables. When $\phi$ is fixed, the beta regression model is called a simple beta regression model. When $\phi$ is modeled as a function of the independent variables, the model is called a variable dispersion beta regression model.

## Estimation

The parameters of the beta regression model, $\beta$ and $\phi$, are typically estimated using maximum likelihood estimation (MLE). The log-likelihood function for the beta regression model is given by:


$$

\log L(\beta, \phi | Y, X) = \sum_{i=1}^n \log f(y_i; \alpha_i, \beta_i)

$$


where $f(y_i; \alpha_i, \beta_i)$ is the PDF of the beta distribution with parameters $\alpha_i$ and $\beta_i$ that depend on the values of the independent variables for the $i$-th observation. The MLE estimates of $\beta$ and $\phi$ are obtained by maximizing the log-likelihood function with respect to these parameters.

## Applications

Beta regression is particularly useful for modeling dependent variables that are proportions, percentages, or rates, such as the proportion of success in a binary outcome, the percentage of votes for a political candidate, or the rate of growth of a population. Some examples of applications of beta regression include:

- Modeling the proportion of forest cover in a region as a function of environmental and socio-economic factors.
- Analyzing the relationship between the percentage of students passing an exam and the characteristics of the schools and students.
- Estimating the effect of marketing strategies on the conversion rate of website visitors to customers.

## Limitations

Beta regression has some limitations that should be considered when using this method:

- The dependent variable must be strictly between 0 and 1. If the data contain values equal to 0 or 1, a small constant can be added or subtracted to bring them within the valid range.
- The beta distribution assumes that the dependent variable is unimodal, which may not be appropriate for all data.
- The model assumes that the relationship between the dependent variable and the independent variables is correctly specified. If the true relationship is nonlinear or involves interactions, the model may provide biased estimates of the regression coefficients.

Despite these limitations, beta regression is a powerful and flexible method for modeling continuous dependent variables that are bounded between 0 and 1. It can be easily implemented in statistical software and provides a valuable tool for researchers and practitioners in various fields.
