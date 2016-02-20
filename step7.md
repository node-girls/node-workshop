# Step 7 - reorganising your project

```
git checkout step7
git merge step6
```

Let's make the code a bit more structured and organised.  The best way to do that is:

* split code up into separate files
* organise code into different folders

`server.js` has got quite messy now.  It's good practice to separate routes and handlers into their own files.

### Basic folder structure

**public** --> all client-side assets (e.g. html, css, images etc)
* index.html
* main.css
* image.jpg
* favicon.ico

**src** --> `src` is short for 'source'. This will contain the server-side code that deals with logic
* handlers.js (we will create this)

`server.js` will remain in the **root**.

**Create a folder called `src`**

* create src/handler.js
* paste handler function and related dependencies into handler.js


## Making your own modules!

Way back in step 2, we mentioned there were three types of module in Node.  You are about to make the third type of module - your own one!

In this context, a module is some code you've written in its own Javascript file.  You can share this code with other files.  This is handy, because it means we can split big, messy files into smaller ones.

To connect one file with another, we use the same `require()` as with core modules.  The only difference is we instead of:
```js
var coreModule = require('nameOfModule');
```

we do this:
```js
var myModule = require('path/to/my/file');
```

**Require your handler.js file into your server.js file**

You should get an error:
```bash
TypeError: listener must be a function
```
![require error](readme-images/step7-require-error.png)

This is because we haven't "exported" the code inside `handler.js`.  It isn't available to us yet.  Let's do that now.

**In `handler.js`, you will need to add the following**

```js
module.exports = handler;
```

`module.exports` magically makes our handler function available to be required in other files.

Try running the server again and reloading the page.

## Fixing your broken paths

You should see a very broken webpage now.  There's a reason for that!

When the handler function was in `server.js`, the paths to our assets (html, css etc) saved in the `pathToFile` and `pathToIndex` variables were correct.  Now that the handler function has moved inside the `src` folder, we need to update the paths to our assets to make sure they point to the right location.

We can use **relative paths**. `..` means "go up one level to the folder above".  `.` means "look inside the current folder".  For example: '../myComputer/documents' means "go up one folder, then go to 'myComputer', then go to 'documents'".

Remember that `__dirname` gives us the current directory.  We can combine `__dirname`, the dots and any folder names to point to the correct location.

See if you can do this by yourself.  Work with your team if you're struggling.


## More modularisation!!!

You could split `handler.js` even further, by separating your routes from your handler.  We will not do this now.


## Keywords
* root
* relative paths
* [module.exports](http://www.sitepoint.com/understanding-module-exports-exports-node-js/)
