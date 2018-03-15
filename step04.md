# Step 4 - Request/responses

At the moment our server only does one thing. When it receives any requests, it sends back the same response - your message.

**If you don't believe it, try typing localhost:3000/chocolate and see what happens**

We can make the server send different responses depending on the request it receives.

### What is an endpoint?

An endpoint is the part of the url which comes after  `/`, in above case it's `/chocolate`.

There is a particular method on the request object that allows you to see the endpoint, which was put in the url.

**Inside your router function, at the top, add the following:**

```js
var endpoint = request.url;
console.log(endpoint);

```

All requests use one of the HTTP methods. The main ones are: `GET, POST, PUT, DELETE`.  


### Check which method was used for your request.

**Type inside your router function at the top :**

```js
var method = request.method;
console.log(method);

```

## 1. Create your own endpoints and send different responses.

Now, you know how to get the endpoint using `request.url`. Change your router function so that it sends one message when requested url is `/node` and another one when requested url is `/girls`.

Good luck :) Feel free to discuss it with your team or mentor.

## 2. Serve index.html

Now you know how to send the message. How do you send a whole html page?

You will see that we have a `public` folder with `index.html` and an image.

To be able to send any file from the server we need a core node module called `fs` - **file system.** 
`Fs` allows you to **read and write** to and from your hard drive. Before we can send our `index.html`, our server first needs to read it.

One of the `fs` methods is `fs.readFile('path to the file', callback);`. You can read more about `fs` [here](https://nodejs.org/dist/latest-v6.x/docs/api/fs.html#fs_fs_readfile_file_options_callback).


Let's try it.

**Use `fs` to read in `index.html`**

**Require `fs` module at the top of your file**

```js
var http = require('http');
var fs = require('fs');

function router (request, response) {

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


`__dirname` is a Node global object that gives you a path to current working directory. We can use this instead of writing the whole path. 

---

## [**next step >>>**](step05.md)

---
### Keywords:
- http methods
- fs
- fs.readFile()
- [__dirname](https://nodejs.org/docs/latest/api/globals.html#globals_dirname)
