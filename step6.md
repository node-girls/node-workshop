# Step 6 - Sending your blog post to your server

```
git checkout step6
git merge step5
```

So far we have been requesting data from our server.  But we can also *send* data to the server.  

### The `POST` http request method

When sending data to the server, we use the `POST` http request method, instead of `GET`.  To understand the difference, follow the "POST vs GET" link in the keywords section below.

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
* The `action` attribute is the endpoint form data will be sent to.
* The `name` attribute will be used later to reference the data.

When you hit Send, the form will send a `POST` request to the server, using the `/create-post` endpoint.

### Receiving the form data on the server

* Data doesn't come through the server in one go; it flows to the server in a **stream**.  Think of a stream as water flowing from a tap into a bucket.  Your job is to collect this water in the server.

* To be able to collect the data, we need to listen for the 'data' event.  Like this:

```js
request.on('data', function (chunkOfData) {
    // do something
});
```

This above code means "when the 'data' starts to arrive, do something".

When the data arrives we want to collect it.  So let's add this:

```js
var allTheData = '';
request.on('data', function (chunkOfData) {

    allTheData += chunkOfData;
});
```
We are gradually collecting the chunks of data in the `allTheData` variable.

When all the data has come through, an `'end'` event is emitted, so we need to listen for `'end'`, like this:

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

If you look in the console, you will probably see something a bit strange.  This is because html forms send data over the internet as **query strings**.  When we receive the form data in our server, we need to convert it from a query string into an Javascript object, so that we can use it.

Node has a core module called `querystring` that does this conversion for us.

**Require `querystring` at the top of your server.js file**

You will need to use `querystring.parse()` to convert the `allTheData` query string to an object.

**Add the following to your code**

```js
request.on('end', function () {

    var convertedData = querystring.parse(allTheData);
    console.log(convertedData);
    response.end();
});
```

You should now see an object in the console.  The key should be `blogpost`, just like the name attribute in the form.  The value of `blogpost` will be your message!


##[Next >>](step7.md)


### Keywords
* stream
* [`querystring` core module](https://nodejs.org/api/querystring.html)
* [POST vs GET](http://www.w3schools.com/tags/ref_httpmethods.asp)
* [html forms]
