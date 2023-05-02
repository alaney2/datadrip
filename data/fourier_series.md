# Fourier Series

A Fourier series is a mathematical representation of a periodic function. It is named after Joseph Fourier, a French mathematician who developed the concept in the early 19th century. The series is useful in many fields, including physics, engineering, and signal processing.

## Definition

A Fourier series represents a function $f(x)$ as an infinite sum of sine and cosine functions:

$$f(x) = \frac{a_0}{2} + \sum_{n=1}^{\infty} \left(a_n \cos \frac{n \pi x}{L} + b_n \sin \frac{n \pi x}{L}\right)$$

where $L$ is the period of the function and $a_0$, $a_n$, and $b_n$ are the Fourier coefficients. These coefficients can be calculated using the following formulas:

$$a_0 = \frac{1}{L} \int_{-L}^{L} f(x) dx$$

$$a_n = \frac{1}{L} \int_{-L}^{L} f(x) \cos \frac{n \pi x}{L} dx$$

$$b_n = \frac{1}{L} \int_{-L}^{L} f(x) \sin \frac{n \pi x}{L} dx$$

## Applications

Fourier series are used in many fields, including:

### Physics

In physics, Fourier series are used to describe the behavior of waves. For example, the motion of a guitar string can be described using a Fourier series.

### Engineering

Fourier series are used in engineering to analyze and design electronic circuits, control systems, and filters.

### Signal Processing

In signal processing, Fourier series are used to analyze and manipulate signals. For example, a Fourier series can be used to filter out unwanted frequencies from a signal.

## Further Readings

- [Fourier Transform](fourier_transform)
- [Signal Processing](signal_processing)
- [Partial Differential Equations](partial_differential_equations)
