const slider = document.getElementById("slider");
const beforeWrap = document.getElementById("beforeWrap");
const handle = document.getElementById("handle");

let isDown = false;

function updateSlider(clientX){
  const rect = slider.getBoundingClientRect();
  let x = clientX - rect.left;

  if(x < 0) x = 0;
  if(x > rect.width) x = rect.width;

  const percent = (x / rect.width) * 100;

  beforeWrap.style.width = percent + "%";
  handle.style.left = percent + "%";
}

/* Mouse */
handle.addEventListener("mousedown", ()=> isDown = true);
window.addEventListener("mouseup", ()=> isDown = false);

slider.addEventListener("mousemove", e=>{
  if(!isDown) return;
  updateSlider(e.clientX);
});

/* Touch */
handle.addEventListener("touchstart", ()=> isDown = true);
window.addEventListener("touchend", ()=> isDown = false);

slider.addEventListener("touchmove", e=>{
  if(!isDown) return;
  updateSlider(e.touches[0].clientX);
});

/* Init exactly center */
// window.addEventListener("load", ()=>{
//   updateSlider(slider.getBoundingClientRect().width / 2);
// });

window.addEventListener("load", initCenter);
window.addEventListener("resize", initCenter);