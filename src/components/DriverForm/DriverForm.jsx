import { Formik, Form, Field } from "formik";
import { StyledForm } from "./DriverForm.styled";

const initialValues = {
  driver: {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    licence: "",
    cdl: "", // "yes" або "no"
  },
  truck: {
    year: "",
    make: "",
    model: "",
    color: "",
    vin: "",
    licencePlate: "",
  },
  trailer: {
    make: "",
    capacity: "",
    vin: "",
    licencePlate: "",
  },
};

const AddDriverForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log("Submitted values:", values);
      }}
    >
      <StyledForm>
        {/* Driver Info */}
        <h2>Driver Info</h2>
        <label>First Name</label>
        <Field name="driver.firstName" type="text" />

        <label>Last Name</label>
        <Field name="driver.lastName" type="text" />

        <label>Phone Number</label>
        <Field name="driver.phoneNumber" type="text" />

        <label>Driver's Licence</label>
        <Field name="driver.licence" type="text" />

        <label>CDL?</label>
        <div role="group">
          <label>
            <Field type="radio" name="driver.cdl" value="yes" />
            Yes
          </label>
          <label>
            <Field type="radio" name="driver.cdl" value="no" />
            No
          </label>
        </div>

        {/* Truck Info */}
        <h2>Truck Info</h2>
        <label>Year</label>
        <Field name="truck.year" type="text" />

        <label>Make</label>
        <Field name="truck.make" type="text" />

        <label>Model</label>
        <Field name="truck.model" type="text" />

        <label>Color</label>
        <Field name="truck.color" type="text" />

        <label>VIN #</label>
        <Field name="truck.vin" type="text" />

        <label>Licence Plate</label>
        <Field name="truck.licencePlate" type="text" />

        {/* Trailer Info */}
        <h2>Trailer Info</h2>
        <label>Make</label>
        <Field name="trailer.make" type="text" />

        <label>Capacity</label>
        <Field name="trailer.capacity" type="text" />

        <label>VIN #</label>
        <Field name="trailer.vin" type="text" />

        <label>Licence Plate</label>
        <Field name="trailer.licencePlate" type="text" />

        {/* Submit Button */}
        <button type="submit">Add Driver</button>
      </StyledForm>
    </Formik>
  );
};

export default AddDriverForm;
