import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import Header from "./Header";

function Home() {
  useEffect(() => {
    // Check if Typed is available
    if (Typed) {
      const typed = new Typed(".animate-text", {
        strings: ["Software Engineer"],
        typeSpeed: 100,
        loop: true,
      });

      // Cleanup function to destroy the Typed instance when the component unmounts
      return () => {
        typed.destroy();
      };
    } else {
      console.error(
        "Typed.js is not available. Make sure it is installed correctly."
      );
    }
  }, []);

  return (
    <>
      <div>
        <Header />
        <Link to={"/"}>
          <div className="text-center image pb-5">
            <img src="/images/avatar.png" alt="" width={350} height={350} />
          </div>
        </Link>
        <div className="text-center name">
          <h3>NGUYEN PHUOC CHUNG</h3>
          <span className="animate-text"></span>
        </div>
        <div className="img_icon text-center">
          <a href="https://www.facebook.com/profile.php?id=61554375387072">
            <img src="/images/facebook.png" alt="" />
          </a>
          <img src="images/link.png" alt="" />
          <a href="https://github.com/NguyenPhuocChung">
            <img src="/images/github.png" alt="" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
