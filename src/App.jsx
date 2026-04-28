import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import { Navbar, Welcome } from "#components";
import Dock from "#components/Dock";
import { Terminal, Safari, Resume, Finder, Text, Photos } from "#windows";

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
    </main>
  );
};

export default App;
