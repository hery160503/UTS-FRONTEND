//import component Header(teknik export default) 
import Header from "./component/header";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";


export default function MyApp() {
  return ( 
    <div>
     <Header />
     <Navbar/>
     <Footer/>
    </div>
  );
}