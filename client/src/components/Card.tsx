import { getAbsences } from "../store/AbsencesSlice";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useTypedSelector";

function Card() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAbsences());
  }, []);

  const { absences, loading, error } = useAppSelector((state) => state);
  console.log(absences, loading, error);
  return <div>Absence Manager</div>;
}

export default Card;
