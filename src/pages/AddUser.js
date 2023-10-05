import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

import "react-toastify/dist/ReactToastify.css";
import "./AddUser.css";

const initialFormData = {
  email: "", //email
  avatar: "", //url
  first_name: "", //text
  last_name: "", //text
  age: "", //number
  password: "", //password
  position: "", //radio
  gender: "", //dropdown
  agreement: false, //checkbox
};

function AddUser(props) {
  const { handleAddNewUser } = props;
  const [formData, setFormData] = useState(initialFormData);
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    avatar: "",
    first_name: "",
    last_name: "",
    age: "",
    password: "",
    position: "",
    gender: "",
    agreement: "",
  });

  const formSchema = Yup.object().shape({
    email: Yup.string()
      .email("Must be a valid email address.")
      .required("Must include email address."),
    avatar: Yup.string().url("Must include valid URL"),
    first_name: Yup.string()
      .min(3, "Must be at least 3 characters long.")
      .required("Must include name."),
    last_name: Yup.string()
      .min(3, "Must be at least 3 characters long.")
      .required("Must include surname."),
    password: Yup.string()
      .matches(
        /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        "Must include uppercase, lowercase, number, symbol and must be at least 8 chars long."
      )
      .required("Password is Required"),
    agreement: Yup.boolean().oneOf(
      [true],
      "You must accept Terms and Conditions"
    ),
    // required isn't required for checkboxes.
    age: Yup.number()
      .min(18, "age must be greater than 18")
      .required("Must include age."),
    position: Yup.string()
      .oneOf(["hr", "sales", "education"], "Must select one of the positions")
      .required("Position is Required"),
    gender: Yup.string()
      .oneOf(["male", "female"], "Please, select your gender.")
      .required("gender is Required"),
  });

  useEffect(() => {
    formSchema.isValid(formData).then((valid) => setIsValid(valid));
  }, [formData]);

  function handleChange(event) {
    const name = event.target.name;
    const value =
      event.target.type === "checkbox" //koşul
        ? event.target.checked //true ise
        : event.target.value; //false ise
    const newFormData = { ...formData, [name]: value };

    Yup.reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setErrors({ ...errors, [name]: "" });
      })
      .catch((err) => {
        setErrors({ ...errors, [name]: err.errors[0] });
      });

    setFormData(newFormData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("https://reqres.in/api/users", formData)
      .then((res) => {
        handleAddNewUser(res.data);
        toast.success(res.data.name + " isimli kullanıcı eklendi.");
      })
      .catch((err) => {
        toast.error(err.response.message);
        console.error(err.response.message);
      });
    //formu sıfırlayacak
    setFormData(initialFormData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="first_name">Name:</label>
        <input
          id="first_name"
          name="first_name"
          placeholder="Adınız"
          type="text"
          value={formData.first_name} //controlled component
          onChange={handleChange}
        />
        <p data-cy="name-error">{errors.first_name}</p>
      </div>
      <div>
        <label htmlFor="last_name">Surname:</label>
        <input
          id="last_name"
          name="last_name"
          placeholder="Soyadınızı giriniz"
          type="text"
          value={formData.last_name}
          onChange={handleChange}
        />
        <p>{errors.last_name}</p>
      </div>
      <div>
        <label htmlFor="email">E-posta:</label>
        <input
          id="email"
          name="email"
          placeholder="E-posta adresinizi giriniz"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <p>{errors.email}</p>
      </div>
      <div>
        <label htmlFor="password">Şifre:</label>
        <input
          id="password"
          name="password"
          placeholder="Şifrenizi giriniz"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
        <p>{errors.password}</p>
      </div>
      <div>
        <label htmlFor="age">Yaşınız:</label>
        <input
          id="age"
          name="age"
          placeholder="Yaşınız"
          type="number"
          value={formData.age}
          onChange={handleChange}
        />
        <p>{errors.age}</p>
      </div>
      <div>
        <label htmlFor="avatar">Resminiz:</label>
        <input
          id="avatar"
          name="avatar"
          placeholder="http://"
          type="url"
          value={formData.avatar}
          onChange={handleChange}
        />
        <p>{errors.avatar}</p>
      </div>
      Hangi pozisyonda çalışıyorsunuz?
      <div>
        <input
          id="hr"
          name="position"
          type="radio"
          value="hr"
          checked={formData.position === "hr"}
          onChange={handleChange}
        />
        <label htmlFor="hr">HR</label>
      </div>
      <div>
        <input
          id="sales"
          name="position"
          type="radio"
          value="sales"
          checked={formData.position === "sales"}
          onChange={handleChange}
        />
        <label htmlFor="sales">Sales&Marketing:</label>
      </div>
      <div>
        <input
          id="education"
          name="position"
          type="radio"
          value="education"
          checked={formData.position === "education"}
          onChange={handleChange}
        />
        <label htmlFor="education">Education:</label>
      </div>
      <p>{errors.position}</p>
      <div>
        <label htmlFor="gender">Cinsiyetiniz:</label>
        <select onChange={handleChange} name="gender" id="gender">
          <option value="">Lütfen seçiniz</option>
          <option selected={formData.gender === "male"} value="male">
            Erkek
          </option>
          <option selected={formData.gender === "female"} value="female">
            Kadın
          </option>
        </select>
        <p>{errors.gender}</p>
      </div>
      <div>
        <input
          id="agreement"
          name="agreement"
          type="checkbox"
          checked={formData.agreement}
          onChange={handleChange}
        />
        <label htmlFor="agreement">
          {" "}
          Şartları ve kullanım koşullarını kabul ediyorum.
        </label>
        <p>{errors.agreement}</p>
      </div>
      <button data-cy="submit-form-button" disabled={!isValid} type="submit">
        Kayıt
      </button>
    </form>
  );
}

export default AddUser;
