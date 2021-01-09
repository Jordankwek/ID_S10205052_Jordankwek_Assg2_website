let url = 'https://www.reddit.com/r/MoneySaving/hot.json';

const container= document.getElementById('reddit-post');


fetch(url)
    .then((Response)=>Response.json())
    .then(function(data){
        let post = ``;
        const postArray = data.data.children;
        for (var i=0; i<postArray.length; i++){
            currentPost = postArray[i].data;
            post += `
                <div class="post"> 
                    <h3 class="title">${currentPost.title}</h3>
                    <p class="publisher">By : ${currentPost.author}</p>
                    <a href = ${currentPost.url}>Click to view reddit post</a>
                </div>    
            `;
        }
        container.insertAdjacentHTML('afterbegin',post);
    });