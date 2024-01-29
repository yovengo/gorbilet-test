import { useRef, useState } from 'react';
import { addSeatNumberLabel } from '../../utils/addSeatNumberLabel';
import { removeSeatNumberLabel } from '../../utils/removeSeatNumberLabel';
import { ReactComponent as HallSVG } from '../../assets/hall.svg';

export const Hall = () => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const handleClick = (target: HTMLElement) => {
    if (!target.classList.contains('place')) return;
    const isSeatSelected = selectedSeats.includes(target.id);

    setSelectedSeats((prevSelectedSeats) => {
      target.style.stroke = isSeatSelected ? 'none' : 'black';

      if (isSeatSelected) {
        removeSeatNumberLabel(target);
        return prevSelectedSeats.filter((id) => id !== target.id);
      } else {
        addSeatNumberLabel(target);
        return [...prevSelectedSeats, target.id];
      }
    });
  };

  return <HallSVG onClick={({ target }) => handleClick(target as HTMLElement)} />;
};
