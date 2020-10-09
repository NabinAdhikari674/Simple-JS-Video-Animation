const ol = document.getElementById("overlap_vdo_left");
const or = document.getElementById("overlap_vdo_right");
const om = document.getElementById("peace_mate");

let init_t = om.getBoundingClientRect().top;
let init_w = ol.getBoundingClientRect().width;
let scroll_t = null;
window.onscroll = () => {
    if (scroll_t) {
        clearTimeout(scroll_t);
    }
    scroll_t = setTimeout(handle_vdo_ovr,10);
};
function handle_vdo_ovr(){
    scroll_t = null;
    let curr_t = om.getBoundingClientRect().top;
    let change_w = init_w * ((init_t - curr_t)/init_t);
    if (0 <= curr_t && curr_t <= init_t) {
        ol.style.width = (init_w-change_w)+"px";
        or.style.width = (init_w-change_w)+"px";
    }
    else if(0 > curr_t){
        ol.style.width = "0px";
        or.style.width = "0px";
    }
}
