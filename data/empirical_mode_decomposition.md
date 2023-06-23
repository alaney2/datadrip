# Empirical Mode Decomposition

Empirical Mode Decomposition (EMD) is a data-driven, adaptive method for decomposing a signal into a set of intrinsic mode functions (IMFs). It was introduced by Huang et al. in 1998 as a part of the Hilbert-Huang Transform (HHT) for analyzing non-stationary and nonlinear signals. EMD is particularly useful in applications such as biomedical signal processing, geophysics, and financial time series analysis, where the signals exhibit non-stationary and nonlinear characteristics.

## Intrinsic Mode Functions

An IMF is a function that satisfies the following two conditions:

1. The number of extrema (maxima and minima) and the number of zero crossings must either be equal or differ at most by one.
2. The mean value of the envelope defined by the local maxima and the envelope defined by the local minima is zero at any point.

IMFs represent the oscillatory modes embedded in the signal, with each IMF corresponding to a different frequency scale. The decomposition process aims to extract these IMFs in a hierarchical manner, starting from the highest frequency component to the lowest frequency component.

## EMD Algorithm

The EMD algorithm consists of the following steps:

1. Identify all the local extrema (maxima and minima) of the input signal.
2. Interpolate between the local maxima and minima to obtain the upper and lower envelopes, respectively. Cubic spline interpolation is commonly used for this purpose.
3. Compute the mean of the upper and lower envelopes, and subtract it from the input signal to obtain a candidate IMF.
4. Check if the candidate IMF satisfies the IMF conditions. If not, repeat steps 1-3 using the candidate IMF as the input signal.
5. Once an IMF is obtained, subtract it from the input signal to obtain a residue signal.
6. Repeat steps 1-5 for the residue signal until the desired number of IMFs is obtained or the residue signal becomes a monotonic function.

The resulting set of IMFs represents the decomposition of the input signal into its oscillatory components at different frequency scales. The residue signal represents the overall trend of the input signal.

## Hilbert Transform and Instantaneous Frequency

After obtaining the IMFs, the Hilbert Transform is applied to each IMF to obtain the analytic signal, which is a complex-valued signal with the same amplitude and phase information as the original IMF. The instantaneous frequency of each IMF can then be computed as the time derivative of the phase of the analytic signal. This allows for a time-frequency representation of the input signal, which is useful for analyzing non-stationary signals.

## Advantages and Limitations

EMD has several advantages over traditional time-frequency analysis methods such as the Short-Time Fourier Transform (STFT) and the Wavelet Transform (WT):

1. EMD is a data-driven method, which means it does not rely on a priori basis functions like the STFT and WT. This makes it more suitable for analyzing non-stationary and nonlinear signals.
2. EMD provides a high-resolution time-frequency representation of the input signal, as it decomposes the signal into narrowband IMFs.
3. EMD is adaptive, as it adjusts the decomposition based on the local characteristics of the input signal.

However, EMD also has some limitations:

1. The algorithm is sensitive to noise, which can cause mode mixing, where a single IMF contains multiple frequency scales. Various noise-assisted EMD methods have been proposed to address this issue, such as Ensemble EMD (EEMD) and Complete Ensemble EMD (CEEMD).
2. The algorithm is computationally expensive, especially for long signals or signals with a large number of extrema.
3. The decomposition is not unique, as it depends on the choice of interpolation method and the stopping criterion for the sifting process.

Despite these limitations, EMD has been successfully applied to a wide range of applications and has inspired the development of several variants and extensions, such as the Local Mean Decomposition (LMD), Variational Mode Decomposition (VMD), and Multivariate EMD (MEMD).
