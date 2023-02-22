import "../styles/cards.css"
import { FaBookmark, FaHeart } from "react-icons/fa";
function Cards() {
  return (
    <div className="container">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="src\assets\pexels-vladislav-murashko-5990737.jpg"
          className="card-img-top p-4"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Fototeta</h5>
        </div>
        <div className="card-body">
          <a href="#" className="card-link text-black">
            <FaBookmark />
          </a>
          <a href="#" className="card-link text-black">
            <FaHeart />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cards;
