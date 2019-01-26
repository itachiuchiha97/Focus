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
=>* MODULARITY; Even is one node crashes, system can still work
    providesrobust methods to resume operation even if any sensor/motors are dead

=>CONCURRENT RESOURCE HANDLING:
    Camera ke data se, image processing and face detection and motion detection sabkuch karna hai
        we can do this using ROS topics from ROS drivers
    Any number of ROS nodes can subscribe to image message from ROS Camera driver

=> ROBOT modelling is performed using URDF, (XML based description)
        //solidworks has a pluging for this : UNIVERSAL ROBOT DEFINITION FORMAT.


ROS FILESYSTEM:
    meta-package
        PACKAGES
            packagemanifest, messages, services, codes, misc


packagemanifest - has author, license, dependencies etc
