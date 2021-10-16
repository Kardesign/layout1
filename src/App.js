
import './App.css';
import Cajita from './Components/Cajita';


function App() {
  return (
    <div className="App">

      <div className="Header">
    
    </div>
      <nav>
        <a href="#">Home</a>
        <a href="#">Portfolio</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </nav>

     <img src="https://cdn.pixabay.com/photo/2021/08/29/13/11/kingfisher-6583224_1280.jpg" alt="" /> 

    <Cajita></Cajita>

      
      <div className="cajota">
        
        <div className="cajita">
          <img src="https://cdn.pixabay.com/photo/2021/08/29/13/11/kingfisher-6583224_1280.jpg" alt="" />
          <img src="https://cdn.pixabay.com/photo/2016/12/13/22/25/bird-1905255_1280.jpg" alt="" />
          <img src="https://cdn.pixabay.com/photo/2017/03/13/10/25/hummingbird-2139279_1280.jpg" alt="" />
          <img src="https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_1280.jpg" alt="" />
        </div>
        
      </div>
      
      <div className="contenedor-fotos">
        <div className="fotos foto1">
          <h3>foto #1</h3>
          <p>concierto rock</p>
        </div>
        <div className="fotos foto2">
          <h3>foto #2</h3>
          <p>concierto pop</p>
        </div>
        <div className="fotos foto3">
          <h3>foto #3</h3>
          <p>concierto reggae</p>
        </div>
        <div className="fotos foto4">
          <h3>foto #4</h3>
          <p>concierto jazz</p>
        </div>
        <div className="fotos foto5">
          <h3>foto #5</h3>
          <p>concierto jazz</p>
        </div>
        
      </div>

    </div>
  );
}

export default App;
