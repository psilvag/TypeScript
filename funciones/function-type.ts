(
    ()=>{
        const add=(a:number,b:number)=>a+b
        const greet=(name:string)=>`Hola ${name}`
        const savetheWorld=()=>`El mundo esta salvado`


        // myfunction podria ser:
        /**
         *  myfunction:Function   --solo acepta funciones
         *  myfunction:(x:number,y:number)=>number
         *  myfunction:(name:string)=>string
         *  myfunction:()=>void
         * */

       let myfunction:Function;

       myfunction=add
       console.log(myfunction(4,6));
       myfunction=greet
       console.log(myfunction('Pablo'));
       myfunction=savetheWorld
       console.log(myfunction());

    }
)()