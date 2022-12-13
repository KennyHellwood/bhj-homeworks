const hasTooltip = Array.from(document.querySelectorAll(".has-tooltip"));

for (let i = 0; i < hasTooltip.length; i++) {
    hasTooltip[i].insertAdjacentHTML("afterEnd", `<div class="tooltip">${hasTooltip[i].getAttribute("title")}</div>`);
    console.log(hasTooltip[i]);
    hasTooltip[i].onclick = () => {
        hasTooltip[i].nextSibling.classList.contains("tooltip_active") ? hasTooltip[i].nextSibling.classList.remove("tooltip_active") : hasTooltip[i].nextSibling.classList.add("tooltip_active");
        return false;
    };
}
