# Markov Chain

A Markov chain is a mathematical model that describes a sequence of events where the probability of each event depends only on the state attained in the previous event. It is a stochastic process that is used to model a wide range of phenomena in various fields such as physics, chemistry, economics, and computer science.

## Definition

A Markov chain is a sequence of random variables $X_1, X_2, X_3, ...$ where each variable $X_i$ takes values from a finite or countably infinite set of states $S$. The probability of moving from one state to another is given by a transition probability matrix $P$, where $P_{ij}$ is the probability of moving from state $i$ to state $j$.

A Markov chain is said to be **homogeneous** if the transition probabilities do not depend on the time step $n$. In this case, the transition probability matrix $P$ is constant over time.

## Properties

### State Space

The set of all possible states in a Markov chain is called the **state space**. It can be finite or countably infinite.

### Transition Matrix

The transition matrix $P$ is a square matrix where each row represents the probabilities of moving from one state to all other states. The sum of probabilities in each row is equal to 1.

### Stationary Distribution

A stationary distribution is a probability distribution that remains unchanged over time. In a Markov chain, a stationary distribution is a probability distribution $\pi$ such that $\pi = \pi P$. That is, if the Markov chain starts in the stationary distribution, it will remain in the same distribution over time.

### Irreducibility

A Markov chain is said to be **irreducible** if it is possible to reach any state from any other state with a positive probability.

### Periodicity

A state $i$ in a Markov chain is said to be **periodic** if the chain can return to state $i$ only at multiples of some integer $d > 1$. If $d = 1$, the state is said to be **aperiodic**.

### Ergodicity

A Markov chain is said to be **ergodic** if it is irreducible and aperiodic. In this case, the chain has a unique stationary distribution, and the distribution of the chain converges to the stationary distribution as the number of time steps goes to infinity.

## Applications

Markov chains are used in various fields to model a wide range of phenomena. Some examples include:

- **Queueing systems**: Markov chains can be used to model the behavior of customers in a queueing system, where the state represents the number of customers in the system.
- **Language modeling**: Markov chains can be used to model the probability of a sequence of words in a language, where the state represents the current word and the transition probabilities represent the probability of the next word given the current word.
- **Image processing**: Markov chains can be used to model the spatial relationships between pixels in an image, where the state represents the color or intensity of a pixel and the transition probabilities represent the probability of a pixel taking a certain color or intensity given its neighbors.

## Further Readings

- Hidden Markov Models
- Monte Carlo Methods
