(
    ()=>{
        // argumentos por defecto
        // un argumento obligatorio no puede ir despues de uno opcional
        const fullName=(first:string,last?:string,upper:boolean=false)=>{

            if(upper)
            {
            return `${first} ${last}`.toUpperCase()
            }
            else{
                return `${first} ${last}`
            }

       
        }
    const name=fullName('pablo')
    console.log(name);
    }
)