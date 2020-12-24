import { FaBan } from "react-icons/fa";
import './index.css';

const Error = () => (
  <div className="Error">
    <FaBan />

    <span>Ошибка загрузки данных!</span>
  </div>
);

export default Error;