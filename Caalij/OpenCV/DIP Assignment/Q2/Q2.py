# Write MATLAB/SCILAB/OCTAVE/OpenCV programs to perform image enhancement 
# (i) obtain negative of an image 
# (ii) to show logarithmic transformation 
# (iii) to show power transformation 
# (iv) contrast stretching.


import numpy as np
import cv2
                                        
img = cv2.imread('Q1_gray_convert.jpg')

#image negative
imgNegative = (255 - img)

cv2.imshow('image negative',imgNegative)
cv2.waitKey(0)
cv2.destroyAllWindows()
cv2.imwrite('Q1_gray_to_negative.jpg',imgNegative)

#logarithmic transformation
# logtrans = (np.log1p(img))
# cv2.imwrite('loga_trans.jpg',logtrans)

#gamma transformation
img_g_ori = cv2.imread('spine.tif')

gamma = 1
img_g_3 = np.power(img_g_ori,gamma)

gamma = 0.2
img_g_4 = np.power(img_g_ori,gamma)

gamma = 0.5
img_g_5 = np.power(img_g_ori,gamma)


cv2.imshow('gamma = .5', img_g_5)
cv2.imshow('gamma = 1', img_g_3)
cv2.imshow('gamma = 1.5', img_g_4)
cv2.imshow('gamma = original', img_g_ori)
cv2.waitKey(1000000)
cv2.destroyAllWindows()



