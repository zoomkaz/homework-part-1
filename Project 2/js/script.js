let range = document.querySelector('.range')
let result = document.querySelector('.total_lenth')

range.addEventListener('input', (e) => {
  result.innerHTML = `${e.target.value} м`
})