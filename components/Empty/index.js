import { FaBan } from 'react-icons/fa';
import './index.css';

const Empty = () => (
  <div className="Empty">
    <FaBan size={30} />

    <span>Нет данных!</span>
  </div>
);

export default Empty;