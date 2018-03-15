# Step 8 - Get ready for the CMS project

For the rest of the workshop your job is to build the proper CMS. We have done the front-end code for you - you only need to worry about the server side of the application.

We need to change the `index.html` file. Replace the current content with:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>My first Node.js blog!</title>
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,300,700' rel='stylesheet' type='text/css'>
        <link href="main.css" rel="stylesheet">
    </head>
    <body>
        <header>
            <img class="main-logo" src="./img/logo1.png">
            <h1 class="title">Node Girls</h1>
        </header>
        <main>
            <div class="entry-container">
                <form class="" action="/create/post" method="post" id="the-form">
                    <h2>Write a Blog Post</h2>
                    <textarea name="post" rows="8" cols="40"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>

            <br/>
            <hr/>
            <br/>

            <h2>Recent Posts</h2>

            <div class="post-container"></div>
        </main>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    </body>
</html>
```

## [**Next step >>>**](step09.md)
