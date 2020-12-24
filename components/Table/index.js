import { FaBan } from "react-icons/fa";
import TableBodyRow from "./TableBodyRow";
import './index.css';

const Table = props => {
  const {
    columns = [],
    data = [],
    dataKey,
    bordered = false,
    hoverRow = true,
    dangerRow = () => false,
    activeRow = () => false,
    rowNumbers = false,
    columnForBranch = '',
  } = props;

  const recursionRow = (arr, pIndex = '', depth = 0, isLastParent = true) => (
    arr.map((i, idx) => (
      <TableBodyRow
        key={i[dataKey]}
        data={data}
        item={{...i, depth}}
        length={arr.length}
        index={idx}
        isLastParent={isLastParent}
        pIndex={pIndex}
        columns={columns}
        hoverRow={hoverRow}
        dangerRow={dangerRow}
        activeRow={activeRow}
        recursionRow={recursionRow}
        rowNumbers={rowNumbers}
        columnForBranch={columnForBranch}
      />
    ))
  );
  
  return (
    <>
      <table className={bordered ? 'table-bordered' : ''}>
        <thead>
          <tr>
            {
              data.find(i => i.childrens && i.childrens.length) ? (
                <td className="show-children-row"></td>
              ) : null
            }

            {
              rowNumbers ? (
                <td style={{width: 70, minWidth: 70}}>№ п.п.</td>
              ) : null
            }

            {
              columns.map(i => (
                <td key={i.key} style={{width: i.width, minWidth: i.width, textAlign: i.align}}>
                  {i.title}
                </td>
              ))
            }
          </tr>
        </thead>

        <tbody>
          {recursionRow(data)}
        </tbody>
      </table>
      
      {
        !columns.length || !data.length ? (
          <div className={`data-empty${bordered ? ' table-bordered' : ''}`}>
            <FaBan size={30} />

            <span>Нет данных!</span>
          </div>
        ) : null
      }
    </>
  );
};

export default Table;