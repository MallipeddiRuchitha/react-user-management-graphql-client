
import React, { useState } from "react";
import UserCard from '../../organisms/_user-card/_user-card';
import { makeStyles } from "@material-ui/core/styles";
import { Typography,Card } from "@material-ui/core";
import { myTheme } from "../../../theme";
import Button from '../../atoms/_button/_button';
import Input from "../../molecules/_input/_input";

const useStyles = makeStyles((theme) => ({
  styleHome: {
    display: "flex",
    padding: "1%",
    marginTop: "2%",
    marginLeft: "10%",
    marginRight: "10%",
    justifyContent: "space-between",
  },
  header:{
    display:'flex',
    backgroundColor:myTheme.palette.primary.main,
    justifyContent:"center",
    alignItems:"center",
    height:"80px"
  },
  styleCard: {
    display: "flex",
    padding: "1%",
    marginTop: "2%",
    marginLeft: "9%",
    marginRight: "9%",
    justifyContent: "space-between",
  },
}));
const EditUserCard = ({defaultNameValue,defaultEmailValue,button,handleNameChange,handleEmailChange,handleClick,nameLabel,emailLabel}) => {
  const classes = useStyles();
  
  return (
      
      
<Card className={classes.styleCard} data-testid="editUserCard">
<Input label={nameLabel} defaultValue={defaultNameValue} onChange={handleNameChange}></Input>
<Input label={emailLabel} defaultValue={defaultEmailValue} onChange={handleEmailChange}></Input>
  <Button value={button} handleClick={handleClick}></Button>
</Card>
      
      
  );
};
export default EditUserCard;
