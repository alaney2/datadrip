# BERT

BERT (Bidirectional Encoder Representations from Transformers) is a transformer-based machine learning technique for natural language processing (NLP) pre-training. It was developed by Google and introduced in 2018.

## Overview

BERT is designed to pre-train deep bidirectional representations from unlabeled text by jointly conditioning on both left and right context in all layers. As a result, the pre-trained BERT model can be fine-tuned with just one additional output layer to create state-of-the-art models for a wide range of tasks, such as question answering and language inference, without substantial task-specific architecture modifications.

## Architecture

BERT is based on the Transformer model architecture, originally introduced by Vaswani et al. The Transformer model uses an attention mechanism that learns contextual relations between words (or sub-words) in a text. In its vanilla form, Transformer includes two separate mechanisms — an encoder that reads the text input and a decoder that produces a prediction for the task. BERT, however, uses only the encoder mechanism.

## Training

BERT is pre-trained on a large corpus of unlabelled text including the entire Wikipedia (that’s 2,500 million words!) and Book Corpus (800 million words). The pre-training process is relatively expensive but is a one-time procedure. It is trained on two unsupervised tasks simultaneously:

1. **Masked Language Model (MLM)**: Before feeding word sequences into BERT, 15% of the words in each sequence are replaced with a [MASK] token. The model then attempts to predict the original value of the masked words, based on the context provided by the other, non-masked, words in the sequence.

2. **Next Sentence Prediction (NSP)**: The model receives pairs of sentences as input and learns to predict if the second sentence in the pair is the subsequent sentence in the original document.

## Fine-Tuning

After pre-training, BERT can be fine-tuned on specific tasks. Fine-tuning is straightforward since the self-attention mechanism in the Transformer allows BERT to model many downstream tasks—whether they involve understanding the meaning of a sentence or the relationship between two sentences—by swapping out the appropriate inputs and outputs.

## Conclusion

BERT has set a new standard in the NLP tasks, providing significant improvements over previous models. It has been adopted by Google in its search engine, demonstrating the practical utility of BERT in real-world applications.
