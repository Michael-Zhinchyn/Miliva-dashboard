import { useState } from "react";
import { Formik, Form, Field } from "formik";
import {
  Backdrop,
  ModalContainer,
  CloseButton,
  DropZone,
  PreviewContainer,
  PreviewItem,
  PreviewImage,
  SubmitButton,
} from "./Modal.styled";

const initialValues = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  licence: "",
  cdl: "",
  username: "",
  password: "",
  role: "driver",
  documents: [], // тут зберігатимемо всі файли
};

export const ModalDriver = ({ onClose }) => {
  const [dragOver, setDragOver] = useState(false);

  return (
    <Backdrop>
      <ModalContainer>
        {/* Кнопка закриття */}
        <CloseButton onClick={onClose}>✕</CloseButton>

        <h2>Add Driver</h2>

        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log("Submitted driver:", values);
            onClose();
          }}
        >
          {({ values, setFieldValue }) => (
            <Form>
              {/* Основні дані водія */}
              <label>First Name</label>
              <Field name="firstName" type="text" />

              <label>Last Name</label>
              <Field name="lastName" type="text" />

              <label>Phone Number</label>
              <Field name="phoneNumber" type="text" />

              <label>Driver's Licence Number</label>
              <Field name="licence" type="text" />

              <label>CDL?</label>
              <div>
                <label>
                  <Field type="radio" name="cdl" value="yes" /> Yes
                </label>
                <label>
                  <Field type="radio" name="cdl" value="no" /> No
                </label>
              </div>

              <h3>Driver Login Credentials</h3>
              <label>Username</label>
              <Field name="username" type="text" />

              <label>Password</label>
              <Field name="password" type="password" />

              <Field name="role" type="hidden" value="driver" />

              <h3>Attach Documents (License front/back, Medical card)</h3>

              {/* ✅ Drag-and-Drop зона */}
              <DropZone
                $dragOver={dragOver}
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragOver(true);
                }}
                onDragLeave={() => setDragOver(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setDragOver(false);

                  const files = Array.from(e.dataTransfer.files);
                  setFieldValue("documents", [...values.documents, ...files]);
                }}
              >
                Drag & Drop files here or click below
                <input
                  type="file"
                  multiple
                  onChange={(e) => {
                    const files = Array.from(e.target.files);
                    setFieldValue("documents", [...values.documents, ...files]);
                  }}
                />
              </DropZone>

              {/* ✅ Превʼю доданих файлів */}
              {values.documents.length > 0 && (
                <PreviewContainer>
                  {values.documents.map((file, index) => {
                    const isImage = file.type.startsWith("image/");
                    const fileUrl = URL.createObjectURL(file);

                    return (
                      <PreviewItem key={index}>
                        {isImage ? (
                          <PreviewImage src={fileUrl} alt={file.name} />
                        ) : (
                          <span>📄 {file.name}</span>
                        )}
                      </PreviewItem>
                    );
                  })}
                </PreviewContainer>
              )}

              <SubmitButton type="submit">Save</SubmitButton>
            </Form>
          )}
        </Formik>
      </ModalContainer>
    </Backdrop>
  );
};
