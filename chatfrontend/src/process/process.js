import { useSelector } from "react-redux";
import "./process.scss";
function Process() {

  const state = useSelector((state) => state.ProcessReducer);

  return (
    <div className="process">
     
    </div>
  );
}
export default Process;
