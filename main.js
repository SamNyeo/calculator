const $operator = document.querySelector('#operator')
const $result = document.querySelector('#result')
let numOne = ''
let numTwo = ''
let operator = ''

const onClickNumber = (event) => {
  if (!operator) {
    numOne += event.target.textContent;
    $result.value += event.target.textContent;
    return;
  }
  numTwo += event.target.textContent;
  $result.value += event.target.textContent;
}

const onClickOperator = (e) => {
  if (numOne) {
    operator = e;
    $operator = e;
  } else {
    alert('숫자를 입력하세요')
  }
}

document.querySelector('#num-0').addEventListener('click', onClickNumber)
document.querySelector('#num-1').addEventListener('click', onClickNumber)
document.querySelector('#num-2').addEventListener('click', onClickNumber)
document.querySelector('#num-3').addEventListener('click', onClickNumber)
document.querySelector('#num-4').addEventListener('click', onClickNumber)
document.querySelector('#num-5').addEventListener('click', onClickNumber)
document.querySelector('#num-6').addEventListener('click', onClickNumber)
document.querySelector('#num-7').addEventListener('click', onClickNumber)
document.querySelector('#num-8').addEventListener('click', onClickNumber)
document.querySelector('#num-9').addEventListener('click', onClickNumber)