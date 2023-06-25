# Transition Matrices

A transition matrix is a square matrix used to describe the transitions between different states in a Markov chain. In the context of Markov chains, a transition matrix represents the probabilities of transitioning from one state to another in a discrete-time stochastic process. The matrix is constructed such that each row represents the probabilities of transitioning from a specific state to all other states, and each column represents the probabilities of transitioning to a specific state from all other states.

## Definition

A transition matrix $P$ is a square matrix of size $n \times n$, where $n$ is the number of states in the Markov chain. The element $p_{ij}$ of the matrix represents the probability of transitioning from state $i$ to state $j$ in one time step. Formally, the transition matrix is defined as:


$$

P = \begin{bmatrix}
    p_{11} & p_{12} & \cdots & p_{1n} \\
    p_{21} & p_{22} & \cdots & p_{2n} \\
    \vdots & \vdots & \ddots & \vdots \\
    p_{n1} & p_{n2} & \cdots & p_{nn}
\end{bmatrix}

$$


where $p_{ij} \geq 0$ for all $i, j$, and the sum of each row is equal to 1:


$$

\sum_{j=1}^n p_{ij} = 1 \quad \text{for all } i = 1, 2, \ldots, n

$$


## Properties

1. **Row Stochastic:** A transition matrix is row stochastic, meaning that the sum of each row is equal to 1. This property ensures that the probabilities of transitioning from a specific state to all other states sum up to 1.

2. **Non-negative Entries:** All entries in a transition matrix are non-negative, as they represent probabilities.

3. **Irreducible:** A Markov chain is said to be irreducible if it is possible to reach any state from any other state in a finite number of steps. If the Markov chain is irreducible, then the transition matrix has no zero entries.

4. **Periodicity:** A state in a Markov chain has a period $d$ if any return to the state must occur in multiples of $d$ time steps. If all states in the Markov chain have a period of 1, then the chain is said to be aperiodic. A transition matrix of an aperiodic Markov chain has at least one eigenvalue equal to 1.

5. **Stationary Distribution:** A stationary distribution is a probability distribution that remains unchanged under the transition matrix. If a Markov chain has a unique stationary distribution, then the transition matrix has a unique left eigenvector corresponding to the eigenvalue 1.

## Applications

Transition matrices are widely used in various fields, including:

1. **Economics:** In economics, transition matrices are used to model the probabilities of transitioning between different economic states, such as employment and unemployment, or different credit ratings for bonds.

2. **Biology:** In population genetics, transition matrices are used to model the probabilities of different genotypes in a population from one generation to the next.

3. **Computer Science:** In natural language processing, transition matrices are used in hidden Markov models to represent the probabilities of transitioning between different hidden states, which can be used for tasks such as part-of-speech tagging or speech recognition.

4. **Operations Research:** In operations research, transition matrices are used in Markov decision processes to model the probabilities of transitioning between different states under different actions, which can be used for decision-making and optimization problems.

## Example

Consider a simple weather model with two states: sunny (S) and rainy (R). The transition probabilities are as follows:

- The probability of a sunny day following a sunny day is 0.9.
- The probability of a rainy day following a sunny day is 0.1.
- The probability of a sunny day following a rainy day is 0.5.
- The probability of a rainy day following a rainy day is 0.5.

The transition matrix for this Markov chain is:


$$

P = \begin{bmatrix}
    0.9 & 0.1 \\
    0.5 & 0.5
\end{bmatrix}

$$


To find the probability of the weather being sunny or rainy after two days, given that today is sunny, we can multiply the transition matrix by itself:


$$

P^2 = P \times P = \begin{bmatrix}
    0.9 & 0.1 \\
    0.5 & 0.5
\end{bmatrix} \times \begin{bmatrix}
    0.9 & 0.1 \\
    0.5 & 0.5
\end{bmatrix} = \begin{bmatrix}
    0.86 & 0.14 \\
    0.7 & 0.3
\end{bmatrix}

$$


The first row of the resulting matrix represents the probabilities of the weather being sunny or rainy after two days, given that today is sunny: 0.86 for sunny and 0.14 for rainy.
