import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Who can participate in this hackathon?",
      answer: "This hackathon is open to all students, developers, designers, and tech enthusiasts. Whether you're a beginner or an experienced professional, you're welcome to participate. Teams can have 1-5 members.",
    },
    {
      question: "How do I form a team?",
      answer: "You can register individually or with a team on Hack2Skill. If you're looking for teammates, join our Discord community where you can connect with other participants and form teams.",
    },
    {
      question: "What Google technologies can I use?",
      answer: "You can use any Google technology including Google Cloud Platform, Firebase, TensorFlow, Flutter, Android, Gemini AI, Google Maps API, BigQuery, and more. At least one Google technology must be integrated into your project.",
    },
    {
      question: "What should my submission include?",
      answer: "Your submission must include: a project deck/PPT, MVP link, 3-minute demo video, GitHub repository, list of Google technologies used, list of AI tools integrated, and a 100-word solution description.",
    },
    {
      question: "How does the offline pitching work?",
      answer: "The top 10 teams selected from online submissions will be invited for offline pitching on January 12-13. Teams will present their solutions to the judging panel in person. Travel and accommodation details will be shared with selected teams.",
    },
    {
      question: "Will I get a certificate?",
      answer: "Yes! All participants who make valid submissions will receive participation certificates. Winners and finalists will receive special recognition certificates.",
    },
    {
      question: "Can I use AI tools like ChatGPT for development?",
      answer: "Yes, AI-assisted development is allowed. However, your solution must be unique and original. Copy-pasting entire codebases or using existing projects is not allowed.",
    },
    {
      question: "What if I have more questions?",
      answer: "Feel free to reach out to us via email or join our Discord community. Our team is always ready to help you with any queries you might have.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <div className="container px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="section-subtitle">
            Find answers to common questions about the hackathon
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="mb-3"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full glass-card p-5 flex items-center justify-between hover:border-primary/30 transition-colors"
              >
                <span className="font-semibold text-left pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-5 pb-5 pt-3 glass-card border-t-0 rounded-t-none"
                >
                  <p className="text-muted-foreground">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
