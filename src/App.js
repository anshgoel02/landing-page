import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Social from "./components/Social";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
	return (
		<div>
			<Navbar />
			<Home />
			<Projects />
			<Social />
			<Skills />
			<Contact />
		</div>
	);
}

export default App;