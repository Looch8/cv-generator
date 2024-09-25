import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import DisplayResume from "./components/DisplayResume";

function App() {
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [number, setNumber] = useState();

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
			/>
			<div className="display-content">
				<DisplayResume name={name} email={email} number={number} />
			</div>
		</>
	);
}

export default App;
