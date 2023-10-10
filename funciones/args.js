"use strict";
(() => {
    // argumentos obligatorios
    const fullName = (first, last) => {
        return `${first} ${last}`;
    };
    const name = fullName('pablo', 'silva');
    console.log(name);
});
