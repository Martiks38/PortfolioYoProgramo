import { $ } from './utils/index.js'
import { USER } from './user.js'

const $login = $('.login')
const $mode = $('.mode')

const logIn = (event) => {
  let ctrlAndAlt = event.altKey && event.ctrlKey

  if (
    ctrlAndAlt &&
    event.key === 'e' &&
    Array.from($mode.classList).includes('hidden')
  ) {
    $login.classList.toggle('hidden')
    $('input[name="user"]').focus()
  }

  if (
    event.key === 'Escape' &&
    !Array.from($login.classList).includes('hidden')
  )
    $login.classList.add('hidden')

  if (ctrlAndAlt && event.key === 's') $mode.classList.add('hidden')
}

const closeLogin = (event) => {
  let notLogin = !event.target.closest('.login')

  if (notLogin) $login.classList.add('hidden')
}

const activeModeEdition = (event) => {
  let { user, password } = event.target

  let $errorMsg = $('.login__error')
  let isValid = user.value === USER.name && password.value === USER.pass

  event.preventDefault()

  if (isValid) {
    $login.classList.add('hidden')
    $mode.classList.remove('hidden')
    $errorMsg.classList.add('hidden')
  } else {
    $errorMsg.classList.remove('hidden')
  }
}

export const handleLogin = () => {
  document.addEventListener('keydown', logIn)
  document.addEventListener('click', closeLogin)
  document.addEventListener('submit', activeModeEdition)
}
