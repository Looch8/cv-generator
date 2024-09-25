const GeneralInfo = ({
	handleNameInput,
	handleEmailInput,
	handleNumberInput,
	handleSubmit,
}) => {
	return (
		<form onSubmit={handleSubmit}>
			<label>Name:</label>
			<input onChange={handleNameInput}></input>
			<label>Email:</label>
			<input onChange={handleEmailInput}></input>
			<label>Phone Number:</label>
			<input onChange={handleNumberInput}></input>
			<button>Submit</button>
		</form>
	);
};

export default GeneralInfo;
