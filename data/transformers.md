# Transformers

Transformers are a type of deep learning architecture introduced by Vaswani et al. in the paper "Attention is All You Need" in 2017. They have since become the foundation for many state-of-the-art natural language processing (NLP) models, such as BERT, GPT, and T5. Transformers are based on the attention mechanism, which allows the model to weigh the importance of different input tokens when generating an output. This enables the model to capture long-range dependencies and complex relationships between words in a sentence.

## Attention Mechanism

The attention mechanism is a key component of the transformer architecture. It allows the model to focus on different parts of the input sequence when generating an output. The attention mechanism computes a weighted sum of the input tokens, where the weights are determined by the similarity between the input tokens and the output token being generated. This allows the model to capture long-range dependencies and complex relationships between words in a sentence.

There are several types of attention mechanisms, such as additive attention and dot-product (multiplicative) attention. Transformers use the scaled dot-product attention, which is a variant of the dot-product attention. The scaled dot-product attention is computed as follows:


$$

\text{Attention}(Q, K, V) = \text{softmax}(\frac{QK^T}{\sqrt{d_k}})V

$$


where $Q$, $K$, and $V$ are the query, key, and value matrices, respectively, and $d_k$ is the dimension of the key vectors.

## Encoder-Decoder Architecture

Transformers are based on the encoder-decoder architecture, which is a common framework for sequence-to-sequence models. The encoder is responsible for processing the input sequence and generating a continuous representation, while the decoder is responsible for generating the output sequence based on the encoder's representation.

In transformers, both the encoder and the decoder are composed of a stack of identical layers. Each layer in the encoder consists of a multi-head self-attention mechanism, followed by a position-wise feed-forward network. Each layer in the decoder consists of a multi-head self-attention mechanism, followed by a multi-head cross-attention mechanism that attends to the encoder's output, and finally a position-wise feed-forward network.

## Self-Attention

Self-attention is a type of attention mechanism that allows the model to focus on different parts of the input sequence when generating an output. In self-attention, the query, key, and value matrices are all derived from the same input sequence. This allows the model to capture the relationships between different words in the sentence.

## Multi-Head Attention

Multi-head attention is an extension of the attention mechanism that allows the model to focus on different parts of the input sequence simultaneously. In multi-head attention, the attention mechanism is applied multiple times with different linear projections of the query, key, and value matrices. The outputs of these attention heads are then concatenated and linearly transformed to produce the final output.

Multi-head attention can be computed as follows:


$$

\text{MultiHead}(Q, K, V) = \text{Concat}(\text{head}_1, \dots, \text{head}_h)W^O

$$


where $\text{head}_i = \text{Attention}(QW^Q_i, KW^K_i, VW^V_i)$, and $W^Q_i$, $W^K_i$, $W^V_i$, and $W^O$ are learnable weight matrices.

## Positional Encoding

Since transformers do not have any inherent notion of the order of the input tokens, positional encoding is used to inject information about the position of the tokens in the sequence. Positional encoding is added to the input embeddings before they are fed into the transformer.

There are several ways to implement positional encoding, such as using learned embeddings or fixed sinusoidal functions. In the original transformer paper, the authors used sinusoidal functions with different frequencies for the positional encoding:


$$

\text{PE}_{(pos, 2i)} = \sin(pos / 10000^{2i / d_{model}})

$$



$$

\text{PE}_{(pos, 2i + 1)} = \cos(pos / 10000^{2i / d_{model}})

$$


where $pos$ is the position of the token in the sequence, $i$ is the dimension of the positional encoding, and $d_{model}$ is the dimension of the input embeddings.

## Applications and Variants

Transformers have been used in a wide range of NLP tasks, such as machine translation, text summarization, sentiment analysis, and question answering. Several variants and extensions of the transformer architecture have been proposed, including BERT, GPT, T5, DistilBERT, RoBERTa, and XLNet. These models have achieved state-of-the-art performance on various NLP benchmarks and have been widely adopted in both research and industry.
```
