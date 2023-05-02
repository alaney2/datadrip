# Eigenfaces

Eigenfaces is a facial recognition technique that uses principal component analysis (PCA) to extract features from human faces. It was developed by Sirovich and Kirby in 1987 and has since become a widely used method for facial recognition and image analysis. 

## How Eigenfaces Works

Eigenfaces uses PCA to extract the most important features of an image of a face. PCA is a statistical technique that reduces the dimensionality of data by finding the principal components, or eigenvectors, that explain the most variance in the data. In the case of Eigenfaces, the eigenvectors represent the most important facial features.

To create Eigenfaces, a large dataset of images of faces is used to create a training set. Each image is converted into a vector of pixel values, and the vectors are stacked to create a matrix of images. PCA is then applied to the matrix to extract the eigenvectors, which represent the most important facial features. These eigenvectors are known as Eigenfaces.

To recognize a new face, the image is converted into a vector and projected onto the Eigenfaces. The weights of the projections are then used to identify the face by comparing them to the weights of known faces in the training set.

## Applications of Eigenfaces

Eigenfaces has been used in a variety of applications, including facial recognition, object detection, and image compression. It has proven to be a useful tool for identifying faces in surveillance systems, as well as for automating the process of tagging faces in photographs.

## Limitations of Eigenfaces

One limitation of Eigenfaces is that it relies on a large training set of images to extract the most important features. If the training set is not diverse enough, or if the images are of low quality, the method may not be effective.

Another limitation is that Eigenfaces does not take into account the three-dimensional structure of the face. This can lead to inaccuracies in facial recognition, particularly when the face is viewed from different angles or under different lighting conditions.

## Conclusion

Eigenfaces is a powerful technique for facial recognition and image analysis that uses principal component analysis to extract the most important features of a face. While it has limitations, it has proven to be a valuable tool in a variety of applications.
