import { Main, Header, Footer } from "./components/index";
import GlobalStyle from "./globalStyles";
export default function App() {

  return (
    <div className="App">
      <GlobalStyle />
      <Main />
      <Header />
      <Footer />
    </div>
  );
}
