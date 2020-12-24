import { useState } from 'react';
import EditableCell from './EditableCell';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const TableBodyRow = props => {
  const {
    item,
    length,
    index,
    isLastParent,
    pIndex,
    data,
    columns,
    hoverRow,
    dangerRow,
    activeRow,
    recursionRow,
    rowNumbers,
    columnForBranch,
  } = props;

  const [ showChildrens, setShowChildrens ] = useState(false);

  return (
    <>
      <tr className={`${hoverRow ? 'hover-row' : ''} ${dangerRow(item) ? 'danger-row' : ''} ${activeRow(item) ? 'active-row' : ''}`}>
        {
          data.find(i => i.childrens && i.childrens.length) ? (
            item.childrens && item.childrens.length ? (
              <td className="show-children-row">
                {
                  showChildrens ? (
                    <FaChevronUp onClick={() => setShowChildrens(false)} />
                  ) : (
                    <FaChevronDown onClick={() => setShowChildrens(true)} />
                  )
                }
              </td>
            ) : <td></td>
          ) : null
        }

        {
          rowNumbers ? (
            <td>{`${pIndex}${index + 1}.`}</td>
          ) : null
        }

        {
          columns.map(j => (
            j.editable ? (
              <EditableCell
                key={j.key}
                rowData={item}
                colName={j.name}
                type={j.type}
                cellValue={item[j.name] || ''}
                options={j.options}
                onSave={j.onSave}
                render={j.render}
                defaultValue={j.defaultValue}
                style={{textAlign: j.align}}
              />
            ) : (
              <td
                key={j.key}
                style={{
                  textAlign: j.align,
                  paddingLeft: j.name === columnForBranch ? (item.depth * 12) + 10 : 10
                }}
              >
                {
                  j.name === columnForBranch && item.depth !== 0 ? (
                    Array.from({length: item.depth}, () => 1).map((_, idx, arr) => (
                      <div
                        key={idx}
                        className={arr.length === idx + 1 ? index + 1 === length ? 'l-branch' : 'branch' : isLastParent ? '' : 'p-branch'}
                        style={{left: (idx * 12) + 25}}
                      />
                    ))
                  ) : null
                }

                {(j.render && j.render(item)) || item[j.name]}
              </td>
            )
          ))
        }
      </tr>

      {
        showChildrens && item.childrens && item.childrens.length ? (
          recursionRow(item.childrens, `${pIndex}${index + 1}.`, item.depth + 1, index + 1 === length)
        ) : null
      }
    </>
  );
};

export default TableBodyRow;