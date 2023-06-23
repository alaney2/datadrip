# Wavelet Thresholding

Wavelet thresholding is a technique used in signal processing and image processing to remove noise from signals or images while preserving important features. It is based on the wavelet transform, which is a mathematical tool that allows the decomposition of a signal or image into different frequency components. Wavelet thresholding is particularly useful for denoising non-stationary signals, where the noise level and the signal characteristics change over time.

## Wavelet Transform

The wavelet transform is a time-frequency representation of a signal that decomposes the signal into a set of basis functions called wavelets. These wavelets are localized in both time and frequency, which allows for a more accurate representation of the signal's features compared to other transform methods, such as the Fourier transform. The wavelet transform can be computed using various types of wavelets, such as Haar wavelets, Daubechies wavelets, and Coiflets.

The wavelet transform can be computed using either a continuous or a discrete approach. The continuous wavelet transform (CWT) computes the inner product of the signal with a continuous set of wavelets, while the discrete wavelet transform (DWT) computes the inner product with a discrete set of wavelets. The DWT is more computationally efficient and is commonly used in practice.

## Multiresolution Analysis

Wavelet thresholding is based on the concept of multiresolution analysis (MRA), which is a framework for analyzing signals or images at different levels of resolution. MRA is performed using the wavelet transform, which decomposes the signal into a set of approximation coefficients and detail coefficients. The approximation coefficients represent the low-frequency components of the signal, while the detail coefficients represent the high-frequency components.

The decomposition process can be iterated, with the approximation coefficients at each level being further decomposed into a new set of approximation and detail coefficients. This results in a hierarchical representation of the signal, where each level corresponds to a different resolution.

## Thresholding Techniques

Wavelet thresholding involves setting the detail coefficients below a certain threshold to zero, effectively removing the noise from the signal. The choice of the threshold is crucial, as it determines the trade-off between noise reduction and preservation of the signal's features. There are several techniques for choosing the threshold, including:

1. **Universal threshold**: This threshold is based on the assumption that the noise is Gaussian and has a constant variance. The universal threshold is computed as $\sigma\sqrt{2\log(n)}$, where $\sigma$ is the noise standard deviation and $n$ is the number of samples in the signal.

2. **VisuShrink**: This is a variation of the universal threshold that takes into account the signal's sparsity. The VisuShrink threshold is computed as $\sigma\sqrt{2\log(n)}\log(n)^{-\alpha}$, where $\alpha$ is a parameter that controls the degree of sparsity.

3. **SureShrink**: This threshold is based on the Stein's Unbiased Risk Estimate (SURE) and aims to minimize the mean squared error between the denoised signal and the true signal. The SureShrink threshold is computed using an iterative algorithm that minimizes the SURE criterion.

4. **Bayesian threshold**: This threshold is based on a Bayesian framework that models the signal and noise as random variables with known prior distributions. The Bayesian threshold is computed as the maximum a posteriori (MAP) estimate of the signal given the observed data.

## Wavelet Denoising

Wavelet denoising is the process of reconstructing the denoised signal from the thresholded wavelet coefficients. This is done using the inverse wavelet transform, which combines the thresholded detail coefficients and the approximation coefficients at each level of the MRA. The inverse wavelet transform ensures that the denoised signal has the same length as the original signal.

Wavelet denoising has several advantages over other denoising techniques, such as Gaussian filtering and median filtering. First, wavelet denoising is more effective at preserving the signal's features, as it operates in the wavelet domain, which provides a better representation of the signal's structure. Second, wavelet denoising is more robust to non-stationary noise, as it can adapt the threshold to the local noise level in the signal.

## Applications

Wavelet thresholding and denoising have been applied to a wide range of applications, including:

- Image denoising: Wavelet thresholding can be used to remove noise from images while preserving the edges and textures. This is particularly useful in medical imaging, where the preservation of fine details is crucial for diagnosis.

- Audio denoising: Wavelet thresholding can be used to remove noise from audio signals, such as speech and music. This is useful in applications such as speech recognition and audio restoration.

- Signal compression: Wavelet thresholding can be used to compress signals by setting the small wavelet coefficients to zero and encoding the remaining coefficients using a lossless compression algorithm.

- Feature extraction: Wavelet thresholding can be used to extract features from signals, such as the locations of edges and textures in images. These features can be used for tasks such as image segmentation and object recognition.
