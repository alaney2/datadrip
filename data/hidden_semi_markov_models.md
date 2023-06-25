# Hidden Semi-Markov Models

Hidden Semi-Markov Models (HSMMs) are an extension of Hidden Markov Models (HMMs) that allow for modeling sequences of data with variable durations. In an HSMM, the underlying state process is a semi-Markov process, which means that the time spent in each state is explicitly modeled by a duration distribution. This makes HSMMs particularly useful for applications where the duration of states is important, such as speech recognition, gesture recognition, and bioinformatics.

## Overview

An HSMM is defined by the following components:

1. A finite set of $N$ hidden states, denoted as $S = \{s_1, s_2, \dots, s_N\}$.
2. A finite set of $M$ observable symbols, denoted as $V = \{v_1, v_2, \dots, v_M\}$.
3. An initial state probability distribution, denoted as $\pi = \{\pi_i\}$, where $\pi_i = P(q_1 = s_i)$ is the probability of starting in state $s_i$.
4. A state transition probability matrix, denoted as $A = \{a_{ij}\}$, where $a_{ij} = P(q_{t+1} = s_j | q_t = s_i)$ is the probability of transitioning from state $s_i$ to state $s_j$.
5. A duration distribution for each state, denoted as $D = \{d_i(k)\}$, where $d_i(k) = P(D_t = k | q_t = s_i)$ is the probability of spending $k$ time steps in state $s_i$.
6. An emission probability matrix, denoted as $B = \{b_{ij}\}$, where $b_{ij} = P(o_t = v_j | q_t = s_i)$ is the probability of observing symbol $v_j$ given that the system is in state $s_i$.

The main difference between an HSMM and an HMM is the inclusion of the duration distributions $D$. In an HMM, the time spent in each state is implicitly modeled by the state transition probabilities, and the system is assumed to be in a new state at each time step. In an HSMM, the duration distributions explicitly model the time spent in each state, allowing for more flexibility in modeling sequences with variable durations.

## Inference and Learning

Inference and learning in HSMMs are similar to those in HMMs, with some modifications to account for the duration distributions. The main tasks in HSMMs are:

1. **State sequence estimation**: Given an observation sequence and the model parameters, find the most likely state sequence. This can be done using a modified version of the Viterbi algorithm, which takes into account the duration distributions.
2. **Probability of an observation sequence**: Given an observation sequence and the model parameters, compute the probability of the sequence. This can be done using a modified version of the forward-backward algorithm, which takes into account the duration distributions.
3. **Parameter estimation**: Given an observation sequence and an initial estimate of the model parameters, find the parameters that maximize the likelihood of the observation sequence. This can be done using a modified version of the Baum-Welch algorithm, which takes into account the duration distributions.

### State Sequence Estimation

The Viterbi algorithm can be adapted for HSMMs by incorporating the duration distributions into the computation of the most likely state sequence. The main idea is to compute the maximum likelihood state sequence by considering all possible durations for each state. The modified Viterbi algorithm for HSMMs proceeds as follows:

1. Initialize the maximum likelihood state sequence and the corresponding likelihood for each state at time $t = 1$.
2. For each time step $t > 1$, compute the maximum likelihood state sequence and the corresponding likelihood for each state by considering all possible durations and previous states.
3. Find the most likely state sequence by backtracking through the maximum likelihood state sequences computed in step 2.

### Probability of an Observation Sequence

The forward-backward algorithm can be adapted for HSMMs by incorporating the duration distributions into the computation of the forward and backward probabilities. The main idea is to compute the forward and backward probabilities by considering all possible durations for each state. The modified forward-backward algorithm for HSMMs proceeds as follows:

1. Initialize the forward probabilities for each state at time $t = 1$.
2. For each time step $t > 1$, compute the forward probabilities for each state by considering all possible durations and previous states.
3. Initialize the backward probabilities for each state at time $t = T$, where $T$ is the length of the observation sequence.
4. For each time step $t < T$, compute the backward probabilities for each state by considering all possible durations and next states.
5. Compute the probability of the observation sequence by summing the forward probabilities for all states at time $t = T$.

### Parameter Estimation

The Baum-Welch algorithm can be adapted for HSMMs by incorporating the duration distributions into the computation of the expected state durations and state transitions. The main idea is to compute the expected state durations and state transitions by considering all possible durations for each state. The modified Baum-Welch algorithm for HSMMs proceeds as follows:

1. Initialize the model parameters and compute the forward and backward probabilities for the observation sequence using the modified forward-backward algorithm.
2. Compute the expected state durations and state transitions for each state by considering all possible durations and next states.
3. Update the model parameters using the computed expected state durations and state transitions.
4. Repeat steps 1-3 until convergence.

## Applications

HSMMs have been successfully applied to a wide range of applications, including:

- Speech recognition: HSMMs can model the variable duration of phonemes in speech signals, leading to improved recognition performance compared to HMMs.
- Gesture recognition: HSMMs can model the variable duration of gestures in human motion data, leading to improved recognition performance compared to HMMs.
- Bioinformatics: HSMMs can model the variable duration of genomic features, such as exons and introns, leading to improved gene prediction performance compared to HMMs.

In summary, HSMMs are a powerful extension of HMMs that can model sequences of data with variable durations. They have been successfully applied to a wide range of applications, and their flexibility makes them an attractive choice for modeling complex temporal patterns in data.
