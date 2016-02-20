# Step 8 - Get ready for the cms project

```
git checkout step8
git merge step7
```

For the rest of the workshop your job is to build the proper cms. We have done frontend code for you, you only need to worry about the server side of the application. 

Let's clean up unnecessary files.

**Delete the public folder**

**Remove following endpoints from handler.js**:
- `/node`
- `/girls`


Your handler.js should look something like this:

```js

function handler (request, response) {

    var endpoint = request.url;
    console.log(endpoint);

    if (endpoint === '/') {

        var pathToIndex = __dirname + '/../public/index.html';

        fs.readFile(pathToIndex, function (error, file) {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(file);
            response.end();
        });
    } else if (endpoint === '/create-post') {

        message = "";
        
        request.on("data", function(data) {
            message += data;
        });

        request.on("end", function () {
            message = querystring.parse(message);
            console.log(message.blogpost);
            response.end();
        });

    } else {
        var pathToFile = __dirname + '/../public' + endpoint;
        var fileExtensionArray = endpoint.split('.');
        var fileExtension = fileExtensionArray[1];

        fs.readFile(pathToFile, function (error, file) {

            response.writeHead(200, { "Content-Type": "text/" + fileExtension });
            response.write(file);
            response.end();
        });
    }
}

```

**Are you sure that you have deleted the public folder?**

If yes, then commit your changes:

```bash
git add .
git commit -m 'enter relevant message'
git push origin step8
```


## [**Next step >>>**](step9.md)

