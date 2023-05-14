import React, { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const DisplayAll = (props) => {
    
    const navigate = useNavigate();

    const { projectList, setProjectList} = props;

    
    useEffect(() => {
        axios.get("http://localhost:8000/api/projects")
            .then((res) => {
                console.log(res.data);
                setProjectList(res.data);
                
            })
            .catch((err) => console.log(err));
    },[]); 

    const deleteFilter = (idFromBelow) => {
        
        axios.delete(`http://localhost:8000/api/projects/${idFromBelow}`)
            .then((res) => {
                console.log(res.data);
                
                const newList = projectList.filter((project, index) => project._id !== idFromBelow)
                setProjectList(newList);
                
            })
            .catch((err) => {
                console.log(err);
            });
        };

    return (
        <div>
            <header>
                All Products:
            </header>
            {
                projectList.map((project, index) => (
                    <div key={index}>
                        { }
                        { }
                        <Link to={`/project/${project._id}`}>
                            {project.title}
                        </Link>

                            { }
                        <button onClick={() => navigate(`/projects/edit/${project._id}`)}>
                            Edit
                        </button>

                            { }
                        <button onClick={() => deleteFilter(project._id)}>
                            Delete
                        </button>

                    </div>
                ))
            }
        </div>
    );
};

export default DisplayAll;