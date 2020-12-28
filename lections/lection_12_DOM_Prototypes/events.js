window.addEventListener('load', function(){
    const block = document.querySelector('.block');
    let offsetLeft = 0;
    let offsetTop = 0;
    
    block.addEventListener('mousedown', event => {
        offsetLeft = event.offsetX;
        offsetTop = event.offsetY;
        document.addEventListener('mousemove', onMouseMove)
    })

    block.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', onMouseMove)
    })


    let throttle = false;
    const throttleTime = 100;

    function onMouseMove(event) {
        // console.log(event)
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        if (!isBlockInWindow()) {
            offsetLeft = event.offsetX;
            offsetTop = event.offsetY;
            return;
        }

        block.style.left = mouseX - offsetLeft + 'px';
        block.style.top = mouseY - offsetTop + 'px';
    }


    function isBlockInWindow() {
        if (throttle == true) {
            return true;
        }

        throttle = true;
        setTimeout(() => {
            throttle = false;
        }, throttleTime);

        // Right wall
        if (block.offsetLeft + block.offsetWidth >= window.innerWidth) {
            block.style.left = window.innerWidth - block.offsetWidth - 1  + 'px';
            return false;
        }

         // Left wall
        if (block.offsetLeft <= 0) {
            block.style.left = 1 + 'px';
            return false;
        }

        // Bottom wall
        if (block.offsetTop + block.offsetHeight >= window.innerHeight) {
            block.style.top = window.innerHeight - block.offsetHeight - 1  + 'px';
            return false;
        }

        // Top wall
        if (block.offsetTop <= 0) {
            block.style.top = 1 + 'px';
            return false;
        }

        return true;
    }


    // Drag&Drop
    // Mousedown -> Mousemove? -> Mouseup

});





