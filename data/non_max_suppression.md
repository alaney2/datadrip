# Non Max Suppression

Non Max Suppression (NMS) is a technique used in object detection to remove duplicate detections and only keep the most accurate ones. When using object detection algorithms, such as a Convolutional Neural Network (CNN), the algorithm often creates multiple bounding boxes around the same object in the image. This redundancy can lead to lower accuracy and slower processing times, as the algorithm has to process multiple detections for the same object.

NMS is a post-processing step that reduces the number of bounding boxes by selecting only the most accurate ones. The process involves three main steps: calculating the Intersection over Union (IoU) of all the bounding boxes, selecting the bounding box with the highest confidence score, and removing all the bounding boxes with an IoU greater than a certain threshold.

The first step is to calculate the IoU of all the bounding boxes. IoU is the ratio of the intersection area between two bounding boxes and the union area of the same two bounding boxes. The IoU value ranges from 0 to 1, where 0 means the two boxes do not overlap at all, and 1 means they are perfectly aligned. The calculation of IoU is given by the following formula:

$$IoU=\frac{Area\ of\ Overlap}{Area\ of\ Union}$$

The second step is to select the bounding box with the highest confidence score. The confidence score is a value between 0 and 1 that represents how confident the algorithm is that the bounding box contains an object. The bounding box with the highest confidence score is the most likely to contain the object.

The final step is to remove all the bounding boxes with an IoU greater than a certain threshold. This threshold is usually set to 0.5, which means that if two bounding boxes overlap by more than 50%, the one with the lower confidence score is removed. This step ensures that only the most accurate bounding box is kept for each object in the image.

NMS is a crucial step in object detection algorithms, as it reduces redundancy and improves the accuracy of the detections. It is used in popular object detection algorithms, such as Faster R-CNN, YOLO, and SSD.

## Further Readings

- Faster R-CNN
- YOLO
- SSD
- Region Proposal Network
- Panoptic Segmentation
- Hough Transform
- Mean Shift Clustering
- Tracking Algorithms
