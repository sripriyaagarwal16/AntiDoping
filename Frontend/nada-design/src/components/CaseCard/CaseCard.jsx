import React from "react";
import "./CaseCard.css";

const CaseComponent = () => {
  const cases = [
    {
      id: "C30667I",
      status: "Case under investigation",
      statusClass: "under-investigation",
      time: "9:00 AM",
      message: "Status updated",
      team: [
        "https://kottke.org/cdn-cgi/image/format=auto,fit=scale-down,width=1200,metadata=none/plus/misc/images/ai-faces-01.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQngaQcEal42POQo_1JreFMRYwIQkWsxMD3LQ&s",
        "https://www.diyphotography.net/wp-content/uploads/2022/01/VAI_01-22_People_Panther_JPG_white_hor_061.jpg",
        "https://idsb.tmgrup.com.tr/ly/uploads/images/2023/11/14/301015.jpg",
      ],
      icon: "🕵️‍♀️", // Placeholder for the icon
      showLine: true, // Add a horizontal line after this box
    },
    {
      id: "E78990A",
      status: "Status: Completed",
      statusClass: "completed",
      time: null,
      message: "Well Done, Team!",
      team: [
        "https://cdn.lucidpic.com/cdn-cgi/image/w=600,format=auto,metadata=none/66e2e5fbe0cca.png",
        "https://images.generated.photos/hduC_c_9RYIUAnQvFf6wh91HGwQ9ch3IceyinaIQcnY/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTc0NzA1LmpwZw.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjajpgK_-lC46g06b2d-psu8c1dzbMPcwhDw&s",
        "https://thispersonnotexist.org/static/img/Random_female_face_1.jpeg",
      ],
      icon: "✅",
      showLine: true,
    },
    {
      id: "M00372D",
      status: "Status: Pending",
      statusClass: "pending",
      time: null,
      message: "Case to be reviewed",
      team: [],
      action: "Collaborate and investigate",
      icon: "📄",
    },
    {
      id: "E78990A",
      status: "Status: Completed",
      statusClass: "completed",
      time: null,
      message: "Well Done, Team!",
      team: [
        "https://cdn.lucidpic.com/cdn-cgi/image/w=600,format=auto,metadata=none/66e2e5fbe0cca.png",
        "https://images.generated.photos/hduC_c_9RYIUAnQvFf6wh91HGwQ9ch3IceyinaIQcnY/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTc0NzA1LmpwZw.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjajpgK_-lC46g06b2d-psu8c1dzbMPcwhDw&s",
        "https://thispersonnotexist.org/static/img/Random_female_face_1.jpeg",
      ],
      icon: "✅",
      showLine: true,
    },
    {
      id: "C30667I",
      status: "Case under investigation",
      statusClass: "under-investigation",
      time: "9:00 AM",
      message: "Status updated",
      team: [
        "https://kottke.org/cdn-cgi/image/format=auto,fit=scale-down,width=1200,metadata=none/plus/misc/images/ai-faces-01.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQngaQcEal42POQo_1JreFMRYwIQkWsxMD3LQ&s",
        "https://www.diyphotography.net/wp-content/uploads/2022/01/VAI_01-22_People_Panther_JPG_white_hor_061.jpg",
        "https://idsb.tmgrup.com.tr/ly/uploads/images/2023/11/14/301015.jpg",
      ],
      icon: "🕵️‍♀️", // Placeholder for the icon
      showLine: true, // Add a horizontal line after this box
    },

  ];

  return (
    <div className="case-contain">
      {cases.map((caseItem, index) => (
        <div className="case" key={index}>
          <div className="case-header">
            <div className="case-id-icon">
              <span className="case-icon">{caseItem.icon}</span>
              <span className="case-id">{caseItem.id}</span>
              {/* <button className="vote-btn">Vote your opinion</button> */}
              {/* <a href={`/vote/${caseItem.id}`} target="_blank" rel="noopener noreferrer">
                 <button className="vote-btn">Vote your opinion</button>
              </a> */}
            </div>
            <span className={`case-status ${caseItem.statusClass}`}>
              {caseItem.status}
            </span>
           
          </div>
          {caseItem.time && (
            <p className="case-time">
              {caseItem.time} - {caseItem.message}
            </p>
          )}
          {!caseItem.time && <p>{caseItem.message}</p>}

          {caseItem.showLine && <hr className="case-divider" />}
          {caseItem.team.length > 0 && (
            <div className="team">
              {caseItem.team.map((member, idx) => (
                <img key={idx} src={member} alt={`Member ${idx + 1}`} />
              ))}
            </div>
          )}
          
          {caseItem.action && (
            <a href="#" className="action-btn">
              {caseItem.action}
            </a>
            
          )}
        
        </div>
      ))}
    </div>
  );
};

export default CaseComponent;
