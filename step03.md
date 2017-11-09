# Step 3 - Communicate with the server

### What is a handler function?

When a request reaches the server, we need a way of responding to it. In comes the **handler** function. The handler function is just a function which receives requests and handles them, hence the name.

The handler function always takes a `request` and `response` object and sends the response back to the client along with some information. You can decide what to send back in your response.

```js
function handler (request, response) {
  // deal with request and sending response
}
```

## 1. Create your own handler function.

We are now making a handler function with a custom message in our response. You can write any message you want.

**Add the following code to `server.js`**


```js
var http = require('http');

var message = 'I am so happy to be part of the Node Girls workshop!';

function handler (request, response) {

}


var server = http.createServer();

server.listen(3000, function () {

    console.log("Server is listening on port 3000. Ready to accept requests!");
});


```

## 2. Tell your handler function what to do

We want our handler function to send our message in a response. To do that we will use one of the method of `response` object, which is: ```response.write()```. You can find more about `response.write()` [here](https://nodejs.org/dist/latest-v6.x/docs/api/http.html#http_response_write_chunk_encoding_callback)

Every response has a header, which contains information about the response. We can add information to the header using `response.writeHead()`. The `writeHead` takes 2 parameters: status code and header object.

**Add these line to the handler function**

```js
function handler (request, response) {

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(message); //response body
  response.end(); // finish response
}

```

## 3. Pass the handler function to your server

The createServer() method takes a handler function as an argument.

**Pass your handler function to createServer method**

```js
var server = http.createServer(handler);

```

## 4. Rerun your server and go to your favourite browser

**Rerun your server by typing again**


```
node server.js
```

**Type in your browser** `localhost:3000`

If you see your message in the browser, **congratulations** you just sent your first response from the server.

---
## Commit your changes

```bash
git add .
git commit -m 'enter relevant message'
```

## [**next step >>>**](step04.md)
---
### Keywords:
* ['status code'](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/)
* ['response.writeHead()'](https://nodejs.org/api/http.html#http_response_writehead_statuscode_statusmessage_headers)
