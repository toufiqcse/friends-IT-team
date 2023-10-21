import React, { useRef } from "react";
import emailjs, { init } from "@emailjs/browser";
import toast, { Toaster } from 'react-hot-toast';
import LoaderSpinner from "../../components/LoaderSpinner/LoaderSpinner";


const ContactForms = () => {
    init("52hdPmQzsb1tpfOHA");
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const loader = document.getElementById("loader"); // Get the loader element
        // Show the loader while the email is being sent
        loader.style.display = "block";
        emailjs.sendForm("service_yt41wth", "template_ba6qu0m", form.current, "52hdPmQzsb1tpfOHA").then(
            (result) => {
                toast.success('Message Sent successfully', {
                    duration: 3000,
                });
                loader.style.display = "none";
                form.current.reset();
            },
            (error) => {
                console.log(error.text);
                toast.error('Message not sent', {
                    duration: 3000,
                });
                loader.style.display = "none";
            }
        );
    };


    return (
        <div className="container mx-auto p-4 relative">

            <div id="loader" className="text-white  loader-container " style={{ display: "none" }}>
                <LoaderSpinner className="" />
            </div>
            <form className="form-container z-10" method="POST"
                onSubmit={handleSubmit} ref={form}>
                <div className="mb-4">
                    <label className="block text-start text-green-500 text-xl  font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        name='name'
                        placeholder="Your Name"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-start text-green-500 text-xl  font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-start text-green-500 text-xl  font-bold mb-2" htmlFor="email">
                        Subject
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="subject"
                        type="text"
                        name="subject"
                        placeholder="Your Subject"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-start text-green-500 text-xl  font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="message"
                        placeholder="Your Message"
                        rows="4"
                        name='message'
                        required

                    ></textarea>
                </div>

                <div className="flex items-center justify-end">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        name='submit'
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForms;
