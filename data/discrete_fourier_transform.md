# Discrete Fourier Transform

The Discrete Fourier Transform (DFT) is a mathematical tool used to represent a finite-length sequence of equally spaced samples of a continuous function as a linear combination of complex exponential functions. The DFT is widely used in signal processing, image processing, data compression, and other fields where it is necessary to analyze or manipulate signals in the frequency domain.

## Definition

Given a sequence of N complex numbers x[n], where n = 0, 1, ..., N-1, the DFT of x[n] is defined as:

$$ X_k = \sum_{n=0}^{N-1} x_n e^{-i 2\pi nk/N} $$

for k = 0, 1, ..., N-1.

The DFT can be viewed as a linear transformation that maps a vector of N complex numbers x[n] to a vector of N complex numbers X[k]. The DFT can also be expressed in matrix form as:

$$ \mathbf{X} = \mathbf{F}_N \mathbf{x} $$

where $\mathbf{x}$ is a column vector of length N containing the values of x[n], $\mathbf{X}$ is a column vector of length N containing the values of X[k], and $\mathbf{F}_N$ is an N × N matrix called the DFT matrix whose elements are given by:

$$ F_{nk} = \frac{1}{\sqrt{N}} e^{-i 2\pi nk/N} $$

for n, k = 0, 1, ..., N-1.

## Properties

The DFT has many important properties, including:

- Linearity: The DFT is a linear transformation, meaning that if a signal x[n] can be expressed as a sum of two other signals x1[n] and x2[n], then its DFT can be expressed as a sum of the DFTs of x1[n] and x2[n].
- Time and frequency shifting: Shifting a signal x[n] in time corresponds to multiplying its DFT by a complex exponential function. Shifting a signal x[n] in frequency corresponds to multiplying its DFT by a phase factor.
- Convolution: The DFT of the convolution of two signals x1[n] and x2[n] is equal to the product of their DFTs.
- Parseval's theorem: The sum of the squared magnitudes of the samples of a signal x[n] is equal to the sum of the squared magnitudes of its DFT samples divided by N.
- Symmetry: If x[n] is real and even, then its DFT is real and even. If x[n] is real and odd, then its DFT is imaginary and odd. If x[n] is imaginary and even, then its DFT is imaginary and odd. If x[n] is imaginary and odd, then its DFT is real and even.

## Applications

The DFT has many applications in signal processing, including:

- Spectral analysis: The DFT can be used to compute the frequency spectrum of a signal, which is a plot of the magnitude of its DFT samples versus frequency.
- Filtering: The DFT can be used to design and implement digital filters, which are used to remove unwanted noise or distortions from a signal.
- Compression: The DFT can be used to compress digital signals by removing or approximating high-frequency components that are less perceptible to the human ear or eye.
- Modulation: The DFT can be used to modulate a signal by multiplying its DFT by a complex exponential function.

## Further Readings

- Wavelet Transform
- Short-time Fourier Transform
- Spectral Analysis
- Spectrogram
- Power Spectrum
- Signal Filtering
- Deconvolution
- Autoregressive Models
- Machine Learning for Signal Processing
