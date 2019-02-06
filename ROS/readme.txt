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


The build folder is the default location of the build space and is where cmake and make are called to configure and build your packages. The devel folder is the default location of the devel space, which is where your executables and libraries go before you install your packages.

