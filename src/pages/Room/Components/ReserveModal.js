import { useImperativeHandle, forwardRef, useState } from "react";
function ReserveModal(props, ref) {
  const [modalState, setModalState] = useState(false);
  useImperativeHandle(ref, () => ({
    openModal: () => setModalState(true),
  }));
  if (!modalState) return null;
  return (
    <>
      <div className={modalState ? "modal" : null}>
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
              <label htmlFor="phone">
                <span>電話</span>
                <input type="number" id="phone" />
              </label>
              <label htmlFor="date">
                <span>預約起迄</span>
                <input type="date" id="date" />
                <div>~</div>
                <input type="date" id="date" />
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
            <button onClick={() => setModalState(false)}>取消</button>
            <button onClick={() => setModalState(false)}>確定預約</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default forwardRef(ReserveModal);
