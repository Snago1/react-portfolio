import {
  Header,
  Footer,
  Home,
  About,
  Cervices,
  Clients,
  Contacts,
  Portfolio,
  Skills
} from "./components/index";
function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Cervices />
        <Clients />
        <Contacts />
        <Portfolio/>
        <Skills/>
        <div className="container">
          <h1>React Portfolio</h1>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
