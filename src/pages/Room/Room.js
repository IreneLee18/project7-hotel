import {
  roomEquipmentData1,
  roomEquipmentData2,
  roomEquipmentData3,
} from "./Components/RoomEquipment";
import Calendar from "./Components/Calendar";
import ReserveModal from "./Components/ReserveModal";
import {useRef} from 'react';

function Room() {
  const reserveModal = useRef()
  const handleClick = ()=>{
    reserveModal.current.openModal()
    console.log('click')
  }
  return (
    <>
      <div className="container">
        <div className="mainInfo">
          <h1 className="roomTitle">Single Room</h1>
          <ul className="roomInfo">
            <li>房客人數限制： 1~1 人</li>
            <li>床型：單人床</li>
            <li>衛浴數量： 1 間</li>
            <li>房間大小： 18 平方公尺</li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              quod cupiditate debitis voluptatem minus soluta asperiores
              voluptatibus. Aliquid nostrum deleniti nulla necessitatibus itaque
              quis ex harum natus provident. Ipsa, amet?
            </li>
          </ul>
          <div className="separator">＼＼＼</div>
          <ul className="checkTimes">
            <li>
              <div>Check In</div>
              <div className="checkTime">15:00 — 21:00</div>
            </li>
            <li>
              <div>Check Out</div>
              <div className="checkTime">10:00</div>
            </li>
          </ul>
          <ul className="roomEquipment">
            <li>
              <ul>
                {roomEquipmentData1.map((item) => (
                  <li key={item.id} id={item.id}>
                    <div
                      style={{ backgroundImage: `url(${item.imageUrl})` }}
                    ></div>
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <ul>
                {roomEquipmentData2.map((item) => (
                  <li key={item.id} id={item.id}>
                    <div
                      style={{ backgroundImage: `url(${item.imageUrl})` }}
                    ></div>
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <ul>
                {roomEquipmentData3.map((item) => (
                  <li key={item.id} id={item.id}>
                    <div
                      style={{ backgroundImage: `url(${item.imageUrl})` }}
                    ></div>
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
        <div className="priceInfo">
          <h2>NT.1380</h2>
          <p>平日(一~四)</p>
          <h2>NT.1500</h2>
          <p>假日(五~日)</p>
        </div>
        <div className="calendarInfo">
          <Calendar />
          <button className="reserveBtn" onClick={handleClick}>預約時段</button>
        </div>
      </div>
      <ReserveModal ref={reserveModal} />
    </>
  );
}
export default Room;
