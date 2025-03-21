import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Card from "./components/card"
function App() {

  return (
    <>
    <Navbar/>
    <div className="cards">
      <Card title="Hey" para="It's My First React App"/>
      <Card title="I" para="I I Don't Know"/>
      <Card title="Am" para="What I Am"/>
      <Card title="Charan" para="Writting"/>
    </div>
    <Footer/>
    </>
  )
}

export default App
