
const Book = ({img, title,author,children}) => {
    // const {img, title,author}=props;
    return (
        <article className="book">
            <Image img={img} />
            <Title title={title} />
            {children}
            <Author author={author} />
        </article>
    );
};

const Image = (props) => {
    return (
        <img className="image" src={props.img} alt="" width={300} height={200} />
    );
};

const Title = (props) => {
    return (
        <h3>
            <p className="title">
                <i>Title:</i>
            </p>
            {props.title}
        </h3>
    );
};

const Author = (props) => {
    return (
        <h5 style={{color:'617d98', fontSize: '0.75rem', marginTop:'0.25rem'}}>
            <p className="author">
                <i>Author:</i>
            </p>
            {props.author}
        </h5>
    );
};
export default Book;
