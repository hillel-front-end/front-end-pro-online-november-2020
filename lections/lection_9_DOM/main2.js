window.onload = function(){
    // const blocks = document.querySelectorAll('.block');

    // console.log('1')
    // setTimeout(function(){
    //     console.log('2')
    // }, 2000);
    // console.log('3')


    // setInterval(function(){
    //     console.log('interval')
    // }, 1000);

    setInterval(getForm, 100);

    const result = document.querySelector('#result');
    const userName = document.querySelector('.user-name');
    const userAge = document.querySelector('.user-age');
    const userSmokes = document.querySelector('.user-smokes');

    function getForm(){
        let age = +userAge.value;

        if (age < 0) {
            age = 0;
            // userAge.value = 0;
            userAge.classList.add('error');
        } else {
            userAge.classList.remove('error');
        }

        const user = {
            name: userName.value,
            age: age,
            isSmokes: userSmokes.checked
        };
        

        result.innerHTML = 'Name: ' + user.name + ', Age: ' + user.age + ' Smokes: ' + user.isSmokes;
    }
}

