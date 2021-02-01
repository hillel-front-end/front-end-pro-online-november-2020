// DOM - element

// classList, className
// style, getComputedStyles
// on[click], addEventListener, removeEventListener
// innerHTML, innerText



// creating, removing, inserting

window.addEventListener('load', () => {
    // let isFlag = true;

    // document.body.innerHTML += `Test <button class="${isFlag ? 'active' : ''}" id="btn">Click me</button><hr>`;
    // document.body.querySelector('#btn').addEventListener('click', event => {
    //     console.log(event.target);
    // });


    // const textElem = document.createElement('span');

    // textElem.innerHTML = 'Super text';
    // textElem.classList.add('solid');
    // textElem.addEventListener('click', () => {
    //     console.log('span clicked')
    // });
    // console.log(textElem);

    // document.body.appendChild(textElem);


    // userList = [
    //     "User 1",
    //     "User 2",
    //     "User 3",
    //     "User 4",
    //     "User 5",
    // ];

    // const activeClassName = 'active-user';

    // es6 strings
    // document.querySelector('.user-list').innerHTML = `${userList.map(item => `<li class="${activeClassName}">${item}</li>`).join('')}`


    // createElement

    // const userListCotainer = document.querySelector('.user-list');
    // userList.forEach((usr, index) => {
    //     const liItem = document.createElement('li');
    //     liItem.classList.add(activeClassName);
    //     liItem.innerHTML = usr;
    //     liItem.addEventListener('click', event => {
    //         userList.splice(index, 1);
    //         event.target.remove();
    //     })
    //     userListCotainer.appendChild(liItem);
    // });


    /*
        1. Quantity by product
        2. Добавить кнопку Clear all
        3. Вы можете уменьшить\увеличить количество элементов по типу в "корзине". 
        4. Создать select(выпадающий список) конвертации валют. Список имеет 3 валюты - UAH, EUR, USD.
            * Курс валют захардкодить в код
            * Курс применяется только к total
    */
    const products = [
        {
            id: "id-1",
            name: 'Title 1',
            price: '100',
            image: 'https://images-na.ssl-images-amazon.com/images/I/616MVaXD29L._AC_SX679_.jpg'
        },
        {
            id: "id-2",
            name: 'Title 2',
            price: '300',
            image: 'https://images-na.ssl-images-amazon.com/images/I/616MVaXD29L._AC_SX679_.jpg'
        },
        {
            id: "id-2",
            price: '300',
            image: 'https://images-na.ssl-images-amazon.com/images/I/616MVaXD29L._AC_SX679_.jpg'
        }
    ];
    let totalCost = 0;
    
    const productsContainer =  document.querySelector('.products');

    productsContainer.innerHTML = `${products.map(item => {
        let name = item.name;

        if(!name) {
            name = 'Default name';
        }

        return `
        <div class="product solid">   
            <div class="product__title ${item.name ? '' : 'grey'}">${name}</div>
            <img class="product__image" src="${item.image}">
            <div class="product__price">
                <button class="product__action" data-product-id="${item.id}">Add</button>
                <span>${item.price}</span>
            </div>  
        </div>
    `;
    }).join('')}`;

    const buttons = productsContainer.querySelectorAll('button.product__action');
    const totalContainer = document.querySelector('#total')

    buttons.forEach(btn => {
        btn.addEventListener('click', onButtonAddClick)
    })

    function onButtonAddClick(event) {
        const productId = event.target.dataset.productId;
        const currentProduct = products.find(item => item.id == productId);

        totalCost += Number(currentProduct.price);
        totalContainer.innerHTML = totalCost;
    }

    console.log(buttons);
})