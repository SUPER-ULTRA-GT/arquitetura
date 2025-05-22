import { useParams } from "react-router-dom";
import LayoutProject from "../../../components/LayoutProject";
import Description from "../../../components/Description";

const Project = () => {
    const { name } = useParams()

    return ( 
        <>
        <LayoutProject>
        <h1>Projeto {name}</h1>
        <Description texto=""/>
        </LayoutProject>
        </>
     );
}
 
export default Project;