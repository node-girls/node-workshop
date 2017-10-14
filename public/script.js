$(document).ready(function() {
    $.ajax({
        url: '/posts',
        dataType: 'json',
        success: function(data) {

            for (const blogPost in data) {
                const postDiv         = document.createElement('div');
                const postText        = document.createElement('p');
                const thumbnail       = document.createElement('img');
                const postContainer   = document.getElementsByClassName('post-container')[0];

                thumbnail.src = "./img/logo2.png";
                thumbnail.className = "thumbnail";
                postText.innerHTML = data[blogPost];
                postDiv.className = "post";

                postDiv.appendChild(thumbnail);
                postDiv.appendChild(postText);
                postContainer.appendChild(postDiv);
                
            }
        },
        error: function(error){
            console.log(error);
        }
    });
});
