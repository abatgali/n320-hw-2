import React from "react";
import styles from "@/styles/contact.module.css";
import { useRouter } from "next/router";
export default function Contact() {
  const [fullName, setFullName] = React.useState("");
  //   let email = "abatgali@iu.edu";
  const [email, setEmail] = React.useState("");
    const router = useRouter();
  function contactFormSubmit(e) {

    e.preventDefault();
    console.log(fullName, email);
    if (fullName !== '' && email !== '') {
        router.push('/contact/success');
    }
  }

  function updateContactInfo(e) {
    if (e.currentTarget.name === "fullName") {
      //   fullName = e.currentTarget.value;
      setFullName(e.currentTarget.value);
    }
    if (e.currentTarget.name === "email") {
      //   email = e.currentTarget.value;
      setEmail(e.currentTarget.value);
    }
  }
  return (
    <div className="p-16 w-full h-screen">
      <h1 className="text-center mb-10">Contact Form</h1>
      <div className="  ">
        <form className={styles.form} onSubmit={contactFormSubmit}>
          <div className={styles.formField}>
            <label htmlFor="name" className={styles.formField}>
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Tom Cruise"
              onChange={updateContactInfo}
              value={fullName}
            ></input>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="example@email.com"
              onChange={updateContactInfo}
              value={email}
            ></input>
            <button
              type="submit"
              className="p-3 bg-red-900 text-white m-4 w-24 mx-auto"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
