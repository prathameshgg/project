import React, { useState } from 'react';
import styles from '../styles/FAQ.module.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is SereniLink?',
      answer: 'SereniLink is a mental health resource hub offering support, guides, and community engagement for better well-being.'
    },
    {
      question: 'How can I find a therapist?',
      answer: 'You can use our Therapist Directory section to search for a qualified therapist near you.'
    },
    {
      question: 'Is the service free?',
      answer: 'Some resources are free, while certain premium features may require a subscription. Please check our Pricing page for details.'
    }
  ];

  return (
    <section id="faq" className={styles.faq}>
      <h2 className={styles.underlinedHeading}>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className={styles.faqItem}>
          <button 
            className={styles.faqQuestion}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            {faq.question}
            <span className={styles.arrow}>
              {openIndex === index ? '▼' : '▶'}
            </span>
          </button>
          <p className={`${styles.faqAnswer} ${openIndex === index ? styles.open : ''}`}>
            {faq.answer}
          </p>
        </div>
      ))}
    </section>
  );
}

export default FAQ;