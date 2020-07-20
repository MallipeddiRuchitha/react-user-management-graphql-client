import React, { useState } from "react";
import { Input, TextField,label } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  styleLabel: {
   
   marginRight: "5px",
   
  },
  

}));
const UserCard = ({label,defaultValue,onChange}) => {
  const classes = useStyles();
  let classStyle;
  
  return (
    <div data-testid="input">
      
       <label className={classes.styleLabel}>{label}</label>
  <Input defaultValue={defaultValue} onChange={onChange} inputProps={{ "data-testid": "value" }}/> 
    </div>
  );
};
export default UserCard;
