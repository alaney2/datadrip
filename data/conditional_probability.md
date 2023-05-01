# Conditional Probability

Conditional probability is a measure of the probability of an event occurring given that another event has occurred. It is used extensively in various fields including statistics, machine learning, and artificial intelligence.

## Definition

The conditional probability of an event A given an event B is defined as:

$$ P(A|B) = \frac{P(A \cap B)}{P(B)} $$

where P(B) > 0.

## Example

Suppose we have two events A and B, where A represents the event of rolling a 6 on a fair die and B represents the event of rolling an even number. Then, the probability of rolling a 6 given that an even number has been rolled is:

$$ P(A|B) = \frac{P(A \cap B)}{P(B)} = \frac{1/6}{3/6} = \frac{1}{3} $$

## Bayes' Theorem

Bayes' theorem is a fundamental result in probability theory that describes the probability of an event based on prior knowledge of related events. It is often used in statistical inference and machine learning.

Bayes' theorem can be written as:

$$ P(A|B) = \frac{P(B|A) P(A)}{P(B)} $$

where P(B) > 0.

## Example

Suppose we have two events A and B, where A represents the event of having a certain disease and B represents the event of testing positive for the disease. Let P(A) be the prior probability of having the disease, P(B|A) be the probability of testing positive given that the person has the disease, and P(B|A') be the probability of testing positive given that the person does not have the disease. Then, Bayes' theorem gives us:

$$ P(A|B) = \frac{P(B|A) P(A)}{P(B|A) P(A) + P(B|A') P(A')} $$

## Conclusion

Conditional probability is a powerful tool in understanding the relationship between events. Bayes' theorem is a fundamental result that allows us to update our beliefs based on new evidence. Knowledge of these concepts is important in various fields including statistics, machine learning, and artificial intelligence.
