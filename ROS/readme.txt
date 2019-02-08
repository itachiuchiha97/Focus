ROS is an open source, meta-operating system (functions/handles tasks like OS), provides libraries and tools to help create robot apps.
It provides hardware abstraction, device drivers, libraries, visualizers, message-passing, package management etc..

ROS = plumbing + tools + capabilites + ecosystem

plumbing - publish/subscribe message infra
tools - for config, store, debug, visua etc
capabilites - uses libraries
ecosystem - large community of users

PACKAGES are basic building blocks of ROS
=>has integrated SLAM (Simultaneous Localization and Mapping)
    and AMCL (Adaptive Monte Carlo Localization), tools like Gazebo
=>message passing middlware allows comm between diff nodes C++, C, Java, Python supported



=> ROBOT modelling is performed using URDF, (XML based description)
        //solidworks has a pluging for this : UNIVERSAL ROBOT DEFINITION FORMAT.


ROS FILESYSTEM:
    meta-package
        PACKAGES
            packagemanifest, messages, services, codes, misc


packagemanifest - has author, license, dependencies etc
message - type of info sent from one ROS process to other
services - kind of request/response comm between process // inside srv folder


The build folder is the default location of the build space and is where cmake and make are called to configure and build your packages. The devel folder is the default location of the devel space, which is where your executables and libraries go before you install your packages.ro


#ROSCORE 

roscore is a collection of nodes and programs that are pre-requisites of a ROS-based system. You must have a roscore running in order for ROS nodes to communicate. It is launched using the roscore command.

NOTE: If you use roslaunch, it will automatically start roscore if it detects that it is not already running.

roscore will start up:

a ROS Master
a ROS Parameter Server
a rosout logging node

we can specify a port to run the master on:
$roscore -p 1234

#GRAPH CONCEPTS
NOdes: A node is an executable that uses ROS to communicate with other nodes.
Messages: ROS data type used when subscribing or publishing to a topic.
Topics: Nodes can publish messages to a topic as well as subscribe to a topic to receive messages.
Master: Name service for ROS (i.e. helps nodes find each other)
rosout: ROS equivalent of stdout/stderr
roscore: Master + rosout + parameter server (parameter server will be introduced later)

NOTE: if there's dependency bakchodi reinstall packages!

rosnode list // gives out rosout this is always running
rosrun packageName // runs a node from package directly // eg rosrun turtlesim turasdasd
Also the above command initiates a new node which can be seen using rosnodel ist

Note: if we clean the turlte using cntrl+c then it is not cleared from node
use $rosnode clean // to remove unwanted nodes

$rosnode kill //to kill a node


rostopic contains the rostopic command-line tool for displaying 
debug information about ROS Topics, including publishers, 
subscribers, publishing rate, and ROS Messages. 
It also contains an experimental Python library for 
getting information about and interacting with topics dynamically. 
This library is for internal-use only as the code API may change, 
though it does provide examples of how to implement dynamic subscription 
and publication behaviors in ROS.


$ rosrun rqt_graph rqt_graph
//A GUI tool for visualizing topics and nodes

$rostopic echo [topic]
//To see topic

rostopic type returns the message type of any topic being published.

Usage:
rostopic type [topic]

$ rosmsg show geometry_msgs/Twist
//gives details of msg

This command will publish messages to a given topic:
$rostopic pub

EXAMPLE:

$ rostopic pub -1 /turtle1/command_velocity turtlesim/Velocity  -- 2.0  1.8

This command will publish messages to a given topic:

rostopic pub
This option (dash-one) causes rostopic to only publish one message then exit:

 -1 
This is the name of the topic to publish to:

/turtle1/cmd_vel
This is the message type to use when publishing to the topic:

geometry_msgs/Twist
This option (double-dash) tells the option parser that none of the following arguments is an option. This is required in cases where your arguments have a leading dash -, like negative numbers.

--
As noted before, a geometry_msgs/Twist msg has two vectors of three floating point elements each: linear and angular. In this case, '[2.0, 0.0, 0.0]' becomes the linear value with x=2.0, y=0.0, and z=0.0, and '[0.0, 0.0, 1.8]' is the angular value with x=0.0, y=0.0, and z=1.8. These arguments are actually in YAML syntax, which is described more in the YAML command line documentation.

'[2.0, 0.0, 0.0]' '[0.0, 0.0, 1.8]' 