import { getSeatNumber } from './getSeatNumber';

export const createSeatNumberLabel = (target: HTMLElement) => {
  const seatNumberLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  seatNumberLabel.setAttribute('x', target.getAttribute('x') || '');
  seatNumberLabel.setAttribute('y', target.getAttribute('y') || '');
  seatNumberLabel.setAttribute('dominant-baseline', 'middle');
  seatNumberLabel.setAttribute('text-anchor', 'middle');
  seatNumberLabel.setAttribute('fill', 'black');
  seatNumberLabel.setAttribute('pointer-events', 'none');
  seatNumberLabel.setAttribute('data-seat-id', target.id);
  seatNumberLabel.textContent = getSeatNumber(target.id) || '';

  return seatNumberLabel;
};
