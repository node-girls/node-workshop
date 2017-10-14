# Step 4 - Requests and responses

At the moment our server only does one thing. When it receives any requests, it sends back the same response - your message.

**If you don't believe it, try typing localhost:3000/chocolate and see what happens**

However by making use of endpoints, we can make the server send different responses for different requests. This concept is called routing.

### What is an endpoint?

An endpoint is the part of the url which comes after  `/`, in above case it's `/chocolate`.  It's the URL to which you send a request.

There is a particular method on the `request` object that allows you to see the endpoint, which was put in the url: `request.url`.

Inside your handler function, at the top, add the following:

```js
const endpoint = request.url;
console.log(endpoint);

```

All requests use one of the HTTP methods. The main ones are: `GET, POST, PUT, DELETE`.  


### Check which method was used for your request.
You can find out which HTTP method an incoming request is using by looking inside `request.method`.  Let's use `console.log` to display the contents of `request.method` in your terminal window.

**Type inside your handler function at the top :**

```js
const method = request.method;
console.log("HTTP method: ", method); // adding "HTTP method" will make it a bit easier to read in the terminal :)
```
Now have a look in your terminal window, and you should see that the `GET` HTTP method was used.

## 1. Create your own endpoints and send different responses.

Now, you know how to get the endpoint using `request.url`. Change your handler function so that it sends one message when the requested url (endpoint) is `/node` and another one when the requested url is `/girls`.

Good luck :) Feel free to discuss it with your team or mentor.

## 2. Serve index.html

Now you know how to send the message. How do you send a whole HTML page?

You will see that we have a `public` folder with `index.html` and an `img` folder with `image.jpg` inside it.

To be able to send any file from the server we need a core node module called `fs` - **file system.**
`fs` allows you to **read and write** to and from your hard drive. Before we can send our `index.html`, our server first needs to read it.

One of the `fs` methods is `fs.readFile('path to the file', callback);`. You can read more about `fs` [here](https://nodejs.org/dist/latest-v6.x/docs/api/fs.html#fs_fs_readfile_file_options_callback).


Let's try it.

**Use `fs` to read in `index.html`**

**Require `fs` module at the top of your file**

```js
const http = require('http');
const fs = require('fs');

function handler (request, response) {

  if (endpoint === "/") {
    response.writeHead(200, {"Content-Type": "text/html"});

    fs.readFile(__dirname + '/public/index.html', function(error, file) {
      if (error) {
        console.log(error);
        return;
      }

      response.end(file);
    });
  }
}
```

`__dirname` is a Node global object that gives you a path to current working directory.  (Note there are *two* underscores in `__dirname`!) We can use this instead of writing the whole path. If you're curious, you can do `console.log(__dirname)` to see what it looks like.

Great!  So we are able to send a copy of the `index.html` file when requests come in on the `/` endpoint.  In the next step, we will take a look at sending other types of files too.

---
## [**next step >>>**](step05.md)

---
### Keywords:
- http methods
- fs
- fs.readFile()
- [__dirname](https://nodejs.org/docs/latest/api/globals.html#globals_dirname)
