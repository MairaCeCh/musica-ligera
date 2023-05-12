let pass = "123";
let ingresar = false;
function login() {
  // var ingresar = false;

  for (let i = 2; i >= 0; i--) {
    let passUser = prompt(
      "coloca tu pass para igresar al sistema solo tenes " +
        (i + 1) +
        " intentos"
    );

    if (passUser != pass) {
      alert("pass incorrecto te quedan " + i + " intentos");
    } else {
      alert("bienvendido al sistema Musica Ligera");
      alert("LA APP DE COMPRAS ONLINE DE CD DE TUS ARTISTAS FAVORITOS");
      ingresar = true;
      break;
    }
  }

  // return ingresar;
}

if (login()) {
}
//   let saldo = 200;

//   let opciones = prompt(
//     "elige la opcion que quieras: \n1 consultar saldo \n2 comprar \n3 cargar tarjeta \n4 salir"
//   );
//   while (opciones != "4") {
//     switch (opciones) {
//       case "1":
//         alert("tu saldo actual es $" + saldo);
//         break;

//       case "2":
//         let cd = parseInt(
//           prompt(
//             "elige el genero que quieres comprar \n1 tango ($50) \n2  pop ($100) \n3 rock ($150)"
//           )
//         );
//         if (cd != 1 && cd != 2 && cd != 3) {
//           alert("esa opcion no esta disponible");
//         } else if (cd == 1 && saldo > 0) {
//           saldo -= 50;
//           alert("tu nuevo saldo es de $" + saldo);
//         } else if (cd == 2 && saldo > 0) {
//           saldo -= 100;
//           alert("tu nuevo saldo es de $" + saldo);
//         } else if (cd == 3 && saldo > 0) {
//           saldo -= 150;
//           alert("tu nuevo saldo es de $" + saldo);
//         } else {
//           alert("no tenes fondos suficientes");
//         }
//         break;

//       case "3":
//         let cargar = parseInt(prompt("ingrese el monto que quiera cargar"));
//         saldo += cargar;
//         alert("tu nuevo saldo es de $" + saldo);
//         break;

//       default:
//         alert("la opcion no es correcta");
//         break;
//     }
//     opciones = prompt(
//       "elige la opcion que quieras: \n1 consultar saldo \n2 comprar \n3 cargar tarjeta \n4 salir"
//     );
//   }
// }

// const arrayCd = [
//   {
//     artista: "The Strokes",
//     genero: "rock",
//     album: "is this it",
//     anio: 2001,
//     ranking: 50,
//   },
//   {
//     artista: "Blondie",
//     genero: "pop-rock",
//    album: "Parallel Lines",
//     anio: 1978,
//     ranking: 30,
//   },
//   {
//     artista: "David Bowie",
//     genero: "rock",
//     album: "Ziggy Stardust",
//     anio: 1973,
//     ranking: 1,
//   },
//   {
//     artista: "Abba",
//     genero: "pop",
//     album: "super trouper",
//     anio: 1980,
//     ranking: 5,
//   },
//   {
//     artista: "soda stereo",
//     genero: "rock",
//     album: "nada personal",
//     anio: 1985,
//     ranking: 10,
//   },
//   {
//     artista: "bajo fondo",
//     genero: "tango",
//     album: "bajofondo",
//     anio: 2005,
//     ranking: 42,
//   },
//   {
//     artista: "Carlos Gardel",
//     genero: "tango",
//     album: "Sus 40 tangos más famosos",
//     anio: 1927,
//     ranking: 90,
//   },
//   {
//     artista: "Miley Cyrus",
//     genero: "pop",
//     album: "Endless Summer Vacation",
//     anio: 2023,
//     ranking: 17,
//   },
// ];

class Cd {
  constructor(artista, genero, album, anio, ranking) {
    this.artista = artista;
    this.genero = genero;
    this.album = album;
    this.anio = parseInt(anio);
    this.ranking = parseInt(ranking);
  }
}

const arrayCd = [
  new Cd("The Strokes", "rock", "is this it", 2001, 50),
  new Cd("blondies", "pop-rock", "Parallel Lines", 1978, 30),
  new Cd("David Bowie", "rock", "Ziggy Stardust", 1973, 1),
  new Cd("Abba", "pop", "super trouper", 1980, 5),
  new Cd("Soda Stereo", "rock", "nada personal", 1985, 10),
  new Cd("Bajo Fondo", "tango", "bajofondo", 2005, 45),
  new Cd("Carlos Gardel", "tango", "Sus 40 tangos más famosos", 1927, 90),
  new Cd("Miley Cyrus", "pop", "Endless Summer Vacation", 2023, 17),
];
console.log(arrayCd);

let continuar = true;

while (continuar && ingresar) {
  let ingreso = prompt(
    "ingresa el artista, genero, album, año y ranking. siempre con un (/) entre cada una de estas. si desea salir pulse X"
  );

  if (ingreso.toUpperCase() == "X") {
    continuar = false;
    break;
  }

  let datos = ingreso.split("/");
  const cdn = new Cd(datos[0], datos[1], datos[2], datos[3], datos[4]);
  console.log(datos);
  arrayCd.push(cdn);
  console.log(arrayCd);
}
if (ingresar) {
  let ordenando = parseInt(
    prompt(
      "¿Como queres ver la lista? \n1 Artista de A-Z \n2 Artista de Z-A \n3 Ranking de mejor a peor \n4 Por año de mas viejo a mas nuevo"
    )
  );

  function ordenar(ordenando, array) {
    let copiaArray = array.slice(0);

    switch (ordenando) {
      case 1:
        let arrayOrAZ = copiaArray.sort((a, b) =>
          a.artista.localeCompare(b.artista)
        );
        return arrayOrAZ;

      case 2:
        let arrayOrZA = copiaArray.sort((a, b) =>
          b.artista.localeCompare(a.artista)
        );
        return arrayOrZA;

      case 3:
        let rankingO = copiaArray.sort((a, b) => a.ranking - b.ranking);
        return rankingO;

      case 4:
        let añoO = copiaArray.sort((a, b) => a.anio - b.anio);
        return añoO;

      default:
        alert("no es valido");
        break;
    }
  }

  // if (ingresar) {
  function crearString(array) {
    let info = "";

    array.forEach((elemento) => {
      info +=
        "artista: " +
        elemento.artista +
        "\ngenero: " +
        elemento.genero +
        "\nalbum: " +
        elemento.album +
        "\naño: " +
        elemento.anio +
        "\nranking: " +
        elemento.ranking +
        ".\n\n";
    });
    return info;
  }

  //

  alert(crearString(ordenar(ordenando, arrayCd)));

  let filtrado = prompt("escribe el nombre del artita");

  const filter = arrayCd.filter((arrayCd) =>
    arrayCd.artista.toUpperCase().includes(filtrado.toUpperCase())
  );

  if (filter.length == 0) {
    alert("no existe");
  } else {
    const imprimir = filter.map((arrayCd) => arrayCd.album);
    if (imprimir.length == 1) {
      alert("el album del artista que elegiste es \n " + imprimir.join("-"));
    } else {
      alert(
        "los albumes del artista que elegiste son \n " + imprimir.join("-")
      );
    }
  }
}
if (ingresar != true) {
  alert("no estas registrado a esta app. hasta luego");
}
