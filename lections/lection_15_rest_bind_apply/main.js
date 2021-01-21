class Button {
    #parrentElement = null;
    #element = null;
    #onClick = () => {};
    #content = '';

    constructor({ selector, onClick = () => {}, content = 'Button' }) {
        this.#parrentElement = document.querySelector(selector);
        this.#element = document.createElement('button');

        this.#parrentElement.appendChild(this.#element);

        this.#content = content;
        this.#onClick = onClick.bind(this);

        this.render();
        this.#addEvents();
    }

    #addEvents() {
        this.#element.addEventListener('click', this.#onClick);
    }

    render(content) {
        this.#element.innerHTML = content || this.#content;
    }

    destroy() {
        this.#element.removeEventListener('click', this.#onClick);
        this.#element.remove();
    }

    static findInstance(collection) {
        return collection.find((element) => {
            return element instanceof Button;
        });
    }
}

window.addEventListener('load', () => {
    let counter = 0;

    const button1 = new Button({
        selector: '#button1',
        content: 'My button',
        onClick: function () {
            this.render('My button change');
            console.log('button1 click');

            if (counter >= 5) {
                this.destroy();
            }

            counter++;
        }
    });

    console.log(Button.findInstance([2,23,5, button1]));

    const button2 = new Button({
        selector: '#button2',
        onClick: () => console.log('button2'),
        content: 'Button Super'
    });
})
