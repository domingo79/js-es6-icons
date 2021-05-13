// Milestone 1:
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.

const icone = [
    { name: 'cat', prefix: 'fa-', type: 'animal', family: 'fas' },
    { name: 'crow', prefix: 'fa-', type: 'animal', family: 'fas' },
    { name: 'dog', prefix: 'fa-', type: 'animal', family: 'fas' },
    { name: 'dove', prefix: 'fa-', type: 'animal', family: 'fas' },
    { name: 'dragon', prefix: 'fa-', type: 'animal', family: 'fas' },
    { name: 'horse', prefix: 'fa-', type: 'animal', family: 'fas' },
    { name: 'hippo', prefix: 'fa-', type: 'animal', family: 'fas' },
    { name: 'fish', prefix: 'fa-', type: 'animal', family: 'fas' },
    { name: 'carrot', prefix: 'fa-', type: 'vegetable', family: 'fas' },
    { name: 'apple-alt', prefix: 'fa-', type: 'vegetable', family: 'fas' },
    { name: 'lemon', prefix: 'fa-', type: 'vegetable', family: 'fas' },
    { name: 'pepper-hot', prefix: 'fa-', type: 'vegetable', family: 'fas' },
    { name: 'user-astronaut', prefix: 'fa-', type: 'user', family: 'fas' },
    { name: 'user-graduate', prefix: 'fa-', type: 'user', family: 'fas' },
    { name: 'user-ninja', prefix: 'fa-', type: 'user', family: 'fas' },
    { name: 'user-secret', prefix: 'fa-', type: 'user', family: 'fas' }
];

// Milestone 2 Coloriamo le icone per tipo
const animalIcone = [], vegetableIcone = [], userIcone = [];

icone.forEach((icona) => {
    if (icona.type === 'animal') {
        icona.color = 'blue';
        animalIcone.push(icona)
    } else if (icona.type === 'vegetable') {
        icona.color = 'orange';
        vegetableIcone.push(icona)
    } else if (icona.type === 'user') {
        icona.color = 'red';
        userIcone.push(icona)
    }
    // document.getElementById('markUp').insertAdjacentHTML('beforeend', `
    //     <div>
    //     <i class="${icona.family} ${icona.prefix}${icona.name}" style="color:${icona.color}" ></i> 
    //     <h2>${icona.name} </h2>
    //     </div>
    //     `)

});

// Milestone 3 Creiamo una select con i tipi di icone e usiamola per filtrare le icone

const selezione = document.getElementById('filter');
selezione.addEventListener('change', () => {

    const valore = selezione.value;
    //console.log(valore);

    let markUp = []

    if (valore === 'all') {
        markUp = icone;
        console.log(markUp);
    } else if (valore === 'animal') {
        markUp = animalIcone;
        console.log(markUp);
    } else if (valore === 'vegetable') {
        markUp = vegetableIcone;
        console.log(markUp);
    } else if (valore === 'user') {
        markUp = userIcone;
        console.log(markUp);
    }

    markUp.forEach((elem) => {

        const { name, family, prefix, color } = elem;

        document.getElementById('markUp').insertAdjacentHTML('beforeend', `
        <div>
        <i class="${family} ${prefix}${name}" style="color:${color}" ></i> 
        <h2>${name} </h2>
        </div>
        `)
    })

})



