let close_btn = document.querySelector(".close");
let play_btn = document.querySelectorAll(".play");
let showVariety = document.querySelector(".showVariety");
let svw = document.querySelector(".svw");
close_btn.onclick = () =>{
    showVariety.classList.toggle("showVarietyTogg");
    svw.classList.toggle("flexsv");
}
play_btn.forEach(btn => {
    btn.onclick = () =>{
        showVariety.classList.toggle("showVarietyTogg");    
        svw.classList.toggle("flexsv");
    }
});