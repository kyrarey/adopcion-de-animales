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