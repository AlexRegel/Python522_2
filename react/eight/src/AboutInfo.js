import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function AboutInfo() {
    let { id } = useParams();
    let [post, setPost] = useState(null);  // [null] -> true
    let navigate = useNavigate();

    let goBack = () => navigate(-1);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(data => setPost(data))
    }, [id]);

    return (
        <div className="content">
            {
                post && (
                    <>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                        <button onClick={goBack}>Назад</button>
                        {/* {
                            console.log(!!null)
                        } */}
                    </>
                )
            }
        </div>
    )
}

export default AboutInfo;