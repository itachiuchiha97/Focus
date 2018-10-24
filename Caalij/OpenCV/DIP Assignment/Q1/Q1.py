# Write MATLAB/SCILAB/OCTAVE/OpenCV programs to 
# (i) read, display, and write a digital image 
# (ii) resize a digital image 
# (iii) convert color image into gray scale 
# (iv) write the image data (2 D) in an image file.

import numpy as np
import cv2

#to read an image
img = cv2.imread('Q1_img.jpg',0) 

#to display an image
cv2.imshow('new image window',img)
cv2.waitKey(0)
cv2.destroyAllWindows()

#to write an image
cv2.imwrite('Q1_img.png',img)

#to find original dimensions
print(img.shape) 

#to resize a digital image
re_Q1_img = cv2.resize(img,(250,164)) #(h,w)

#to save resized image
cv2.imwrite('re_Q1_img.png',re_Q1_img)

#to convert RGB image to Gray Scale
rgb_image = cv2.imread('Q1_rgb.jpg')
gray_convertor = cv2.cvtColor(rgb_image,cv2.COLOR_BGR2GRAY)

#to write image data in image file
cv2.imwrite('Q1_gray_convert.jpg',gray_convertor)