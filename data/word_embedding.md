# Word Embedding

Word embedding is a technique used in natural language processing (NLP) to represent words or phrases in a continuous vector space. The main goal of word embedding is to capture the semantic meaning, syntactic relationships, and other linguistic properties of words in a low-dimensional vector representation. This allows machine learning models, especially deep learning models, to efficiently process and analyze textual data.

## Introduction

Traditional NLP techniques often represent words as discrete symbols, such as one-hot encoding, which results in sparse and high-dimensional representations. These representations do not capture the relationships between words, making it difficult for models to generalize and learn from the data. Word embeddings address this issue by representing words in a dense vector space, where semantically similar words are mapped to nearby points.

Word embeddings can be generated using various methods, including unsupervised learning algorithms, pre-trained models, and supervised learning tasks. Some popular word embedding models include Word2Vec, GloVe, and FastText.

## Word2Vec

Word2Vec is a widely-used word embedding technique proposed by Mikolov et al. in 2013. It consists of two main architectures: Continuous Bag of Words (CBOW) and Skip-Gram. Both architectures use shallow neural networks to learn word representations from large text corpora.

### Continuous Bag of Words (CBOW)

In the CBOW architecture, the model predicts the target word given its context words. The context words are represented as a bag of words, meaning that their order does not matter. The model takes the average of the context word vectors and uses it to predict the target word. The objective is to minimize the prediction error, which is measured using the cross-entropy loss.

### Skip-Gram

The Skip-Gram architecture is the opposite of CBOW. It predicts the context words given the target word. The model takes the target word vector and uses it to predict the surrounding context words. The objective is to maximize the probability of observing the context words given the target word.

## GloVe

GloVe (Global Vectors for Word Representation) is another popular word embedding technique, proposed by Pennington et al. in 2014. It is based on the idea that the co-occurrence statistics of words in a corpus can be used to learn meaningful word representations. GloVe combines the advantages of both global matrix factorization methods and local context window methods.

The main idea behind GloVe is to learn word vectors such that their dot product equals the logarithm of the words' co-occurrence probability. The objective function is designed to minimize the difference between the dot product of word vectors and the logarithm of their co-occurrence count.

## FastText

FastText, proposed by Bojanowski et al. in 2016, is an extension of the Word2Vec model that takes into account subword information. It represents each word as a bag of character n-grams, which allows the model to capture morphological information and generate better word representations for rare and out-of-vocabulary words.

FastText can be trained using either the CBOW or Skip-Gram architecture. The main difference is that the input and output word vectors are replaced with the sum of their corresponding character n-gram vectors.

## Pre-trained Word Embeddings

In addition to training word embeddings from scratch, it is common to use pre-trained word embeddings that have been trained on large text corpora. These pre-trained embeddings can be fine-tuned for specific tasks or used as a fixed feature extractor. Some popular pre-trained word embeddings include Google's Word2Vec, Stanford's GloVe, and Facebook's FastText.

## Contextual Word Embeddings

Traditional word embedding techniques, such as Word2Vec and GloVe, generate static word representations that do not capture the context in which a word appears. This can be problematic for words with multiple meanings or when the meaning of a word depends on its surrounding context.

Contextual word embeddings address this issue by generating dynamic word representations that depend on the context in which a word appears. Some popular contextual word embedding models include ELMo, BERT, and Transformers.

### ELMo

ELMo (Embeddings from Language Models) is a contextual word embedding technique proposed by Peters et al. in 2018. It uses a bidirectional LSTM-based language model to generate word representations that are a function of the entire input sentence. ELMo embeddings can be easily integrated into existing NLP models by concatenating them with the static word embeddings.

### BERT

BERT (Bidirectional Encoder Representations from Transformers) is a contextual word embedding technique proposed by Devlin et al. in 2018. It uses the Transformer architecture to generate deep bidirectional representations of words in a sentence. BERT is pre-trained on large text corpora using masked language modeling and next sentence prediction tasks, and can be fine-tuned for various NLP tasks.

## Conclusion

Word embeddings have become an essential component of modern NLP systems, enabling models to efficiently process and analyze textual data. Various word embedding techniques, such as Word2Vec, GloVe, and FastText, have been proposed to generate meaningful word representations. More recently, contextual word embeddings, such as ELMo and BERT, have been developed to capture the context-dependent nature of word meanings.
