import { useParams } from "react-router-dom";
import LayoutProject from "../../../components/LayoutProject";

const Project = () => {
    const { name } = useParams()

    return ( 
        <>
        <LayoutProject>
        <h1>Projeto {name}</h1>7
        </LayoutProject>
        </>
     );
}
 
export default Project;