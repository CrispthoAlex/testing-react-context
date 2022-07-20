import './App.css';
import Page from './components/Page';
import PageContext from './components/PageContext';


function App() {
  return (
    <div className="App">
      <header className="">
        <h1>React Context API</h1>
        <a
          href='https://es.reactjs.org/docs/context.html'
          target='_blank'
          rel='noreferrer'
        >
          Documentación
        </a>
      </header>
      <hr/>
      <PageContext />
      <hr /><hr />
      <Page />
    </div>
  );
}

export default App;
