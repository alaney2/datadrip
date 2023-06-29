# CUDA

CUDA (Compute Unified Device Architecture) is a parallel computing platform and application programming interface (API) model created by NVIDIA. It allows software developers to use a CUDA-enabled graphics processing unit (GPU) for general purpose processing, an approach known as GPGPU (General-Purpose computing on Graphics Processing Units).

## Overview

CUDA provides both a low level API (CUDA Driver API, non single-source) and a higher level API (CUDA Runtime API, single-source). The CUDA platform is designed to work with programming languages such as C, C++, and Fortran. This accessibility makes it a popular choice for computational scientists and engineers.

CUDA code runs on both the CPU and GPU. The sequential part of the task runs on the CPU, and the computationally-intensive part runs on the GPU. From the programmer's perspective, the CUDA GPU is viewed as a compute device that can execute a large number of threads in parallel.

## Parallel Computing

Parallel computing is a type of computation in which many calculations or processes are carried out simultaneously. Large problems can often be divided into smaller ones, which can then be solved at the same time. CUDA uses the parallel computing model where the solution to a problem is computed simultaneously on different GPUs or on different threads in a single GPU.

## GPU Architecture

The GPU is a compute device that is capable of executing a significant number of threads in parallel. It operates as a coprocessor to the CPU, or host. The GPU has its own DRAM (device memory). Host data (data that CPU can access) can be copied to the device memory and vice versa.

## Data Parallelism

Data parallelism is a form of parallelization across multiple processors in parallel computing environments. It focuses on distributing the data across different parallel computing nodes. In CUDA, data parallelism is achieved by defining a kernel, a function that is executed N times in parallel by N different CUDA threads.

## Thread Hierarchy

CUDA organizes threads into a hierarchy of grids, blocks, and threads to execute kernels. A grid is made up of many blocks, and each block contains many threads. Threads within the same block can communicate and synchronize with each other. However, threads in different blocks cannot communicate.

## CUDA Memory Hierarchy

CUDA exposes a hierarchy of memory to fit the needs of parallel processing. This includes global memory, shared memory, constant memory, and texture memory. Understanding how to use these different types of memory is crucial to achieving high performance with CUDA.

## CUDA Programming Model

The CUDA programming model assumes that the CUDA threads execute on a physically separate device that operates as a coprocessor to the host running the C program. This is the basis for the main CUDA execution model.

## CUDA Optimization Techniques

Optimizing CUDA involves a combination of maximizing parallel execution, optimizing memory usage, and minimizing data transfers between the host and the device. This can involve techniques such as using shared memory to avoid global memory access, using thread coarsening, and optimizing thread and block dimensions.

## GPU Accelerated Computing

GPU-accelerated computing is the use of a graphics processing unit (GPU) together with a CPU to accelerate deep learning, analytics, and engineering applications. It is the most effective way to accelerate AI as it provides the highest throughput and efficiency.

## CUDA Libraries

CUDA comes with a software environment that allows developers to build, debug, and profile GPU-accelerated applications. The CUDA Toolkit includes GPU-accelerated libraries, a compiler, development tools and the CUDA runtime.
