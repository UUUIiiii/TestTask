let offset = 0 
const sliderTrack = document.querySelector('.slider-track')

document.querySelector('.next').addEventListener('click', function () {
  offset = offset + 500;
  console.log(offset)
  if (offset > 1330) {
    offset = 0
  }
  sliderTrack.style.left = -offset + 'px';
})

document.querySelector('.prev').addEventListener('click', function () {
  offset = offset - 500;
  console.log(offset)
  if (offset < 0) {
    offset = 1000
  }
  sliderTrack.style.left = -offset + 'px';
})