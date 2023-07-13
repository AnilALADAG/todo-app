import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';
import { TodoProvider } from './contexts/todoContext';

function App() {
  return (
    <TodoProvider>
      <section className="todoapp">
        <Header />
        <Content />
      </section>
      <Footer />
    </TodoProvider>
  );
}

export default App;
