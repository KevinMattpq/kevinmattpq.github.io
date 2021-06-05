const images = document.querySelectorAll("[data-src]");

function preloadImage(image){
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = ()=>{image.removeAttribute('data-src');};
}


const imgOptions = {
    thredshold: 1,
    rootMargin: "0px 0px 400px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgPbserver) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return
        }else{
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
},imgOptions)


images.forEach(image => {
    imgObserver.observe(image)
})