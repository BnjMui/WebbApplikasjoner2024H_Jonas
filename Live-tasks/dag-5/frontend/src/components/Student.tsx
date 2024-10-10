import { useState } from "react";
import Avatar from "./Avatar";
export type StudentType = {
  id: string;
  name: string;
};
export type StudentProps = {
  id: string;
  name: string;
};
export default function Student(
  props: StudentProps & { onRemoveStudent: (id: string) => void }
) {
  const [showRemove, setShowRemove] = useState(false);

  const { id: id, name: name, onRemoveStudent } = props;
  const updateShowState = () => {
    setShowRemove(true);
  };

  return (
    <div
      onMouseOver={updateShowState}
      onMouseLeave={() => setShowRemove(false)}
      className="students"
    >
      <Avatar name={name} />
      <p className="student-name">{name}</p>
      {showRemove ? (
        <button
          type="button"
          className="delete-btn"
          onClick={() => onRemoveStudent(id)}
        >
          Remove
        </button>
      ) : null}
    </div>
  );
}
