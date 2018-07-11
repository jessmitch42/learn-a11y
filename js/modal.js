var modal        = document.querySelector('.focus-modal');
var modalButton  = document.querySelector('.focus-modal-button');
var modalOverlay = document.querySelector('.focus-modal-overlay');
var cancelButton = document.querySelector('.focus-modal-cancel');

modalButton.addEventListener('click', open);
cancelButton.addEventListener('click', close);

// Get a list of tabbable elements here:
// https://github.com/jkup/focusable

function open() {
  var focusableElements = modal.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls], summary');
  focusableElements = Array.prototype.slice.call(focusableElements);
  // Show the modal and overlay
  var firstItem = focusableElements[0];
  var lastItem = focusableElements[focusableElements.length-1]
  var previouslyFocused = document.activeElement;

  modal.addEventListener('keydown', trap);

  modal.style.display = 'block';
  modalOverlay.style.display = 'block';

  function trap(e) {
    console.log(document.activeElement)
    console.log(lastItem)
    if (e.keyCode === 9) { //tab
      // if shift is held down
      if (e.shiftKey) {
        //going backwards
        if (document.activeElement === firstItem) {
          e.preventDefault;
          lastItem.focus();
        }
      }
      // if shift is not held down
      else {
        if (document.activeElement === lastItem) {
          e.preventDefault;
          firstItem.focus();
        }
      }
    }
    else if (e.keyCode === 27) {
      close();
    }
  }

}

function close() {
  // Hide the modal and overlay
  modal.style.display = 'none';
  modalOverlay.style.display = 'none';
}
