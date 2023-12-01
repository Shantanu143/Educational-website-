import  { useState } from 'react';
import './form.css'

const courses = ['Course A', 'Course B', 'Course C', 'Course D'];

const Form = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [courseInterested, setCourseInterested] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform further validation and submit the form data here
    console.log('Form submitted:', { fullName, email, phoneNumber, courseInterested });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className='newletter-input' required  />
        </label>
        
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='newletter-input' required />
        </label>
        
        <label>
          Phone Number:
          <input type="tel" pattern="[0-9]{10}" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className='newletter-input' required />
        </label>
        
        <label>
          Course Interested:
          <select value={courseInterested} onChange={(e) => setCourseInterested(e.target.value)} className='newletter-input select' required>
            <option value="" disabled>Select a course</option>
            {courses.map((course, index) => (
              <option key={index} value={course}>
                {course}
              </option>
            ))}
          </select>
        </label>
        
        <button type="submit" className='button newsletter-button'>Submit</button>
      </form>
    </div>
  );
};

export default Form;
