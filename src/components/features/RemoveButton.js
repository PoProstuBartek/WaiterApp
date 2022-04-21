import { CloseButton } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeThatTable } from "../../redux/tableRedux";

const RemoveButton = props => {
  const dispatch = useDispatch();

  const removeTable = tableId => {
    dispatch(removeThatTable(tableId))
  }

  return (
    <CloseButton className="mt-3" onClick={() => removeTable(props.tableId)} />
  )
}

export default RemoveButton;