# Wavelet Denoising

Wavelet denoising is a technique used in signal processing and image processing for removing noise from a signal or an image while preserving the important features and structures. It is based on the wavelet transform, which is a mathematical tool for decomposing a signal into different frequency components. Wavelet denoising is particularly effective in removing noise that is not uniformly distributed across the frequency spectrum, such as Gaussian noise or impulsive noise.

## Wavelet Transform

The wavelet transform is a time-frequency analysis method that decomposes a signal into a set of basis functions called wavelets. Wavelets are localized oscillatory functions that can be scaled and translated to analyze the signal at different scales and locations. The wavelet transform provides a multiresolution representation of the signal, which means that it captures both the low-frequency content (coarse features) and the high-frequency content (fine details) of the signal.

The continuous wavelet transform (CWT) is defined as the convolution of the signal with a set of continuous wavelets:


$$

CWT_x(a, b) = \frac{1}{\sqrt{|a|}} \int_{-\infty}^{\infty} x(t) \psi^*\left(\frac{t - b}{a}\right) dt

$$


where $x(t)$ is the input signal, $\psi(t)$ is the mother wavelet, $a$ is the scale parameter, $b$ is the translation parameter, and $*$ denotes the complex conjugate.

The discrete wavelet transform (DWT) is a discretized version of the CWT, where the scale and translation parameters are sampled at discrete values:


$$

DWT_x(m, n) = \frac{1}{\sqrt{2^m}} \int_{-\infty}^{\infty} x(t) \psi^*\left(\frac{t - 2^m n}{2^m}\right) dt

$$


where $m$ and $n$ are integers representing the scale and translation indices, respectively.

## Denoising Process

The wavelet denoising process consists of three main steps:

1. **Decomposition**: The input signal or image is decomposed into a set of wavelet coefficients using the wavelet transform. This step produces a multiresolution representation of the signal, where each level corresponds to a different scale or frequency band.

2. **Thresholding**: The wavelet coefficients are thresholded to remove the noise. This step involves setting the coefficients below a certain threshold to zero, which effectively removes the noise while preserving the important features of the signal. The choice of the threshold is crucial for the performance of the denoising process and can be determined using various methods, such as the universal threshold, the SURE threshold, or the Bayes threshold.

3. **Reconstruction**: The denoised signal or image is reconstructed from the thresholded wavelet coefficients using the inverse wavelet transform. This step combines the denoised coefficients from different scales and frequency bands to obtain the final denoised output.

## Wavelet Thresholding

Wavelet thresholding is a key component of the wavelet denoising process. It aims to remove the noise from the wavelet coefficients while preserving the important features of the signal. There are several types of wavelet thresholding methods, including:

- **Hard thresholding**: This method sets the coefficients below the threshold to zero and keeps the coefficients above the threshold unchanged. It is simple and computationally efficient but may introduce discontinuities in the reconstructed signal.

- **Soft thresholding**: This method sets the coefficients below the threshold to zero and shrinks the coefficients above the threshold towards zero by the threshold value. It produces a smoother reconstructed signal but may introduce bias in the denoised coefficients.

- **Garrote thresholding**: This method is a variation of soft thresholding that uses a nonlinear shrinkage function to reduce the bias in the denoised coefficients. It provides better performance in terms of mean squared error but is more computationally demanding.

- **Block thresholding**: This method groups the wavelet coefficients into blocks and applies a common threshold to each block. It exploits the spatial or temporal correlations between the coefficients to improve the denoising performance.

## Applications

Wavelet denoising has been widely used in various applications, such as:

- **Audio denoising**: Removing noise from speech signals, music recordings, or environmental sounds to improve the audio quality and intelligibility.

- **Image denoising**: Removing noise from digital images to enhance the visual quality and facilitate further processing, such as segmentation, feature extraction, or compression.

- **Biomedical signal denoising**: Removing noise from electrocardiograms (ECGs), electroencephalograms (EEGs), or other biomedical signals to improve the signal-to-noise ratio and facilitate the diagnosis or monitoring of medical conditions.

- **Remote sensing**: Removing noise from satellite images or radar data to improve the detection and classification of land cover, vegetation, or other geospatial features.

- **Financial time series**: Removing noise from financial time series data to improve the forecasting and risk management of financial assets.
