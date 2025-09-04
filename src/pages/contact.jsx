import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "../style/ContactUs.css";

function App() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
  AOS.init({ duration: 1000, once: true }); 
  }, []);


  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setLoading(false);
          alert("✅ Message Sent Successfully!");
          form.current.reset(); // form clear ho jayega
        },
        (error) => {
          setLoading(false);
          alert("❌ Failed to send message, try again.");
        }
      );
  };

  return (
    <>
        {/* <Navbar /> */}
        <div className="contactss-container">
  <div className="form-section" data-aos="fade-right">
    <h1 data-aos="fade-down">
      Fill the form <br /> to <span>contact us.</span>
    </h1>

    <form ref={form} onSubmit={sendEmail} data-aos="zoom-in-up">
      <div className="row">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
      </div>
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        required
      />
      <textarea
        name="message"
        placeholder="How we can help you?"
        required
      ></textarea>
      <button type="submit" disabled={loading}>
        {loading ? "Message Sent" : "Send Message"}
      </button>
    </form>
  </div>

  <div className="info-section" data-aos="fade-left">
    <h3>Want to know more?</h3>
    <p>
      You can also download my CV/Portfolio and check out my work.
    </p>
    <a href="/CV/Ahsan Rafique-CV.pdf" download>
      📄 Download My CV (PDF)
    </a>
  </div>
</div>

      
      {/* <Footer />      */}
    </>
  );
}

export default App;

















































// import React, { useRef, useState, useEffect } from "react";
// import emailjs from "@emailjs/browser";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import "../style/ContactUs.css";

// function Contact() {
//   const form = useRef();
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .sendForm(
//         import.meta.env.VITE_EMAILJS_SERVICE_ID,   // ✅ Service ID
//         import.meta.env.VITE_EMAILJS_TEMPLATE_ID,  // ✅ Template ID
//         form.current,                              // ✅ Form Ref
//         import.meta.env.VITE_EMAILJS_PUBLIC_KEY    // ✅ Public Key
//       )
//       .then(
//         () => {
//           setLoading(false);
//           alert("✅ Message Sent Successfully!");
//           form.current.reset(); // form reset
//         },
//         () => {
//           setLoading(false);
//           alert("❌ Failed to send message, please try again.");
//         }
//       );
//   };

//   return (
//     <div className="contactss-container">
//       <div className="form-section" data-aos="fade-right">
//         <h1 data-aos="fade-down">
//           Fill the form <br /> to <span>contact us.</span>
//         </h1>

//         <form ref={form} onSubmit={sendEmail} data-aos="zoom-in-up">
//           <div className="row">
//             <input
//               type="text"
//               name="user_name"  // ✅ EmailJS ke liye "user_name" rakhna behtareen hai
//               placeholder="Your Name"
//               required
//             />
//           </div>
//           <input
//             type="email"
//             name="user_email"  // ✅ EmailJS template ke liye correct field
//             placeholder="E-mail"
//             required
//           />
//           <textarea
//             name="message"
//             placeholder="How we can help you?"
//             required
//           ></textarea>
//           <button type="submit" disabled={loading}>
//             {loading ? "Sending..." : "Send Message"}
//           </button>
//         </form>
//       </div>

//       <div className="info-section" data-aos="fade-left">
//         <h3>Want to know more?</h3>
//         <p>
//           You can also download my CV/Portfolio and check out my work.
//         </p>
//         <a href="/CV/Ahsan Rafique-CV.pdf" download>
//           📄 Download My CV (PDF)
//         </a>
//       </div>
//     </div>
//   );
// }

// export default Contact;

