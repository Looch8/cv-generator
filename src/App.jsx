import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import DisplayResume from "./components/DisplayResume";

function App() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [number, setNumber] = useState("");
	const [displayForm, setDisplayForm] = useState(false);
	const [displayInput, setDisplayInput] = useState(true);

	const handleNameInput = (e) => {
		setName(e.target.value);
	};
	const handleEmailInput = (e) => {
		setEmail(e.target.value);
	};
	const handleNumberInput = (e) => {
		setNumber(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setDisplayForm(true);
		setDisplayInput(false);
	};

	const handleEditClick = () => {
		setDisplayInput(true);
	};

	return (
		<>
			<GeneralInfo
				handleSubmit={handleSubmit}
				handleNameInput={handleNameInput}
				handleNumberInput={handleNumberInput}
				handleEmailInput={handleEmailInput}
				name={name}
				email={email}
				number={number}
				displayInput={displayInput}
				handleEditClick={handleEditClick}
			/>
			<DisplayResume
				name={name}
				email={email}
				number={number}
				displayForm={displayForm}
			/>
		</>
	);
}

export default App;
