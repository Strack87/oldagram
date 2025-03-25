# Oldagram

## Overview
Oldagram is a simple social media web application that mimics the functionality of a photo-sharing platform. Users can view posts from famous historical figures, including their avatars, locations, comments, and likes. The app dynamically generates posts using JavaScript and features a fixed header for easy navigation.

---

## Features

### 1. **Fixed Header**
The header remains fixed at the top of the page, ensuring that users can always see the logo and user avatar while scrolling through the posts.

**Code Example**:
```html
<header class="header">
    <div>
        <img class="logo" src="images/logo.png" alt="Logo">
    </div>
    <div>
        <img class="avatar" src="images/user-avatar.png" alt="User Avatar">
    </div>
</header>
```

**CSS for Fixed Header**:
```css
header {
    height: 67px;
    width: 375px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #C6C6C6;
    top: 0;
    position: fixed;
    overflow: visible;
    background-color: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
```

---

### 2. **Dynamic Post Generation**
Posts are dynamically generated using JavaScript. Each post includes the user's avatar, name, location, post image, likes, and comments.

**Code Example**:
```javascript
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
    }
];

const mainEl = document.getElementById("main");

let html = "";

for (let i = 0; i < posts.length; i++) {
    html += `<section class="post-container">
                <div class="user-info">
                    <div>
                        <img class="post-avatar" src="${posts[i].avatar}" alt="${posts[i].name}'s avatar">
                    </div>
                    <div>
                        <h1 class="post-name">${posts[i].name}</h1>
                        <h2 class="post-location">${posts[i].location}</h2>
                    </div>
                </div>
                <div class="img-post">
                    <img class="post-img" src="${posts[i].post}" alt="Post by ${posts[i].name}">
                </div>
                <div class="interaction-section">
                    <div class="icons">
                        <img class="icon" src="images/icon-heart.png" alt="Like icon">
                        <img class="icon" src="images/icon-comment.png" alt="Comment icon">
                        <img class="icon" src="images/icon-dm.png" alt="Direct message icon">
                    </div>
                    <div class="likes">
                        <p class="post-likes">${posts[i].likes}</p>
                        <p><b>likes</b></p>
                    </div>
                    <div class="comment">
                        <p class="user-name">${posts[i].username}</p>
                        <p class="post-comments">${posts[i].comment}</p>
                    </div>
                </div>
            </section>`;
}

mainEl.innerHTML = html;
```

---

### 3. **CSS Styling**
The app is styled using CSS to ensure a clean and responsive design. Below are some key styles used in the project:

**General Styles**:
```css
body {
    font-family: "Source Sans 3", sans-serif;
    width: 375px;
    margin: auto;
    border-radius: 10px;
    position: inherit;
    margin-top: 68px;
}

main {
    display: flex;
    flex-direction: column;
}

footer {
    height: 28px;
    background-color: #F5F5F5;
}
```

**Post Layout**:
```css
.user-info {
    display: inline-flex;
    flex-direction: row;
    justify-content: baseline;
    padding: 10px;
}

.interaction-section {
    padding: 10px 16px 19px 10px;
}

.comment {
    display: flex;
    flex-direction: row;
    overflow: auto;
}

.likes {
    display: flex;
    flex-direction: row;
}
```

**Images**:
```css
.logo,
.avatar {
    padding: 16px;
}

.logo {
    width: 127px;
}

.avatar {
    width: 37px;
    border-radius: 50%;
}

.post-avatar {
    padding-right: 5px;
    width: 34px;
    border-radius: 50%;
}

.post-img {
    width: 100%;
}

.icon {
    width: 23.3px;
    padding-right: 20px;
}
```

**Typography**:
```css
h1 {
    font-size: 13px;
    margin: 0;
}

h2 {
    margin: 0;
    font-size: 12px;
    font-weight: 500;
}

p {
    margin: 0px;
    padding-top: 12px;
    padding-right: 5px;
}

.post-likes,
.user-name,
h1 {
    font-weight: 900;
}
```

---

## How to Run the Project
1. Clone the repository to your local machine.
2. Open the `index.html` file in your browser.
3. Enjoy scrolling through the dynamically generated posts!

---

## Future Enhancements
- Add functionality for users to like posts.
- Allow users to add comments.
- Implement a backend to store posts and user data.

---

## License
This project is licensed under the MIT License.
```

This updated `README.md` now includes the CSS details for the project, highlighting the key styles used for the layout, images, and typography. Let me know if you need further adjustments!

Similar code found with 1 license type