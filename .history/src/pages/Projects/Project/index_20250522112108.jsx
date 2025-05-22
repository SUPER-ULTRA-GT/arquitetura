import { useParams } from "react-router-dom";
import LayoutProject from "../../../components/LayoutProject";

const Project = () => {
    const { name } = useParams()

    return ( 
        <>
        <LayoutProject>
            
        </LayoutProject>
        <h1>Projeto {name}</h1>
        </>
     );
}
 
export default Project;