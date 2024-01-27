import React from 'react';
import ReactDOM from 'react-dom/client';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { App } from './app/App';
import { Controls } from './components/Controls/Controls';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <TransformWrapper>
    {(utils) => (
      <>
        <Controls {...utils} />
        <TransformComponent>
          <App />
        </TransformComponent>
      </>
    )}
  </TransformWrapper>
);
