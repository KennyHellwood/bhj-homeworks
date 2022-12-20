const hasTooltip = Array.from(document.querySelectorAll(".has-tooltip"));

for (let i = 0; i < hasTooltip.length; i++) {
    hasTooltip[i].insertAdjacentHTML("afterEnd", `<div class="tooltip">${hasTooltip[i].getAttribute("title")}</div>`);
    hasTooltip[i].onclick = (e) => {
        showTooltip(e.target);
        e.preventDefault();
    };
}

function showTooltip(element) {
    if (element.nextElementSibling.classList.contains("tooltip_active")) {
        element.nextElementSibling.classList.remove("tooltip_active");
    } else {
        element.nextElementSibling.style.top = element.getBoundingClientRect().top + 30 + 'px';
        element.nextElementSibling.style.left = element.getBoundingClientRect().left + 'px';
        element.nextElementSibling.classList.add("tooltip_active");
    }
}
