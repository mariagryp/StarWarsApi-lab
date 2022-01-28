const FilmItem = ({ film,  handleOpenModal }) => {

    const pStyles = {
        padding: "5px 0px",
        fontSize: "18px"
    }

    return (
    <div 
    onClick={() =>  handleOpenModal(film)}
    style={{
        border: '2px solid black',
        padding: '20px',
        margin: '20px',
        width: '250px',
        textAlign: 'center',
        cursor: 'pointer',
        boxShadow: '10px 10px 5px',
    }}>
        <p style ={pStyles}>{film.title}</p>
        <p style ={pStyles}>{film.release_date}</p>
    </div>
    )
};

export default FilmItem;