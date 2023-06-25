# Causal Discovery

Causal discovery is the process of learning the causal structure of a system from observational data. It is an essential task in many fields, including artificial intelligence, machine learning, and statistics. The goal of causal discovery is to identify the causal relationships between variables, which can help in understanding the underlying mechanisms of a system, predicting the effects of interventions, and making better decisions.

Causal discovery is closely related to the fields of causal inference and causal graphical models. Causal inference focuses on estimating the causal effect of a treatment or intervention on an outcome, while causal graphical models provide a framework for representing and reasoning about causal relationships using graphs. Causal discovery algorithms aim to learn the structure of a causal graphical model from data, which can then be used for causal inference and other tasks.

## Causal Graphical Models

Causal graphical models are a class of probabilistic graphical models that explicitly represent causal relationships between variables. The most common types of causal graphical models are Bayesian networks and structural equation models. In a causal graphical model, nodes represent variables, and directed edges represent causal relationships between variables. The absence of an edge between two variables indicates that there is no direct causal relationship between them.

A key concept in causal graphical models is the notion of conditional independence. Two variables are conditionally independent given a set of other variables if their joint probability distribution can be factored into the product of their marginal distributions, conditioned on the given variables. Conditional independence relationships can be represented graphically using a concept called d-separation. If two variables are d-separated in a causal graphical model, they are conditionally independent given the variables that separate them.

## Methods for Causal Discovery

There are two main approaches to causal discovery: constraint-based methods and score-based methods.

### Constraint-Based Methods

Constraint-based methods are based on the idea of using conditional independence tests to learn the structure of a causal graphical model. The most well-known constraint-based method is the PC algorithm, named after its inventors Peter Spirtes and Clark Glymour. The PC algorithm starts with a fully connected graph and iteratively removes edges based on conditional independence tests. The output of the algorithm is a partially directed acyclic graph (PDAG), which represents the equivalence class of causal graphical models that are consistent with the observed conditional independence relationships.

Another constraint-based method is the FCI (Fast Causal Inference) algorithm, which extends the PC algorithm to handle latent variables and selection bias. The FCI algorithm can learn the structure of a causal graphical model even when some variables are unobserved or when the data is subject to selection bias.

### Score-Based Methods

Score-based methods are based on the idea of searching the space of possible causal graphical models and selecting the one that best fits the data according to a scoring criterion. The most common scoring criteria are the Bayesian Information Criterion (BIC) and the Bayesian Dirichlet equivalence (BDe) score. Score-based methods can be computationally expensive, as the search space of possible causal graphical models is typically very large.

One popular score-based method is the Greedy Equivalence Search (GES) algorithm, which is a two-phase search procedure that first adds edges to the graph to increase the score and then removes edges to simplify the graph while maintaining the score. The output of the GES algorithm is a PDAG that represents the equivalence class of causal graphical models that have the highest score according to the chosen scoring criterion.

## Challenges and Limitations

Causal discovery is a challenging task due to several factors, including the presence of latent variables, selection bias, and limited sample sizes. Moreover, causal discovery algorithms typically rely on the assumption of causal sufficiency, which states that all common causes of any pair of observed variables are also observed. Violations of this assumption can lead to incorrect causal structures.

Another limitation of causal discovery is that it can only identify the causal structure up to Markov equivalence. Two causal graphical models are Markov equivalent if they have the same skeleton (i.e., the same undirected graph) and the same set of v-structures (i.e., two-parent nodes with a common child but no edge between the parents). Markov equivalent models represent the same set of conditional independence relationships, and it is generally not possible to distinguish between them based on observational data alone.

## Applications

Despite these challenges and limitations, causal discovery has been successfully applied in various domains, including genetics, epidemiology, economics, and social sciences. By uncovering the causal structure of a system, causal discovery can help in understanding the underlying mechanisms, predicting the effects of interventions, and making better decisions. Furthermore, causal discovery can be combined with other machine learning techniques, such as reinforcement learning and deep learning, to develop more advanced models and algorithms for various tasks.
