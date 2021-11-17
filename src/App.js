import "./App.css";
import React from "react";
import UserList from "./components/userList";
import ReportCard from "./components/reportCard";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<UserList />} />
				<Route path='/student/:id' element={<ReportCard />} />
			</Routes>
		</div>
	);
}

export default App;
