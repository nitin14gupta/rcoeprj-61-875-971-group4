// About.js
import React from 'react';
import '../styles/About.css';
import IMAGES from '../assets/images'
const teamMembers = [
  {
    name: 'Nitin Gupta',
    role: 'Founder & CEO',
    skills: ['Leadership', 'Strategic Planning', 'Partnership Development'],
    email: 'nitin524gupta@eng.rizvi.edu.in',
    phone: '+91 7977876609',
    imgSrc: 'IMAGES.person1Img',
    description: 'Nitin is a passionate traveler and leader with over 10 years of experience in the travel industry. She loves exploring new cultures and sharing her adventures with others.',
  },
  {
    name: 'Daniyal Ghori',
    role: 'Travel Specialist',
    skills: ['Customer Service', 'Itinerary Planning', 'Travel Logistics'],
    email: 'daniyalghori96@gmail.com',
    phone: '+91 9930954664',
    imgSrc: 'IMAGES.person2Img',
    description: 'Daniyal is dedicated to helping clients plan their dream vacations. His attention to detail and commitment to customer satisfaction make him an invaluable member of our team.',
  },
  {
    name: 'Shoaib Jamadar',
    role: 'Marketing Manager',
    skills: ['Digital Marketing', 'Content Creation', 'Brand Strategy'],
    email: 'shoiabjamadar@gmail.com',
    phone: '+91 9594667378',
    imgSrc: 'IMAGES.person3Img',
    description: 'Shoaib is a creative marketer who enjoys crafting engaging content that inspires travel. She has a keen eye for trends and a passion for storytelling.',
  },
  {
    name: 'Affan Amsari',
    role: 'Tech Lead',
    skills: ['Web Development', 'Data Analysis', 'Project Management'],
    email: 'affanansari@gmail.com',
    phone: '+91 7710898172',
    imgSrc: 'IMAGES.person4Img',
    description: 'Affan is the tech guru behind our platform. He ensures that our systems run smoothly and effectively, making travel planning easy and enjoyable for our users.',
  },
];

const About = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Meet Our Team</h2>
      <div className="row">
        {teamMembers.map((member, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card">
              <img src={member.imgSrc} alt={member.name} className="card-img-top rounded-circle" />
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{member.role}</h6>
                <p className="card-text">{member.description}</p>
                <h6>Skills:</h6>
                <ul className="list-unstyled">
                  {member.skills.map((skill, idx) => (
                    <li key={idx}>- {skill}</li>
                  ))}
                </ul>
                <p className="mb-1">
                  <strong>Email:</strong> <a href={`mailto:${member.email}`}>{member.email}</a>
                </p>
                <p>
                  <strong>Phone:</strong> {member.phone}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
