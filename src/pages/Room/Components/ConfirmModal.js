import { useImperativeHandle, forwardRef, useState } from "react";
import success from '../../../images/icons/info_icons/tick-inside-circle'
function ConfirmModal(props, ref) {

  const [modalState, setModalState] = useState(false);
  useImperativeHandle(ref, () => ({
    openModal: () => setModalState(true),
  }));
  if (!modalState) return null;

  return (
    <>
      <div className={modalState ? "modal" : "opacity0"}>
        <div className="modalContainer">
          <div className="modalTitle">
            <h1>預約成功</h1>
            <div>＼＼＼</div>
          </div>
          <div className="modalBody">
            <img src={success} alt="success" />
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
export default forwardRef(ConfirmModal);
