import "bootstrap/dist/css/bootstrap.min.css";

import img from "./images/avatar.png";
import img2 from "./images/facebook.png";
import img1 from "./images/github.png";
import img3 from "./images/link.png";

function Home() {
  return (
    <>
      <div>
        <div className="text-center image pb-5">
          <img src={img} alt="" width={350} height={350} />
        </div>
        <div className="text-center name">
          <h3>NGUYEN PHUOC CHUNG</h3>
        </div>
        <div className="img_icon text-center">
          <a href="https://www.facebook.com/profile.php?id=61554375387072">
            <img src={img2} alt="" />
          </a>

          <img src={img3} alt="" />
          <a href="https://github.com/NguyenPhuocChung">
            <img src={img1} alt="" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
