# Mask R-CNN

Mask R-CNN (Regional Convolutional Neural Network) is an extension of the Faster R-CNN object detection model that can also generate segmentation masks for each object detected. Developed by Kaiming He, Georgia Gkioxari, Piotr Dollar, and Ross Girshick at Facebook AI Research (FAIR), Mask R-CNN was presented at the International Conference on Computer Vision (ICCV) in 2017. 

## Architecture

Mask R-CNN builds upon the Faster R-CNN architecture, which consists of two main components: a Region Proposal Network (RPN) and a Region of Interest (RoI) pooling layer. The RPN generates candidate object regions, which are then fed through the RoI pooling layer to create a fixed-size feature map. The feature map is then used for object classification and bounding box regression. 

In Mask R-CNN, the RoI pooling layer is replaced with a RoI align layer, which uses bilinear interpolation to obtain more accurate feature maps. The RoI align layer is then followed by a mask prediction branch, which generates a binary mask for each object region. The mask prediction branch is a fully convolutional network that uses the features obtained from the backbone network shared with the RPN and object detection branches. 

## Training

Mask R-CNN is trained end-to-end using stochastic gradient descent (SGD) with backpropagation. The loss function consists of three terms: the classification loss (binary cross-entropy), the bounding box regression loss (smooth L1 loss), and the mask loss (binary cross-entropy). The total loss is a weighted sum of these three losses. 

## Applications

Mask R-CNN has been applied to a wide range of computer vision tasks, including instance segmentation, object detection, and human pose estimation. It has achieved state-of-the-art results on benchmarks such as COCO (Common Objects in Context) and Cityscapes. 

## Further Readings

- [Faster R-CNN: Towards Real-Time Object Detection with Region Proposal Networks](https://arxiv.org/abs/1506.01497)
- [Fully Convolutional Instance-aware Semantic Segmentation](https://arxiv.org/abs/1612.03144)
- [Panoptic Feature Pyramid Networks](https://arxiv.org/abs/1901.02446)
- [Learning to Segment Every Thing](https://arxiv.org/abs/1711.10370)
