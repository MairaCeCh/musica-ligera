let pass = "123";

function login() {
  let ingresar = false;

  for (let i = 2; i >= 0; i--) {
    let passUser = prompt(
      "coloca tu pass para igresar al sistema solo tenes " +
        (i + 1) +
        " intentos"
    );

    if (passUser != pass) {
      alert("pass incorrecto te quedan " + i + " intentos");
    } else {
      alert("pass correcto bienvendido al sistema Musica Ligera ");
      ingresar = true;
      break;
    }
  }

  return ingresar;
}

if (login()) {
  let saldo = 200;

  let opciones = prompt(
    "elige la opcion que quieras: \n1 consultar saldo \n2 comprar \n3 cargar tarjeta \n4 salir"
  );
  while (opciones != "4") {
    switch (opciones) {
      case "1":
        alert("tu saldo actual es $" + saldo);
        break;

      case "2":
        let cd = parseInt(
          prompt(
            "elige el genero que quieres comprar \n1 tango ($50) \n2  pop ($100) \n3 rock ($150)"
          )
        );
        if (cd != 1 && cd != 2 && cd != 3) {
          alert("esa opcion no esta disponible");
        } else if (cd == 1 && saldo > 0) {
          saldo -= 50;
          alert("tu nuevo saldo es de $" + saldo);
        } else if (cd == 2 && saldo > 0) {
          saldo -= 100;
          alert("tu nuevo saldo es de $" + saldo);
        } else if (cd == 3 && saldo > 0) {
          saldo -= 150;
          alert("tu nuevo saldo es de $" + saldo);
        } else {
          alert("no tenes fondos suficientes");
        }
        break;

      case "3":
        let cargar = parseInt(prompt("ingrese el monto que quiera cargar"));
        saldo += cargar;
        alert("tu nuevo saldo es de $" + saldo);
        break;

      default:
        alert("la opcion no es correcta");
        break;
    }
    opciones = prompt(
      "elige la opcion que quieras: \n1 consultar saldo \n2 comprar \n3 cargar tarjeta \n4 salir"
    );
  }
}
