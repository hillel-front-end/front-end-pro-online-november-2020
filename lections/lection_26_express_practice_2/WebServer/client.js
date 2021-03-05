function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }


window.addEventListener('load', () => {


    initMap();


    const searchAction = document.querySelector('#search_action');
    const forecastContainer = document.querySelector('#forecast');
    const searchSelect = document.querySelector('#search_select');

    searchAction.addEventListener('click', () => {
        const searchValue = document.querySelector('#search_field').value;
        if (searchValue.length < 2) {
            return;
        }

        let type = 'weather';

        switch (searchSelect.value) {
            case 'current':
                type = 'weather'
                break;
            case 'forecast':
                type = 'forecast'
                break;
        }

        fetch(`/${type}/${searchValue}`)
            .then(resp => resp.json())
            .then(weather => {
                if (type === 'forecast') {
                    forecastRender(weather);
                }
                document.querySelector('#currentWeather').innerHTML = JSON.stringify(weather, null, '\t');
            })
    })



    function forecastRender(data) {
        if (!data || !data.list || data.list.length === 0) {
            return;
        }


        forecastContainer.innerHTML = `
            <tr>
                <th>#</th>
                <th>Time</th>
                <th>Temp</th>
            </tr>
            ${data.list.map((item, index) => `
            <tr>
                <td>${index}</td>
                <td>${item.dt_txt}</td>
                <td>${item.main.temp}</td>
            </tr>
            `).join('')}
        `;
    }
});


