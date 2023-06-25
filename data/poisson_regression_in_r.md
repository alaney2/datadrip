# Poisson Regression in R

Poisson Regression is a type of Generalized Linear Model (GLM) used to model count data. It assumes that the response variable follows a Poisson distribution and uses a logarithmic link function to relate the response variable to the predictor variables. In this wiki page, we will discuss how to perform Poisson Regression in R, a popular programming language for statistical computing and graphics.

## Poisson Distribution

The Poisson distribution is a discrete probability distribution that models the number of events occurring in a fixed interval of time or space, given a constant mean rate of occurrence. The probability mass function (PMF) of the Poisson distribution is given by:


$$

P(X=k) = \frac{e^{-\lambda} \lambda^k}{k!}

$$


where $X$ is the random variable representing the number of events, $k$ is a non-negative integer, $\lambda$ is the mean rate of occurrence, and $e$ is the base of the natural logarithm.

## Generalized Linear Models

Generalized Linear Models (GLMs) are a class of models that generalize linear regression by allowing the response variable to follow a distribution from the exponential family and using a link function to relate the response variable to the predictor variables. Poisson Regression is a type of GLM where the response variable follows a Poisson distribution, and the logarithmic link function is used.

## Poisson Regression in R

To perform Poisson Regression in R, we can use the `glm()` function with the `family` argument set to `poisson`. The syntax for the `glm()` function is:

```R
glm(formula, data, family = poisson(link = "log"))
```

where `formula` is a symbolic description of the model, `data` is a data frame containing the variables in the model, and `family` specifies the distribution and link function to be used.

### Example

Let's consider a dataset containing the number of daily bike rentals in a city and the corresponding average temperature, humidity, and wind speed. We want to model the number of bike rentals as a function of these weather variables using Poisson Regression.

First, we need to load the data into R:

```R
# Load data
data <- read.csv("bike_rentals.csv")
```

Next, we can fit the Poisson Regression model using the `glm()` function:

```R
# Fit Poisson Regression model
model <- glm(rentals ~ temperature + humidity + wind_speed, data = data, family = poisson(link = "log"))
```

To view the summary of the fitted model, we can use the `summary()` function:

```R
# Display model summary
summary(model)
```

The output will show the estimated coefficients, their standard errors, z-values, and p-values. We can use these values to interpret the relationship between the predictor variables and the response variable.

To make predictions using the fitted model, we can use the `predict()` function:

```R
# Make predictions
predictions <- predict(model, newdata = data, type = "response")
```

The `type` argument is set to `"response"` to obtain the predicted counts on the original scale.

## Model Diagnostics

After fitting the Poisson Regression model, it is essential to check the model's assumptions and assess its goodness of fit. Some common diagnostic plots for Poisson Regression include:

1. Residuals vs. Fitted values plot: To check for non-linearity and unequal error variances.
2. Normal Q-Q plot of standardized residuals: To check for normality of residuals.
3. Scale-Location plot: To check for homoscedasticity.
4. Cook's distance plot: To identify influential observations.

These plots can be created in R using the `plot()` function with the fitted model object as the input:

```R
# Create diagnostic plots
par(mfrow = c(2, 2)) # Set up a 2x2 plot grid
plot(model)
```

If the assumptions of the Poisson Regression model are not met, alternative models such as Negative Binomial Regression, Quasi-Poisson Regression, or Zero-Inflated Poisson Regression may be considered.

## Conclusion

In this wiki page, we discussed how to perform Poisson Regression in R using the `glm()` function. We also covered the basics of Poisson distribution and Generalized Linear Models, and how to perform model diagnostics. Poisson Regression is a useful technique for modeling count data, especially when the response variable follows a Poisson distribution and is related to the predictor variables through a logarithmic link function.
