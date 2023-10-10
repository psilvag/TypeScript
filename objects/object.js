"use strict";
(() => {
    let flash = {
        name: 'Barry',
        age: 24,
        powers: ['velocidad', 'viaje en el tiempo']
    };
    // si queremos cambiar las propiedades de flash debemos cambiar todo, o especificar que queremos añadir una nueva propiedad tal como se hace a continuacion:
    flash = {
        name: 'clark kent',
        age: 56,
        powers: ['volar'],
        getName() {
            return this.name;
        }, no, se, puede, añadir, por, si, solo
    };
})();
