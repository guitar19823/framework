import { useState, useEffect } from 'react';
import Input from '../Input';
import Select from '../Select';

const EditableCell = props => {
  const {
    rowData,
    colName,
    type,
    cellValue,
    options = [],
    style,
    onSave = x => x,
    render,
    defaultValue = x => x,
  } = props;

  const [ input, setInput ] = useState(false);
  const [ value, setValue ] = useState(type === 'number' ? +cellValue : cellValue);

  useEffect(() => {
    setValue(type === 'number' ? +cellValue : cellValue);
  }, [cellValue, type]);

  const handleSave = () => {
    onSave(value, rowData, colName);
    setInput(false);
  };

  const handleSaveSelect = value => {
    onSave(value, rowData, colName);
    setInput(false);
  };

  return (
    input ? (
      <td
        style={style}
      >
        {
          type === 'select' ? (
            <Select
              className="table-input"
              defaultValue={defaultValue && defaultValue(rowData)}
              autoFocus={true}
              onChange={e => handleSaveSelect(e.target.value)}
              onBlur={e => handleSaveSelect(e.target.value)}
              options={options}
            />
          ) : (
            <Input
              type={type}
              className="table-input"
              defaultValue={value}
              autoFocus={true}
              onChange={e => setValue(type === 'number'? +e.target.value : e.target.value)}
              onBlur={handleSave}
              onEnter={handleSave}
            />
          )
        }
      </td>
    ) : (
      <td
        onClick={() => setInput(true)}
        className="editable-cell"
        style={style}
      >
        {(render && render(rowData)) || cellValue}
      </td>
    )
  );
};

export default EditableCell;