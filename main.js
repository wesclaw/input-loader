const form = document.getElementById('form')
const input = document.getElementById('input')
const text = document.querySelector('.text')


function submitForm(e) {
  e.preventDefault()
  const inputValue = input.value;
  text.innerHTML = `<p class='addToText'>${inputValue}</p>`
  input.value = ''
  setTimeout(()=>{
    text.innerHTML = `<p class='normal'>${inputValue}</p>`
  },2000)
}

form.addEventListener('submit', submitForm)