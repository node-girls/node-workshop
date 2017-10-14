# Step 2 - Building the server
The first thing we need to do is build our server. You will always need to build a server when writing back-end code.

### What is a server?
* Servers are computer programs that receive requests from other programs, the *clients* and send back a response e.g share data, information or hardware and software resources.

### ...and what is a server in plain English?

A server is a computer program.  Its job is to send and receive data.

Let's take a website for example.  A website is just a collection of HTML and CSS files, images, maybe some javascript files. When you type a website address in your browser's address bar, the browser (client) sends a **request** to the server that lives at that address.  The browser asks the server to give it the files it needs to display the website properly.


![Server flow](https://files.gitter.im/heron2014/FiiK/server.png)

### Time to code!!!
---

## 1. Create a `server.js` file
Let's build our server! Before we do anything, let's create a new file called `server.js`. This is where all our server code is going to live.

## 2. `require` the `http` core module

For our server, we are going to use a core Node module called `http`.
If you need to know what a 'module' is, have a look at our cheatsheet here.

`http` is a useful core module - it helps us process our server requests and responses. Just like other modules, `http` is a big JavaScript object containing properties and methods (functions) that we can use.

The official reference to the `http` module can be found on the Node.js website. [here](https://nodejs.org/dist/latest-v8.x/docs/api/http.html).


In Node, you access modules in your project by 'requiring' them.  Inside `server.js`, write the following:

```js
const http = require('http');
```
Now you will have access to Node's `http` module.

## 3. Initialise the server

To build our server, we will use a specific method, `http.createServer`.  

Add the following line to `server.js`:
```js
const http = require('http');

const server = http.createServer();

```

## 4. Start 'listening' for potential requests

One more step left, we need to set a **port** for our server to listen to.  Think of a port as a door number; any requests that come to the server will come via that door.

We use the `server.listen` method to do this.  It will take two arguments, a **port** and a callback function.

```js
const http = require('http');

const server = http.createServer();

server.listen(3000, function () {
    console.log("Server is listening on port 3000.  Ready to accept requests!");
});

```
## 5. Switch the server on!

You've built your server, but it isn't running yet.  We will use the `node` keyword to run the server file.

To do so, type this command in your command line:
```
node server.js
```

If you see this...

![success](https://raw.githubusercontent.com/node-girls/node-workshop/master/readme-images/step2-server02.png)


### Congratulations!
You have built yourself a server!
---
## Commit your changes

```bash
git add .
git commit -m 'enter relevant message'
```

## [**next step** >>>](step03.md)
---
## Keywords
* server
* client
* request
* response
* require
* module
* method
* port
