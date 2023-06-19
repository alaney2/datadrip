# Self Attention

Self attention, also known as intra-attention, is a mechanism used in deep learning models, particularly in the Transformer architecture, to compute the representation of a sequence by considering the relationships between its elements. It is a variant of the attention mechanism that allows the model to weigh the importance of each element in the sequence with respect to the others. This is achieved by computing a score for each pair of elements, which is then used to weight the contribution of each element to the final representation.

## Overview

In a self attention mechanism, the input sequence is first transformed into three sets of vectors: query, key, and value. These vectors are derived from the input embeddings using separate linear transformations. The self attention mechanism then computes a score for each pair of query and key vectors, which represents the compatibility between the corresponding elements in the sequence. These scores are normalized using a softmax function, and the resulting attention weights are used to compute a weighted sum of the value vectors. This weighted sum is the output of the self attention mechanism, and it is used as the input for the subsequent layers in the model.

The self attention mechanism can be visualized as a matrix operation, where the input sequence is represented as a matrix, and the query, key, and value vectors are obtained by multiplying this matrix with their respective weight matrices. The attention scores are computed as the dot product between the query and key matrices, and the output is obtained by multiplying the attention weights with the value matrix.

## Multi-Head Attention

One of the key innovations in the Transformer architecture is the use of multi-head attention, which allows the model to learn multiple attention patterns simultaneously. In a multi-head attention mechanism, the self attention operation is performed multiple times in parallel, with each head using a different set of weight matrices for the query, key, and value transformations. The outputs of all the heads are then concatenated and linearly transformed to obtain the final output.

Multi-head attention allows the model to capture different types of relationships between the elements in the sequence, as each head can learn to focus on different aspects of the input. This leads to a more expressive and powerful representation, which is one of the reasons why the Transformer architecture has achieved state-of-the-art performance in a wide range of natural language processing tasks.

## Position Encoding

Since the self attention mechanism is based on matrix operations, it is inherently permutation invariant, meaning that it does not take into account the order of the elements in the sequence. To overcome this limitation, the Transformer architecture introduces position encoding, which is a way to inject positional information into the input embeddings.

Position encoding is a function that maps the position of each element in the sequence to a continuous vector, which is then added to the input embeddings. This allows the model to learn positional patterns and dependencies, as the self attention mechanism can now distinguish between elements that are close or far apart in the sequence.

There are several ways to implement position encoding, but the most common approach is to use sinusoidal functions with different frequencies, as proposed in the original Transformer paper. This method has the advantage of being easily computable and scalable to arbitrary sequence lengths.

## Masked Self Attention

In some applications, such as sequence-to-sequence modeling or language modeling, it is necessary to prevent the model from attending to future elements in the sequence. This can be achieved by using a masked self attention mechanism, which sets the attention scores for future elements to a large negative value, effectively masking their contribution to the output.

Masked self attention is typically used in the decoder part of the Transformer architecture, where the goal is to generate a target sequence conditioned on an input sequence. By masking the future elements, the model is forced to rely only on the information available up to the current position, which is consistent with the autoregressive nature of the task.

## Layer Normalization

Another important component of the Transformer architecture is layer normalization, which is a technique used to stabilize the training of deep neural networks. Layer normalization is applied to the output of the self attention mechanism, as well as to the output of the feed-forward layers in the model.

Layer normalization works by normalizing the activations of each layer to have zero mean and unit variance, and it is applied independently for each element in the sequence. This helps to mitigate the vanishing and exploding gradient problems, which are common in deep learning models with many layers.

## Applications

Self attention has been widely adopted in the field of natural language processing, where it has been used to achieve state-of-the-art performance in tasks such as machine translation, text classification, and named entity recognition. One of the most notable applications of self attention is the BERT model, which is a pre-trained Transformer-based model that can be fine-tuned for a wide range of tasks.

In addition to natural language processing, self attention has also been applied to other domains, such as computer vision and speech recognition, where it has been shown to improve the performance of convolutional and recurrent neural networks.
