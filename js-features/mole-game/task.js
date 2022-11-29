const winElement = document.getElementById("dead");
const loseElement = document.getElementById("lost");

let winCounter = parseInt(winElement.textContent);
let loseCounter = parseInt(loseElement.textContent);

for (var i = 1; i <= 9; i++) {
    const moleElement = document.getElementById(`hole${i}`);
    moleElement.onclick = () => {
        (moleElement.className.includes('hole_has-mole')) ? winCounter++ : loseCounter++;
        if (winCounter === 10) {
            alert("Вы выиграли!");
            winCounter = 0;
            loseCounter = 0;
        }
        if (loseCounter === 5) {
            alert("Вы проиграли!");
            winCounter = 0;
            loseCounter = 0;
        }
        winElement.textContent = String(winCounter);
        loseElement.textContent = String(loseCounter);
    }
}
