import { StyledAddDriverButton } from "./AddDriverButton.styled";

const AddDriverButton = ({ onClick }) => {
  return (
    <div>
      <StyledAddDriverButton onClick={onClick}>
        + Add New Driver
      </StyledAddDriverButton>
    </div>
  );
};

export default AddDriverButton;
