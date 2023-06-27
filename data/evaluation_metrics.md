# Evaluation Metrics

Evaluation metrics are essential in the field of machine learning (ML) and artificial intelligence (AI) to measure the performance of models and algorithms. They help in understanding the effectiveness of a model and guide the selection of the best model for a given task. Evaluation metrics can be broadly categorized into two types: metrics for supervised learning and metrics for unsupervised learning.

## Supervised Learning Metrics

In supervised learning, the model is trained on a labeled dataset, and its performance is evaluated on a separate test dataset. The evaluation metrics for supervised learning can be further divided into two categories: classification metrics and regression metrics.

### Classification Metrics

Classification tasks involve predicting the class labels of input samples. Some common classification metrics are:

1. **Accuracy**: The proportion of correctly classified instances out of the total instances. It is calculated as:

   
$$
\text{Accuracy} = \frac{\text{Number of Correct Predictions}}{\text{Total Number of Predictions}}
$$


2. **Precision**: The proportion of true positive predictions out of the total positive predictions. It is calculated as:

   
$$
\text{Precision} = \frac{\text{True Positives}}{\text{True Positives} + \text{False Positives}}
$$


3. **Recall**: The proportion of true positive predictions out of the total actual positive instances. It is calculated as:

   
$$
\text{Recall} = \frac{\text{True Positives}}{\text{True Positives} + \text{False Negatives}}
$$


4. **F1 Score**: The harmonic mean of precision and recall. It is calculated as:

   
$$
\text{F1 Score} = 2 \times \frac{\text{Precision} \times \text{Recall}}{\text{Precision} + \text{Recall}}
$$


5. **Area Under the Receiver Operating Characteristic (ROC AUC)**: A measure of the trade-off between the true positive rate (sensitivity) and the false positive rate (1 - specificity) for different classification thresholds. The ROC AUC score ranges from 0 to 1, with 1 indicating a perfect classifier.

### Regression Metrics

Regression tasks involve predicting continuous values. Some common regression metrics are:

1. **Mean Squared Error (MSE)**: The average of the squared differences between the predicted and actual values. It is calculated as:

   
$$
\text{MSE} = \frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2
$$


   where $y_i$ is the actual value, $\hat{y}_i$ is the predicted value, and $n$ is the number of samples.

2. **Root Mean Squared Error (RMSE)**: The square root of the mean squared error. It is calculated as:

   
$$
\text{RMSE} = \sqrt{\text{MSE}}
$$


3. **Mean Absolute Error (MAE)**: The average of the absolute differences between the predicted and actual values. It is calculated as:

   
$$
\text{MAE} = \frac{1}{n} \sum_{i=1}^{n} |y_i - \hat{y}_i|
$$


4. **R-squared (R²)**: A measure of how well the predicted values fit the actual values. It is calculated as:

   
$$
\text{R}^2 = 1 - \frac{\text{Sum of Squared Residuals}}{\text{Total Sum of Squares}}
$$


5. **Adjusted R-squared**: A modified version of R-squared that takes into account the number of predictors in the model. It is calculated as:

   
$$
\text{Adjusted R}^2 = 1 - \frac{(1 - \text{R}^2)(n - 1)}{n - k - 1}
$$


   where $n$ is the number of samples and $k$ is the number of predictors.

## Unsupervised Learning Metrics

In unsupervised learning, the model is trained on an unlabeled dataset, and its performance is evaluated based on the structure it discovers in the data. Some common unsupervised learning metrics are:

1. **Silhouette Score**: A measure of how similar an object is to its own cluster compared to other clusters. The silhouette score ranges from -1 to 1, with higher values indicating better clustering.

2. **Davies-Bouldin Index**: A measure of the average similarity between clusters, where similarity is defined as the ratio of within-cluster distances to between-cluster distances. Lower values of the Davies-Bouldin index indicate better clustering.

3. **Calinski-Harabasz Index**: A measure of the ratio of between-cluster dispersion to within-cluster dispersion. Higher values of the Calinski-Harabasz index indicate better clustering.

4. **Adjusted Rand Index**: A measure of the similarity between two clustering assignments, adjusted for chance. The adjusted Rand index ranges from -1 to 1, with higher values indicating better clustering.

Choosing the appropriate evaluation metric depends on the specific problem and the goals of the analysis. It is essential to consider the characteristics of the data and the desired outcomes when selecting evaluation metrics. In some cases, multiple metrics may be used to provide a comprehensive assessment of a model's performance.
