(function() {
    window.addEventListener("load", init);

    function init() {
        const mainContainer = qs("main");
        const board = genBoard();
    
        mainContainer.appendChild(board);
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

    function genBoard() {
        const container = genContainer();

        for (let i = 0; i < 256; i++) {
            let board = gen("div");
            board.classList.add("board");
            container.appendChild(board);
        }
        return container;
    }
})();