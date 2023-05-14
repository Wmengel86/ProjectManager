import React, { useState } from "react";
import CreateProject from "../components/createProject";
import DisplayAll from "../components/DisplayAll";

const Main = (props) => {
    
    const [projectList, setProjectList] = useState([]);

    return (
        <div>
            { }
            <CreateProject
                projectList={projectList}
                setProjectList={setProjectList}
            />
                        
            <DisplayAll
                projectList={projectList}
                setProjectList={setProjectList}
            />
        </div>
    );
};

export default Main;