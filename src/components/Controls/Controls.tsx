import styles from './Controls.module.css';
import { ReactZoomPanPinchContentRef } from 'react-zoom-pan-pinch';

export const Controls: React.FC<ReactZoomPanPinchContentRef> = ({ zoomIn, zoomOut }) => (
  <aside className={styles.controlsWrapper}>
    <button className={styles.controlBtn} onClick={() => zoomIn()}>
      +
    </button>
    <button className={styles.controlBtn} onClick={() => zoomOut()}>
      -
    </button>
  </aside>
);
