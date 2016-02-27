# Step 2 - Building the server

```bash
git checkout step2
git merge step1
```

### What is a server?
* Servers are computer programs that receive requests from other programs, the *clients* and send back a response e.g share data, information or hardware and software resources.

### ...and what is a server in plain English?

* A server is a computer program.  Its job is to send and receive data.

* Let's take a website for example.  A website is just a collection of HTML and CSS files, images, maybe some javascript files.

* When you type a website address in your browser's address bar, the browser (client) sends a **request** to the server that lives at that address.

* The browser asks the server to give it the files it needs to display the website properly.


![Server flow](https://files.gitter.im/heron2014/FiiK/server.png)


## 1. Understanding 'modules'

### What's a module?
Modules are just small programs you can integrate with the bigger program you are writing.

Modules would be listed in your `package.json`.

There are 3 types of modules.

#### a. Node core module
'Core' Node modules come with Node automatically.
Examples of common core modules are `http`, `fs` and `path`.

There is a list of all the core modules and their methods on the [Node.js website](https://nodejs.org/dist/latest-v4.x/docs/api/).

#### b. Node 3rd-party module
There are thousands of open-source, 3rd-party Node modules that other clever people have written. You can download useful 3rd-party modules (also known as "packages") from the [Node Package Manager](http://npmjs.com).

The NPM website says:

> npm makes it easy for JavaScript developers to share and reuse code, and it makes it easy to update the code that you're sharing.

The npm command-line tool comes automatically with Node.  You can install 3rd-party packages on the command line, so no need to download from the npm website or anything.

#### c. Modules you've written

Also called a module, but slightly different from the first two.

These are modules you write yourself in your code.  We will talk about this later on in step 7.

### Time to code!!!
---

## 2. `require` the `http` core module

For our server, we are going to use a core Node module called `http`.

`http` is a useful core module - it helps us process our server requests and responses. Just like other modules, `http` is a big javascript object containing properties and methods (functions) that we can use.

The official reference to the `http` module can be found on the Node.js website [here](https://nodejs.org/dist/latest-v4.x/docs/api/http.html).




**Create a file called `server.js`**

**Inside `server.js`, write the following:**

```js
var http = require('http');
```
In Node, you access modules in your project by 'requiring' them.

## 3. Initialise the server

To build our server, we will use a specific method, `http.createServer`.  

**Add the following line to `server.js`:**
```js
var http = require('http');

var server = http.createServer();

```

## 4. Start 'listening' for potential requests

One more step left, we need to set a **port** for our server to listen to.  Think of a port as a door number; any requests that come to the server will come via that door.

We use the `server.listen` method to do this.  It will take two arguments, a **port** and a callback function.

```js
var http = require('http');

var server = http.createServer();

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

![success](readme-images/step2-server02.png)


### congratulations!
You have built yourself a server!
---
## Commit your changes

```bash
git add .
git commit -m 'enter relevant message'
git push origin step2
```

## [**next step** >>>](step3.md)
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
