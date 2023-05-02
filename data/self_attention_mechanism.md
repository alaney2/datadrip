# Self Attention Mechanism

The self-attention mechanism is a neural network module that computes an attention score for each position of a sequence using information from all other positions. The attention score reflects the importance of each position in the sequence for the task at hand. The self-attention mechanism has been used in many natural language processing (NLP) tasks, such as machine translation, question answering, and language modeling.

## How it works

The self-attention mechanism takes as input a sequence of vectors, which can represent words, characters, or any other building blocks of a sequence. The self-attention mechanism first computes three matrices, called the query, key, and value matrices, which are derived from the input sequence. These matrices are then used to compute the attention scores. The attention scores are used to weight the values, which are then combined to form a weighted sum. This weighted sum is the output of the self-attention mechanism.

To compute the query, key, and value matrices, the input sequence is transformed using three weight matrices, called the query matrix, the key matrix, and the value matrix. These weight matrices are learned during training. The query, key, and value matrices are then computed as follows:

$$
\text{Query} = \text{Input}W_Q, \text{Key} = \text{Input}W_K, \text{Value} = \text{Input}W_V
$$

where $\text{Input}$ is the input sequence, $W_Q$, $W_K$, and $W_V$ are the query, key, and value weight matrices, respectively.

After the query, key, and value matrices are computed, the attention scores are computed as follows:

$$
\text{Attention}(Q,K,V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V
$$

where $Q$, $K$, and $V$ are the query, key, and value matrices, respectively, and $d_k$ is the dimension of the key vectors. The softmax function is applied to the dot product of the query and key matrices, scaled by $1/\sqrt{d_k}$, which normalizes the attention scores. The attention scores are then used to weight the values, which are combined to form a weighted sum.

## Applications

The self-attention mechanism has been used in many NLP tasks, such as machine translation, question answering, and language modeling. One of the most popular models that uses the self-attention mechanism is the Transformer model, which was introduced in the paper "Attention is All You Need" by Vaswani et al. (2017). The Transformer model has achieved state-of-the-art results in many NLP tasks, including machine translation and language modeling.

## Further Readings

- BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding by Devlin et al. (2018)
- Transformer-XL: Attentive Language Models Beyond a Fixed-Length Context by Dai et al. (2019)
- Language Models are Unsupervised Multitask Learners by Radford et al. (2019)
