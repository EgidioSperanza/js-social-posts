const containerPosts = document.getElementById("container");
let likedPosts = [];
let idPost = 0;
let avatarAuthor;

const posts = [
  {
    id: ++idPost,
    icon: "https://unsplash.it/300/300?image=15",
    name: "Phil Mangione",
    date: [2022, 01, 10],
    text:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    image: "https://unsplash.it/600/300?image=171",
    likes: 80,
  },
  {
    id: ++idPost,
    icon: null,
    name: "Marco Rossi",
    date: [2021, 12, 18],
    text:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    image: "https://unsplash.it/600/300?image=170",
    likes: 180,
  },
  {
    id: ++idPost,
    icon: "https://unsplash.it/300/300?image=10",
    name: "Elisa Verde",
    date: [2021, 11, 28],
    text:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    image: "https://unsplash.it/600/300?image=180",
    likes: 99,
  },
];

function displayPosts(container, postsList) {
  for (let i = 0; i < postsList.length; i++) {
    postsList[i].date=dateConverter(postsList[i].date);
    // let [month, day, year] = postsList[i].date;
    // postsList[i].date = [day, month, year];
    if (postsList[i].icon === null) {
      let initials = postsList[i].name.match(/\b\w/g) || [];
      initials = (
        (initials.shift() || "") + (initials.pop() || "")
      ).toUpperCase();
      postsList[i].icon = initials;
      avatarAuthor = `<p class="profile-pic">${initials}</p>`;
    } else {
      avatarAuthor = `<img class="profile-pic" src=${postsList[i].icon} alt=${postsList[i].name}>`;
    }
    container.innerHTML += `
        <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    ${avatarAuthor}                   
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
                    <a class="like-button  js-like-button" href="#" id="${postsList[i].id}">
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
  }
  for (let i = 0; i < postsList.length; i++) {
    const likeBtn = document.getElementById(`${postsList[i].id}`);
    const likeCount = document.getElementById(
      `like-counter-${postsList[i].id}`
    );

    clickLikes(likeBtn, postsList[i], likeCount);
  }
}

function clickLikes(btn, obj, nLikes) {
  //   console.log(btn); //DEBUG
  btn.addEventListener("click", function (e) {
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
    // console.log(btn); //DEBUG
    e.preventDefault();
    return false;
    }, false);
}

function dateConverter(americanDate) {
  let [year, month, day] = americanDate;
  let europeanDate = [day, month, year];
  return europeanDate;
}
displayPosts(containerPosts, posts);
