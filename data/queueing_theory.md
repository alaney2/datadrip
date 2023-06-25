# Queueing Theory

Queueing theory is the mathematical study of waiting lines, or queues. It is a branch of operations research and applied probability theory that deals with the analysis and optimization of queueing systems. Queueing theory is used to model and analyze a wide range of systems, such as computer networks, telecommunications, manufacturing, and service industries, where resources are shared among multiple users or customers.

The main objective of queueing theory is to understand the behavior of queues and to develop methods for optimizing their performance. This includes determining the average waiting time, the average queue length, the probability of a queue being empty or full, and the utilization of the system resources.

## Basic Concepts

A queueing system consists of several components:

1. **Arrival process**: This describes how customers or requests arrive at the system. The arrival process is typically modeled as a stochastic process, such as a Poisson process or a renewal process.

2. **Service process**: This describes how customers or requests are served by the system. The service process is also typically modeled as a stochastic process, such as an exponential distribution or a general distribution.

3. **Queue discipline**: This describes the order in which customers or requests are served. Common queue disciplines include first-come, first-served (FCFS), last-come, first-served (LCFS), and priority-based service.

4. **Number of servers**: This describes the number of resources available to serve customers or requests. A single-server system has one resource, while a multi-server system has multiple resources.

5. **System capacity**: This describes the maximum number of customers or requests that can be in the system at any given time, including those being served and those waiting in the queue.

## Kendall's Notation

Queueing systems are often described using Kendall's notation, which is a shorthand representation of the main components of the system. Kendall's notation is written as A/S/c/K/N/D, where:

- A: The arrival process (e.g., M for Markovian or Poisson, G for general)
- S: The service process (e.g., M for Markovian or exponential, G for general)
- c: The number of servers
- K: The system capacity (optional)
- N: The size of the calling population (optional)
- D: The queue discipline (optional, e.g., FCFS, LCFS, or priority)

For example, an M/M/1 queue is a single-server system with Poisson arrivals and exponential service times, and a first-come, first-served discipline.

## Performance Measures

Queueing theory provides several performance measures to analyze and optimize queueing systems. Some common performance measures include:

1. **Average waiting time**: The average time a customer or request spends waiting in the queue before being served.

2. **Average queue length**: The average number of customers or requests in the queue at any given time.

3. **Probability of an empty queue**: The probability that the queue is empty at any given time.

4. **Probability of a full queue**: The probability that the queue is full at any given time.

5. **Utilization**: The fraction of time the server or resource is busy serving customers or requests.

## Analytical Models

Queueing theory provides several analytical models to compute the performance measures of queueing systems. Some common models include:

1. **M/M/1 queue**: This is a single-server system with Poisson arrivals and exponential service times. The performance measures of an M/M/1 queue can be computed using the following formulas:

    - Utilization: $\rho = \frac{\lambda}{\mu}$, where $\lambda$ is the arrival rate and $\mu$ is the service rate.
    - Average queue length: $L_q = \frac{\rho^2}{1 - \rho}$
    - Average waiting time: $W_q = \frac{L_q}{\lambda}$

2. **M/M/c queue**: This is a multi-server system with Poisson arrivals and exponential service times. The performance measures of an M/M/c queue can be computed using the Erlang C formula and other related formulas.

3. **M/G/1 queue**: This is a single-server system with Poisson arrivals and general service times. The performance measures of an M/G/1 queue can be computed using the Pollaczek-Khinchin formula and other related formulas.

4. **G/G/1 queue**: This is a single-server system with general arrivals and general service times. The performance measures of a G/G/1 queue can be computed using more complex methods, such as the Kingman's approximation or the diffusion approximation.

## Simulation

In addition to analytical models, queueing theory also provides simulation techniques to study the behavior of queueing systems. Simulation is particularly useful when the system is too complex to be analyzed using analytical models, or when the underlying assumptions of the models do not hold. Common simulation techniques include discrete-event simulation, Monte Carlo simulation, and agent-based simulation.

## Applications

Queueing theory has a wide range of applications in various fields, including:

1. **Computer networks**: Queueing theory is used to model and analyze the performance of computer networks, such as the Internet, local area networks (LANs), and wireless networks.

2. **Telecommunications**: Queueing theory is used to model and analyze the performance of telephone systems, call centers, and cellular networks.

3. **Manufacturing**: Queueing theory is used to model and analyze the performance of production lines, assembly lines, and inventory systems.

4. **Service industries**: Queueing theory is used to model and analyze the performance of service systems, such as banks, hospitals, restaurants, and transportation systems.

5. **Resource allocation**: Queueing theory is used to optimize the allocation of resources, such as servers, processors, and communication channels, in various systems.

6. **Scheduling**: Queueing theory is used to develop scheduling algorithms for various systems, such as job scheduling in computer systems, task scheduling in real-time systems, and packet scheduling in communication networks.
