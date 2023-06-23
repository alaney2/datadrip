# Linear Time Invariant Systems

Linear Time Invariant (LTI) systems are a class of systems that exhibit both linearity and time invariance properties. They are widely used in the study of signal processing, control systems, and communication systems due to their mathematical tractability and ease of analysis. In this article, we will discuss the properties of LTI systems, their representation, and some important concepts related to them.

## Linearity

A system is said to be linear if it satisfies the principle of superposition. This means that the response of the system to a linear combination of inputs is equal to the linear combination of the responses to the individual inputs. Mathematically, a system is linear if, for any inputs $x_1(t)$ and $x_2(t)$ and any constants $a$ and $b$, the following holds:


$$

y(t) = a\cdot y_1(t) + b\cdot y_2(t)

$$


where $y_1(t)$ and $y_2(t)$ are the responses of the system to $x_1(t)$ and $x_2(t)$, respectively.

## Time Invariance

A system is said to be time-invariant if its response to a time-shifted input is the same as the time-shifted response to the original input. Mathematically, a system is time-invariant if, for any input $x(t)$ and any time shift $\tau$, the following holds:


$$

y(t - \tau) = y_\tau(t)

$$


where $y_\tau(t)$ is the response of the system to the time-shifted input $x(t - \tau)$.

## Representation of LTI Systems

There are several ways to represent LTI systems, including impulse response, transfer function, and state-space representation. We will discuss the impulse response and transfer function representations in this article.

### Impulse Response

The impulse response of an LTI system is the response of the system to a unit impulse input, denoted by $\delta(t)$. The impulse response is usually denoted by $h(t)$ for continuous-time systems and $h[n]$ for discrete-time systems. Due to the linearity and time invariance properties of LTI systems, the response of the system to any input can be computed using the convolution operation:


$$

y(t) = x(t) * h(t) = \int_{-\infty}^{\infty} x(\tau)h(t - \tau) d\tau

$$


for continuous-time systems, and


$$

y[n] = x[n] * h[n] = \sum_{k=-\infty}^{\infty} x[k]h[n - k]

$$


for discrete-time systems.

### Transfer Function

The transfer function of an LTI system is the Laplace transform of its impulse response for continuous-time systems or the Z-transform of its impulse response for discrete-time systems. The transfer function is usually denoted by $H(s)$ for continuous-time systems and $H(z)$ for discrete-time systems. The transfer function provides a frequency-domain representation of the system, which can be useful for analyzing the system's behavior in terms of its frequency response and stability.

For continuous-time systems, the transfer function is defined as:


$$

H(s) = \mathcal{L}\{h(t)\} = \int_{-\infty}^{\infty} h(t)e^{-st} dt

$$


where $\mathcal{L}\{\cdot\}$ denotes the Laplace transform and $s$ is a complex variable.

For discrete-time systems, the transfer function is defined as:


$$

H(z) = \mathcal{Z}\{h[n]\} = \sum_{n=-\infty}^{\infty} h[n]z^{-n}

$$


where $\mathcal{Z}\{\cdot\}$ denotes the Z-transform and $z$ is a complex variable.

## Properties of LTI Systems

LTI systems have several important properties that make them particularly amenable to analysis and design. Some of these properties include:

1. **Causality**: An LTI system is causal if its impulse response is zero for all negative time values, i.e., $h(t) = 0$ for $t < 0$ in continuous-time systems and $h[n] = 0$ for $n < 0$ in discrete-time systems. Causal systems are important in practice because they do not require knowledge of future input values to compute the output.

2. **Stability**: An LTI system is stable if its impulse response is absolutely integrable for continuous-time systems or absolutely summable for discrete-time systems. This means that the system's output will not grow unbounded for bounded inputs. Stability is an important property for practical systems, as unstable systems can lead to undesirable behavior or even damage to the system.

3. **BIBO Stability**: An LTI system is Bounded-Input Bounded-Output (BIBO) stable if every bounded input produces a bounded output. For continuous-time systems, this is equivalent to the impulse response being absolutely integrable, and for discrete-time systems, this is equivalent to the impulse response being absolutely summable.

4. **Frequency Response**: The frequency response of an LTI system is the Fourier transform of its impulse response for continuous-time systems or the Discrete-Time Fourier Transform (DTFT) of its impulse response for discrete-time systems. The frequency response provides information about the system's behavior at different frequencies, such as its gain and phase characteristics.

## Conclusion

Linear Time Invariant systems are an important class of systems that are widely used in the study of signal processing, control systems, and communication systems. Their properties, such as linearity and time invariance, make them mathematically tractable and easy to analyze. The impulse response and transfer function representations of LTI systems provide useful tools for understanding their behavior and designing systems with desired characteristics.
