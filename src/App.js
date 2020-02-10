import React, {useState, useEffect} from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import Body from './components/Body/Body';

const menuItems = ["ABOUT", "SKILLS", "PROJECTS", "PROJECTS", "PROJECTS", "PROJECTS", "CONTACT"];
const currentNumPages = menuItems.length+1;

function App() {

  const [scrollPosition, setScroll] = useState(0);

  useEffect(()=>{
      let totalHeight = document.getElementsByClassName('body-main')[0].clientHeight;
      let perPageHeight = parseInt(Math.floor(totalHeight/currentNumPages)) - 50;
      let scrollCheckInt = setInterval(()=>{
          let curPos = window.pageYOffset;
          if(parseInt(Math.floor(curPos/perPageHeight)) !== scrollPosition){
              setScroll(parseInt(Math.floor(curPos/perPageHeight)));
          }
      }, 500);
      return ()=>clearInterval(scrollCheckInt);
  }, [scrollPosition]);


  return (
    <div className="App">
      <header className="App-header">
        <Menu menuItems={menuItems} scrollPosition={scrollPosition}></Menu>
      </header>
      <main className="App-main">
        <Body scrollPosition={scrollPosition}></Body>
      </main>
    </div>
  );
}

export default App;
