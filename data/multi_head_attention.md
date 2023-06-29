# Multi Head Attention

Multi Head Attention is a key component of the Transformer model, which is widely used in various Natural Language Processing (NLP) tasks. It is a type of attention mechanism that allows the model to focus on different positions of the input sequence simultaneously, thus capturing various aspects of the information.

## Overview

The concept of attention in deep learning models is inspired by the human visual attention mechanism, where we focus on a certain area while perceiving the rest of the image with less detail. Similarly, in the context of NLP, the attention mechanism allows the model to focus on certain parts of the input sequence when generating the output.

Multi Head Attention takes this concept further by applying the attention mechanism multiple times in parallel. The term "head" refers to each application of the attention mechanism. Each head computes a different learned linear transformation of the input. This allows the model to capture different types of information from the input sequence.

## Mechanism

The mechanism of Multi Head Attention can be broken down into the following steps:

1. **Linear Transformation**: The input is independently transformed with different learned linear transformations for each head. This results in multiple sets of queries, keys, and values - one for each head.

2. **Scaled Dot-Product Attention**: The Scaled Dot-Product Attention is applied on each set of queries, keys, and values. This involves computing the dot product of the query and key, scaling it, and then applying a softmax function to obtain the weights on the values.

3. **Concatenation**: The output of each head is concatenated and then linearly transformed to result in the final output.

The main advantage of Multi Head Attention is that it allows the model to focus on different positions of the input sequence, capturing various aspects of the information. For example, in a language translation task, one head might focus on the syntactic information while another might focus on the semantic information.

## Applications

Multi Head Attention is a key component of the Transformer model, which has been widely used in various NLP tasks such as machine translation, text summarization, and sentiment analysis. It has also been used in other domains such as computer vision and music generation.

## Conclusion

Multi Head Attention is a powerful mechanism that enhances the capabilities of attention models by allowing them to capture various aspects of the information in the input sequence. Its effectiveness has been demonstrated in various applications, particularly in the field of NLP. Despite its complexity, the concept of Multi Head Attention is fundamental to understanding modern transformer-based models.
