import './App.scss';
import Menu from "./Menu";
import ThemeProvider from './ThemeProvider';

function App() {

  return (
    <ThemeProvider>
      <div className="App">

        <Menu/>

        <main>

          <header>
            <h3>
              Welcome X
            </h3>

            <input
              placeholder='Search'
            />
          </header>

        </main>

      </div>
    </ThemeProvider>
  );
}

export default App;