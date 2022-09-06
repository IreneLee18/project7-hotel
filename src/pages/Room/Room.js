import Loading from "../../Components/Loading";
import Header from "./Components/Header";
import { roomEquipmentData } from "./Components/RoomEquipment";
import Calendar from "./Components/Calendar";
import ReserveModal from "./Components/ReserveModal";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { getRoom } from "../../Utils/Api";

function Room() {
  const { id } = useParams();
  const [roomData, setRoomData] = useState([]);
  const [bookingData, setBookingData] = useState([]);
  const reserveModal = useRef();
  const handleClick = () => {
    reserveModal.current.openModal();
  };
  // console.log(roomEquipmentData);
  useEffect(() => {
    getRoom(id).then((res) => {
      setRoomData(res.room[0]);
      setBookingData(res.booking)
      const equipmentList = [];
      Object.entries(res.room[0].amenities).forEach((item) => {
        let equipmentObj = {};
        equipmentObj.name = item[0];
        equipmentObj.status = item[1];
        equipmentList.push(equipmentObj);
      });
      equipmentList.forEach(data=>{
        roomEquipmentData.forEach((item)=>{
          if(data.name===item.id){
            item.status=data.status
          }
        })
      })
    });
  }, [id]);
  return (
    <>
      {roomData.length === 0 ? (
        <Loading />
      ) : (
        <>
          <Header image={roomData.imageUrl}></Header>
          <div className="container">
            <div className="mainInfo">
              <h1 className="roomTitle">{roomData.name}</h1>
              <ul className="roomInfo">
                <li>
                  房客人數限制： {roomData.descriptionShort.GuestMin}~
                  {roomData.descriptionShort.GuestMax} 人
                </li>
                <li>床型：{roomData.descriptionShort.Bed[0]}</li>
                <li>
                  衛浴數量： {roomData.descriptionShort["Private-Bath"]} 間
                </li>
                <li>房間大小： {roomData.descriptionShort.Footage} 平方公尺</li>
                <li>{roomData.description}</li>
              </ul>
              <div className="separator">＼＼＼</div>
              <ul className="checkTimes">
                <li>
                  <div>Check In</div>
                  <div className="checkTime">
                    {roomData.checkInAndOut.checkInEarly} —{" "}
                    {roomData.checkInAndOut.checkInLate}
                  </div>
                </li>
                <li>
                  <div>Check Out</div>
                  <div className="checkTime">
                    {roomData.checkInAndOut.checkOut}
                  </div>
                </li>
              </ul>
              <ul className="roomEquipment">
                {roomEquipmentData.map((item) => (
                  <li key={item.id} id={item.id}>
                    <img src={item.imageUrl} alt={item.id} className={!item.status?'opacity03':''} />
                    <div>{item.name}</div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="priceInfo">
              <h2>NT.{roomData.normalDayPrice}</h2>
              <p>平日(一~四)</p>
              <h2>NT.{roomData.holidayPrice}</h2>
              <p>假日(五~日)</p>
            </div>
            <div className="calendarInfo">
              <Calendar bookingData={bookingData} />
              <p className="reservedContent">＊斜線代表已被預約</p>
              <button className="reserveBtn" onClick={handleClick}>
                預約時段
              </button>
            </div>
          </div>
          <ReserveModal ref={reserveModal} />
        </>
      )}
    </>
  );
}
export default Room;
