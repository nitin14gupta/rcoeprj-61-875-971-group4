// About.js
import React from 'react';
import '../styles/About.css';

const teamMembers = [
  {
    name: 'Alice Johnson',
    role: 'Founder & CEO',
    skills: ['Leadership', 'Strategic Planning', 'Partnership Development'],
    email: 'alice@example.com',
    phone: '+123 456 7890',
    imgSrc: 'path/to/alice.jpg', // Replace with actual image paths
    description: 'Alice is a passionate traveler and leader with over 10 years of experience in the travel industry. She loves exploring new cultures and sharing her adventures with others.',
  },
  {
    name: 'Bob Smith',
    role: 'Travel Specialist',
    skills: ['Customer Service', 'Itinerary Planning', 'Travel Logistics'],
    email: 'bob@example.com',
    phone: '+123 456 7891',
    imgSrc: 'path/to/bob.jpg',
    description: 'Bob is dedicated to helping clients plan their dream vacations. His attention to detail and commitment to customer satisfaction make him an invaluable member of our team.',
  },
  {
    name: 'Catherine Lee',
    role: 'Marketing Manager',
    skills: ['Digital Marketing', 'Content Creation', 'Brand Strategy'],
    email: 'catherine@example.com',
    phone: '+123 456 7892',
    imgSrc: 'path/to/catherine.jpg',
    description: 'Catherine is a creative marketer who enjoys crafting engaging content that inspires travel. She has a keen eye for trends and a passion for storytelling.',
  },
  {
    name: 'David Brown',
    role: 'Tech Lead',
    skills: ['Web Development', 'Data Analysis', 'Project Management'],
    email: 'david@example.com',
    phone: '+123 456 7893',
    imgSrc: 'path/to/david.jpg',
    description: 'David is the tech guru behind our platform. He ensures that our systems run smoothly and effectively, making travel planning easy and enjoyable for our users.',
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
