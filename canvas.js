(function() {
    window.addEventListener("load", init);

    function init() {
        const mainContainer = qs("main");
        const panel = genPanel();
    
        mainContainer.appendChild(panel);
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

    function genPanel() {
        const container = genContainer();

        for (let i = 0; i < 256; i++) {
            let panel = gen("div");
            panel.classList.add("panel");
            container.appendChild(panel);
        }
        return container;
    }
})();