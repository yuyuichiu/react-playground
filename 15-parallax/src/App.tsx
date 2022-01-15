import { useEffect, useState, useRef } from "react";
import "./App.scss";
import { Parallax, Background } from "react-parallax";


function App() {
  const img1 = 'https://picsum.photos/2000/1000';
  const img2 = 'https://picsum.photos/3000/1500';
  const img3 = 'https://picsum.photos/2500/1250';

  return (
    <>
      <Parallax strength={150} bgImage={img1}>
        <div className='custom'>
          <h2>It works</h2>
        </div>
      </Parallax>
      <div style={{ height: '400px', backgroundColor: 'teal' }}></div>
      <Parallax strength={150} bgImage={img2}>
        <div className='custom'>
          <h2>It works</h2>
        </div>
      </Parallax>
      <div style={{ height: '400px', backgroundColor: 'firebrick' }}></div>
      <Parallax strength={150} bgImage={img3}>
        <div className='custom'>
          <h2>It works</h2>
        </div>
      </Parallax>
      <div style={{ height: '400px', backgroundColor: 'salmon' }}></div>
    </>
  );
}

export default App;
