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
} from "./ModalTruck.styled";

const initialValues = {
  year: "",
  make: "",
  model: "",
  vinNumber: "",
  plateNumber: "",
  dotNumber: "",
  mileage: "",
  documents: [], // всі прикріплені файли
};

export const ModalTruck = ({ onClose }) => {
  const [dragOver, setDragOver] = useState(false);

  return (
    <Backdrop>
      <ModalContainer>
        {/* Закриття */}
        <CloseButton onClick={onClose}>✕</CloseButton>

        <h2>Add Truck</h2>

        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log("Submitted truck:", values);
            onClose();
          }}
        >
          {({ values, setFieldValue }) => (
            <Form>
              {/* Поля трака */}
              <label>Year</label>
              <Field name="year" type="text" />

              <label>Make</label>
              <Field name="make" type="text" />

              <label>Model</label>
              <Field name="model" type="text" />

              <label>VIN Number</label>
              <Field name="vinNumber" type="text" />

              <label>Plate Number</label>
              <Field name="plateNumber" type="text" />

              <label>DOT Number</label>
              <Field name="dotNumber" type="text" />

              <label>Mileage</label>
              <Field name="mileage" type="text" />

              <h3>Attach Documents (registration, insurance, inspection)</h3>

              {/* Drag-and-Drop зона */}
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

              {/* Превʼю файлів */}
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
