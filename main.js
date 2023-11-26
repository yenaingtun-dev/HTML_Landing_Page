const nav = document.getElementById("mynav");
window.onscroll = () => {
    if (window.scrollY > 50) {
        nav.classList.add("nav-active");
    } else {
        nav.classList.remove("nav-active");
    }
};

const imageCollections = document.querySelectorAll(".image-collection");
const imageSVGs = document.querySelectorAll(".image-group-svg");
imageCollections.forEach((image) => {
    image.addEventListener("mouseover", (e) => {
        e.target.nextElementSibling.style.display = "flex";
    });
    image.addEventListener("mouseout", (e) => {
        e.target.nextElementSibling.style.display = "none";
    });
});
