// Factory Object
let parejaConclave = (arr1, arr2) => {
  return {
    arr1: arr1,
    arr2: arr2,

    armarPareja() {
      let nuevaPareja = []

      while (nuevaPareja.length < 2) {
        let r1 = Math.floor(Math.random() * arr1.length)
        let r2 = Math.floor(Math.random() * arr1.length)
        let invitado1 = this.arr1[r1]
        let invitado2 = this.arr1[r2]

        if (this.arr2.includes(invitado1)) {
          continue
        } else {
          nuevaPareja.push(invitado1)
          //this.arr2.push(invitado1)
        }
  
        if (this.arr2.includes(invitado2) || nuevaPareja.length === 2) {
          continue
        } else {
          nuevaPareja.push(invitado2)
          //this.arr2.push(invitado2)
        }
      }
      return `Los invitados del siguiente conclave son ${nuevaPareja.join(' y ')}.`
    }
  }
}

let metodo = ['Luquitas Rodríguez', 'Pedro Rosemblat', 'Noelia Custodio', 'Ofelia Fernández', 'Guille Aquino', 'Georgina Orellano', 'Carlos Maslatón', 'Fede Simonetti', 'Mayra Arena', 'Nati Jota', 'Juan Cruz Komar', 'Matías Kulfas', 'Adrián Lakerman', 'Diego Lagomarsino', 'Leandro Santoro', 'Damián Kuc', 'Iván Schargrodsky', 'Marcela Feudale', 'Gustavo Grobocopatel', 'Carlos Corach', 'Mario Pergolini', 'Cumbio', 'Sergio Chodos', 'Dillom', 'Juariu', 'Julia Mengolini', 'Franco Rinaldi', 'Pato Galmarini', 'Guillermo Moreno', 'Maria O\'Donnell', 'Felipe Pigna', 'Juan Grabois', 'Jorge Altamira', 'Jorge Capitanich', 'Carlos Pagni', 'Santi Maratea', 'Vaca Narvaja', 'El Turco Asis', 'Paulina Cocina', 'Sergio Berni', 'Emmanuel Horvilleur']
let conclave = ['Iván Schargrodsky', 'Carlos Maslatón', 'Ofelia Fernández', 'Santi Maratea']

console.log(parejaConclave(metodo, conclave).armarPareja())
console.log(parejaConclave(metodo, conclave).armarPareja())
console.log(parejaConclave(metodo, conclave).armarPareja())
console.log(parejaConclave(metodo, conclave).armarPareja())
console.log(parejaConclave(metodo, conclave).armarPareja())
console.log(parejaConclave(metodo, conclave).armarPareja())
console.log(parejaConclave(metodo, conclave).armarPareja())