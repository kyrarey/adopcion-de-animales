import Swal from 'sweetalert2';

export function update(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Información actualizada',
      showConfirmButton: false,
      timer: 1500
    })
}

export function notValid(){
  Swal.fire({
    position: 'center',
    icon: 'error',
    title: 'Datos incorrectos, por favor vuelve a intentar',
    showConfirmButton: false,
    timer: 1500
  })
}

export function registered(){
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Usuario registrado',
    showConfirmButton: false,
    timer: 1500
  })
}

export function notLoggedIn(){
  Swal.fire({
    position: 'center',
    icon: 'warning',
    title: 'Debes estar logueado para continuar',
    showConfirmButton: false,
    timer: 2000
  })
}

export function notFormCompleted(){
  Swal.fire({
    position: 'center',
    icon: 'warning',
    title: 'Debes haber llenado tu formulario para continuar',
    showConfirmButton: false,
    timer: 2000
  })
}