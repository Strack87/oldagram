const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 11
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 151
    }
]

const mainEl = document.getElementById("main")

let html = " "

for (let i = 0; i < posts.length; i++) {
    html += `<section class="post-container">
                <div class="user-info">
                    <div>
                        <img  class="post-avatar" src="${posts[i].avatar}">
                    </div>
                    <div>
                        <h1 class="post-name">${posts[i].name}</h1>
                        <h2  class="post-location">${posts[i].location}</h2>
                    </div>
                </div>
                <div class="img-post">
                    <img class="post-img" src="${posts[i].post}">
                </div>
                <div class="interaction-section">
                    <div class="icons">
                        <img class="icon" src="images/icon-heart.png">
                        <img class="icon" src="images/icon-comment.png">
                        <img class="icon" src="images/icon-dm.png">
                    </div>
                        <div class="likes">
                            <p class="post-likes">${posts[i].likes}</p>
                            <p><b>likes</b></p>
                        </div>
    
                        <div class="comment">
                            <p class="user-name">${posts[i].username}</p>
                            <p class="post-comments">${posts[i].comment}</p></p>
                        </div>
                </div>
            </section>
            <footer>
                
            </footer>
    `
}

mainEl.innerHTML = html;




















