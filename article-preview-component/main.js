const aside = document.getElementById("aside");
const avatar = document.getElementById("avatar");
const articleInfo = document.getElementById("article-info");
const span = document.getElementById("span");
const shareIcons = document.getElementById("share-icons");
const shareButton = document.getElementById("share-button");
const buttonImg = document.getElementById("button-img");

shareButton.addEventListener("click", () => {
  if (aside.classList.contains("inactive-aside")) {
    aside.classList.remove("inactive-aside");
    aside.classList.add("active-aside");

    span.style.display = "block";
    shareIcons.style.display = "flex";
    buttonImg.src = window.location.href + "images/icon-share-active.svg";

    articleInfo.style.display = "none";
    avatar.style.display = "none";
  } else {
    aside.classList.remove("active-aside");
    aside.classList.add("inactive-aside");

    articleInfo.style.display = "flex";
    avatar.style.display = "block";
    buttonImg.src = window.location.href + "images/icon-share.svg";

    span.style.display = "none";
    shareIcons.style.display = "none";
  }
});
