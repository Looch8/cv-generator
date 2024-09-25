const DisplayResume = ({ name, email, number }) => {
	return (
		<div>
			<h3>Name: {name}</h3>
			<h3>Email: {email}</h3>
			<h3>Phone Number: {number}</h3>
		</div>
	);
};

export default DisplayResume;
