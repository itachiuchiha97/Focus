console.log('Starting app.js')

const fs = require('fs')
const nt = require('./notes')
const yrgs = require('yargs')
const _ = require('lodash')

const argv = yrgs.argv

console.log(process.argv) //arguments vector or argu array

var cmd = process.argv[2] // considers list of processes as parameters and extracts (it helps in showing project progression)
console.log(cmd)


