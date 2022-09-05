import { useImperativeHandle, forwardRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import success from "../../../icons/info_icons/tick-inside-circle.svg";
function ReserveModal(props, ref) {
  let navigate = useNavigate();
  const [reservedDate, setReservedDate] = useState({
    firstDate: "",
    lastDate: "",
  });
  const [step, setStep] = useState("reserve");
  const handleChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case "firstDate":
        setReservedDate((state) => ({ ...state, firstDate: value }));
        break;
      case "lastDate":
        setReservedDate((state) => ({ ...state, lastDate: value }));
        break;
      default:
        new Error("error");
        break;
    }
  };

  const handleClick = (e) => {
    switch (e.target.id) {
      case "confirm":
        setStep("confirm");
        break;
      case "cancel":
        setModalState(false);
        break;
      case "homePage":
        setModalState(false);
        setStep("reserve");
        navigate("/");
        break;
      default:
        new Error("error");
        break;
    }
  };

  const [modalState, setModalState] = useState(false);
  useImperativeHandle(ref, () => ({
    openModal: () => setModalState(true),
  }));
  if (!modalState) return null;

  return (
    <>
      <div className={modalState && step === "reserve" ? "modal" : "opacity0"}>
        <div className="modalContainer">
          <div className="modalTitle">
            <h1>預約時段</h1>
            <div>＼＼＼</div>
          </div>
          <div className="modalBody">
            <div className="inputGroup">
              <label htmlFor="name">
                <span>姓名</span>
                <input type="text" id="name" />
              </label>
              <label htmlFor="phoneNumber">
                <span>電話</span>
                <input type="number" id="phoneNumber" />
              </label>
              <label htmlFor="date">
                <span>預約起迄</span>
                <input
                  type="date"
                  id="firstDate"
                  value={reservedDate.firstDate}
                  onChange={handleChange}
                />
                <div>~</div>
                <input
                  type="date"
                  id="lastDate"
                  value={reservedDate.lastDate}
                  onChange={handleChange}
                />
              </label>
            </div>
            <ul className="selectDate">
              <li>
                <div>平日時段</div>
                <div>1夜</div>
              </li>
              <li>
                <div>假日時段</div>
                <div>1夜</div>
              </li>
            </ul>
            <div className="totalPrice">
              <h2>
                <span>=</span>
                <span>NT.2850</span>
              </h2>
            </div>
          </div>
          <div className="modalBtn">
            <button onClick={handleClick} id="cancel">
              取消
            </button>
            <button onClick={handleClick} id="confirm">
              確定預約
            </button>
          </div>
        </div>
      </div>

      <div className={modalState && step === "confirm" ? "modal" : "opacity0"}>
        <div className="modalContainer_confirm">
          <div className="modalTitle confirm">
            <h1>預約成功</h1>
            <div>＼＼＼</div>
          </div>
          <div className="modalBody_confirm">
            <img src={success} alt="success" />
          </div>
          <div className="modalBtn confirmBtn">
            <button onClick={handleClick} id="homePage">
              回首頁
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default forwardRef(ReserveModal);
