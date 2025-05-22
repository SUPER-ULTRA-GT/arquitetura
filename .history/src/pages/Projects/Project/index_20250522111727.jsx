import { useParams } from "react-router-dom";

const Project = () => {
    const { name } = useParams()

    return ( 
        <h1>Projeto {name}</h1>
     );
}
 
export default Project;