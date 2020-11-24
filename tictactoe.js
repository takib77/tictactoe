'use strict'


// Kiinduló állapot
const matrix = [];
let stepCount = 0;
let rows = 3;
let cells = 3;
let sign = 'X';


// Mátrix feltöltése
const initState = () => {
    for (let i = 0; i < rows; i += 1) {
        matrix[i] = [];
        for (let j = 0; j < cells; j += 1) {
            matrix[i][j] = null;
        }
    }
}


const increaseCounter = () => {
    stepCount += 1;
}

const modifyCell = (element) => {
    element.removeEventListener('click', handleClick);
    element.textContent = sign;
}

const setMark = () => {
    sign = sign === 'X' ? 'O' : 'X';
}


// A mátrix egy elemének értéket adok, az adott elem data attributumait felhasználva nyerem ki az értéket
const changeMatrixValue = (element) => {
    const row = parseInt(element.dataset.row, 10);
    const cell = parseInt(element.dataset.cell, 10);
    matrix[row][cell] = element.textContent;
}


// Kattintás során ezek történnek
const handleClick = (event) => {
    increaseCounter();
    modifyCell(event.target);
    setMark();
    changeMatrixValue(event.target);
    //    checkWinner();
}


// Minden elemhez hozzáadom az eseményfigyelőt
const addListener = () => {
    document.querySelectorAll('td.sector').forEach(element => {
        element.addEventListener('click', handleClick)
    });
}


// Minden elemről törlöm az eseményfigyelőt, ha van győztes
const removeListener = () => {
    document.querySelectorAll('td.sector').forEach(element => {
        element.removeListener('click', handleClick)
    });
}


// Megnézem hogy van e olyan sor, ahol minden elem ugyanaz
const checkRowValues = () => {
    const values = matrix.map(row =>
        row.every((value) => value === 'X') ||
        row.every((value) => value === 'O'))
    return values.indexOf(true) !== -1 ? true : false;
}

// Megnézem hogy van e olyan oszlop, ahol minden elem ugyanaz
// TODO: Meg kell írnod, boolean adjon vissza
const checkColumnValues = () => { }

// Megnézem hogy van e olyan oszlop, ahol minden elem ugyanaz
// TODO: Meg kell írnod, boolean adjon vissza
const checkDiagonalValues = () => { }


// TODO: Meg kell írnod, nincs befejezve
const checkWinner = () => {
    // Akár a checkRowValues, checkColumnValues, checkDiagonalValues true, akkor van győztes
    // Csak azért van itt a log hogy lássátok hogy true akkor lesz ha van olyan sor ahol minden elem ugyanaz
    console.log(checkRowValues());
}










initState();
addListener();
