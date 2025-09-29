import React from "react";

export default function Features() {
  return (
    <section id="features">
      <h2 className="section-heading">Why Choose Our IELTS Coaching?</h2>

      <div className="features-grid">
        <div className="feature-card">
          <h3>🎯 Expert Trainers</h3>
          <p>Learn from certified IELTS experts with years of experience and proven success.</p>
        </div>
        <div className="feature-card">
          <h3>💻 Online + Offline Classes</h3>
          <p>Flexible learning modes to fit your schedule — attend from anywhere.</p>
        </div>
        <div className="feature-card">
          <h3>🧑‍🏫 Personalized Support</h3>
          <p>Get 1-on-1 mentoring, doubt-clearing sessions, and performance tracking.</p>
        </div>
        <div className="feature-card">
          <h3>📝 Regular Mock Tests</h3>
          <p>Simulate real IELTS exam conditions to boost confidence and accuracy.</p>
        </div>
        <div className="feature-card">
          <h3>🎤 Speaking Practice</h3>
          <p>Daily speaking sessions to improve fluency, pronunciation, and confidence.</p>
        </div>
      </div>

      {/* Second subsection */}
      <div className="features-extra">
        <h2 className="section-heading">Our Proven System</h2>
        <div className="extra-grid">
          <div className="extra-card">
            <h3>Step-by-Step Curriculum</h3>
            <p>From basics to advanced strategies, we guide you through every stage of IELTS prep.</p>
          </div>
          <div className="extra-card">
            <h3>Success Stories</h3>
            <p>Thousands of students have achieved 7+ bands — you can be next!</p>
          </div>
        </div>
      </div>
    </section>
  );
}


