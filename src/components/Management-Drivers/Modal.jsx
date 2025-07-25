import { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Backdrop, ModalFormContainer } from "./Modal.styled";

const initialValues = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  licence: "",
  cdl: "",
  username: "",
  password: "",
  role: "driver",
};

export const ModalDriver = ({ onClose }) => {
  // ✅ окремі стейти для кожного файлу
  const [licenseFront, setLicenseFront] = useState(null);
  const [licenseBack, setLicenseBack] = useState(null);
  const [medicalFile, setMedicalFile] = useState(null);

  return (
    <Backdrop onClick={onClose}>
      <ModalFormContainer onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose}>X</button>

        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log("Submitted values:", values);

            // ✅ Виводимо окремо всі файли
            console.log("License Front:", licenseFront);
            console.log("License Back:", licenseBack);
            console.log("Medical Card:", medicalFile);

            onClose();
          }}
        >
          {({ setFieldValue }) => (
            <Form>
              <h2>Driver Info</h2>

              <label>First Name</label>
              <Field name="firstName" type="text" />

              <label>Last Name</label>
              <Field name="lastName" type="text" />

              <label>Phone Number</label>
              <Field name="phoneNumber" type="text" />

              <label>Driver's Licence Number</label>
              <Field name="licence" type="text" />

              <label>CDL?</label>
              <div role="group">
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

              <h3>Attach Documents</h3>

              {/* ✅ Передня сторона посвідчення */}
              <label>Driver License (Front)</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  setLicenseFront(e.target.files[0]);
                  setFieldValue("licenseFront", e.target.files[0].name);
                }}
              />

              {/* ✅ Задня сторона посвідчення */}
              <label>Driver License (Back)</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  setLicenseBack(e.target.files[0]);
                  setFieldValue("licenseBack", e.target.files[0].name);
                }}
              />

              {/* ✅ Медична картка */}
              <label>Medical Card</label>
              <input
                type="file"
                accept="image/*,.pdf"
                onChange={(e) => {
                  setMedicalFile(e.target.files[0]);
                  setFieldValue("medicalCard", e.target.files[0].name);
                }}
              />

              {/* ✅ Прев'ю для посвідчення */}
              {licenseFront && (
                <div>
                  <p>Front side preview:</p>
                  <img
                    src={URL.createObjectURL(licenseFront)}
                    alt="License front"
                    width={150}
                  />
                </div>
              )}

              {licenseBack && (
                <div>
                  <p>Back side preview:</p>
                  <img
                    src={URL.createObjectURL(licenseBack)}
                    alt="License back"
                    width={150}
                  />
                </div>
              )}

              {/* ✅ Прев'ю для медичної картки */}
              {medicalFile && (
                <div>
                  <p>Medical Card:</p>
                  {medicalFile.type === "application/pdf" ? (
                    <p>{medicalFile.name} (PDF)</p>
                  ) : (
                    <img
                      src={URL.createObjectURL(medicalFile)}
                      alt="Medical card"
                      width={150}
                    />
                  )}
                </div>
              )}

              <button type="submit">SAVE</button>
            </Form>
          )}
        </Formik>
      </ModalFormContainer>
    </Backdrop>
  );
};
