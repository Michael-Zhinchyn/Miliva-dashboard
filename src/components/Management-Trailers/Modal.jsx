import { Formik, Form, Field } from "formik";
import { useState } from "react";
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
  year: "",
  make: "",
  model: "",
  capacity: "",
  vinNumber: "",
  plateNumber: "",
  documents: [], // масив файлів
};

export const ModalTrailer = ({ onClose }) => {
  const [dragOver, setDragOver] = useState(false);

  return (
    <Backdrop>
      <ModalContainer>
        {/* Кнопка закриття */}
        <CloseButton onClick={onClose}>✕</CloseButton>

        <h2>Add Trailer</h2>

        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log("Submitted trailer:", values);
            onClose();
          }}
        >
          {({ values, setFieldValue }) => (
            <Form>
              {/* Поля трейлера */}
              <label>Year</label>
              <Field name="year" type="text" />

              <label>Make</label>
              <Field name="make" type="text" />

              <label>Model</label>
              <Field name="model" type="text" />

              <label>Capacity</label>
              <Field name="capacity" type="text" />

              <label>VIN Number</label>
              <Field name="vinNumber" type="text" />

              <label>Plate Number</label>
              <Field name="plateNumber" type="text" />

              <h3>Attach Documents</h3>

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

              {/* Превʼю доданих файлів */}
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
