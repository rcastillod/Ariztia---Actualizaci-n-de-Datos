/** Form Validation */
const form = document.getElementById('form-log')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  limpiaErrores()

  if (validaCampos()) {
    mensajeExito()
  } else {
    mensajeError()
  }

})

const validaCampos = () => {
  let telefono = document.getElementById('telefono').value
  let email = document.getElementById('email').value
  let valid = true

  if (telefono == '') {
    valid = false
    document.querySelector('.errorTelefono').innerHTML = 'El campo es obligatorio'
  } else if (validaTelefono(telefono) == false) {
    valid = false
    document.querySelector('.errorTelefono').innerHTML = 'El formato del telefono es incorrecto'
  }

  if (email == '') {
    valid = false
    document.querySelector('.errorEmail').innerHTML = 'El campo es obligatorio'
  } else if (validaEmail(email) == false) {
    valid = false
    document.querySelector('.errorEmail').innerHTML = 'El formato del correo es incorrecto'

  }

  return valid

}

const validaTelefono = (telefono) => {
  let pattern = /^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/
  let textResult = pattern.test(telefono)
  return textResult
}

const validaEmail = (email) => {
  let pattern = /.+@.+\..+/
  let textResult = pattern.test(email)
  return textResult
}

const limpiaErrores = () => {
  document.querySelector('.errorTelefono').innerHTML = ''
  document.querySelector('.errorEmail').innerHTML = ''
}

const limpiaCampos = () => {
  let telefono = document.getElementById('telefono').value = ''
  let email = document.getElementById('email').value = ''
}

const mensajeExito = () => {
  let msg = document.getElementById('message')
  msg.innerHTML = 'Tus datos han sido actualizados con éxito!'
  msg.classList.remove('error')
  msg.classList.add('show', 'exito')
  setTimeout(() => {
    msg.classList.remove('show')
  }, 2000);
  limpiaCampos()
}

const mensajeError = () => {
  let msg = document.getElementById('message')
  msg.innerHTML = 'Uno de los campos tiene error.'
  msg.classList.remove('exito')
  msg.classList.add('show', 'error')
}
