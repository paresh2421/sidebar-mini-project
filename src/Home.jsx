import { useGlobalContext } from "./context"
import { FaBars } from "react-icons/fa";
const Home = () => {
    const { openSidebar, openModal } = useGlobalContext();
    // console.log(openSidebar)
  return (
    <main>
        <button onClick={openSidebar} className="sidebar-toggle">
            <FaBars />
        </button>
        <button className="btn" onClick={openModal}>
            Show Modal
        </button>
    </main>
  )
}

export default Home