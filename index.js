// Your code here

const dodger = document.getElementById('dodger')
dodger.style.backgroundColor = "#000000";
dodger.style.backgroundColor = "#00ffff";
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(rightNumbers, 10);

    if (left > 0) {
      dodger.style.left = `${left + 1}px`;
    }
  }
