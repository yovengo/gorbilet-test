import { createSeatNumberLabel } from './createSeatNumberLabel';

export const addSeatNumberLabel = (target: HTMLElement) => {
  const svgContainer = target.closest('svg');
  if (!svgContainer) return;

  const seatNumberLabel = createSeatNumberLabel(target);
  svgContainer.appendChild(seatNumberLabel);
};
