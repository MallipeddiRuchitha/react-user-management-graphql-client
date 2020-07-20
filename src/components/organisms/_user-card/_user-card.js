import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import EditUserCard from "../../molecules/_edit-user-card/_edit-user-card";
import gql from "graphql-tag";
import { useMutation ,useQuery} from "@apollo/react-hooks";
const useStyles = makeStyles((theme) => ({
  styleCard: {
    display: "flex",
    padding: "1%",
    marginTop: "2%",
    marginLeft: "9%",
    marginRight: "9%",
    justifyContent: "space-between",
  },
  email:{
    paddingLeft:"90px",
  }
}));
const DEL_USER = gql`
mutation deleteUser($id:ID!) {
  deleteUser(id: $id) 
}

`;
const USER_PUT_MUTATION = gql`
  mutation editUser($id:ID!,$name: String!, $email: String!) {
    editUser(id:$id,name: $name, email: $email) {
      id
      name
      email
    }
  }
`;
const UserCard = ({userid,username,useremail}) => {
  const classes = useStyles();
  const[isEdit,setIsEdit]=useState(false);
  const [deleteUser, { loading, error, data }] = useMutation(DEL_USER);
  const [editUser, { loading1, error1, data1 }] = useMutation(USER_PUT_MUTATION);
  const [uname,setName]=useState(username);
  const [uemail,setEmail]=useState(useremail);
  const handleNameChange=(event)=>{
    event.preventDefault();
    setName(event.target.value);
     };
     const handleEmailChange=(event)=>{
   event.preventDefault();
   setEmail(event.target.value);
     };
  const handleEdit=(event)=>{
    event.preventDefault();
    setIsEdit(true);
    //editUser({variables:{ id:userid,name: name, email: email }})
      };
     
      
    const handleDelete=(event)=> {
     event.preventDefault()
     //const userId=Integer.valueOf(userid);
      deleteUser({variables : {id:userid}});
      window.location.reload();
    } 

    const handleSave=(event)=>{
      event.preventDefault();
     
      editUser({variables:{ id:userid,name: uname, email: uemail }})
      setIsEdit(false);
    }
  
  return (
      <div>
      {isEdit&&<EditUserCard defaultEmailValue={useremail} defaultNameValue={username} button="Save" handleEmailChange={handleEmailChange} handleNameChange={handleNameChange} handleClick={handleSave} nameLabel="" emailLabel=""></EditUserCard>}
      {!isEdit&&
    <Card className={classes.styleCard} data-testid='userCard'>
      <Typography>{username}</Typography>
      <Typography className={classes.email}>{useremail}</Typography>
      <div>
        <EditIcon onClick={handleEdit} data-testid="editIcon"></EditIcon>
        <DeleteIcon onClick={handleDelete} data-testid="deleteIcon"></DeleteIcon>
      </div>
    </Card>}
    </div>
  );
};
export default UserCard;
