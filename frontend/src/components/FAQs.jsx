import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FaInstagram, FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

const faqs = [
  {
    question: "How do I create an account on the website?",
    answer:
      "To create an account, click on the 'Sign Up' button located at the top right corner of the homepage. Fill out the required information, including your name, email address, and password. Click 'Create Account' to complete the registration process."
  },
  {
    question: "What steps can I take to reduce my carbon footprint?",
    answer:
      "You can reduce your carbon footprint by using energy-efficient appliances, reducing water usage, recycling, and opting for public transportation or carpooling."
  },
  {
    question: "How does your company contribute to environmental sustainability?",
    answer:
      "Our company is committed to environmental sustainability by using eco-friendly packaging, supporting renewable energy projects, and implementing recycling programs in our offices."
  },
  {
    question: "What are the benefits of using renewable energy?",
    answer:
      "Renewable energy sources, such as solar and wind power, reduce greenhouse gas emissions, decrease air pollution, and provide a sustainable and inexhaustible energy supply."
  },
  {
    question: "How can I make my home more energy-efficient?",
    answer:
      "You can make your home more energy-efficient by installing insulation, using energy-efficient windows and doors, switching to LED lighting, and using programmable thermostats."
  },
  {
    question: "What is the importance of conserving water?",
    answer:
      "Conserving water helps to preserve our natural resources, reduce energy consumption, and protect the environment by minimizing the strain on water treatment facilities."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={{ maxWidth: "1080px", margin: "0 auto", padding: "5rem 2rem", backgroundColor: "white", borderRadius: "1rem", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", marginTop: "60px" }}>
      <h3 style={{ marginBottom: "3.5rem", color: "#2a9d8f", textAlign: "center", fontSize: "2rem", fontWeight: "600", textDecoration: "underline", textDecorationColor: "#e76f51" }}>
        Frequently Asked Questions
      </h3>
      <div>
        {faqs.map((faq, index) => (
          <div key={index} style={{ marginBottom: "1.5rem" }}>
            <div
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderRadius: "1rem 1rem 0 0", backgroundColor: "#264653", width: "100%", cursor: "pointer", border: "2px solid #2a9d8f", padding: "1rem", color: "#e9c46a", transition: "border 0.3s ease, color 0.3s ease" }}
              onClick={() => toggleFAQ(index)}
            >
              <h4 style={{ fontSize: "1.125rem", fontWeight: "500" }}>{faq.question}</h4>
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </div>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ width: "100%", borderRadius: "0 0 1rem 1rem", border: "2px dashed #2a9d8f", backgroundColor: "#e9c46a", padding: "1rem", color: "#264653" }}
                >
                  <h5>{faq.answer}</h5>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      
      {/* Contact Section */}
      <div style={{ marginTop: "3rem", textAlign: "center" }}>
        <h4 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#2a9d8f" }}>Contact Us</h4>
        <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", marginTop: "1rem", color: "#e76f51", fontSize: "1.75rem" }}>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ transition: "color 0.3s ease" }}>
            <FaInstagram />
          </a>
          <a href="mailto:info@example.com" style={{ transition: "color 0.3s ease" }}>
            <FaEnvelope />
          </a>
          <a href="tel:+1234567890" style={{ transition: "color 0.3s ease" }}>
            <FaPhone />
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" style={{ transition: "color 0.3s ease" }}>
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </section>
  );
}
