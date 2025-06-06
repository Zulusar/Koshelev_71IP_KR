import { useMemo, useState } from "react";
import { studentGroup } from "../Group/StudentGroup";

export function RussianLanguage(){
    const [ratings, setratings] = useState (studentGroup)

    const [ratings1, setratings1] = useState (studentGroup)

    const [ratings2, setratings2] = useState (studentGroup)
    
    let newRat = 0
    let newRat1 = 0
    let newRat2 = 0

    function handleRating(event){    
        const newStudentGroup = ratings.map(student => {
            //console.log(newRat)
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
        //console.log(newResult.toFixed(1))
        return newResult.toFixed(1)
    }

    /*componentWillReceiveProps(nextProps) {
    if(nextProps.a > x) {
         this.setState({checked: 'checked'});
    }*/



    return(
        <>
            <header>Русский язык</header>
            {ratings.map((student) => (
                <div key = {student.id}>
                    <p>{student.name = "Филимон Хуч"}</p>
                    <input type ="number" min = "1" max = "5" value = {student.rating} onChange={handleRating}></input>
                </div>
            ))}

            {ratings1.map((student) => (
                <div key = {student.id}>
                    <p>{student.name = "Джей Ди"}</p>
                    <input type ="number" min = "1" max = "5" value = {student.rating} onChange={handleRating1}></input>
                </div>
            ))}

            {ratings2.map((student) => (
                <div key = {student.id}>
                    <p>{student.name = "Доктор Терколтон"}</p>
                    <input type ="number" min = "1" max = "5" value = {student.rating} onChange={handleRating2}></input>
                </div>
            ))}
            <div>
                <h3>Средняя оценка</h3>
                <p>{result()}</p>
            </div>
           

        </>

    )
}

