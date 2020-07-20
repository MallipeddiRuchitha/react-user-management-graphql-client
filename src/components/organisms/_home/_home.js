
import React, { useState,useEffect } from "react";
import UserCard from '../_user-card/_user-card';
import { makeStyles } from "@material-ui/core/styles";
import { Typography,Card} from "@material-ui/core";
import { myTheme } from "../../../theme";
import EditUserCard from '../../molecules/_edit-user-card/_edit-user-card';
import Input from "../../molecules/_input/_input";
import gql from "graphql-tag";
import { useMutation ,useQuery} from "@apollo/react-hooks";
import Button from "../../atoms/_button/_button"
//import { Compiler } from "webpack";
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
    marginLeft: "10%",
    marginRight: "10%",
    justifyContent: "space-between",
  },
  button:{
    display: "flex",
    justifyContent: "center",
    marginTop:"50px",
    paddingLeft:"5px",
    paddingRight:"5px",
    marginLeft:"50px",
  
  }
}));
 const USER_POST_MUTATION = gql`
  mutation addUser($name: String!, $email: String!) {
    addUser(name: $name, email: $email) {
      id
      name
      email
    }
  }
`; export const USER_GET_QUERY = gql`
    {
      user {
        id
        name
        email
      }
    }
  `;
const Home = () => {
  const classes = useStyles();
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const[add,setAdd]=useState(false);
 const [addUser, { error1, loading1, data1 }] = useMutation(USER_POST_MUTATION);
  const {loading, error, data}=useQuery(USER_GET_QUERY);
 
  
  const handleNameChange=(event)=>{
 event.preventDefault();
 setName(event.target.value);
  };
  const handleEmailChange=(event)=>{
event.preventDefault();
setEmail(event.target.value);
  };
  const handleAdd=(event)=>{
event.preventDefault();
console.log("add",name,email)
addUser({ variables: { name: name, email: email } });
setName("");
setEmail("");
setAdd(false);
window.location.reload();
  };
  const handleAddUser=(event)=>{
event.preventDefault();
setAdd(true);

  }
  
   // window.location.reload();
  

  return (
      <div data-testid="home">
      <div className={classes.header}>
      <Typography variant="h4">User Management</Typography>
      </div>      
       <div className={classes.button}> {!add?<Button value="ADD USER" handleClick={handleAddUser} data-testid="addButton"></Button>:<Typography variant ="h5">Create user</Typography>}</div>
      {add&&<EditUserCard defaultEmailValue="" defaultNameValue="" button="Add" handleEmailChange={handleEmailChange} handleNameChange={handleNameChange} handleClick={handleAdd} nameLabel="Name" emailLabel="Email"></EditUserCard>}
      {loading&&<p>Loading...</p>}
      {error&&<p>Error...</p>}
      {console.log(data)
  }
       {!add&&data&& data.user.slice(0).reverse().map(user=>(
      <UserCard  handleEmailChange={handleEmailChange} handleNameChange={handleNameChange} username={user.name} useremail={user.email} userid={user.id} name={name} email={email}></UserCard>
      ))} 
   </div>
  );
};
export default Home;
