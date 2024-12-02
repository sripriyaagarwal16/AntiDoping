import React from "react";
import "../components/Videos.css";

const VideosSection = () => {
  const videos = [
    {
      title: "Mini CARDIAC REHAB Home Workout",
      src: "https://www.youtube.com/embed/O53-_1J0I1Q?si=Ji-HhP6lRjK33tA9",
    },
    {
      title: "Doping in Sports|| What is doping ",
      src: "https://www.youtube.com/embed/z466itSHE58?si=bv6-5aIXcwQrSzjx",
    },
    {
      title: "What is the need of National anti doping act? ",
      src: "https://www.youtube.com/embed/iewyrFGZzvM?si=W2VxZlX9_URU-6oy",
    },
    {
      title: "Anti-doping basics: What archers need to know",
      src: "https://www.youtube.com/embed/G43qcn-FV7Q?si=3GQVJ1Nom08RXNt2",
    },
    {
        title: "Explained: How UK Anti-Doping has revolutionised blood-testing",
        src: "https://www.youtube.com/embed/Rk4-Xu19C2c?si=9O7KxksGhlOS_8nc",
      },
      {
        title: "Drugs in sport: can science stop the cheats?",
        src: "https://www.youtube.com/embed/kKFC61RJ4Gc?si=1jfbaOqY82NH9ioe",
      },
      {
        title: "Anti Doping Rule Violations",
        src: "https://www.youtube.com/embed/IDMQUJzG0lg?si=PTLZoERStC-7KPe7",
      },
      {
        title: "Sports Performance - Anti Doping: Reasons, Banned Substances and Health Risks",
        src: "https://www.youtube.com/embed/v-S8zK5pREM?si=a-3YbCQ80Cq2CnDf",
      },
      {
        title: "What is the World Anti-Doping Agency?",
        src: "https://www.youtube.com/embed/xWLIkM59auw?si=lFRyZ2xpLiWSp3cj",
      },
      {
        title: "What Do Performance-Enhancing Drugs Do To Your Body?",
        src: "https://www.youtube.com/embed/4rUpX3QSPmw?si=MCEko4DZKhHrZKrs",
      },
      {
        title: "Anti-Doping Guide | For Clean True Sport | Paralympic Games",
        src: "https://www.youtube.com/embed/DT2UPAML5LE?si=9Z11Uo2d2M2fYoKG",
      },
      {
        title: "Introduction to NADA",
        src: "https://www.youtube.com/embed/QdaYElTxW9U?si=MFgnAUyO3k5tJ6xn",
      },
  ];

  return (
    <div className="videos-section">
      <div className="h">
        <h1>Introduction to Anti-Doping</h1>
       
      </div>

      <div className="video-gallery">
        {videos.map((video, index) => (
          <div className="video-card" key={index}>
            <iframe
              width="100%"
              height="200"
              src={video.src}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideosSection;
