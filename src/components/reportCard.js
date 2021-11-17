import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { fetchStudent } from "./../api/index";
import { useParams } from "react-router-dom";

export default function ReportCard() {
	const getPersonGrades = (quarter) => {
		if (!quarter) return "";

		console.log("======");
		const homework = quarter.homework;
		const min = Math.min(...homework);
		homework.splice(homework.indexOf(min), 1);
		const homeworkAverage = homework.length
			? (homework.reduce((prev, current) => {
					return prev + current;
			  }) /
					homework.length) *
			  0.4
			: 0;

		const testGradesAverage = quarter.testGrades.length
			? (quarter.testGrades.reduce((prev, current) => {
					return prev + current;
			  }) /
					quarter.testGrades.length) *
			  0.6
			: 0;

		const finalGrade = (homeworkAverage + testGradesAverage).toFixed(1);

		quarter.finalGrade = finalGrade;
	};
	const [student, setStudent] = useState(null);
	const [grades, setGrades] = useState(null);

	const { id } = useParams();

	const fetchStudentData = async () => {
		const studentDataGet = await fetchStudent(id);
		setStudent(studentDataGet);

		getPersonGrades(studentDataGet.grades.quarter1);
		getPersonGrades(studentDataGet.grades.quarter2);
		getPersonGrades(studentDataGet.grades.quarter3);
		getPersonGrades(studentDataGet.grades.quarter4);
		setGrades(studentDataGet.grades);
	};

	useEffect(async () => {
		await fetchStudentData();
	}, []);

	if (!grades) {
		return <div>"Loading..";</div>;
	}

	const renderQuarter = (quarter) => {
		return (
			<>
				<h3>{quarter}</h3>
				<TableRow>
					<TableCell component='th' scope='row'>
						Homework
					</TableCell>
					{grades &&
						grades[quarter].homework.map((grade) => {
							return <TableCell>{grade}</TableCell>;
						})}
				</TableRow>
				<TableRow>
					<TableCell component='th' scope='row'>
						Tests
					</TableCell>
					{grades &&
						grades[quarter].testGrades.map((grade) => {
							return <TableCell>{grade}</TableCell>;
						})}
				</TableRow>
				<TableRow>
					<TableCell component='th' scope='row'>
						<b>Final Grade: {grades[quarter].finalGrade}</b>
					</TableCell>
				</TableRow>
			</>
		);
	};

	return (
		<TableContainer component={Paper}>
			<a href='/'>
				<h3>Back</h3>
			</a>
			<h2>Name: {student.firstName + " " + student.lastName}</h2>
			<Table>
				<TableBody>
					{renderQuarter("quarter1")}
					{renderQuarter("quarter2")}
					{renderQuarter("quarter3")}
					{renderQuarter("quarter4")}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
