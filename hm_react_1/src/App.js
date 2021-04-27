
import './App.css';
import Header from "./components/Header/header";
import Main from "./components/Main/main";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div>
     <Header name={"іван"} surname={"кальницький"}/>
     <Main name={"іван"} surname={"кальницький"} namber={19}/>
     <Footer name={"іван"}/>
    </div>
  );
}

export default App;
