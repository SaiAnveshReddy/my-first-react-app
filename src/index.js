import ReactDOM from "react-dom";
import "./index.css";
import { data } from "./data.js";
import Book from "./Book";
import { useState, useEffect } from "react";

function MainBook() {

    const [searchField, setSearchField] = useState("");

    
    console.log(searchField);

    const displaySearchText = (event) => {
        setSearchField(event.target.value);
    }

    return (
        <section className="mainBook">
            <div>
                <div className="box">
                    <form name="search">
                        <input
                            type="search"
                            className="input"
                            name="txt"
                            placeholder="Search a book by Title"
                            onChange={displaySearchText}
                        />
                    </form>
                </div>
            </div>
            <BookLists data={data}></BookLists>
        </section>
    );
}

const BookLists = (props) => {


    console.log(props.data);
    return (
        <section className="booklist">
            {props.data.map((data1) => {
                console.log(data1);
                return (
                    <Book img={data1.img} title={data1.title} author={data1.author}></Book>
                );
            })}
            {/* <Book img={data[0].img} title={data[0].title} author={data[0].author}><p style={{fontSize:'0.75rem'}}>Checking Children Prop</p></Book>
        <Book img={data[1].img} title={data[1].title} author={data[1].author}></Book>
        <Book img={data[2].img} title={data[2].title} author={data[2].author}></Book>
        <Book img={data[3].img} title={data[3].title} author={data[3].author}></Book>
        <Book img={data[4].img} title={data[4].title} author={data[4].author}></Book>
        <Book img={data[5].img} title={data[5].title} author={data[5].author}></Book>
        <Book img={data[6].img} title={data[6].title} author={data[6].author}></Book>
        <Book img={data[7].img} title={data[7].title} author={data[7].author}></Book> */}
        </section>
    );
}

ReactDOM.render(<MainBook />, document.getElementById("root"));
