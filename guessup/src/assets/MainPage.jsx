import logo from "./imgs/logo.png";
import { useNavigate } from "react-router";

export default function Mainpage() {
  const navigate = useNavigate();

  const handleStart = async () => {
    if (typeof DeviceOrientationEvent.requestPermission === "function") {
      try {
        const permission = await DeviceOrientationEvent.requestPermission();
        if (permission === "granted") {
          navigate("/categories", { replace: true });
        } else {
          alert("Hozzáférés megtagadva a szükséges szenzorokhoz!");
          return;
        }
      } catch (error) {
        alert(error);
        return;
      }
    } else {
      navigate("/categories", { replace: true });
    }
  };
  return (
    <div id="MainPage-cont">
      <img src={logo} id="MainPage-logo" />
      <button id="start-btn" onClick={handleStart}>
        Start
      </button>
    </div>
  );
}
