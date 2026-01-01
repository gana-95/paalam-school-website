import React from "react";
import Hero from "../components/sections/Hero";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: {},
  viewport: { once: true, margin: "-100px" }
};

const staggerItem = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Stats Section */}
      <motion.section 
        className="stats-section"
        {...fadeInUp}
      >
        <div className="container">
          <motion.div 
            className="stats-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { number: "100%", label: "Pass Rate" },
              { number: "25:1", label: "Student-Teacher Ratio" },
              { number: "20+", label: "Years of Excellence" },
              { number: "500+", label: "Happy Students" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="stat-card"
                variants={staggerItem}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* News & Events */}
      <motion.section 
        className="news-events-section"
        {...fadeInUp}
      >
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Latest News & Events
          </motion.h2>
          <motion.div 
            className="news-events-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              { badge: "News", title: "New Academic Year 2026", text: "Applications are now open for the 2026-2027 academic year. Join our community of excellence.", date: "January 1, 2026", isEvent: false },
              { badge: "Event", title: "Annual Sports Day", text: "Join us for our annual sports day featuring athletics, team sports, and fun activities for all.", date: "August 15, 2026", isEvent: true },
              { badge: "News", title: "Parent-Teacher Meeting", text: "Scheduled for next Saturday. Discuss your child's progress and academic journey.", date: "January 10, 2026", isEvent: false },
              { badge: "Event", title: "Cultural Fest 2026", text: "Experience diverse cultures through music, dance, art, and traditional performances.", date: "September 5, 2026", isEvent: true }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="news-card"
                variants={staggerItem}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <span className={`news-badge ${item.isEvent ? 'event-badge' : ''}`}>{item.badge}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="news-date">{item.date}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        className="testimonials-section"
        {...fadeInUp}
      >
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What Our Community Says
          </motion.h2>
          <motion.div 
            className="testimonials-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              { text: "Paalam School has been instrumental in shaping my child's future. The dedicated teachers and excellent infrastructure make it the best choice for quality education.", author: "Mrs. Lakshmi Raman", role: "Parent of Grade 10 Student" },
              { text: "The values and discipline instilled during my years at Paalam School have been my guiding principles. I'm grateful for the holistic education I received.", author: "Dr. Arun Kumar", role: "Alumni, Class of 2015" },
              { text: "As an educator, I appreciate the school's commitment to academic excellence and character building. The collaborative environment truly nurtures young minds.", author: "Prof. Meena Sharma", role: "Parent & Education Consultant" }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="testimonial-card"
                variants={staggerItem}
                transition={{ delay: index * 0.15 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                <p className="testimonial-text">
                  "{testimonial.text}"
                </p>
                <div className="testimonial-author">
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}