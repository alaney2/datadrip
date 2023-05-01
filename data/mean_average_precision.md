# Mean Average Precision

**Mean Average Precision (mAP)** is a popular metric used to evaluate the performance of object detection systems. It is a measure of both precision and recall that takes into account the accuracy of the predicted bounding boxes as well as the confidence scores associated with them. 

## Precision and Recall

Before diving into mAP, it is important to understand the concepts of precision and recall. Precision is the ratio of true positive (TP) detections to the total number of detections, while recall is the ratio of TP detections to the total number of ground truth (GT) objects. In other words, precision measures how accurate the detections are, while recall measures how complete the detections are. 

## Confusion Matrix

To calculate precision and recall, a confusion matrix is typically used. A confusion matrix is a table that summarizes the predicted and actual classifications for a set of samples, as shown below:

|          | Actual Positive | Actual Negative |
|----------|-----------------|-----------------|
| **Predicted Positive** | True Positive (TP) | False Positive (FP) |
| **Predicted Negative** | False Negative (FN) | True Negative (TN) |

From the confusion matrix, precision and recall can be calculated as follows:

$$Precision = \frac{TP}{TP + FP}$$

$$Recall = \frac{TP}{TP + FN}$$

## Mean Average Precision (mAP)

In object detection, a predicted bounding box is considered correct if its intersection over union (IoU) with a ground truth bounding box is above a certain threshold. The IoU is defined as the area of overlap between the predicted and ground truth bounding boxes divided by the area of their union. 

To calculate mAP, the precision-recall curve is first computed by varying the IoU threshold from 0 to 1. For each IoU threshold, the precision and recall are calculated and plotted on a graph. The area under the precision-recall curve is then computed using numerical integration, which gives the average precision (AP) for that IoU threshold. 

The mAP is then computed as the mean of the AP values across all IoU thresholds. Typically, the mAP is reported at several different IoU thresholds to give a more complete picture of the system's performance. 

## Further Readings

- [Average Precision and Mean Average Precision](https://towardsdatascience.com/breaking-down-mean-average-precision-map-ae462f623a52)
- [Intersection over Union](https://towardsdatascience.com/intersection-over-union-iou-for-object-detection-45c121a31173)
- [Object Detection Metrics](https://medium.com/@jonathan_hui/map-mean-average-precision-for-object-detection-45c121a31173)
- [Retrieval Metrics](https://www.nyu.edu/projects/rbowden/eval/index.html)
- [Ranking Metrics](https://towardsdatascience.com/ranking-metrics-for-object-detection-evaluation-7a819d9ee9ab)
