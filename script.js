const track = document.querySelector('.slide-track');

const slides = Array.from(track.children);

slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    track.appendChild(clone);
});