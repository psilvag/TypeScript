(
    ()=>{
        type Hero={
            name:string,
            age:number,
            powers:string[],
            getName?:()=>string
        } 

      let mycurrentVariable:(string|number|Hero)

      mycurrentVariable='Btaman' 
      mycurrentVariable=45
      mycurrentVariable={
        name:'robin',
        age:24,
        powers:['astucia']
       
      }

    }
)()