import React from "react";

export default function VisionMission() {
  return (
    <div className="tp-vision-mission-area pt-60 pb-60">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="vm-box vision-box">
              <h2>Our Vision</h2>
              <p>
                To become a trusted creative and digital service partner for
                businesses around the world by delivering high-quality design,
                editing, and web solutions that help brands grow faster in the
                digital era.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="vm-box mission-box">
              <h2>Our Mission</h2>
              <p>
                To provide simple, fast, and professional design and image
                editing services that help businesses improve their brand
                identity, product presentation, and online presence with
                reliable and affordable solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .tp-vision-mission-area {
          background: #fff;
        }
        .vm-box {
          background: #f9f9f9;
          padding: 30px;
          border-radius: 8px;
          margin-bottom: 30px;
        }
        .vision-box h3,
        .mission-box h3 {
          margin-bottom: 15px;
          font-size: 1.5rem;
        }
        @media (max-width: 768px) {
          .vm-box {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
