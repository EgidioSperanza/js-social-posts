const containerPosts = document.getElementById("container");
let likedPosts = [];
let idPost = 0;
const posts = [
  {
    id:++idPost,
    icon: "https://unsplash.it/300/300?image=15",
    name: "Phil Mangione",
    date: [01, 10, 2022],
    text:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    image: "https://unsplash.it/600/300?image=171",
    likes: 80,
  },
  {
    id: ++idPost,
    icon: "https://unsplash.it/300/300?image=12",
    name: "Marco Rossi",
    date: [12, 18, 2021],
    text:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    image: "https://unsplash.it/600/300?image=170",
    likes: 180,
  },
  {
    id: ++idPost,
    icon: "https://unsplash.it/300/300?image=10",
    name: "Elisa Verde",
    date: [11, 28, 2021],
    text:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    image: "https://unsplash.it/600/300?image=180",
    likes: 99,
  }
];

function displayPosts(container, postsList) {
  for (let i = 0; i < postsList.length; i++) {
    let [month, day, year] = postsList[i].date;
    postsList[i].date = [day, month, year];
    container.innerHTML += `
        <div class="post" name="#${postsList[i].id}">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src=${postsList[i].icon} alt=${postsList[i].name}>                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${postsList[i].name}</div>
                    <div class="post-meta__time">${postsList[i].date}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${postsList[i].text}</div>
        <div class="post__image">
            <img src=${postsList[i].image} alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#${postsList[i].id}" data-postid="${postsList[i].id}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${postsList[i].id}" class="js-likes-counter">${postsList[i].likes}</b> persone
                </div>
            </div> 
        </div>            
    </div>
        `;
    const likeBtn = document.querySelector(
      `[data-postid='${postsList[i].id}']`
    );
    const likeCount = document.getElementById(
      `like-counter-${postsList[i].id}`
    );

    clickLikes(likeBtn, postsList[i], likeCount);
  }
}

function clickLikes(btn, obj, nLikes) {
  btn.addEventListener("click", function () {
    if (btn.classList.contains("like-button--liked")) {
      btn.classList.remove("like-button--liked");
      obj.likes--;
      likedPosts.splice(obj, 1);
      nLikes.innerHTML = `${obj.likes}`;
    } else {
      btn.classList.add("like-button--liked");
      obj.likes++;
      nLikes.innerHTML = `${obj.likes}`;
      likedPosts.push(obj);
    }
    console.log(btn); //DEBUG
  });
}

function dateConverter(americanDate) {
  let [month, day, year] = americanDate;
  americanDate = [day, month, year];
}
displayPosts(containerPosts, posts);
