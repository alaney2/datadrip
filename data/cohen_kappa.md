# Cohen Kappa

Cohen Kappa (also known as Cohen's Kappa coefficient or simply Kappa) is a statistical measure used to evaluate the inter-rater reliability or the degree of agreement between two or more raters (also called annotators or coders) when assigning categorical ratings to a set of items or instances. It was introduced by Jacob Cohen in 1960 as a more robust alternative to simple percent agreement calculation, as it takes into account the possibility of agreement occurring by chance.

## Definition

Given a set of $n$ items rated by two raters, the Cohen Kappa coefficient is defined as:


$$

\kappa = \frac{P(A) - P(E)}{1 - P(E)}

$$


where $P(A)$ is the observed agreement between the raters, and $P(E)$ is the expected agreement by chance.

### Observed Agreement

The observed agreement $P(A)$ is calculated as the sum of the diagonal elements of the confusion matrix divided by the total number of items:


$$

P(A) = \frac{\sum_{i=1}^k p_{ii}}{n}

$$


where $k$ is the number of categories, $p_{ii}$ is the number of items in category $i$ that both raters agreed upon, and $n$ is the total number of items.

### Expected Agreement

The expected agreement $P(E)$ is calculated as the sum of the products of the marginal probabilities for each category:


$$

P(E) = \sum_{i=1}^k p_{i1} p_{1i}

$$


where $p_{i1}$ is the proportion of items in category $i$ according to the first rater, and $p_{1i}$ is the proportion of items in category $i$ according to the second rater.

## Interpretation

The Cohen Kappa coefficient ranges from -1 to 1, where:

- A value of 1 indicates perfect agreement between the raters.
- A value of 0 indicates that the agreement is no better than what would be expected by chance.
- A value of -1 indicates perfect disagreement between the raters.

In general, a higher Kappa value indicates better inter-rater reliability. However, the interpretation of the Kappa value may depend on the specific context and application. Some common guidelines for interpreting Kappa values are:

- $\kappa < 0$: Poor agreement
- $0 \leq \kappa \leq 0.20$: Slight agreement
- $0.21 \leq \kappa \leq 0.40$: Fair agreement
- $0.41 \leq \kappa \leq 0.60$: Moderate agreement
- $0.61 \leq \kappa \leq 0.80$: Substantial agreement
- $0.81 \leq \kappa \leq 1.00$: Almost perfect agreement

It is important to note that these guidelines are not universally applicable and should be used with caution.

## Limitations

Cohen Kappa has some limitations:

1. It assumes that the raters are independent and that there is no systematic bias between them. If this assumption is violated, the Kappa value may not accurately reflect the true inter-rater reliability.
2. It is sensitive to the distribution of the categories. In cases where the categories are highly imbalanced, the Kappa value may be low even if the raters have a high level of agreement.
3. It does not take into account the ordinal nature of the categories, if present. In such cases, a weighted Kappa or other measures that consider the ordinal structure of the categories may be more appropriate.

## Applications

Cohen Kappa is widely used in various fields, including:

- Medicine: To assess the agreement between different diagnostic tests or between different observers in clinical settings.
- Psychology: To evaluate the reliability of psychological tests or the agreement between different raters in observational studies.
- Natural language processing: To measure the agreement between human annotators when annotating text data for tasks such as sentiment analysis, named entity recognition, or part-of-speech tagging.
- Computer vision: To assess the agreement between human annotators when labeling image data for tasks such as object detection or image segmentation.
