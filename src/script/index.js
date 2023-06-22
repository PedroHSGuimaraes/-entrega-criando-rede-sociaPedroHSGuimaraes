function usersRender(userList, suggestUser) {
  const listUsersLeft = document.getElementById("users-left__div-left");
  const listUsersRight = document.getElementById("users-show-right-1");

  let listUsersItem = document.createElement("li");
  let img = document.createElement("img");
  let userName = document.createElement("h2");
  let userStack = document.createElement("h3");

  listUsersItem.id = "user" + userList[0].id;
  img.src = userList[0].img;
  img.alt = userList[0].user;
  img.classList.add("section__ul__user-img");
  userName.innerHTML = userList[0].user;
  userName.classList.add("section__ul__user-name-Samuel");
  userStack.innerHTML = userList[0].stack;
  userStack.classList.add("section__ul__user-stack-Samuel");
  listUsersItem.classList.add("section__ul__user-item-Samuel");
  listUsersItem.appendChild(img);
  listUsersItem.appendChild(userName);
  listUsersItem.appendChild(userStack);

  listUsersLeft.appendChild(listUsersItem);
  for (let i = 0; i < suggestUser.length; i++) {
    let listUsersItem = document.createElement("li");
    let img = document.createElement("img");
    let userName = document.createElement("h3");
    let userStack = document.createElement("h4");
    let buttonFollow = document.createElement("button");

    listUsersItem.id = "user" + suggestUser[i].id;
    listUsersItem.classList.add("section__ul__user-item" + suggestUser[i].id);
    img.src = suggestUser[i].img;
    img.alt = suggestUser[i].user;
    img.classList.add("section__ul__user-img" + listUsersItem.id);
    userName.innerHTML = suggestUser[i].user;
    userName.classList.add("section__ul__user-name" + listUsersItem.id);
    userStack.innerHTML = suggestUser[i].stack;
    userStack.classList.add("section__ul__user-stack" + listUsersItem.id);
    buttonFollow.innerHTML = "Seguir";
    buttonFollow.id = "button--follow";
    buttonFollow.classList.add(
      "section__ul__user-button-follow" + listUsersItem.id
    );

    listUsersItem.appendChild(img);
    listUsersItem.appendChild(userName);
    listUsersItem.appendChild(userStack);
    listUsersItem.appendChild(buttonFollow);

    listUsersRight.appendChild(listUsersItem);
  }
}

function postsRender(array) {
  const listUsersPost = document.getElementById("users-show-post");
  listUsersPost.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    const post = array[i];
    const postItem = createPost(post);
    listUsersPost.appendChild(postItem);
  }
  return listUsersPost;
}

function createPost(post) {
  const listUsersItem = document.createElement("li");
  const img = document.createElement("img");
  const userName = document.createElement("h3");
  const userStack = document.createElement("h4");
  const userTitle = document.createElement("h2");
  const userText = document.createElement("p");
  const buttonPost = document.createElement("button");
  const buttonLike = document.createElement("button");

  listUsersItem.id = "user-post" + post.id;
  listUsersItem.classList.add("section__ul__user-item-post" + post.id);

  img.src = post.img;
  img.alt = post.user;
  img.classList.add("section__ul__user-img-post" + post.id);

  userName.innerHTML = post.user;
  userName.classList.add("section__ul__user-name-post" + post.id);

  userStack.innerHTML = post.stack;
  userStack.classList.add("section__ul__user-stack-post" + post.id);

  userTitle.innerHTML = post.title;
  userTitle.classList.add("section__ul__user-title-post" + post.id);

  userText.innerHTML = post.text;
  userText.classList.add("section__ul__user-text-post" + post.id);

  buttonPost.innerHTML = "Abrir Post";
  buttonPost.classList.add("section__ul__user-button-post");
  buttonPost.dataset.postId = post.id;

  buttonLike.innerHTML =
    " <img class ='img-like' src='./src/assets/img/like.svg' alt='like'/>";
  buttonLike.classList.add("section__ul__user-button-like" + post.id);
  buttonLike.id = "button--like";

  listUsersItem.append(
    img,
    userName,
    userStack,
    userTitle,
    userText,
    buttonPost,
    buttonLike
  );
  return listUsersItem;
}

function showModalButton() {
  const modalController = document.querySelector(".modal-controller");
  const buttons = document.querySelectorAll(".section__ul__user-button-post");
  let foundPost = {};

  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];

    button.addEventListener("click", (event) => {
      for (let j = 0; j < posts.length; j++) {
        modalController.innerHTML = "";
        if (posts[j].id == event.target.dataset.postId) {
          foundPost = posts[j];
        }

        const uluserList = document.createElement("ul");
        const listUsersItem = document.createElement("li");
        const img = document.createElement("img");
        const userName = document.createElement("h3");
        const userStack = document.createElement("h4");
        const userTitle = document.createElement("h2");
        const userText = document.createElement("p");
        const closeBtn = document.createElement("button");

        listUsersItem.id = "user-post-modal";
        listUsersItem.classList.add("section__ul__user-item-post-modal");

        img.src = foundPost.img;
        img.alt = foundPost.user;
        img.classList.add("section__ul__user-img-post-modal");

        userName.innerHTML = foundPost.user;
        userName.classList.add("section__ul__user-name-post-modal");

        userStack.innerHTML = foundPost.stack;
        userStack.classList.add("section__ul__user-stack-post-modal");

        userTitle.innerHTML = foundPost.title;
        userTitle.classList.add("section__ul__user-title-post-modal");

        userText.innerHTML = foundPost.text2;
        userText.classList.add("section__ul__user-text-post-modal");

        closeBtn.innerHTML = "X";
        closeBtn.classList.add("section__ul__user-button-close-modal");

        listUsersItem.append(
          img,
          userName,
          userStack,
          userTitle,
          userText,
          closeBtn
        );
        uluserList.appendChild(listUsersItem);

        modalController.appendChild(uluserList);
        modalController.showModal();
        closeModal();
      }
    });
  }
}

function closeModal() {
  const closeButton = document.querySelector(
    ".section__ul__user-button-close-modal"
  );
  const modalController = document.querySelector(".modal-controller");

  closeButton.addEventListener("click", () => {
    modalController.close();
  });
}

usersRender(users, suggestUsers);
postsRender(posts);
showModalButton ();

function likebuton() {
  const likeButton = document.querySelectorAll("#button--like");
  let like = 0;
  for (let i = 0; i < likeButton.length; i++) {
    const button = likeButton[i];
    button.addEventListener("click", (event) => {
      like++;
      if (like % 2 === 1) {
        button.innerHTML =
          " <img class ='img-like' src='./src/assets/img/like1.svg' alt='like'/>";
      } else {
        button.innerHTML =
          " <img class ='img-like' src='./src/assets/img/like.svg' alt='like'/>";
      }
    });
  }
}

likebuton();

function toggleStyles() {
  const buttonFollowList = document.querySelectorAll("#button--follow");
  let stylesApplied = false;

  for (let i = 0; i < buttonFollowList.length; i++) {
    buttonFollowList.innerHTML = "";
    const buttonFollow = buttonFollowList[i];
    buttonFollow.addEventListener("click", () => {
      if (!stylesApplied) {
        buttonFollow.style.width = "89px";
        buttonFollow.style.height = "28px";
        buttonFollow.style.background = "#4263EB";
        buttonFollow.style.border = "1px solid #4263EB";
        buttonFollow.style.borderRadius = "2px";
        buttonFollow.style.color = "#ffffff";
        buttonFollow.textContent = "Seguindo";
        stylesApplied = true;
      } else {
        buttonFollow.style.width = "";
        buttonFollow.style.height = "";
        buttonFollow.style.background = "";
        buttonFollow.style.border = "";
        buttonFollow.style.borderRadius = "";
        buttonFollow.style.color = "";
        buttonFollow.textContent = "Seguir";
        stylesApplied = false;
      }
    });
  }
}

toggleStyles();
