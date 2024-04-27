document.addEventListener('DOMContentLoaded', function () {
    obtienePersonajes();
});
async function obtienePersonajes() {
    const url = 'https://rickandmortyapi.com/api/character';
    try {
        /// todo anda bien   
        const personajes = await fetch(url);
        const personajesJson = await personajes.json();
        console.log(personajesJson);
        createContentTable(personajesJson.results);
    }
    catch (error) {
        /// cuando hay un error
    }
};

function recorrerEInsertarElementos(personajes) {
    const rowPapa = document.getElementById('papacards');
    personajes.forEach(personaje => {
        const card = crearCardPersonaje(personaje);
        rowPapa.appendChild(card);
    });
}

function crearCardPersonaje(personaje) {

    const { image, name } = personaje;
    const divCol = document.createElement('div');
    divCol.classList.add('col-12', 'col-sm-6', 'col-md-4', 'mb-3');
    const divCard = document.createElement('div');
    divCard.classList.add('card');
    const img = document.createElement('img');
    img.setAttribute('src', image);
    img.classList.add('card-img-top');
    const divCardBody = document.createElement('div');
    divCardBody.classList.add('card-body');
    const h5 = document.createElement('h5');
    h5.classList.add('card-title');
    h5.innerText = name;
    const p = document.createElement('p');
    p.classList.add('card-text');
    p.innerText = 'Some quick example text to build on the card title and make up the bulk of the card\'s content.';
    const a = document.createElement('a');
    a.setAttribute('href', '#');
    a.classList.add('btn', 'btn-primary');
    a.innerText = 'Go somewhere';

    divCol.appendChild(divCard);
    divCard.appendChild(img);
    divCard.appendChild(divCardBody);
    divCardBody.appendChild(h5);
    divCardBody.appendChild(p);
    divCardBody.appendChild(a);

    return divCol;
};


function createContentTable(personajes) {
    personajes.forEach(personaje => {
        const tr = createTableRow(personaje);
        const elementos = document.getElementById('elementos');
        elementos.appendChild(tr);
    });
};

function deleteElementTable(id) {
    const trElement = document.getElementById(id);
    console.log(trElement);
    trElement.remove();

}

function createTableRow(elemento) {
    const { status, name, gender, id } = elemento;
    const tr = document.createElement('tr');
    tr.setAttribute('id', id);
    const td1 = document.createElement('td');
    td1.innerText = name;
    const td2 = document.createElement('td');
    td2.innerText = gender;
    const td3 = document.createElement('td');
    td3.innerText = status;
    const td4 = document.createElement('td');
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-danger');
    button.setAttribute('onclick', `deleteElementTable(${id})`);
    button.innerText = 'Eliminar';

    td4.appendChild(button);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    return tr;
}