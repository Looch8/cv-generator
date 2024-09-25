const DisplayResume = ({ name, email, number, displayForm }) => {
	if (displayForm == false) {
		return <h1>Resume will appear here...</h1>;
	} else
		return (
			<div className="display-content">
				<h3>Name: {name}</h3>
				<h3>Email: {email}</h3>
				<h3>Phone Number: {number}</h3>
			</div>
		);
};

export default DisplayResume;
