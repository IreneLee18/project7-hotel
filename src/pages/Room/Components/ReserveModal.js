import {
  useImperativeHandle,
  forwardRef,
  useState,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";
import success from "../../../icons/info_icons/tick-inside-circle.svg";
function ReserveModal(props, ref) {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reservedDate, setReservedDate] = useState([
    {
      type: "平日時段",
      count: 0,
      id: "normalDay",
    },
    {
      type: "平日時段",
      count: 0,
      id: "holiday",
    },
  ]);
  const [total, setTotal] = useState(0);
  const [step, setStep] = useState("reserve");
  const handleChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case "name":
        setName(value);
        break;
      case "tel":
        setTel(value);
        break;
      case "startDate":
        setStartDate(value);
        break;
      case "endDate":
        setEndDate(value);
        break;
      default:
        new Error("error");
        break;
    }
  };
  useEffect(() => {});
  const handleClick = (e) => {
    switch (e.target.id) {
      case "confirm":
        // setStep("confirm");
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
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="tel">
                <span>電話</span>
                <input
                  type="text"
                  id="tel"
                  value={tel}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="date">
                <span>預約起迄</span>
                <input
                  type="date"
                  id="startDate"
                  value={startDate}
                  onChange={handleChange}
                />
                <div>~</div>
                <input
                  type="date"
                  id="endDate"
                  value={endDate}
                  onChange={handleChange}
                />
              </label>
            </div>
            <ul className="selectDate">
              {reservedDate.map((item) => (
                <li key={item.id}>
                  <div>{item.type}</div>
                  <div>{item.count}夜</div>
                </li>
              ))}
            </ul>
            <div className="totalPrice">
              <h2>
                <span>=</span>
                <span>NT.{total}</span>
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
