import { useNavigate } from "react-router-dom";
import "../css/Ask.css"; // Import the CSS file

export const Ask = () => {
  const navigate = useNavigate();

  return (
    <div className="ask-container">
      <div className="ask-content">
        <p>
          Daddy appreciates your eagerness, daddy appreciates you, your love,
          your care, your patience, your strength! 💖
        </p>
        <p>
          For this unwavering love for me and making my life joyful, pleasant,
          and full of love. 💕
        </p>
        <h4>I say I love you lots, my babyji, my choti gundi. 😘</h4>
        <p>
          I know there are restrictions for us to meet. Still, I want to ask...
        </p>
        <h2>Will You Be My Valentine? 💌</h2>

        <div className="button-group">
          <button onClick={() => navigate("/yay")}>Yes 💞</button>
          <button onClick={() => navigate("/yay")}>
            Yes (with all my love, tits, ass & pussy) 🔥
          </button>
        </div>
      </div>
    </div>
  );
};
