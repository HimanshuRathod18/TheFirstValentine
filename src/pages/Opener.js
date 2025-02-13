import { useNavigate } from "react-router-dom";
import "../css/Opener.css";
export const Opener = () => {
  const navigate = useNavigate();

  return (
    <div className="opener-container">
      <div className="opener-content">
        <h1>Hello My Love ❤️</h1>
        <p>
          How's my baby ji doing managing the cuteness, thickness, prettiness,
          and horniness for daddy? 💕
        </p>
        <div className="button-group">
          <button onClick={() => navigate("/mylove")}>
            I need Daddy's love 💖
          </button>
          <button onClick={() => navigate("/mylove")}>
            I need Daddy inside me 🔥
          </button>
        </div>
      </div>
    </div>
  );
};
