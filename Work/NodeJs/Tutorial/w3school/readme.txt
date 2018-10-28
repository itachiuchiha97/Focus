w3schools online wala tutorial series

Here is how Node.js handles a file request:

Sends the task to the computer's file system.
Ready to handle the next request.
When the file system has opened and read the file, the server returns the content to the client.


What Can Node.js Do?
Node.js can generate dynamic page content
Node.js can create, open, read, write, delete, and close files on the server
Node.js can collect form data
Node.js can add, delete, modify data in your database

What is a Node.js File?
Node.js files contain tasks that will be executed on certain events
A typical event is someone trying to access a port on the server
Node.js files must be initiated on the server before having any effect
Node.js files have extension ".js"

What is a Module in Node.js?
Consider modules to be the same as JavaScript libraries.

A set of functions you want to include in your application.

Create Your Own Modules
You can create your own modules, and easily include them in your applications.

The following example creates a module that returns a date and time object:

Example
Create a module that returns the current date and time:

exports.myDateTime = function () {
    return Date();
};
Use the exports keyword to make properties and methods available outside the module file.

Node.js as a File Server
The Node.js file system module allows you to work with the file system on your computer.

To include the File System module, use the require() method:

var fs = require('fs');



Create Files
The File System module has methods for creating new files:

fs.appendFile()
fs.open()
fs.writeFile()
The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:



The Built-in URL Module
The URL module splits up a web address into readable parts.

