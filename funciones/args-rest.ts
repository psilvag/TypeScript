(
    ()=>{


        const fullName=(first:string,...rest:string[]):string=>{
                return `${first} ${rest.join(' ')}`
        } 
     
        const heroes=fullName('clark','peter','kent')
        console.log(heroes);
    }
)()