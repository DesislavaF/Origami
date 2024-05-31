import Header from './components/Header';
import style from './App.module.css';

function App() {
  return (
    <div className={style.app}>
      <div className={style.container}></div>
     <Header />
    </div>
  );
}

export default App;
