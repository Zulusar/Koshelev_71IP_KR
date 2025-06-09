import {  useState } from "react";
import { studentGroup } from "../Group/StudentGroup";
import { Link } from 'react-router-dom'

export function Mathematics(){
    const [ratings, setratings] = useState (studentGroup)

    const [ratings1, setratings1] = useState (studentGroup)

    const [ratings2, setratings2] = useState (studentGroup)
    
    let newRat = 0
    let newRat1 = 0
    let newRat2 = 0

    function handleRating(event){    
        const newStudentGroup = ratings.map(student => {
            newRat = event.target.value
            return {...student, rating: newRat}
            
        });
        setratings(newStudentGroup)
    }

    function handleRating1(event){
        const newStudentGroup = ratings1.map(student => {
            newRat1 = event.target.value
            return {...student, rating: newRat1}
        });
        setratings1(newStudentGroup)
    }

    function handleRating2(event){
        const newStudentGroup = ratings2.map(student => {
            newRat2 = event.target.value
            return {...student, rating: newRat2}
        });
        setratings2(newStudentGroup)
    }

    function result(){
        let newResult = (Number(ratings[0].rating) + Number(ratings1[0].rating) + Number(ratings2[0].rating))/3
        return (Number.isNaN(newResult) ? newResult = 0: newResult.toFixed(1))
    }

    return(
        <div>
        <header><Link to='/'>Классный журнал</Link></header>
            <h1>Математика</h1>
            {ratings.map((student) => (
                <div key = {student.id}>
                    <li>{student.name = "Филимон Хуч"}</li>
                    <input type ="number" min = "2" max = "5" value = {student.rating} onChange={handleRating}></input>
                </div>
            ))}

            {ratings1.map((student) => (
                <div key = {student.id}>
                    <li>{student.name = "Джей Ди"}</li>
                    <input type ="number" min = "2" max = "5" value = {student.rating} onChange={handleRating1}></input>
                </div>
            ))}

            {ratings2.map((student) => (
                <div key = {student.id}>
                    <li>{student.name = "Доктор Терколтон"}</li>
                    <input type ="number" min = "2" max = "5" value = {student.rating} onChange={handleRating2}></input>
                </div>
            ))}
            <div>
                <h3>Средняя оценка</h3>
                <p>{result()}</p>
            </div>
        </div>

    )
}

