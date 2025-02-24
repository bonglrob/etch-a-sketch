(function() {
    window.addEventListener("load", init);

    function init() {
        const wrapperContainer = qs("main > .wrapper");
        const panels = genPanels(256);
    
        wrapperContainer.appendChild(panels);
    }

    function qs(selector) {
        return document.querySelector(selector);
    }

    function gen(tagName) {
        return document.createElement(tagName);
    }

    function genContainer() {
        let container = gen("div");
        container.classList.add("container");
        return container;
    }

    function genPanels(times) {
        const container = genContainer();

        for (let i = 0; i < times; i++) {
            let panel = gen("div");
            panel.classList.add("panel");
            container.appendChild(panel);
        }
        return container;
    }
})();