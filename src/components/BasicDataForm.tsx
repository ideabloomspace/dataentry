import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useState } from "react";

function BasicDataForm() {
  const { t } = useTranslation();
  const [res, setResponse] = useState("");

  const handleChange = (e) => {
    const errors = {};
    const name = e.target.inputName.value;
    //const complaintDetails = e.target.inputCompalint.value;
    //const officerPhoneNumbers = e.target.inputOfficePhone.value;
    //const complaintPhoneNumber = e.target.phone.value;

    if (name === "") {
      //errors.name = "Name can't be empty";
    }
    return errors;
  };

  const submitHandler = (events) => {
    events.preventDefault();
    const name = events.target.inputName.value;
    const complaintDetails = events.target.inputCompalint.value;
    const officerPhoneNumbers = events.target.inputOfficePhone.value;
    const complaintPhoneNumber = events.target.phone.value;
    const formData = {
      name,
      complaintDetails,
      officerPhoneNumbers,
      complaintPhoneNumber,
    };
    axios
      .post("https://data-sms-latest.onrender.com/v1/sendsms", formData)
      .then((response) => {
        if (response.status == 200) {
          console.log(response);
          setResponse("शिकायत दर्ज हो चुकी है");

          events.target.reset();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Fragment>
      <center>
        <h1>{t("dataentry")}</h1> <br />
        <br />
        <br />
      </center>
      <form className="row g-3" onSubmit={submitHandler}>
        <div className="col-md-6">
          <label htmlFor="inputName" className="form-label">
            {t("name")}
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            onChange={handleChange}
          />
        </div>
        {/* <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            {t("lastname")}
          </label>
          <input type="password" className="form-control" id="inputPassword4" />
        </div> */}
        <div className="col-12">
          <label htmlFor="inputCompalint" className="form-label">
            {t("complaint")}
          </label>
          <input
            type="text"
            className="form-control"
            id="inputCompalint"
            placeholder=""
          />
        </div>
        {/* <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">
            Address 2
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div> */}
        {/* <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">
            {t("city")}
          </label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">
            {t("state")}
          </label>
          <select id="inputState" className="form-select">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div> */}
        {/* <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">
            {t("zipcode")}
          </label>
          <input type="text" className="form-control" id="inputZip" />
        </div> */}
        <div className="col-md-2">
          <label htmlFor="inputOfficePhone" className="form-label">
            {t("officephone")}
          </label>
          <input type="text" className="form-control" id="inputOfficePhone" />
        </div>
        <div className="col-3">
          <label htmlFor="phone" className="form-label">
            {t("phone")}
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder=""
          />
        </div>
        {/* <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" htmlFor="gridCheck">
              Check me out
            </label>
          </div>
        </div> */}
        <br />
        <center>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              {t("submit")}
            </button>
          </div>
          <br />
          <br />
          <br />
          <div className="col-12">{res}</div>
        </center>
      </form>
    </Fragment>
  );
}

export default BasicDataForm;
