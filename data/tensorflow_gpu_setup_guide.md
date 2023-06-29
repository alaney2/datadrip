# Tensorflow GPU Setup Guide

TensorFlow is an open-source software library for machine learning and artificial intelligence. It provides a flexible platform for defining and running computations that involve tensors, which are multi-dimensional arrays. TensorFlow can run on multiple CPUs and GPUs, making it suitable for distributed computing.

This guide will walk you through the process of setting up TensorFlow to run on a GPU. This can significantly speed up the training of deep learning models, as GPUs are designed to perform a large number of calculations simultaneously.

## Prerequisites

Before you can use TensorFlow with a GPU, you need to have a compatible GPU installed on your machine. TensorFlow supports NVIDIA GPUs that come with a compute capability of 3.5 or higher. You can check the compute capability of your GPU on the NVIDIA website.

You also need to have the NVIDIA CUDA Toolkit installed. This is a software development kit that allows developers to use CUDA, a parallel computing platform and application programming interface model created by NVIDIA. The CUDA Toolkit includes libraries, debugging and optimization tools, a compiler, documentation, and code samples.

Python is the primary language supported by TensorFlow, so you should have a basic understanding of Python programming. You should also be familiar with the basics of TensorFlow.

## Installation

The first step in setting up TensorFlow to run on a GPU is to install the TensorFlow GPU package. This can be done using pip, a package manager for Python. The command to install TensorFlow GPU is:

```
pip install tensorflow-gpu
```

After the installation is complete, you can verify that TensorFlow can access your GPU by running the following Python code:

```python
import tensorflow as tf
if tf.test.gpu_device_name():
    print('Default GPU Device: {}'.format(tf.test.gpu_device_name()))
else:
    print("Please install GPU version of TF")
```

If TensorFlow can access your GPU, it will print the name of the GPU device. Otherwise, it will print a message asking you to install the GPU version of TensorFlow.

## Configuring TensorFlow to Use the GPU

By default, TensorFlow maps nearly all of the GPU memory of all GPUs visible to the process. To limit TensorFlow to a specific set of GPUs, you can set the `CUDA_VISIBLE_DEVICES` environment variable before launching the Python process.

```bash
export CUDA_VISIBLE_DEVICES=0,1
```

This command restricts TensorFlow to only use the first and second GPU of your machine.

You can also control the amount of GPU memory used by TensorFlow with the `tf.config.experimental.set_memory_growth` function. This function attempts to allocate only as much GPU memory as needed for the runtime allocations and releases it when no longer needed.

```python
gpus = tf.config.experimental.list_physical_devices('GPU')
if gpus:
  try:
    for gpu in gpus:
      tf.config.experimental.set_memory_growth(gpu, True)
  except RuntimeError as e:
    print(e)
```

This code sets memory growth to be enabled for all GPUs.

## Conclusion

Setting up TensorFlow to run on a GPU can significantly speed up the training of deep learning models. However, it requires a compatible GPU and the NVIDIA CUDA Toolkit. After installing the TensorFlow GPU package, you can verify that TensorFlow can access your GPU and configure it to use the GPU memory efficiently.
