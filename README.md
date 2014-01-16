Setup
=====

If you are on Windows, use `cmd.exe`, MingW, Cygwin, etc. to execute shell commands.

## Node.js

### Windows

Download Node.js and run the __msi__ installer. You can check whether you have 32/64bit by pressing `Win+Pause/Break` (or right-clicking `Computer` in your Start menu and choosing "Properties")

[Download page](http://nodejs.org/download/)

### Mac OS X

If you have hacker proclivities, you probably have `brew` on your computer. Then you would simply

```
$ brew install node
```

If not, you can visit the same downloads page and install it for Mac :)

[Download page](http://nodejs.org/download/)

### Linux

Use your distributions package manager. If your distribution does not have `node`, or you are not even using a distribution, you would know how to install it anyway :-P

```
$ apt-get install node
$ yum install node
```

## Installing Grunt.js

Once you have nodejs installed:

```
$ npm install -g grunt-cli
```

## Setting up the project

### If you have git

```
$ git clone https://github.com/mrak/tdd-in-js.git
$ cd tdd-in-js
$ npm install
```

### If you don't have git

Download the zip file of this repository: [zipfile](https://github.com/mrak/tdd-in-js/archive/master.zip)

Extract the archive to the location of your choosing. You will then have to brave the command line:

```
$ cd <location of extracted directory>
$ npm install
```

### Running the project

In the directory that you cloned with git or extracted to from the zip file run

```
$ grunt watch
```

This will automatically detect any filechanges and run the tests that we will be writing.
