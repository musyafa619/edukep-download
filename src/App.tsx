import './App.css';
import EdukepLogo from './assets/images/edukep-logo.png';

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="card">
          <img src={EdukepLogo} className="image" />
          <p className="title">Edukep</p>
          <p className="description">Aplikasi edukasi kesehatan diabetes</p>
        </div>

        <button
          onClick={() =>
            window.open(
              'https://github.com/musyafa619/edukep-download/releases/download/v1.1.1/edukep.apk',
              '_blank'
            )
          }
          className="download-button"
        >
          Unduh Sekarang
        </button>
      </div>
    </div>
  );
}

export default App;
