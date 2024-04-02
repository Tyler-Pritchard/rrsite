import { Header } from "./components/index";
import GlobalStyle from "./globalStyles";
import Footer from '../src/components/footer/Footer';
export default function App() {

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Footer />
    </div>
  );
}
