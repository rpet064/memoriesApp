import Footer from "./Footer";
import HomeScreen from "./homeScreen/HomeScreen";
import "./styles/styles.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrashCan, faNoteSticky, faPhotoFilm, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

library.add(faTrashCan, faNoteSticky, faPhotoFilm, faGithub, faLinkedin, faEnvelope)

export default function App() {
  return (
    <div className="App">
      <HomeScreen />
      <Footer />
    </div>
  );
}
