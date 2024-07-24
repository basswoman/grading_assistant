import React from 'react';
import { Select } from 'antd';
import { ConfigProvider } from 'antd';

const { Option } = Select;

function ObtainRubricNames({
  selected_rubric_id,
  setRubricID,
  rubrics,
  resetLabel,
}) {
  //Using useState to set the default value of DropDown Menu and declare the values

  const handleChange_rubric = value => {
    if (value) {
      setRubricID(value);
      resetLabel();
    }
  };

  console.log(process.env.REACT_APP_BASE_URL);

  if (rubrics)
    return (
      // <select value={selected_rubric_id} onChange={handleChange_rubric}>
      //   {rubrics.map((rubric, key) => (
      //     <option value={rubric.id} key={key}>
      //       {rubric.name}
      //     </option>
      //   ))}
      // </select>
      <div>
        <ConfigProvider theme={{ token: { colorPrimary: '#ff7175' } }}>
          <Select
            value={selected_rubric_id}
            onChange={handleChange_rubric}
            style={{ width: 220 }}
          >
            {rubrics.map((rubric, key) => (
              <Option value={rubric.id} key={rubric.id}>
                {rubric.name}
              </Option>
            ))}
          </Select>
        </ConfigProvider>
      </div>
    );
}

export default ObtainRubricNames;
