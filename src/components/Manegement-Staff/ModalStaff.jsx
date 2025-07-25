import { Formik, Form, Field } from "formik";
import { Backdrop, ModalFormContainer } from "./ModalStaff.styled";

const initialValues = {
  firstName: "",
  lastName: "",
  nickname: "",
  email: "",
  phoneUA: "",
  phoneUSA: "",
  position: "",
  role: "",
  username: "",
  password: "",
};

export const ModalStaff = ({ onClose }) => {
  return (
    <Backdrop onClick={onClose}>
      <ModalFormContainer onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose}>X</button>

        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log("Submitted staff member:", values);
            onClose();
          }}
        >
          {() => (
            <Form>
              <h2>Add Staff Member</h2>

              <label>First Name</label>
              <Field name="firstName" type="text" />

              <label>Last Name</label>
              <Field name="lastName" type="text" />

              <label>Nickname</label>
              <Field name="nickname" type="text" />

              <label>Email</label>
              <Field name="email" type="email" />

              <label>Phone (Ukraine)</label>
              <Field name="phoneUA" type="text" />

              <label>Phone (USA)</label>
              <Field name="phoneUSA" type="text" />

              <label>Position</label>
              <Field name="position" type="text" />

              <label>Role</label>
              <Field as="select" name="role">
                <option value="">Select Role</option>
                <option value="manager">Manager</option>
                <option value="dispatcher">Dispatcher</option>
                <option value="admin">Admin</option>
              </Field>

              <h3>Login Credentials</h3>
              <label>Username</label>
              <Field name="username" type="text" />

              <label>Password</label>
              <Field name="password" type="password" />

              <button type="submit">Save</button>
            </Form>
          )}
        </Formik>
      </ModalFormContainer>
    </Backdrop>
  );
};
