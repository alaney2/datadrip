# Nyquist-Shannon Sampling Theorem

The Nyquist-Shannon Sampling Theorem, also known as the Nyquist Sampling Theorem or simply the Sampling Theorem, is a fundamental result in the field of signal processing and communication systems. It provides a theoretical basis for the process of sampling continuous-time signals to obtain discrete-time signals, which is essential in digital signal processing and the implementation of digital systems.

The theorem is named after Harry Nyquist and Claude Shannon, who independently derived the result in the 1920s and 1940s, respectively. The theorem states that a continuous-time signal can be exactly reconstructed from its samples if the sampling rate is at least twice the highest frequency component present in the signal. This critical sampling rate is known as the Nyquist rate.

## Statement of the Theorem

Let $x(t)$ be a continuous-time signal with a finite bandwidth $B$, meaning that its Fourier transform $X(f)$ is zero for all frequencies $|f| > B$. The Nyquist-Shannon Sampling Theorem states that $x(t)$ can be exactly reconstructed from its samples $x[n] = x(nT_s)$, where $T_s$ is the sampling period, if the sampling rate $f_s = \frac{1}{T_s}$ is greater than or equal to twice the bandwidth $B$:


$$

f_s \geq 2B

$$


In other words, the signal must be sampled at a rate at least twice as fast as its highest frequency component to avoid information loss during the sampling process.

## Reconstruction Formula

If the sampling rate satisfies the condition of the theorem, the continuous-time signal $x(t)$ can be reconstructed from its samples $x[n]$ using the following formula:


$$

x(t) = \sum_{n=-\infty}^{\infty} x[n] \cdot \text{sinc}\left(\frac{t - nT_s}{T_s}\right)

$$


where $\text{sinc}(x) = \frac{\sin(\pi x)}{\pi x}$ is the sinc function.

The reconstruction formula can be interpreted as a linear combination of sinc functions, each centered at a sample point $nT_s$ and scaled by the corresponding sample value $x[n]$. The sum of these sinc functions reconstructs the original continuous-time signal $x(t)$.

## Aliasing

If the sampling rate is lower than the Nyquist rate, a phenomenon called aliasing occurs. Aliasing is the distortion of the reconstructed signal due to the overlapping of the frequency components in the sampled signal. In this case, the original continuous-time signal cannot be exactly reconstructed from its samples, and information is lost during the sampling process.

To avoid aliasing, it is common practice to use an anti-aliasing filter before sampling a continuous-time signal. This filter removes the high-frequency components of the signal that would cause aliasing, ensuring that the remaining signal has a bandwidth below the Nyquist rate.

## Applications

The Nyquist-Shannon Sampling Theorem has widespread applications in various fields, including:

- Digital signal processing: The theorem provides the foundation for converting continuous-time signals to discrete-time signals, which can then be processed using digital techniques.
- Communication systems: The theorem is used to determine the minimum sampling rate required for transmitting analog signals over digital communication channels.
- Image processing: The theorem is applied to determine the minimum resolution required for digital images to accurately represent continuous scenes.
- Audio processing: The theorem is used to determine the minimum sampling rate required for digital audio systems to accurately reproduce continuous sound signals.

In summary, the Nyquist-Shannon Sampling Theorem is a fundamental result in signal processing that establishes the minimum sampling rate required to accurately represent continuous-time signals in discrete form. This theorem has widespread applications in digital systems and communication technologies.
