/*
    1. Реализовать контекстное меню - кастомное. Title, Action, Icon.
    2. Создать Калькулятор расчёта комиссии 
    3. К калькулятору можно применить контекстое меню.
        3.1 Сброс калькулятора
        3.2 Изменить цвет
*/

console.log('Lection 19 - Practice');

const ICON_DEFAULT = 'air-freshener';

class MenuItem {
    constructor(title, action, icon = ICON_DEFAULT, closeContext = true){
        this.title = title;
        this.action = action; // string
        this.icon = icon;
        this.closeContext = closeContext;
    }

    getItemTemplate(){
        return `
            <div class="menu-item ${this.closeContext ? '' : 'stop-propagate'}" data-action="${this.action}">
                <span class="menu-item__icon fas fa-${this.icon}"></span> 
                <span class="menu-item__title">${this.title}</span>
            </div>
        `;
    }
}


const ACTION_KEY_OPEN = 'action_open';
const ACTION_KEY_EDIT = 'action_edit';
const ACTION_KEY_CLOSE = 'action_close';
const ACTION_KEY_RESET = 'reset';
const ACTION_KEY_CHANGECOLOR = 'change_color';

const ACTIONS = {
    [ACTION_KEY_OPEN]: ACTION_KEY_OPEN,
    [ACTION_KEY_EDIT]: ACTION_KEY_EDIT,
    [ACTION_KEY_CLOSE]: ACTION_KEY_CLOSE,
    [ACTION_KEY_RESET]: ACTION_KEY_RESET,
    [ACTION_KEY_CHANGECOLOR]: ACTION_KEY_CHANGECOLOR,
};

class Calculator {
    constructor(target) {
        this.target = target.querySelector('#input');


        this.baseDiagram = target.querySelector('.base');
        this.additionaDiagram = target.querySelector('.additional');
        this.commisionCheckers = target.querySelectorAll('.comission-checker');

        this.currentValue = 0;
        this.currentComission = 0;

        this.comissionConfig = {
            'type-1': 4,
            'type-2': 12
        };

        this.#init();
    }

    reset() {
        this.currentValue = 0;
        this.currentComission = 0;
        this.setCalculatedValue();
    }

    setBgColor(target, color){
        switch(target) {
            case 'base':
                this.baseDiagram.style.backgroundColor = color;
                break;
            case 'addditional':
                this.additionaDiagram.style.backgroundColor = color;
                break;
        }
    }

    setCalculatedValue() {
        this.baseDiagram.style.height = this.currentValue + 'px';
        this.additionaDiagram.style.height = (this.currentValue*this.currentComission)/100 + 'px';
    }

    #init() {
        this.setCalculatedValue();

        this.target.addEventListener('input', event => {
            this.currentValue = Number(event.target.value);
            this.setCalculatedValue();
        });
        this.commisionCheckers.forEach(checker => {
            checker.addEventListener('change', event => {
                this.currentComission = this.comissionConfig[event.target.dataset.type];
                this.setCalculatedValue();
            });
        })
    }
}

const contextMenu = [
    new MenuItem('Open', ACTIONS[ACTION_KEY_OPEN], 'folder-open'),
    new MenuItem('Edit', ACTIONS[ACTION_KEY_EDIT], 'edit', false),
    new MenuItem('Close', ACTIONS[ACTION_KEY_CLOSE], 'window-close')
];

const calcMenu = [
    new MenuItem('Reset Calc', ACTIONS[ACTION_KEY_RESET], 'window-close'),
    new MenuItem('Change color', ACTIONS[ACTION_KEY_CHANGECOLOR], 'window-close'),
];

window.addEventListener('load', () => {
    // ContextMenu render to body
    const target = document.body;
    const struct = {
        [ACTION_KEY_OPEN]: () => { console.log('1') },
        [ACTION_KEY_EDIT]: () => { console.log('2') },
        [ACTION_KEY_CLOSE]: () => { console.log('3') },
        [ACTION_KEY_RESET]: () => {
            calc.reset();
        },
        [ACTION_KEY_CHANGECOLOR]: () => {
            calc.setBgColor('base', getRandomColor())
        }
    };

    target.innerHTML += `
        <div class="context-menu default-menu">
            ${contextMenu.map(item => item.getItemTemplate()).join('')}
        </div>
        <div class="context-menu calc-menu">
            ${calcMenu.map(item => item.getItemTemplate()).join('')}
        </div>
    `;

    target.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', (event) => {
            const handler = struct[item.dataset.action];

            if (handler) {
                handler();
            }
        })
    });

    // target.querySelectorAll('.menu-item.stop-propagate').forEach(item => {
    //     item.addEventListener('click', (event) => {
    //         event.stopPropagation();
    //     })
    // });


    const calc = new Calculator(document.querySelector('.calc'));


    document.addEventListener('click', () => {
        hideContextMenu();
    });


    document.addEventListener('contextmenu', event => {
        event.preventDefault();
        const contextMenu = document.querySelector('.context-menu.default-menu');
        contextMenu.style.left = event.clientX + 'px';
        contextMenu.style.top = event.clientY + 'px';
        hideContextMenu();
        contextMenu.classList.add('show');
    });

    document.querySelector('.calc').addEventListener('contextmenu', event => {
        event.stopPropagation();
        event.preventDefault();
        const contextMenu = document.querySelector('.context-menu.calc-menu');
        contextMenu.style.left = event.clientX + 'px';
        contextMenu.style.top = event.clientY + 'px';

        hideContextMenu();

        contextMenu.classList.add('show');
    });


    

    function hideContextMenu(){
        const contextMenus = document.querySelectorAll('.context-menu');
        contextMenus.forEach(menu => {
            menu.classList.remove('show');
        });
    }
});


function getRandomColor() {
    const colors = [
        getRand(),
        getRand(),
        getRand()
    ]
    return `rgb(${colors})`;
}

function getRand() {
    return Math.floor(Math.random()*256);
}