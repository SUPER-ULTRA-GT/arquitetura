import { useParams } from "react-router-dom";

const Project = () => {
    const { name } = useParams()

    return ( 
        <>
        <Proje
        <h1>Projeto {name}</h1>
        </>
     );
}
 
export default Project;