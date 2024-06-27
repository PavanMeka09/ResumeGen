import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Button1 } from "./components/Button1";

const App = (props) => {
  return (
    <>
    <div className="flex flex-col justify-between h-screen items-center">
      <Header />
      <div >
      <Button1 text="hello"/>
      <Button1 text="hello"/>
      <Button1 text="hello"/>
      </div>
      <Footer />
    </div>
    </>
  )
}

export default App;