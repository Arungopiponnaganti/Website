interface Movies {
    "name": String,
    "house": String,
    "playsQuidditch": Boolean,
    "position": String,
    "quidditchYears": [Number]
}

function getMovies() {
    fetch("https://coderbyte.com/api/challenges/json/quidditch-list")
        .then(response => response.json())
        .then(data => {
            let res = data.filter((item: Movies) => item.playsQuidditch === true)
                .map((item: Movies) => {
                    return { house: item.house, position: item.position }
                });
            console.log(JSON.stringify(res))
        })
        .catch(err => console.log(err))

}
getMovies();