(
    ()=>{
      let avenger:any=123
      let exists
      let power
    
      avenger='Dr.extrange'
      //console.log(avenger.charAt(0));

      // HACE UN CASTING A STRING, LO TRATA COMO STRING
      console.log((avenger as string).charAt(0));
      avenger=12.535388092

      // HACER UN CASTING A NUMBER, NO LO CAMBIA DE TIPO SINO LO TRATA COMO UN NUMERO
      console.log((<number>avenger).toFixed(2));// 2 decimales
      

    }
)