import { Link } from 'react-router-dom'
import '../Title/title.css'

export function Title(){
    return(
    <div>
       <header>Классный журнал</header> 
       <p><Link to='/russianlanguage'>Русский язык</Link></p>
       <p><Link to='/mathematics'>Математика</Link></p>
       <p><Link to='/literature'>Литература</Link></p>
       <p><Link to='/chemistry'>Химия</Link><p></p></p>       
    </div>
    )   
}