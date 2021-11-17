import React, { useState, useEffect } from "react";
import { fetchGrades, updateGrades, clearGrades } from "./../api/index";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";

export default function UserList() {
	const [grades, setGrade] = useState("");
	const [students, setStudents] = useState([]);

	const fetchData = async () => {
		const dataGet = await fetchGrades();
		setStudents(dataGet);
	};

	useEffect(async () => {
		await fetchData();
	}, []);

	console.log(students);

	return (
		<div className='App'>
			<Typography variant='h6' component='div'>
				Input Grades
			</Typography>
			<TextareaAutosize
				value={grades}
				onChange={(e) => {
					setGrade(e.target.value);
				}}
				style={{ width: "40%" }}
				/>
			<Button
				onClick={async () => {
					await updateGrades(grades);
					await fetchData();
					setGrade("");
				}}
			>
				Add Grades
			</Button>
			<Button
				onClick={async () => {
					await clearGrades();
					await fetchData();
					setGrade("");
				}}
			>
				Clear Grades
			</Button>
			<Grid container spacing={2}>
				<Grid item xs={12} md={6}>
					<Typography variant='h6' component='div'>
						Student List
					</Typography>

					<List>
						{students.map((student) => {
							return (
								<ListItem>
									<ListItemText
										primary={`${student.firstName} ${student.lastName}`}
										secondary={
											<Link href={`/student/${student._id}`}>Grades</Link>
										}
									/>
								</ListItem>
							);
						})}
					</List>
				</Grid>
			</Grid>
		</div>
	);
}
