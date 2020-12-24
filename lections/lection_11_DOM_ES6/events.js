window.addEventListener('load', function(){

    function eventHandler(event){
        console.log(event.type, event);

        // block.innerHTML = `X: ${event.offsetX} Y: ${event.offsetY}`;

        // if (event.type == 'keydown' && event.keyCode == 40) {
        //     console.log(event.target.style.top);
        //     let newTop;
        //     if (event.target.style.top == '') {
        //         newTop = 0;
        //     } else {
        //         newTop = parseInt(event.target.style.top) + 1;
        //     }
        //     event.target.style.top = `${newTop + 20}px`;
        // }


        // if (event.type == 'change') {
        //     const value = event.target.value;

        //     if (value.indexOf('@') == -1) {
        //         event.target.classList.add('ERROR');
        //     } else {
        //         event.target.classList.remove('ERROR');
        //     }
        // }
    }

    const block = document.querySelector('.block');
    const textArea = document.querySelector('#textArea');


    // block.addEventListener('mousedown', eventHandler);
    // block.addEventListener('mouseup', eventHandler);
    // block.addEventListener('click', eventHandler);
    // block.addEventListener('dblclick', eventHandler);

    // block.addEventListener('mousemove', eventHandler);


    // textArea.addEventListener('keydown', eventHandler);
    // textArea.addEventListener('keyup', eventHandler);
    // textArea.addEventListener('keypress', eventHandler);

    // InputEvents
    // textArea.addEventListener('focus', eventHandler);
    // textArea.addEventListener('blur', eventHandler);

    // textArea.addEventListener('input', eventHandler);
    textArea.addEventListener('change', eventHandler);

});