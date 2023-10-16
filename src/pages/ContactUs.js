/*
1- react hook form install et npm i react-hook-form
2- import et
*/

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ContactUs = () => {
  //3- useForm ile tanımla
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      eposta: "",
      phone_number: "",
      note: "",
    },
    mode: "onChange",
  });

  /*
 const registerReturn = {
    name: "first_name",
    id: "first_name",
    onChange: {handleChange},
    value: formData.first_name
 }
*/
  const phoneNumberValidation = (value) => {
    if (!(value[0] == 0 && value.length === 11)) {
      toast.info("En kısa sürede sizinle iletişime geçeceğiz.", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return "Lütfen telefon numaranızı başında 0 koyarak, 10 karakter olarak yazınız";
    }
    return true;
  };

  //4. handle submit ile yapılacaklar için gerekli fonksiyonu yaz ve handleSubmit'e ilet.

  const onFormSubmit = (formData, e) => {
    e.target.reset();
    console.log(formData);
    toast.info("En kısa sürede sizinle iletişime geçeceğiz.", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <label className="d-block">
        {" "}
        Adınız:
        {/* 5- istediğin input alanlarını register et 
            6- istediğin validasyon kurallarını yaz */}
        <input
          type="text"
          {...register("first_name", {
            required: "Lütfen adınızı yazınız",
            minLength: {
              value: 3,
              message: "En az 3 karakter giriniz.",
            },
          })}
        />
        {/*
        spread operatörü ne yapar?
        <input type="text" name= "first_name" id= "first_name" />
        */}
      </label>
      {errors.first_name && <div> {errors.first_name.message} </div>}

      <label className="d-block">
        {" "}
        Soyadınız:
        <input
          type="text"
          {...register("last_name", {
            required: "Lütfen soyadınızı yazınız",
            minLength: {
              value: 3,
              message: "En az 3 karakter giriniz.",
            },
          })}
        />
      </label>
      {errors.last_name && <div> {errors.last_name.message} </div>}
      <label className="d-block">
        Email Adresiniz:
        <input
          type="email"
          {...register("eposta", {
            required: "Lütfen emailinizi yazınız",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Lütfen geçerli bir email adresi giriniz",
            },
          })}
        />
      </label>
      {errors.eposta && <div> {errors.eposta.message} </div>}
      <label className="d-block">
        Telefon Numaranız:
        <input
          type="number"
          placeholder="05324568931"
          {...register("phone_number", {
            required: "Lütfen telefon numaranızı yazınız",
            validate: { phoneNumberValidation },
          })}
        />
      </label>
      {errors.phone_number && <div> {errors.phone_number.message} </div>}
      <label className="d-block">
        Notunuz:
        <input type="text" {...register("note")} />
      </label>
      {/* 7- isValid ile buton disabled klontrolünü yap*/}
      <button disabled={!isValid} type="submit">
        Gönder
      </button>
    </form>
  );
};

export default ContactUs;
