import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import { Dock, Navbar, Welcome, Home } from "#components";
import {
  Terminal,
  Safari,
  Resume,
  Finder,
  Text,
  Photos,
  Contact,
  ImagePreview,
} from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Photos />
      <Contact />
      <ImagePreview />
      <Home />
    </main>
  );
};

export default App;
