# Pearson Correlation Coefficient

The Pearson correlation coefficient, also referred to as Pearson's r, is a statistical measure that calculates the strength and direction of the linear relationship between two variables. The coefficient ranges from -1 to 1, where -1 indicates a perfect negative linear relationship, 1 indicates a perfect positive linear relationship, and 0 indicates no linear relationship.

## Calculation

The Pearson correlation coefficient is calculated using the following formula:


$$
 r = \frac{\sum_{i=1}^{n} (x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum_{i=1}^{n} (x_i - \bar{x})^2(y_i - \bar{y})^2}} 
$$


where:
- $x_i$ and $y_i$ are the individual sample points indexed with i,
- $\bar{x}$ and $\bar{y}$ are the mean of $x$ and $y$,
- $n$ is the total number of samples.

## Interpretation

The value of the Pearson correlation coefficient indicates the strength and direction of the linear relationship between the two variables. The closer the coefficient is to either -1 or 1, the stronger the correlation between the variables. If the coefficient is close to 0, it suggests a weak or no linear relationship. The sign of the coefficient indicates the direction of the relationship. If both variables tend to increase or decrease together, the coefficient is positive, and if one variable tends to increase as the other decreases, the coefficient is negative.

## Assumptions

The Pearson correlation coefficient assumes that the variables are normally distributed and that the relationship between the variables is linear. It also assumes that the variables are continuous and numerical, not categorical.

## Limitations

The Pearson correlation coefficient only measures linear relationships. Therefore, it may not accurately capture relationships that are not linear. It is also sensitive to outliers, which can significantly affect the coefficient. Furthermore, correlation does not imply causation; a high correlation between two variables does not necessarily mean that one variable causes the other to change.

## Applications

The Pearson correlation coefficient is widely used in machine learning and data science to understand the relationship between different variables. It is commonly used in feature selection, where the goal is to select the most relevant features for a particular prediction task. It is also used in exploratory data analysis to understand the relationships between different variables in a dataset.
