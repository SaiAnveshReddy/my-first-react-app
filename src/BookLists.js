import './index.css'
import Book from './Book';
import { data } from "./data.js"

function BookLists() {
    return (<section className='booklist'>
        {data.map(data=>{
            return(
                <Book img={data.img} title={data.title} author={data.author}></Book>
            )
        })}
    </section>);
}



