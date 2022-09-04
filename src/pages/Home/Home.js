import { useEffect, useState } from "react";
import roomData from "./Component/RoomData";
import { getRooms } from "../../Utils/Api";
function Home() {
  useEffect(() => {
    getRooms().then((res) => console.log(res));
  }, []);
  const [currentRoom, setCurrentRoom] = useState(roomData[0]);
  const handleMouseEnter = (e) => {
    const { id } = e.target;
    // 綁定條件，以防取得到空白的id，導致整個出錯！
    if (id) {
      const mouseEnterRoom = roomData.filter((item) => item.id === id);
      // 因為要取得的是物件而非陣列，所以用展開方式取得資料
      setCurrentRoom(...mouseEnterRoom);
    }
  };
  return (
    <>
      <main
        style={{
          backgroundImage: `url(${currentRoom.imageUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="d-flex-jcsb">
          <div className="logo">
            <h1>White Space</h1>
          </div>
          <ul className="roomNameList">
            {roomData.map((item) => (
              <li
                key={item.id}
                className={item.id === currentRoom.id ? "roomNameActive" : null}
                id={item.id}
                onMouseEnter={handleMouseEnter}
              >
                <a href="#">{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="d-flex-jcsb">
          <div className="currentRoomName">
            <h2>{currentRoom.roomNum}</h2>
            <h3>{currentRoom.name}</h3>
          </div>
          <ul className="contentUs">
            <li>
              <div className="facebook"></div>
              <div className="instagram"></div>
            </li>
            <li className="phone">
              <div></div>02-17264937
            </li>
            <li className="email">
              <div></div>whitespace@whitespace.com.tw
            </li>
            <li className="address">
              <div></div>台北市羅斯福路十段30號
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
export default Home;
