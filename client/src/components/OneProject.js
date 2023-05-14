import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const OneProject = (props) => {
    
    const { id } = useParams();
    const [oneProject, setOneProject] = useState({});

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/projects/${id}`)
            .then((res) => {
                console.log(res.data);
                setOneProject(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]); 

    return (
        <div className="oneProject-component">
            <h2>{oneProject.title}</h2>
            <p>Price: ${oneProject.price}</p>
            <p>Description: {oneProject.description}</p>
        </div>
    );
};

export default OneProject;