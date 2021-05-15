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
const iconeColor = icone.map((ele) => {
    if (ele.type == 'animal') {
        ele.color = 'blue';
    } else if (ele.type == 'vegetable') {
        ele.color = 'orange'
    } else {
        ele.color = 'purple'
    }
    return ele
})

iconeColor.forEach((iconeElem) => {
    document.getElementById('markUp').insertAdjacentHTML('beforeend',
        `
    <div class="card">
    <i class="${iconeElem.family} ${iconeElem.prefix}${iconeElem.name}" style="color:${iconeElem.color}"></i>
    <h4>${iconeElem.name}</h4>
    </div>
    `)
});

// Milestone 3 Creiamo una select con i tipi di icone e usiamola per filtrare le icone
const selezione = document.getElementById('filter');
selezione.addEventListener('change', () => {
    const svuotaContenitore = document.getElementById('markUp').innerHTML = "";

    let catturaValore = selezione.value;

    iconeColor.filter((iconeElem) => {

        if (iconeElem.type === catturaValore) {
            document.getElementById('markUp').insertAdjacentHTML('beforeend',
                `
            <div  class="card">
            <i class="${iconeElem.family} ${iconeElem.prefix}${iconeElem.name}" style="color:${iconeElem.color}"></i>
            <h4>${iconeElem.name}</h4>
            </div>
            `)
        } else if (catturaValore === 'all') {
            document.getElementById('markUp').insertAdjacentHTML('beforeend',
                `
            <div  class="card">
            <i class="${iconeElem.family} ${iconeElem.prefix}${iconeElem.name}" style="color:${iconeElem.color}"></i>
            <h4>${iconeElem.name}</h4>
            </div>
            `)
        }
    });

});
