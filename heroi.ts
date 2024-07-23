class Heroi {
   public nome: string
    forca: number 
    nivel: number 
      constructor(nome:string,forca:number){
        this.nome=nome
        this.forca=forca
        this.nivel=1
      }

      olharDestemido(){
        console.log("olharDestemido")
      }

}

   let heroi1= new Heroi("Perseu",300)
   console.log(heroi1)


   let heroi2= new Heroi("Seiya",1000)
   heroi2.nivel=1000
   console.log(heroi2)