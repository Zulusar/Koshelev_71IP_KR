import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import { RussianLanguage } from '../RusLan/russianlanguage'

export function Title(){
    return(
    <div>
        <header>Классный журнал</header>
        <div>
            <span>Химия </span> <span>Русский язык </span> <span>Математика </span><span>Литература</span>
        </div>
        <div>
            {RussianLanguage()}
        </div>

            
          
             
            
        
    </div>
    )
    
}