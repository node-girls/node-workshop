# Step 5 - Serving your assets

So you may or may not have noticed that the index page is slightly broken.

![waiting for localhost](readme-images/step5-waiting-for-localhost.png)
![broken image](readme-images/step5-broken-image.png)

You may also have noticed that the page is looking kinda plain.  There's no css being loaded in either!

## **script**, **img** and **link** tags send requests too!

As you know, typing a URL into your browser and hitting enter initiates a request to a server somewhere. Once you load in your index page, something interesting happens.

Note the `<link>` and `<img>` tags in the `index.html` page. Here they're looking for a `main.css` file and a `image.jpg` file. In fact, they send their own requests back to the server, asking for those very files.

So there's actually **three** requests going on here. One is the original browser request, another is a request sent by `<link>`, and the last one is a request sent by `<img>`

#### So how do we deal with these two extra requests in our router?

You *could* write more routes in your router for the `image.jpg` and `main.css` files in the public folder. But what if you had multiple css files, or multiple images?  Writing routes for *all* of them would get very tedious very quickly!

Luckily, you don't need to write specific routes for everything.  You can write a generic route that is able to deal with lots of different **assets**.

So now you're going to add one more route to your router function, and that route should be able to successfully respond with both the `image.jpg` and `main.css` files, plus any other files that might be in public folder.

**Add a final `else` to your `if-else` block and finish the code for the generic route**

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

Hints:

* You'll want to think about how to tell `fs.readFile` which file you're looking for. For the `/` endpoint we were specific about serving index.html every time. This time we want to be able to serve *any* file that was requested.
* All your files are in the `public` folder, so make sure to tell `fs.readFile` where to look!
* When sending back the response, you'll want to alter the information for your header. In the examples so far we have seen:

```js
response.writeHead(200, {"Content-Type": "text/html"});
```

This is perfect if the file we're sending back is an html file.  But if it's any other file, html will need to be replaced by the relevant filetype.

Feel free to refer back to the code-a-long for help but don't copy and paste!

---

## [**next step >>>**](step06.md)
---
## Keywords
* assets
