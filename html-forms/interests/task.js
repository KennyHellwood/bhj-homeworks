const checkBoxes = Array.from(document.querySelectorAll(".interest__check"));

for (let i = 0; i < checkBoxes.length; i++) {
    if (checkBoxes[i].closest(".interests_active") !== null) {
        checkBoxes[i].mainElement = checkBoxes[i].closest(".interests_active").previousElementSibling.firstElementChild;
    }
    checkBoxes[i].addEventListener("change", () => {
        if (checkBoxes[i].mainElement !== undefined) {
            checkAllElements(checkBoxes[i]);
        } else {
            checkAllSiblingElements(checkBoxes[i]);
        }
    });
}

// если на главном элементе поставить галочку, то ставим галочку у всех дочерних
function checkAllSiblingElements(element) {
    for (let i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].mainElement === element) {
            checkBoxes[i].checked = !checkBoxes[i].checked;
        }
    }
}

// если на всех дочерних элементах стоит галочка, то галочка ставится у главного
function checkAllElements(element) {
    siblingElements = [];
    checkedElementsCounter = 0;
    for (let i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].mainElement === element.mainElement) {
            siblingElements.push(checkBoxes[i]);
        }
    }
    for (let i = 0; i < siblingElements.length; i++) {
        if (siblingElements[i].checked === true) {
            checkedElementsCounter++;
        }
    }
    if (checkedElementsCounter === siblingElements.length) {
        element.mainElement.checked = true;
    } else {
        element.mainElement.checked = false;
    }
}
