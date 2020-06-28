// **🔐 Múltiples intentos**
//Crear un programa que pida ingresar usuario y contraseña. El programa debe permitir hasta 3 intentos, cuando el usuario y/o la contraseña sean incorrectos. Si se ingresa correctamente ambos antes de 3 intentos erróneos, debe mostrar un mensaje de bienvenida. Si se ingresan 3 intentos erróneos, debe mostrar un mensaje de error y terminar el programa. El usuario y la contraseña ya deben estar guardadas en variables.

let user = 'imazzu';
let pass = 12345;
let i = 0;

while (i < 3) {
    i++;
      const askUser = prompt('Ingrese su usuario');
      const askPass = Number(prompt('Ingrese contraseña'));

      if ((askUser === user) && (askPass === pass)) {
          alert('Bienvenido!! Ingresó correctamente los datos')
      } else alert('El usuario o la contraseña es incorrecto. Intente nuevamente!');
    };

alert('Error')