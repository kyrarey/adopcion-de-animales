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

export function registered(){
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Usuario registrado',
    showConfirmButton: false,
    timer: 1500
  })
}