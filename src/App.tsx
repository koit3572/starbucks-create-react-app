import Navbar from './components/navbar/Navbar';
import Notice from './components/notice/Notice';
import Visual from './components/visual/Visual';
function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <section>
        <Visual />
      </section>
      <section>
        <Notice />
      </section>
      <footer>
        
      </footer>
    </>
  );
}

export default App;
  