// Your code here

function moveDodgerLeft() {
  const dodger = document.getElementById('dodger');
  const leftNumbers = dodger.style.left.replace('px', '');
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  const dodger = document.getElementById('dodger');
  const leftNumbers = dodger.style.left.replace('px', '');
  const left = parseInt(leftNumbers, 10);

  if (left < 360) { // Assuming the game area width is 400px and dodger width is 40px
    dodger.style.left = `${left + 1}px`;
  }
}
