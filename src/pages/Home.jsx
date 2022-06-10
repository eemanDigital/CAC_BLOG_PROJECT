
import "./home.css"
import Aside from  "../component/Aside"
import Form from "../component/Form"
// import menuBackground from "../images/image4.jpg";




function Home() {
  return (
    <div className="home">
        <Aside className="flexAside"/>
        <Form className="form" />
    </div>
  )
}

export default Home;
