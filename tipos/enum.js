"use strict";
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        // el valor "min2 empieza en 0 cuando no se establece un valor.Sino empieza desde el valor especificado
        // Solo maneja numeros
        AudioLevel[AudioLevel["min"] = 3] = "min";
        AudioLevel[AudioLevel["medium"] = 4] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    const currentAudio = AudioLevel.medium;
})();
