$ printenv | grep ROS //to check evironment 

//CREATING CATKIN WORKSPACE
$ mkdir -p ~/catkin_ws/src
$ cd ~/catkin_ws/
$ catkin_make

//if created for first time use
$ source devel/setup.bash

//to verify
$ echo $ROS_PACKAGE_PATH

rospack find (packagename) // to find ros packages from anywhere

//roscd not working?
source /opt/ros/hydro/setup.bash (should fix it)
//$ rosls [locationname[/subdir]]
$ rosls [locationname[/subdir]]

//roscd is part of the rosbash suite. It allows you to change directory (cd) directly to a package or a stack.
$ roscd [locationname[/subdir]]

For a package to be considered a catkin package it must meet a few requirements:

The package must contain a catkin compliant package.xml file.

That package.xml file provides meta information about the package.
The package must contain a CMakeLists.txt which uses catkin.

If it is a catkin metapackage it must have the relevant boilerplate CMakeLists.txt file.

Each package must have its own folder
This means no nested packages nor multiple packages sharing the same directory.
The simplest possible package might have a structure which looks like this:

my_package/
  CMakeLists.txt
  package.xml


  //workspace_folder/        -- WORKSPACE
  src/                   -- SOURCE SPACE
    CMakeLists.txt       -- 'Toplevel' CMake file, provided by catkin
    package_1/
      CMakeLists.txt     -- CMakeLists.txt file for package_1
      package.xml        -- Package manifest for package_1
    ...
    package_n/
      CMakeLists.txt     -- CMakeLists.txt file for package_n
      package.xml        -- Package manifest for package_n

/*

//CREATING packages

first create catin workspace then
$cd ~catkin_ws/src 

then 
$ catkin_create_pkg beginner_tutorials std_msgs rospy roscpp 
//catkin_create_pkg script to create a new package called 'beginner_tutorials' which depends on std_msgs, roscpp, and rospy:
syntax: 
//catkin_create_pkg (package_name) (dependency_1) (dependency_2)
NOTE: since we're in catkin_ws it infers info from ws provided at beginning, ex: creates a new package.xml and CMake.txt
 using dependencies from top level

Now build the whole package again from workspace!!! //     IMPORTANT
//Source the file
using
$source ~/catkin_ws/devel/setup.bash

*/

//TO CHECK PACKAGE DEPENDENCIES

$rospack depends1 (packagename) // NOTE: this only gives dependencies created during build of that package only
$rospack depends (packagename) // list out every dependency
$rospack 

# In a catkin workspace
$ catkin_make
$ catkin_make install  # (optionally)
The above commands will build any catkin projects found in the src folder. This follows the recommendations set by REP128. If your source code is in a different place, say my_src then you would call catkin_make like this:

