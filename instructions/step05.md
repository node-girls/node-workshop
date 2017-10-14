# Step 5 - Serving your assets

So you may or may not have noticed that the index page is slightly broken.

![waiting for localhost](readme-images/step5-waiting-for-localhost.png)
![broken image](readme-images/step5-broken-image.png)

You may also have noticed that the page is looking kinda plain.  There's no CSS being loaded in either!

## **script**, **img** and **link** tags send requests too!

As you know, typing a URL into your browser and hitting enter initiates a request to a server somewhere. Once you load in your index page, something interesting happens.

Note the `<link>` and `<img>` tags in the `index.html` page. Here they're looking for a `main.css` file and a `img/mage.jpg` file. In fact, those tags send their own requests back to the server, asking for those very files.

So there's actually **three** requests going on here. One is the original browser request, on the `/` endpoint, another is a request sent by `<link>`, and the last one is a request sent by `<img>`

#### So how do we deal with these two extra requests in our handler?

You *could* write more routes in your handler for the `image.jpg` and `main.css` files in the public folder. But what if you had multiple CSS files, or multiple images?  Writing routes for *all* of them would get very tedious very quickly!

Luckily, you don't need to write specific routes for everything.  You can write a generic route that is able to deal with lots of different **assets**.

So now you're going to add one more route to your handler function, and that route should be able to successfully respond with both the `image.jpg` and `main.css` files, plus any other files that might be in public folder.

**Add a final `else` to your `if-else` block**
**Finish the code for the generic route**

```js
if (endpoint === '/') {

    // ...
} else if (endpoint === '/node') {

    //...
} else if (endpoint === '/girls') {

    //...
} else {

    // TODO - write your generic endpoint code here
}
```

Here's what you want to achieve:


* For our `/` endpoint, we tell `fs.readFile` to read specifically the `index.html` file, by passing it `__dirname + /public/index.html`.  The "/public" part is there because the `index.html` file is in the `public` folder. In the generic endpoint, we won't know in advance which file we need.  How can we write the generic endpoint in a way that work with any file requested?

* All your files are in the `public` folder, so make sure to tell `fs.readFile` where to look!  You can do this by concatenating (combining) the `__dirname` with the string "public", using the `+` sign.  You may need to add an extra forward-slash ("/") to combine them correctly. You can always use `console.log` to look at the result of your `__dirname` combinations.

* When sending back the response, you'll want to alter the information for your header. In the examples so far we have seen:

```js
response.writeHead(200, {"Content-Type": "text/html"});
```

This is perfect if the file we're sending back is an html file.  But if it's any other file, "html" will need to be replaced by the relevant filetype.  Think about how you can extract the filetype from the endpoint, and use it to replace the "html" in the header above.

JavaScript's [`split` function](https://www.w3schools.com/jsref/jsref_split.asp) is your friend :)

---

## [**next step >>>**](step06.md)
---
## Keywords
* assets
