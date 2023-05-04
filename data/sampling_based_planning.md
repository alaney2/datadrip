# Sampling Based Planning

Sampling based planning is a subfield of motion planning in robotics that involves generating feasible paths for a robot to move from its current position to a desired goal position. It is a popular approach due to its ability to handle complex environments and high-dimensional state spaces.

## Overview

Sampling based planning algorithms generate a set of random samples in the state space and use them to construct a graph that represents the connectivity of the space. The graph is then searched for a path from the start state to the goal state. The two main types of sampling based planning algorithms are:

- Probabilistic Roadmap (PRM): PRM constructs a graph by connecting samples that are close to each other and collision-free. It then searches the graph for a path from the start to the goal state. PRM is particularly useful for high-dimensional state spaces.

- Rapidly Exploring Random Tree (RRT): RRT constructs a tree by growing it from the start state towards the goal state. It randomly samples the state space and extends the tree towards the sample that is closest to it and collision-free. RRT is particularly useful for environments with narrow passages or obstacles.

## Applications

Sampling based planning algorithms have been successfully applied to a variety of robotics applications, including:

- Autonomous driving: Sampling based planning algorithms are used to plan trajectories for autonomous vehicles to navigate through complex environments.

- Robotic manipulation: Sampling based planning algorithms are used to plan the motion of robotic arms to manipulate objects in cluttered environments.

- Unmanned aerial vehicles (UAVs): Sampling based planning algorithms are used to plan the trajectory of UAVs to perform tasks such as surveillance and inspection.
