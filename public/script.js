
if (document.readyState !== 'loading') {
    ready();
} else {
    document.addEventListener('DOMContentLoaded', ready);
}

function ready () {
    fetch('http://localhost:3000/posts', {
        method: 'get',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
    .then((data) => {

        for (const blogPost in data) {
            const postDiv         = document.createElement('div');
            const postText        = document.createElement('p');
            const thumbnail       = document.createElement('img');
            const postContainer   = document.getElementsByClassName('post-container')[0];

            thumbnail.src = "img/logo2.png";
            thumbnail.className = "thumbnail";
            postText.innerHTML = data[blogPost];
            postDiv.className = "post";

            postDiv.appendChild(thumbnail);
            postDiv.appendChild(postText);
            postContainer.appendChild(postDiv);
        }
    })
    .catch(console.error);
}
