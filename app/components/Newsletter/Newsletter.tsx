"use client"
import Image from "next/image";
import React, { useState } from "react";
import Alert from "../Alert/Alert";

const Newsletter = () => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [open, setOpen] = useState(true);

    //   Form validation state
    const [errors, setErrors] = useState({});

    //   Setting button text on form submission
    const [buttonText, setButtonText] = useState("Send");

    // Setting success or failure messages states
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);

    interface keyableObject {
        [key: string]: any
    }

    // Validation check method
    const handleValidation = () => {
        let tempErrors: keyableObject = {};
        let isValid = true;

        if (fullname.length <= 0) {
            tempErrors["fullname"] = true;
            isValid = false;
        }
        if (email.length <= 0) {
            tempErrors["email"] = true;
            isValid = false;
        }
        if (subject.length <= 0) {
            tempErrors["subject"] = true;
            isValid = false;
        }
        if (message.length <= 0) {
            tempErrors["message"] = true;
            isValid = false;
        }

        setErrors({ ...tempErrors });
        return isValid;
    };

    //   Handling form submit

    const handleSubmit = async (e: React.ChangeEvent<any>) => {
        e.preventDefault();
        alert("Your form has been submitted. We will respond you shortly");

        let isValidForm = handleValidation();

        if (isValidForm) {
            setButtonText("Sending");
            const res = await fetch("/api/sendgrid", {
                body: JSON.stringify({
                    email: email,
                    fullname: fullname,
                    subject: subject,
                    message: message,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
            });

            const { error } = await res.json();
            if (error) {
                console.log(error);
                setShowSuccessMessage(false);
                setShowFailureMessage(true);
                setButtonText("Send");
                return;
            }
            setShowSuccessMessage(true);
            setShowFailureMessage(false);
            setButtonText("Send");
        }
    };

    return (
        <>
            {/* <div id="contact-us" className="mx-auto max-w-2xl md:max-w-7xl sm:rounded-3xl">

<div className="grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-12 xl:gap-x-8">

<div className="col-span-12 bg-imagee"> */}
        <div className="mx-auto max-w-2xl md:max-w-7xl sm:rounded-3xl">
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-12 xl:gap-x-8">
                <div className="newsletter col-span-12 mb-4 mt-32 lg:mx-24" style={{ margin: "1.5rem", padding: "1.25rem", display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: "#117aad", borderRadius: "24px" }}>
                    <div>
                        <h3 className="newsletter-title text-4xl md:text-48xl text-center font-semibold text-white mb-3">Lets talk about your project.</h3>
                        <h3 className="newsletter-description text-base font-normal opacity-75 text-white text-center mb-8">
                            Fill the form and send in your queries. We will respond you asap. Alternatively, you can reach out to us via contact@codylio.com
                        </h3>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-blue-500"
                        style={{ marginLeft: "1rem" }}
                    >
                        <h1 className="text-2xl font-bold dark:text-gray-50">
                            Send a message
                        </h1>

                        <label
                            htmlFor="fullname"
                            className="tet-graxy-500 font-light mt-8 dark:text-gray-50"
                        >
                            Full name<span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                            type="text"
                            value={fullname}
                            required={true}
                            onChange={(e) => {
                                setFullname(e.target.value);
                            }}
                            name="fullname"
                            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
                        />

                        <label
                            htmlFor="email"
                            className="text-gray-500 font-light mt-4 dark:text-gray-50"
                        >
                            E-mail<span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            required={true}
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
                        />

                        <label
                            htmlFor="subject"
                            className="text-gray-500 font-light mt-4 dark:text-gray-50"
                        >
                            Subject<span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                            type="text"
                            name="subject"
                            required={true}
                            value={subject}
                            onChange={(e) => {
                                setSubject(e.target.value);
                            }}
                            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
                        />

                        <label
                            htmlFor="message"
                            className="text-gray-500 font-light mt-4 dark:text-gray-50"
                        >
                            Message<span style={{ color: "red" }}>*</span>
                        </label>
                        <textarea
                            name="message"
                            value={message}
                            required={true}
                            onChange={(e) => {
                                setMessage(e.target.value);
                            }}
                            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
                        ></textarea>

                        <div className="flex flex-row items-center justify-center">
                            <button
                                type="submit"
                                className="form-sending-button px-10 mt-8 py-2 bg-[#130F49] text-white font-light rounded-md text-lg flex flex-row items-center"
                            >
                                Send
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="text-cyan-500 ml-2 form-sending-icon"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </button>
                            {/* <Alert /> */}
                        </div>
                    </form>
                </div>
            </div>
            </div>
            {/* </div>

</div>
</div> */}
        </>


    )
}

export default Newsletter;
