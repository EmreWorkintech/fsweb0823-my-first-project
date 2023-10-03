import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialFormData = {
  email: "",
  name: "",
  surname: "",
  age: "",
  password: "",
  position: "",
  agreement: false,
};

function Login(props) {
  const { handleUserChange } = props;
  const history = useHistory();
  /*
  Yöntem 1:
  Problem: çok state ve hnadlechange fonskiyonu gerekiyor.
  const [position, setPosition] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreement, setAgreement] = useState(false);
  */
  const [formData, setFormData] = useState(initialFormData);

  function handleChange(event) {
    /*  if (event.target.type === "checkbox") {
      console.log(event.target.checked);
    } else {
      console.log(event.target.value);
    } */
    const name = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    const newFormData = { ...formData, [name]: value };

    setFormData(newFormData);
    //console.log(newFormData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    //API'ya veriyi gönderecek

    axios
      .post("https://reqres.in/api/users", formData)
      .then((res) => {
        handleUserChange(res.data);
        toast("Welcome " + res.data.name);
        history.push("/users");
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err.response.message);
      });
    //formu sıfırlayacak
    setFormData(initialFormData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          placeholder="Adınız"
          type="text"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Surname:</label>
        <input
          id="surname"
          name="surname"
          placeholder="Soyadınızı giriniz"
          type="text"
          value={formData.surname}
          onChange={handleChange}
        />
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
      </div>
      <p>Hangi posisyonda çalışıyorsunuz?</p>
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
      </div>

      <button type="submit">Kayıt</button>
    </form>
  );
}

export default Login;
