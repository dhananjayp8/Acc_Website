import React from 'react';
import '../styles/service.css'
import physicsGIF from '../assets/physics.gif';
import chemistryGIF from '../assets/chemistry.gif';
import mathsGIF from '../assets/maths.gif'
import biologyGIF from '../assets/biology.gif'
function Services() {
    const courses = [
        {
          title: 'Physics',
          description: 'Master physics concepts and excel in competitive exams with hands-on learning.',
          price: 'Rs 199',
          link: '/courses/physics',
          image: physicsGIF,
        },
        {
          title: 'Chemistry',
          description: 'Unlock the secrets of chemistry with engaging lessons for exam success.',
          price: 'Rs 299',
          link: '/courses/chemistry',
          image: chemistryGIF
        },
        {
          title: 'Maths',
          description: 'Boost your math skills and solve complex problems with ease.',
          price: 'Rs 149',
          link: '/courses/maths',
          image: mathsGIF
        },
        {
            title: 'Biology',
            description: 'Discover the wonders of biology and ace your exams effortlessly.',
            price: 'Rs 149',
            link: '/courses/biology',
            image: biologyGIF
        }
    ];
    

  return (
    <section className="services-section">
      <div className="container">
        <h2 className="services-title">Our Popular Courses</h2>
        <p className="services-desc">Kickstart your journey to success by enrolling in our top-rated courses!</p>

        <div className="courses-grid">
          {courses.map((course, index) => (
            <div className="course-card" key={index}>
              <img src={course.image} alt={course.title} className="course-image" />
              <div className="course-info">
                <h3 className="course-title">{course.title}</h3>
                <p className="course-description">{course.description}</p>
                <p className="course-price">{course.price}</p>
                <a href={course.link} className="enroll-btn">Enroll Now</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
