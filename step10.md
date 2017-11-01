# Step 10 - Save your blog posts

## Working with the last few files

We've included a front end JavaScript file in the public folder called `script.js`. We need to include this in the `index.html` so paste this line just before the `</body>` tag:
```html
  <script src="./script.js" type="text/javascript"></script>
```

You'll note that in the `src` folder there's a file called `posts.json`.

JSON is a type of file for structuring data in a readable way. It is also a really popular format for sending data across the web.

JSON is a string representation of a JavaScript object. JSON objects convert really easily to Javascript objects, and vice versa, with `JSON.parse()` and `JSON.stringify()`.

For more details visit the links below in the keywords section.
(If you're not sure about JavaScript objects, have a chat with your mentor and your team.)

If you look at the `posts.json` file, you will see there's already one blog post there. The format is:
```js
{
    [timestamp]: [blog post message]
}
```

We've used a timestamp as the key so that the blog posts are listed in chronological order. Also, it's a record of when the blog post was created.


**Your job now is:**

1. **Save your blog post data into `posts.json`**

2. **Handle the `script.js` request coming into the server**

3. **Retrieve all your posts and send them back to `script.js`**

You can do these tasks in any order, but it might be easier to:
1. first focus on loading the existing blog post in `posts.json`
2. work out how to add new blog posts to `posts.json`

## Loading existing blog posts

`script.js` is trying to load existing posts by making a `GET` request. Look inside `script.js` and see if you can find any useful endpoints. `fs.readFile()` might be useful here.


The code in `script.js` is expecting to receive a JSON object. Remember your http headers!

## Saving data to a file

At the moment, your blog posts are reaching the server, but aren't being saved anywhere.  They just disappear into a cloud of bits and bytes.  We need to find a way to save them so that you can retrieve them later.

To add your own blog posts to `posts.json`, you will need to read the file from the hard drive, add to it, then write it back.  

You'll remember that `fs.readFile()` is the method responsible for reading files from your hard drive.  Well, `fs.writeFile()` is a method that allows you to write data into a file.

```js
fs.writeFile('path/to/file', yourData, (error) {

    // do something after the file has been written
});
```

### Things to remember

* You'll want to make sure that your blog posts are also added with a timestamp. You can get the current unix timestamp using `Date.now()`.

* `fs.writeFile()` automatically overwrites the whole file. Chances are you don't want to lose all your old blog posts, so think about how you can combine `fs.readFile()` and `fs.writeFile()` to prevent overwriting.

* You will need to convert between JSON and a javascript object several times. `JSON.parse()` and `JSON.stringify()` are what you need.

---

If all the steps have gone well, you should have a fully functional CMS!

Lastly, you can commit your final changes and push to github:
```bash
git add .
git commit -m 'enter relevant message'
git push origin master
```


🎉CONGRATULATIONS!!🎉
===


Want more?  Then head over to...  

## [**Stretch goals >>> **](stretch.md)
---
## Keywords
* [JSON](http://www.w3schools.com/js/js_json.asp)
* [JSON.parse()](https://www.w3schools.com/js/js_json_parse.asp) & [JSON.stringify()](https://www.w3schools.com/js/js_json_stringify.asp)
* [timestamp](http://www.w3schools.com/jsref/jsref_now.asp)
* [fs.readFile](https://nodejs.org/docs/latest-v6.x/api/fs.html#fs_fs_readfile_filename_options_callback)
* [fs.writeFile](https://nodejs.org/docs/latest-v6.x/api/fs.html#fs_fs_readfile_filename_options_callback)
