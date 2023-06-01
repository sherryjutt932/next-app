import React from "react";
import Image from "next/image";
import img1 from "../assets/pic1.jpg";
import img2 from "../assets/pic2.jpg";
import img3 from "../assets/pic3.jpg";
import dp from "../assets/Profile_Pic.png";

const page = () => {
  return (
    <div>
      <h1 className="heading">Dashboard</h1>
      <div className="dashTrending">
        
      <div className="dashTrending-Card">
          <Image className="bg-img" src={img1} alt="Picture of the author" />
          <div className="Card-Det">
            <Image className="dp-img" src={dp} alt="Profile Picture" />
            <span>
              <h3>Card 1</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </span>
          </div>
        </div>

        <div className="dashTrending-Card">
          <Image className="bg-img" src={img3} alt="Picture of the author" />
          <div className="Card-Det">
            <Image className="dp-img" src={dp} alt="Profile Picture" />
            <span>
              <h3>Card 1</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </span>
          </div>
        </div>

        <div className="dashTrending-Card">
          <Image className="bg-img" src={img2} alt="Picture of the author" />
          <div className="Card-Det">
            <Image className="dp-img" src={dp} alt="Profile Picture" />
            <span>
              <h3>Card 1</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </span>
          </div>
        </div>

        <div className="dashTrending-Card">
          <Image className="bg-img" src={img2} alt="Picture of the author" />
          <div className="Card-Det">
            <Image className="dp-img" src={dp} alt="Profile Picture" />
            <span>
              <h3>Card 1</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default page;
