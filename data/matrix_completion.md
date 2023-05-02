# Matrix Completion

Matrix completion is a technique used in machine learning and data analysis to fill in missing values in a matrix. The goal of matrix completion is to find the entries of a partially observed matrix by using the information provided by the observed entries. Matrix completion is used in a variety of applications, including recommendation systems, image processing and computer vision.

## Overview

Matrix completion is a technique that aims to fill in the missing entries of a partially observed matrix. The observed entries can be thought of as a subset of the full matrix, where the missing entries are represented by the NaN value. The goal of matrix completion is to find a low-rank approximation to the partially observed matrix that matches the observed entries as closely as possible. 

The matrix completion problem can be formulated as an optimization problem. Given a partially observed matrix X with missing entries represented by the NaN value, the goal is to find a low-rank matrix Y that matches the observed entries of X as closely as possible. The optimization problem can be solved using various techniques such as gradient descent, alternating least squares, and nuclear norm minimization.

## Applications

Matrix completion has many applications, including recommendation systems, image processing, and computer vision. In recommendation systems, matrix completion is used to predict user preferences for items based on past interactions. In image processing and computer vision, matrix completion is used to fill in missing pixels in images or to recover 3D shapes from 2D projections.

## Prerequisites

To understand matrix completion, it is recommended to have a solid understanding of linear algebra, optimization, and singular value decomposition. 

## Further Readings

- Collaborative Filtering
- Low-Rank Approximation
- Non-negative Matrix Factorization
