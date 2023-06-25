# Descriptive Statistics

Descriptive statistics is a branch of statistics that deals with the summarization, organization, and presentation of data. It provides a way to describe the main features of a dataset and helps in understanding the data's characteristics. Descriptive statistics can be divided into two main categories: measures of central tendency and measures of dispersion. Additionally, data visualization techniques are often used to represent the data graphically.

## Measures of Central Tendency

Measures of central tendency are used to describe the center or the average value of a dataset. There are three main measures of central tendency: mean, median, and mode.

### Mean

The mean, also known as the arithmetic average, is the sum of all the values in a dataset divided by the number of values. The mean is represented by the symbol $\mu$ for a population and $\bar{x}$ for a sample. The formula for calculating the mean is:


$$

\mu = \frac{\sum_{i=1}^{N} x_i}{N}

$$


where $x_i$ represents each value in the dataset, and $N$ is the total number of values.

### Median

The median is the middle value of a dataset when the values are sorted in ascending or descending order. If the dataset has an odd number of values, the median is the middle value. If the dataset has an even number of values, the median is the average of the two middle values. The median is less sensitive to extreme values (outliers) than the mean and is a better measure of central tendency for skewed distributions.

### Mode

The mode is the value that occurs most frequently in a dataset. A dataset can have no mode, one mode (unimodal), or multiple modes (multimodal). The mode is particularly useful for categorical data, where the mean and median cannot be calculated.

## Measures of Dispersion

Measures of dispersion describe the spread or variability of a dataset. The main measures of dispersion are range, variance, standard deviation, and interquartile range.

### Range

The range is the difference between the maximum and minimum values in a dataset. It is the simplest measure of dispersion but is sensitive to extreme values.


$$

\text{Range} = \text{Max}(x) - \text{Min}(x)

$$


### Variance

The variance is the average of the squared differences between each value and the mean. It measures the spread of the data around the mean. The variance is represented by the symbol $\sigma^2$ for a population and $s^2$ for a sample. The formula for calculating the variance is:


$$

\sigma^2 = \frac{\sum_{i=1}^{N} (x_i - \mu)^2}{N}

$$


### Standard Deviation

The standard deviation is the square root of the variance. It is represented by the symbol $\sigma$ for a population and $s$ for a sample. The standard deviation has the same unit as the original data, making it easier to interpret than the variance. The formula for calculating the standard deviation is:


$$

\sigma = \sqrt{\sigma^2}

$$


### Interquartile Range

The interquartile range (IQR) is the difference between the first quartile ($Q_1$) and the third quartile ($Q_3$) of a dataset. The first quartile is the value that separates the lowest 25% of the data, and the third quartile is the value that separates the highest 25% of the data. The IQR is a measure of dispersion that is not affected by extreme values.


$$

\text{IQR} = Q_3 - Q_1

$$


## Data Visualization

Data visualization techniques are used to represent data graphically, making it easier to identify patterns, trends, and relationships in the data. Some common data visualization techniques used in descriptive statistics include:

- Histograms: A histogram is a graphical representation of the distribution of a dataset. It is an estimate of the probability distribution of a continuous variable.
- Box plots: A box plot is a standardized way of displaying the distribution of data based on the five-number summary (minimum, first quartile, median, third quartile, and maximum).
- Bar charts: A bar chart is a graphical representation of categorical data using rectangular bars with heights or lengths proportional to the values they represent.
- Pie charts: A pie chart is a circular statistical graphic that is divided into slices to illustrate numerical proportions.

In conclusion, descriptive statistics provide a way to summarize, organize, and present data, making it easier to understand the main features and characteristics of a dataset. Measures of central tendency and dispersion, along with data visualization techniques, are essential tools in descriptive statistics.
