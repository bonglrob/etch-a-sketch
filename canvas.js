(function() {
    window.addEventListener("load", init);

    function init() {
        genCanvas();

        const gridSizeButton = id("grid-size");
        gridSizeButton.addEventListener("click", genCanvas);
    }

    function id(element) {
        return document.getElementById(element);
    }

    function qs(selector) {
        return document.querySelector(selector);
    }

    function gen(tagName) {
        return document.createElement(tagName);
    }

    function removeCanvas() {
        const wrapperContainer = qs("main > .wrapper");
        wrapperContainer.innerHTML = "";
    }

    function getGridSize() {
        return numPerRow = prompt("How many squares do you want per row? (e.g. 2 for a 2 x 2 Grid)");
    }

    function genContainer() {
        let container = gen("div");
        container.classList.add("container");
        return container;
    }

    function changePanelColor(event) {
        const panel = event.target;
        panel.classList.toggle("panel--bg-color-green");
    }

    function genPanels(numPerRow) {
        const container = genContainer();
        const totalPanels = numPerRow * numPerRow;

        for (let i = 0; i < totalPanels; i++) {
            let panel = gen("div");
            panel.classList.add("panel");
            // panel.style.flex = `1 0 ${(1 / numPerRow - 0.001) * 100}`;

            panel.addEventListener("mouseover", changePanelColor);
            container.appendChild(panel);
        }
        return container;
    }

    function genCanvas() {
        const wrapperContainer = qs("main > .wrapper");
        let numPerRow = 16; // 16 x 16 grid = 256 total panels
        if (wrapperContainer.hasChildNodes()) {
            numPerRow = getGridSize();
            removeCanvas();
        }

        const panels = genPanels(numPerRow);
        wrapperContainer.appendChild(panels);
    }

})();