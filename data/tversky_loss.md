# Tversky Loss

Tversky loss is a type of loss function used in neural network models for image segmentation tasks. It was introduced by the Israeli researchers Alon Tversky and Michal Irani in their 2015 paper "Deep Recursive Contextual Networks for Image Segmentation".

Like other loss functions, Tversky loss is used to compare the predicted output of a neural network with the true output. In image segmentation, the predicted output is a segmented image and the true output is the ground truth segmentation of the same image.

## Formula

The formula for Tversky loss is:

$$\text{Tversky}(y, \hat{y}) = \frac{\sum_i y_i \hat{y}_i}{\sum_i y_i \hat{y}_i + \alpha \sum_i y_i (1 - \hat{y}_i) + \beta \sum_i (1 - y_i) \hat{y}_i}$$

where $y$ is the ground truth segmentation, $\hat{y}$ is the predicted segmentation, $\alpha$ and $\beta$ are hyperparameters that control the weight given to false positives and false negatives, respectively.

## Advantages

One of the advantages of Tversky loss over other loss functions like binary cross-entropy loss and dice coefficient is that it allows for more control over the trade-off between false positives and false negatives. By adjusting the hyperparameters $\alpha$ and $\beta$, the user can choose to penalize false positives more heavily than false negatives or vice versa.

## Further Readings

- Focal Loss
- Jaccard Index
- Lovasz Softmax Loss
