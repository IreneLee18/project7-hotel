import Loading from '../Components/Loading'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRooms } from "../Utils/Api";
function Home() {
  const [roomData, setRoomData] = useState([]);
  const [currentRoom, setCurrentRoom] = useState(roomData);
  useEffect(() => {
    getRooms().then((res) => {
      res.items.forEach((item, index) => {
        item.roomNum = `0${index+1}`;
      });
      setRoomData(res.items);
      setCurrentRoom(res.items[0]);
    });
  }, []);
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
    {roomData.length === 0 ? (
        <Loading />
      ) : (
      <main
        style={{
          backgroundImage: `url(${currentRoom.imageUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
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
                <Link to={`/room/${item.id}`}>{item.name}</Link>
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
)}
    </>
  );
}
export default Home;
