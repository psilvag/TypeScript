(
    ()=>{
        // argumentos opcionales
        const fullName=(first:string,last?:string):string=>{
            return `${first} ${last || 'no last name'}`
        }
    const name=fullName('pablo')
    console.log(name);
    }
)()
