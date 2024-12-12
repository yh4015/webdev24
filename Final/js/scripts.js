// Photo Data (replace with actual paths/captions)
const photos = [
    { src: "images/selk.JPG", caption: "selkirk, canada" },
    { src: "images/yunwoo.JPG", caption: "miss sky" },
    { src: "images/seojin.JPG", caption: "seojin, plant father" },
    { src: "images/minu.JPG", caption: "minu and oranges" },
    { src: "images/choo.JPG", caption: "mr. choo, the tea master" },
    { src: "images/cloud.JPG", caption: "clouds and teas" },
    { src: "images/friends.JPG", caption: "late hours star-gazing" },
    { src: "images/ducks.JPG", caption: "some ducks." },
    { src: "images/jeju.JPG", caption: "jeju island" },
    { src: "images/smile.JPG", caption: "bliss." },
    { src: "images/ajushi.JPG", caption: "ajushi" },
    { src: "images/frenz.JPG", caption: "more friends" },
    { src: "images/model.JPG", caption: "model eli" },
    { src: "images/soccer.JPG", caption: "peak frolicking" }
];


// Add photos to the gallery
const gallery = document.getElementById("gallery");

photos.forEach((photo, index) => {
    const photoContainer = document.createElement("div");
    photoContainer.classList.add("photo-container");
    
    // Alternate between left and right
    if (index % 2 === 0) {
        photoContainer.classList.add("left");
    } else {
        photoContainer.classList.add("right");
    }

    // Create the image and caption elements
    const img = document.createElement("img");
    img.src = photo.src;
    img.alt = `Photo ${index + 1}`;

    const caption = document.createElement("div");
    caption.classList.add("photo-caption");
    caption.innerText = photo.caption;

    // Append elements to the container
    photoContainer.appendChild(img);
    photoContainer.appendChild(caption);

    // Append the photo container to the gallery
    gallery.appendChild(photoContainer);

    // Fade-in effect using IntersectionObserver
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove("visible");
                }
            });
        },
        { threshold: 0.5 } // Trigger when 50% of the photo is visible
    );

    document.querySelectorAll(".photo-container").forEach((container) => {
        observer.observe(container); // Observe each photo container
    });
});
