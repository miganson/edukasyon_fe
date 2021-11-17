export const fetchGrades = async () => {
	const query = `http://139.59.121.104/api/students`;
	return fetch(query, {
		method: "GET",
	}).then(async (res) => {
		const data = await res.json();
		return data;
	});
};

export const clearGrades = async () => {
	const query = `http://139.59.121.104/api/clear`;
	return fetch(query, {
		method: "GET",
	}).then(async (res) => {
		const data = await res.json();
		return data;
	});
};

export const fetchStudent = async (id) => {
	const query = `http://139.59.121.104/api/student/${id}`;
	return fetch(query, {
		method: "GET",
	}).then(async (res) => {
		const data = await res.json();
		return data;
	});
};

export const updateGrades = async (grades) => {
	const query = `http://139.59.121.104/api/students`;
	return fetch(query, {
		headers: { "Content-Type": "application/json" },
		method: "POST",
		body: JSON.stringify({ grades }),
	}).then(async (res) => {
		const data = await res.json();
		return data;
	});
};
