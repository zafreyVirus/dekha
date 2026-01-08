import { CiLocationOn, CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
    return (

        <section className="p-6 md:p-12">
            {/* <MapSection/> */}
            <div className="map-section py-5">
                <div className="text-center mb-4">
                    <h2 className="text-2xl">
                        Our <span className='text-lightblue'>Location</span>
                    </h2>
                    <p>
                        We are located along M1 road about 500m after Mlambe Hospital in Lunzu from Blantyre direction.
                    </p>
                </div>
                <div className="d-flex justify-content-center">
                    <iframe
                        style={{ border: 0, width: "100%", height: "350px" }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15433.903041624322!2d35.017371502904524!3d-15.644407211386664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17b73c7c68b4d9d5%3A0x0!2zMTXCsDM4JzM5LjkiUyAzNcKwMDAnNDIuNiJF!5e0!3m2!1sen!2smw!4v1732103912015!5m2!1sen!2smw"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>







            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Contact Information Section */}
                <div className="bg-deepblue text-white p-8 rounded-lg">
                    <h3 className="text-lightblue text-xl font-bold mb-4">Get In Touch</h3>


                    {/* Location */}
                    <div className="flex items-center mb-6">
                        <div className="text-lightblue mr-4">
                            <CiLocationOn size={24}/> 
                        </div>
                        <div>
                           <h3 className="text-lightblue font-bold">Location</h3>
                            <p>Blantyre, M1 road 500m after Mlambe Hospital, Lunzu</p>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center mb-6">
                        <div className="text-lightblue mr-4">
                            <CiPhone size={24}/>
                        </div>
                        <div>
                            <h3 className="text-lightblue font-bold">Phone</h3>
                            <p>+265 888 769 695</p>
                            <p>+265 888 769 695</p>

                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center">
                        <div className="text-lightblue mr-4">
                            <MdOutlineEmail size={24}/>
                        </div>
                        <div>
                            <h3 className="text-lightblue font-bold">Email</h3>
                            <p>Alexbanda@rocketmail.com</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-lightblue p-8 rounded-lg">
                    <form>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-4 mb-4 bg-transparent border border-deepblue/50 rounded-lg text-white placeholder-white focus:outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-4 mb-4 bg-transparent border border-deepblue/50 rounded-lg text-white placeholder-white focus:outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full p-4 mb-4 bg-transparent border border-deepblue/50 rounded-lg text-white placeholder-white focus:outline-none"
                        />
                        <textarea
                            rows={4}
                            placeholder="Message"
                            className="w-full p-4 mb-6 bg-transparent border border-deepblue/50 rounded-lg text-white placeholder-white focus:outline-none"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-deepblue text-lightblue font-bold py-3 px-6 rounded-lg hover:bg-gray-700"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;