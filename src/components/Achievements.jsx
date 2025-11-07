import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "../styles/Achievements.module.css";
import { FiExternalLink, FiX } from "react-icons/fi";

const Achievements = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const achievements = [
    {
      title: "Python - Certification of Completion",
      issuer: "Progate",
      year: "2021",
      description:
        "Learn basic Python programming concepts including syntax, data structures, and functions.",
      image: "/cert-basic-python.png",
    },
    {
      title: "Python 101 for Data Science",
      issuer: "Coginitiveclass",
      year: "2021",
      description:
        "Introduction to Python programming for data science applications.",
      image: "/cert-python-ds.png",
    },
    {
      title: "Fullstack Web Development Bootcamp Completion",
      issuer: "Binar Academy",
      year: "2022",
      description:
        "Completed an in-depth Full Stack Web Development learning path.",
      image: "/cert-fsw.png",
    },
    {
      title: "The Most Progressive Student",
      issuer: "Binar Academy",
      year: "2022",
      description:
        "The Most Progressive Student in Binar Academy Bootcamp on Fullstack Web Development Wave 2.",
      image: "/cert-fsw-prog.png",
    },

    {
      title: "Digital Literacy",
      issuer: "Komdigi",
      year: "2025",
      description:
        "Fundamental skills and knowledge to navigate the digital world safely and effectively.",
      image: "/cert-literasi-digital.png",
    },
    {
      title: "Basic AI",
      issuer: "Komdigi",
      year: "2025",
      description: "Introduction to Artificial Intelligence (AI) concepts.",
      image: "/cert-basic-ai.png",
    },
    {
      title: "Introduction to Cloud Computing",
      issuer: "Komdigi",
      year: "2025",
      description:
        "Fundamental concepts of cloud computing and its applications.",
      image: "/cert-cloud.png",
    },
    {
      title: "TOEFL Prediction Test",
      issuer: "Komdigi",
      year: "2025",
      description:
        "Achieved a score of 530 in the TOEFL Prediction Test, demonstrating English proficiency.",
      image: "/toefl-prediction.png",
    },
    {
      title: "Tips and Tricks to Avoid Phishing Attacks",
      issuer: "Komdigi",
      year: "2025",
      description:
        "Learn essential tips and tricks to identify and avoid phishing attacks, enhancing your online security.",
      image: "/cert-phising.png",
    },
  ];

  return (
    <section id="achievements" className={styles.section} data-aos="fade-up">
      <div className="container text-center mb-5">
        <h2 className={`fw-bold ${styles.title}`}>
          Achievements & Certificates
        </h2>
        <p className={styles.subtitle}>
          Recognitions and certifications I’ve earned along my learning journey.
        </p>
      </div>

      <div className="container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          navigation
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          className={styles.carousel}
        >
          {achievements.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={styles.card}>
                <div className={styles.imageWrapper}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={styles.image}
                  />
                </div>
                <div className={styles.content}>
                  <h5 className={styles.cardTitle}>{item.title}</h5>
                  <p className={styles.issuer}>{item.issuer}</p>
                  <small className={styles.year}>{item.year}</small>
                  <p className={styles.description}>{item.description}</p>
                  <button
                    className={styles.viewBtn}
                    onClick={() => setSelectedCert(item)}
                  >
                    <FiExternalLink className="me-2" /> View Certificate
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* === Modal Certificate === */}
      {selectedCert && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedCert(null)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()} // biar klik dalam modal tidak close
          >
            <button
              className={styles.closeBtn}
              onClick={() => setSelectedCert(null)}
            >
              <FiX size={22} />
            </button>
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className={styles.modalImage}
            />
            <div className="mt-3 text-center">
              <h5>{selectedCert.title}</h5>
              <p className="text-muted mb-0">
                {selectedCert.issuer} — {selectedCert.year}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;
