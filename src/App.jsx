import { Header, Footer, Home } from "./components/index";
function App() {
  return (
    <>
    <Header/>
      <main>
        <Home/>
        <div className="container">
          <h1>React Portfolio</h1>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default App;
