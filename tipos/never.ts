(
    ()=>{
     const error=(msg:string):never=>{
        throw new Error(msg)

     }

     // Si ejecutamos ua funcion que retorna never el codigo se queda alli
     error('error')
     console.log('no imprime esto');
    }
)()