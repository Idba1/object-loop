const actor = {
    name: 'Sakib Khan',
    id: 123,
    address: 'movie home',
    isSingle: true,
    friends: ['Apu', 'Bapparaz', 'Misha', 'Chowdhury Saheb'],
    movies: [{ name: 'no.1', year: 2015 }, { name: 'King', year: 2021 }],
    act: function () {
        console.log('acting like Shakib Khan');
    },
    car: {
        brand: 'Tesla',
        price: 50000000,
        made: 2025,
        manufacture: {
            name : 'tesla',
            CEO : 'Elon Mask',
            country : 'USA',
        }
    },
}
console.log(actor.car.manufacture);
actor.act()