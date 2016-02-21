# Step 10 - Save your blog posts

```bash
git checkout step10
git merge step9
 ```
---

There's a new file in the public folder, `script.js`.  Don't worry about what all the code means, just know that it's responsible for sending a request to `GET` old blogposts and display them on the page underneath "Recent Posts".  

You probably want to handle the request from that `script.js` file in your server code...


## Saving data to a file

At the moment, your blog posts are reaching the server, but aren't being saved anywhere.  They just disappear into a cloud of bits and bytes.  We need to find a way to save them so that you can retrieve them later.

You'll remember that `fs.readFile()` is the method responsible for reading files from your hard drive.  Well, `fs.writeFile()` is a method that allows you to write data into a file.

```js
fs.writeFile('path/to/file', yourData, (error) {

    // do something after the file has been written
});
```

You'll note that in the `lib` folder there's a new file called `posts.json`.  JSON is a type of file for structuring data in a readable way.  JSON objects convert really easily to Javascript objects, and vice versa, with `JSON.parse()` and `JSON.stringify()`.  

(If you're not sure about Javascript objects, have a chat with your mentor and your team.)

**Modify your server code to:**
1. **Save your blogpost data into `posts.json`**
2. **Handle the `script.js` request**
3. **Retrieve all your posts and send them back to `script.js`**

If all goes well, you should have a fully functional CMS!


🎉CONGRATULATIONS!!🎉

===

---
Want more?  Then head over to...  

## [**Stretch goals >>> **](stretch.md)
---
## Keywords
* [JSON](http://www.w3schools.com/js/js_json.asp)
