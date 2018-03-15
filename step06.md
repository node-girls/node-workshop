# Step 6 - Sending your blog post to your server

So far we have been requesting data from our server. But we can also *send* data to the server.  

### The `POST` http request method

When sending data to the server, we use the `POST` http request method, instead of `GET`. To understand the difference, follow the "POST vs GET" link in the keywords section below.

Let's try `POST`ing some text to the server.

**Add the `<form>` below to the body of `index.html`.**

```html
<h3>Create a blog post</h3>
<form action="/create-post" method="POST">
    <textarea name="blogpost" rows="10" cols="14">

    </textarea>
    <button type="submit">Send</button>
</form>
```

* This form has a text area and a Send button.
* The `action` attribute is the endpoint where the form data will be sent.
* The `name` attribute will be used later to reference the data.

When you hit Send, the form will send a `POST` request to the server, using the `/create-post` endpoint.

### Receiving the form data on the server

* Data doesn't come through the server in one go; it flows to the server in a **stream**.  Think of a stream as water flowing from a tap into a bucket. Your job is to collect this water in the server.

* To be able to collect the data, we need to listen for the 'data' event. Like this:

```js
request.on('data', function (chunkOfData) {
    // do something
});
```

The above code means "when the 'data' starts to arrive, do something".

When the data arrives we want to collect it. So let's add this:

```js
var allTheData = '';
request.on('data', function (chunkOfData) {

    allTheData += chunkOfData;
});
```
We are gradually collecting the chunks of data in the `allTheData` variable.

When all the data has come through, an `'end'` event is emitted, so we need to listen for the `'end'` event, like this:

```js
var allTheData = '';
request.on('data', function (chunkOfData) {

    allTheData += chunkOfData;
});

request.on('end', function () {

    console.log(allTheData);
    response.end();
});
```

(We still need `response.end()` to finish, even though we're not sending anything back to the client here.)

### Query strings

If you look at the console, you will probably see something a bit strange. This is because html forms send data over the internet as **query strings**. When we receive the form data in our server, we need to convert it from a query string into a JavaScript object, so that we can use it.

Node has a core module called `querystring` that does this conversion for us.

**Require `querystring` at the top of your server.js file like this:**

```js
var querystring = require('querystring');
```

You will need to use `querystring.parse()` to convert the `allTheData` query string to an object.

**Add the following to your code**

```js
request.on('end', function () {

    var convertedData = querystring.parse(allTheData);
    console.log(convertedData);
    response.end();
});
```

You should now see an object in the console. The key should be `blogpost`, just like the name attribute in the form. The value of `blogpost` will be your message!


### Redirecting your page

So you may have noticed that when you hit Send on the form, the browser tries to follow the link to '/create-post' and load a non-existent page. Awkward.

There's an easy fix for this. In the response, you need to let the browser know that you want it to reload the same page, and not try to go to fake page '/create-post'.

You can set this information in the status code response header.

Look at one of the headers you've set already:

```js
response.writeHead(200, {"Content-Type": "text/html"});
```

Instead of a "Content-Type" header, this time you will need a **"Location"** response header in your object. The value of the object should be the endpoint you want the page to redirect to.
Find more information about Location [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Location)

You'll also want to use a **different status code from 200**. Look at a list of [status codes here](https://httpstatuses.com/) and have an experiment.

---

## [**Next step >>>**](step07.md)

---
### Keywords
* [stream](https://medium.freecodecamp.org/node-js-streams-everything-you-need-to-know-c9141306be93)
* [`querystring` core module](https://nodejs.org/api/querystring.html)
* [POST vs GET](http://www.w3schools.com/tags/ref_httpmethods.asp)
* [html forms](https://www.w3schools.com/html/html_forms.asp)
