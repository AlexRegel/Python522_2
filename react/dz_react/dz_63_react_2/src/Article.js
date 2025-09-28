import './Article.css';

function Article(props) {
    var { title, db } = props;
    return (
        <div className="alll">
            <h6>{title}</h6>

            <div className="app">
                {
                    Object.keys(db).map(elem => {
                        return (
                            <div className="itemView" key={db[elem].name}>
                                <img src={db[elem].photo} alt="img" />
                                <div className='name'>{db[elem].name} </div>
                                <div className='album'>{db[elem].album}</div>
                                <div className='release'>{db[elem].release}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Article;