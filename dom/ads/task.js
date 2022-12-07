const rotatorCase = Array.from(document.querySelectorAll(".rotator__case"));

function showNextCase() {
    let index;
    for (let i = 0; i < rotatorCase.length; i++) {
        if (rotatorCase[i].classList.contains("rotator__case_active")) {
            rotatorCase[i].classList.remove("rotator__case_active");
            index = i;
            break;
        }
    }
    if (index < rotatorCase.length-1) {
        rotatorCase[index+1].classList.add("rotator__case_active");
    } else {
        rotatorCase[0].classList.add("rotator__case_active");
    }
}

setInterval(() => showNextCase(), 1000);
