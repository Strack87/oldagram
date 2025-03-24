const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
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
        likes: 152
    }
]

const postAvatarEl = document.getElementById("post-avatar-el")
const postNameEl = document.getElementById("post-name-el")
const postLocationEL = document.getElementById("post-location-el")
const postImageEl = document.getElementById("post-img-el")
const postLikesEl = document.getElementById("post-likes-el")
const postUserNameEl = document.getElementById("user-name-el")
const postCommentEl = document.getElementById("post-comments-el")



const firstAvatarName = posts[2].avatar
const firstPostName = posts[2].name
const firstLocationName = posts[2].location
const firstImageEl = posts[2].post
const firstLikesEl = posts[2].likes
const firstUserNameEl = posts[2].username
const firstCommentEl = posts[2].comment


postAvatarEl.src = firstAvatarName
postNameEl.textContent = firstPostName
postLocationEL.textContent = firstLocationName
postImageEl.src = firstImageEl
postLikesEl.textContent = firstLikesEl
postUserNameEl.textContent = firstUserNameEl
postCommentEl.textContent = firstCommentEl

