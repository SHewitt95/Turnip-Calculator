import React from "react";
import { Select, MenuItem, InputLabel } from "@material-ui/core";

const Dropdown = ({ menuItems, onChange, label, labelId, selectId }) => {
  return (
    <>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select labelId={labelId} id={selectId} onChange={onChange}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {menuItems.map((item) => (
          <MenuItem value={item.value} key={item.value}>
            {item.text}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default Dropdown;
