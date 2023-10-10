"use strict";
(() => {
    // argumentos opcionales
    const fullName = (first, last) => {
        return `${first} ${last || 'no last name'}`;
    };
    const name = fullName('pablo');
    console.log(name);
})();
