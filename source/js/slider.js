let active = false;
const scroller = document.querySelector('.slider__button');
const slider = document.querySelector('.slider');
const before = document.querySelector('.slider__image-wrapper--before');
const after = document.querySelector('.slider__image-wrapper--after');

scroller.addEventListener('mousedown', () => {
  active = true;
  scroller.classList.add('slider__scrolling');
});

document.body.addEventListener('mouseup', () => {
  active = false;
  scroller.classList.remove('slider__scrolling');
});

document.body.addEventListener('mouseleave', () => {
  active = false;
  scroller.classList.remove('slider__scrolling');
});


document.body.addEventListener('mousemove',function(e){
    if (!active) return;
    let x = e.pageX;
    x -= slider.getBoundingClientRect().left;
    scrollIt(x);
});


function scrollIt(x) {
    let transform_before = Math.max(0,(Math.min(x,slider.offsetWidth)));
    let transform_after = slider.offsetWidth - transform_before;
    before.style.width = transform_before+"px";
    after.style.width = transform_after+"px";
    scroller.style.left = transform_before+"px";
}

//scrollIt(200);

scroller.addEventListener('touchstart', () => {
  active = true;
  scroller.classList.add('slider__scrolling');
});

document.body.addEventListener('touchend', () => {
  active = false;
  scroller.classList.remove('slider__scrolling');
});

document.body.addEventListener('touchcancel', () => {
  active = false;
  scroller.classList.remove('slider__scrolling');
});


slider.addEventListener('touchmove',function(e){
  if (!active) return;
  e.preventDefault();
  let x = e.touches[0].pageX;
  x -= slider.getBoundingClientRect().left;
  scrollIt(x);
});
