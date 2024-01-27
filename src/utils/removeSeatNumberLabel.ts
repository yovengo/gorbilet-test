export const removeSeatNumberLabel = (target: HTMLElement) => {
  const idLabel = document.querySelector(`text[data-seat-id="${target.id}"]`);
  if (idLabel) {
    idLabel.remove();
  }
};
