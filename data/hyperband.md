# Hyperband

Hyperband is a bandit-based optimization algorithm for hyperparameter tuning in machine learning. It was introduced by Li et al. in 2018 and has since gained popularity due to its efficiency and scalability.

## Algorithm

Hyperband is a sequential algorithm that uses a successive halving procedure to optimize the hyperparameters of a model. At each round, it randomly samples a set of hyperparameter configurations and trains a model on each of them for a fixed budget of resources. The best-performing half of the configurations is then selected for the next round, while the other half is discarded. This process continues until only one configuration remains.

The key idea behind Hyperband is to allocate more resources to promising configurations, while quickly eliminating poor ones. To achieve this, it uses a bandit-based approach that assigns a fixed budget of resources to each configuration and then prioritizes the configurations based on their performance. Specifically, it maintains a set of "arms" representing the configurations and updates their performance estimates using a stochastic model. It then selects the arms with the highest estimated performance and allocates more resources to them in the next round.

## Advantages

Compared to other hyperparameter optimization algorithms, Hyperband has several advantages:

- **Efficiency:** Hyperband is designed to be highly efficient, as it discards poor configurations early and focuses on promising ones. This makes it well-suited for large-scale hyperparameter tuning tasks.
- **Scalability:** Hyperband can be easily parallelized across multiple machines, as each round only requires a fixed budget of resources for each configuration.
- **Simplicity:** Hyperband is easy to implement and requires minimal tuning of its own hyperparameters.

## Further Readings

- **Asynchronous Hyperband (ASH)**: An extension of Hyperband that allows for asynchronous parallelization, which can further improve its efficiency in distributed settings.
- **Bayesian Optimization and Hyperband (BOHB)**: A combination of Bayesian optimization and Hyperband that achieves state-of-the-art performance on many benchmark datasets.
- **Population-Based Training (PBT)**: A similar algorithm to Hyperband that uses a genetic algorithm approach to optimize hyperparameters over time.
