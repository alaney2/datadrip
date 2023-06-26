# Statistics of Extremes

Statistics of extremes, also known as extreme value theory (EVT), is a branch of statistics that deals with the study of extreme events, i.e., rare events that occur with low probability but have significant consequences. EVT is used in various fields such as finance, insurance, hydrology, meteorology, and engineering to model and quantify the risk associated with extreme events.

## Introduction

In many practical situations, it is important to understand the behavior of extreme events, such as large floods, severe storms, or extreme stock market fluctuations. Traditional statistical methods, which focus on the central tendency and dispersion of data, are not well-suited for modeling extreme events, as they often underestimate the probability and impact of rare events. EVT provides a framework for modeling and analyzing extreme events by focusing on the tail behavior of probability distributions.

The main goal of EVT is to estimate the probability of extreme events and their return levels, which are the levels that are expected to be exceeded once in a given time period. This information can be used to assess the risk associated with extreme events and to design systems that can withstand such events.

## Univariate Extreme Value Theory

Univariate EVT deals with the study of extreme events in a single variable. The fundamental result in univariate EVT is the Fisher-Tippett-Gnedenko theorem, which states that the distribution of the maximum (or minimum) of a large number of independent and identically distributed (i.i.d.) random variables converges to one of three possible types of extreme value distributions:

1. Gumbel distribution
2. Fréchet distribution
3. Weibull distribution

These three distributions can be combined into a single distribution called the generalized extreme value (GEV) distribution, which is defined by the cumulative distribution function (CDF):


$$

F(x) = \exp\left\{-\left[1 + \xi\left(\frac{x - \mu}{\sigma}\right)\right]^{-1/\xi}\right\}, \quad \text{for } 1 + \xi\left(\frac{x - \mu}{\sigma}\right) > 0,

$$


where $\mu$ is the location parameter, $\sigma > 0$ is the scale parameter, and $\xi$ is the shape parameter. The Gumbel, Fréchet, and Weibull distributions correspond to the cases $\xi = 0$, $\xi > 0$, and $\xi < 0$, respectively.

The GEV distribution can be used to model the distribution of block maxima, which are the maximum values observed in non-overlapping blocks of a time series. The parameters of the GEV distribution can be estimated using maximum likelihood estimation (MLE) or other methods such as the method of moments or the method of L-moments.

## Peaks Over Threshold Approach

An alternative approach to modeling extreme events is the peaks over threshold (POT) method, which focuses on the exceedances over a high threshold. The POT method is based on the Pickands-Balkema-de Haan theorem, which states that the distribution of exceedances over a high threshold converges to the generalized Pareto distribution (GPD) as the threshold approaches the right endpoint of the underlying distribution.

The GPD is defined by the CDF:


$$

G(x) = 1 - \left[1 + \xi\left(\frac{x}{\sigma}\right)\right]^{-1/\xi}, \quad \text{for } 1 + \xi\left(\frac{x}{\sigma}\right) > 0,

$$


where $\sigma > 0$ is the scale parameter and $\xi$ is the shape parameter. The GPD can be used to model the distribution of exceedances over a high threshold, and its parameters can be estimated using MLE or other methods.

The choice of the threshold is a critical issue in the POT method, as it affects the estimation of the GPD parameters and the resulting risk estimates. Various methods have been proposed for threshold selection, such as the mean excess plot, the stability plot, and the likelihood ratio test.

## Multivariate Extreme Value Theory

Multivariate EVT extends the concepts and methods of univariate EVT to the study of extreme events in multiple variables. The main challenge in multivariate EVT is to model the dependence structure between the variables, as the occurrence of extreme events in one variable may be related to the occurrence of extreme events in other variables.

Several multivariate extreme value distributions have been proposed, such as the multivariate Gumbel distribution, the multivariate GEV distribution, and the multivariate GPD. These distributions can be used to model the joint distribution of extreme events in multiple variables and to estimate the probability of joint or conditional extreme events.

Another important concept in multivariate EVT is extremal dependence, which measures the strength of the dependence between extreme events in different variables. Extremal dependence can be characterized by various measures, such as the extremal coefficient, the tail dependence coefficient, and the extremal index.

## Applications

Statistics of extremes has numerous applications in various fields, including:

- Finance: Estimation of value-at-risk (VaR) and expected shortfall (ES) for portfolio risk management.
- Insurance: Pricing and risk assessment of extreme events, such as natural disasters or large claims.
- Hydrology: Estimation of flood return levels and design of flood protection systems.
- Meteorology: Analysis of extreme weather events, such as heatwaves, storms, or droughts.
- Engineering: Design of structures and systems that can withstand extreme loads or environmental conditions.

In these applications, EVT provides a rigorous framework for modeling and quantifying the risk associated with extreme events, which can be used to inform decision-making and risk management strategies.
