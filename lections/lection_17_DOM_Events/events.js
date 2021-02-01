window.addEventListener('load', function(){
    const container = document.querySelector('#container');
    const child = document.querySelector('#child');

    // const wrapper = document.querySelector('.wrapper');
    // wrapper.addEventListener('click', event => {
    //     if (event.target === event.currentTarget) {
    //         return;
    //     }
    //     console.log('wrapper');
    // });

    document.body.addEventListener('click', function(event) {
        console.log('body');
    });
    container.addEventListener('click', function(event) {
        console.log('container');
    });

    child.addEventListener('click', event => {
        event.stopPropagation();
        console.log('child');
    });



    const modal = document.querySelector('.modal');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalClose = document.querySelector('.modal__close');
    const clickModalBtn = document.querySelector('#click-in-modal');

    modalOverlay.addEventListener('click', hideModal);
    modalClose.addEventListener('click', hideModal);
    clickModalBtn.addEventListener('click', event => {
        event.stopPropagation();
        console.log('Click me');
    });


    function hideModal(event) {
        // event.stopPropagation();
        // console.log('Modal closed');
        // modalOverlay.classList.add('hide');
        // modal.classList.add('hide');
    }



    const date = document.querySelector('#date');

    date.addEventListener('click', (event) => {
        event.preventDefault();
    })


    document.addEventListener('contextmenu', event => {
        event.preventDefault();
        console.log('contextmenu');
    })
    
})