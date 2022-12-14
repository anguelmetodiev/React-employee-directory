import { useParams } from "react-router-dom";
import data from "../data";


export default function EmployeePage(props) {
  const { id } = useParams();
  const params = parseInt(id);

  const info = data.find((element) => {
    return element.id === params;
  });

  return (
    <div className="employeeinfo">
      <br />
      <br />
      <img src={info.img} className="imgs"></img>
      <br />
      <br />
      <span className="class">Name:  </span>
      <span className="number">{info.name}</span>
      <br />
      <br />   
      <span className="class">Title:  </span>
      <span className="number"> {info.title}</span>
    </div>
  );
}
