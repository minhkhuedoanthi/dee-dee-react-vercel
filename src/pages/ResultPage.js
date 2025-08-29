import Navbar1 from "../components/Navbar1";
import "./ResultPage.css";

const ResultPage = () => {
  return (
    <div className="result-page">
      <Navbar1 addProfileHref="/sender-input" />
      <div className="result">Result</div>
      <div className="results">
        <div className="rectangle-parent">
          <div className="group-child" />
          <b className="jessie-pablo">Karl Augustine</b>
          <div className="design-lead">HR manager</div>
          <img className="group-item" alt="" src="/KarlAugustine.jpg" />
        </div>
        <div className="rectangle-group">
          <div className="rectangle1" />
          <img className="group-inner" alt="" src="/line-18.svg" />
          <b className="overview">Overview</b>
          <div className="overview1"> 
Karl Augustine is a seasoned HR and recruiting professional, known for his pivotal role in scaling teams at tech-centric companies like Temporal Technologies and Transparent Systems. His expertise spans across high-tech sectors, where he integrates emerging technologies into innovative recruitment and HR strategies.</div>
        </div>
      </div>
      <div className="box1">
        <div className="rectangle2" />
        <img className="box-child" alt="" src="/line-181.svg" />
      </div>
      <b className="potential-topic">Potential Topic</b>
      <div className="football">VR</div>
      <div className="books">Drones</div>
      <div className="stocks">Start-ups</div>
      <div className="investment">Investment</div>
      <div className="golf">Golf</div>
      <div className="yoga">Conferences</div>
      <b className="suggested-email">Suggested Email</b>
      
      <div className="box2">
        <div className="rectangle3" />
        <img className="box-item" alt="" src="/line-182.svg" />
        <div className="suggested-email1 "> 

I hope this email finds you well. My name is [Your Name], and I am a senior pursuing a Bachelor of Computer Science and Mathematics at DePauw University, expecting to graduate in May 2025. I am writing to express my keen interest in securing a software engineer internship opportunity at Temporal Technologies.

Having recently come across Temporal Technologies and learning about the groundbreaking work your team is doing, I was immediately drawn to the opportunity to contribute to such innovative projects. Your company's commitment to pushing boundaries and creating cutting-edge solutions aligns perfectly with my career aspirations in software engineering.

I am particularly impressed by your team's emphasis on [mention any specific projects or technologies that interest you]. This aligns well with my background and skills, which include proficiency in a variety of programming languages such as TypeScript, C++, Python, and Java, as well as experience with frameworks like React, Node.js, and Nest.js. Additionally, my certification as an AWS Certified Developer – Associate and experience with cloud technologies such as AWS, Docker, and Kubernetes would allow me to make meaningful contributions to your team.

I have gained practical experience through internships at Oryza Systems and APETECHS Company, where I worked on projects involving plugin development for intelligent video management systems, API endpoint implementation, and database management. These experiences have equipped me with strong technical skills, project management capabilities, and the ability to thrive in fast-paced environments.

Furthermore, my technical projects, such as CineDeepMatch and SimpleBank, demonstrate my ability to design and develop complex systems, implement secure authentication mechanisms, and deploy applications using modern DevOps practices.

I am eager to bring my passion for software engineering and my diverse skill set to Temporal Technologies, where I am confident I can contribute effectively to your team's success. I would greatly appreciate the opportunity to further discuss how my background and experiences align with the internship opportunities at Temporal Technologies.

Thank you for considering my application. I am excited about the possibility of contributing to your team and learning from experienced professionals like yourself. I look forward to the opportunity to discuss how I can contribute to Temporal Technologies in more detail.

Warm regards,

[Your Name]
[Your Contact Information]
[Your University/College]        </div>
      </div>
      <div className="result-page-inner">
        <div className="buy-button-wrapper">
          <div className="buy-button1">
            <div className="buy-button-item" />
            <b className="save-profile">Save profile</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
