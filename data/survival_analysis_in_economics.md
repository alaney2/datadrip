# Survival Analysis in Economics

Survival analysis is a statistical method used to analyze the time until an event of interest occurs. In economics, survival analysis is often applied to study the duration of unemployment, the time until a firm exits the market, or the time until a household defaults on a loan, among other applications. The main objective of survival analysis is to understand the relationship between the time-to-event and a set of explanatory variables, which can be used to predict the probability of the event occurring at a given time.

## Key Concepts in Survival Analysis

### Hazard Function

The hazard function, denoted as $h(t)$, represents the instantaneous probability of the event occurring at time $t$, given that the event has not occurred before time $t$. It is defined as:


$$

h(t) = \lim_{\Delta t \to 0} \frac{P(t \le T < t + \Delta t | T \ge t)}{\Delta t}

$$


where $T$ is the time-to-event and $P$ is the probability.

### Survival Function

The survival function, denoted as $S(t)$, represents the probability of the event not occurring before time $t$. It is defined as:


$$

S(t) = P(T > t) = 1 - F(t)

$$


where $F(t)$ is the cumulative distribution function of the time-to-event.

### Censoring

Censoring occurs when the exact time of the event is not observed for some individuals in the sample. There are three main types of censoring:

1. **Right censoring**: The event occurs after the observation period, so the exact time of the event is unknown.
2. **Left censoring**: The event occurs before the observation period, so the exact time of the event is unknown.
3. **Interval censoring**: The event occurs within an interval, but the exact time of the event is unknown.

Censoring is an important issue in survival analysis because it can lead to biased estimates if not properly accounted for.

### Kaplan-Meier Estimator

The Kaplan-Meier estimator is a non-parametric method used to estimate the survival function from the observed data. It is defined as:


$$

\hat{S}(t) = \prod_{i: t_i \le t} \frac{n_i - d_i}{n_i}

$$


where $t_i$ is the time of the event, $n_i$ is the number of individuals at risk at time $t_i$, and $d_i$ is the number of events at time $t_i$.

### Cox Proportional Hazards Model

The Cox proportional hazards model is a semi-parametric method used to estimate the hazard function based on a set of explanatory variables. The model assumes that the hazard function can be written as:


$$

h(t, X) = h_0(t) \exp(\beta' X)

$$


where $h_0(t)$ is the baseline hazard function, $X$ is a vector of explanatory variables, and $\beta$ is a vector of coefficients. The Cox model does not make any assumptions about the functional form of the baseline hazard function, which makes it more flexible than parametric models.

### Accelerated Failure Time Model

The accelerated failure time (AFT) model is a parametric method used to estimate the survival function based on a set of explanatory variables. The model assumes that the time-to-event can be written as:


$$

\log(T) = \alpha + \beta' X + \epsilon

$$


where $\alpha$ is a constant, $X$ is a vector of explanatory variables, $\beta$ is a vector of coefficients, and $\epsilon$ is an error term. The AFT model assumes a specific distribution for the error term, such as the Weibull, log-normal, or log-logistic distribution.

## Applications in Economics

Survival analysis has been widely used in various fields of economics, including labor economics, industrial organization, and finance. Some examples of applications include:

1. **Labor economics**: Analyzing the duration of unemployment spells, the time until a worker finds a job, or the time until a worker leaves a job.
2. **Industrial organization**: Studying the time until a firm exits the market, the time until a firm adopts a new technology, or the time until a merger or acquisition occurs.
3. **Finance**: Investigating the time until a household defaults on a loan, the time until a firm goes bankrupt, or the time until a stock price reaches a certain threshold.

## Conclusion

Survival analysis is a powerful tool for analyzing time-to-event data in economics. By understanding the key concepts and methods in survival analysis, economists can gain insights into the factors that influence the timing of events and make predictions about the probability of the event occurring at a given time. This can help inform policy decisions and improve the understanding of economic processes.
