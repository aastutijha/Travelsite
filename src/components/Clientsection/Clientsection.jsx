import React from "react";
import './clientsection.css'

const Clientsection = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderLogos = () => {
    const logos = ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Maharashtra_Police_Insignia_%28India%29.svg/690px-Maharashtra_Police_Insignia_%28India%29.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/157th_Air_Operations_Group.PNG/300px-157th_Air_Operations_Group.PNG " , "https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Aditya_Birla_Grasim_Logo.svg/480px-Aditya_Birla_Grasim_Logo.svg.png?20200711124633" , " https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/ADGPI_Indian_Army.svg/1185px-ADGPI_Indian_Army.svg.png", "https://upload.wikimedia.org/wikipedia/commons/e/ea/Koning_Soldaat.%2C_item_60.jpg" , "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/IIT_Guwahati_Logo.svg/1200px-IIT_Guwahati_Logo.svg.png" , "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Indian_Institute_of_Technology_Delhi_Logo.svg/1200px-Indian_Institute_of_Technology_Delhi_Logo.svg.png", "https://static.theprint.in/wp-content/uploads/2022/03/Defence_Ministry_logo20220303111535.jpg" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6jMciFkMAj5Kr1PKN8LnzToEhUjvJw7HRCxjE2vJUFehDeLIZ_g_FADHIg2Y5Y7xo5gA&usqp=CAU"];

    if (windowWidth < 576) {
      return (
        <div className="clients-section-logos mobile">
          {logos.map((logo) => (
            <img src={logo} alt="Logo" key={logo} />
          ))}
        </div>
      );
    } else {
      return (
        <div className="clients-section-logos desktop">
          {logos.map((logo) => (
            <img src={logo} alt="Logo" key={logo} />
          ))}
        </div>
      );
    }
  };

  return (
    <div className="clients-section" id="clients">
      <h2>Happy Clients</h2>
      <h3><u>Other servies we offer</u></h3>
      {renderLogos()}
    </div>
  );
};

export default Clientsection;