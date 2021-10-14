
import './App.css';
import Cajita from './Components/Cajita';


function App() {
  return (
    <div className="App">

      <div className="Encabezado">
          <h1>Este es un sitio muy especial</h1>
     
          <p>Esto es una descripcion de la pagina con un parrafo muy bonito</p>

      </div>
      

    <Cajita></Cajita>

      <div className="banner">
          <h1>Banner</h1>
          <p>te lo vendo</p>
      </div>

     

      <div className="cajota">
        <h1>cajota 1</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id debitis sunt aliquid magni! Adipisci dicta, aut vel obcaecati minima eligendi, fugiat perspiciatis voluptates ipsam reiciendis voluptatem magni corrupti, earum ut iure pariatur harum nesciunt dolorum. Tenetur ex ullam, ab labore repellat adipisci ratione. Sint amet minus maxime neque necessitatibus reiciendis.</p>
        <div className="cajita">
          <img src="https://cdn.pixabay.com/photo/2020/09/26/14/27/sparrow-5604220_1280.jpg" alt="" />
          <img src="https://cdn.pixabay.com/photo/2020/09/26/14/27/sparrow-5604220_1280.jpg" alt="" />
          <img src="https://cdn.pixabay.com/photo/2020/09/26/14/27/sparrow-5604220_1280.jpg" alt="" />
          <img src="https://cdn.pixabay.com/photo/2020/09/26/14/27/sparrow-5604220_1280.jpg" alt="" />
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
          <p>concierto punk</p>
        </div>
      </div>

    </div>
  );
}

export default App;
