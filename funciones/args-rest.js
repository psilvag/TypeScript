"use strict";
(() => {
    const fullName = (first, ...rest) => {
        return `${first} ${rest.join(' ')}`;
    };
    const heroes = fullName('clark', 'peter', 'kent');
    console.log(heroes);
})();
