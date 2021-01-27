import React, { useEffect, useState } from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Button from "@material-ui/core/Button";
import DataObj from "../data/data.json";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import LinearProgress from "@material-ui/core/LinearProgress";
import Details from "../instructor/Details";

import "./Home.css";

const url = "https://api.github.com/users/QuincyLarson";
function Home(props) {
  console.log(DataObj);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default");
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((user) => {
        const { login } = user;
        setLoading(false);
        setUser(login);
      })
      .catch((error) => console.log(error));
  }, []);

  if (loading) {
    return <LinearProgress />;
  }
  if (isError) {
    return <h1>Not Found...</h1>;
  }

const Profile_logo = 'https://static.thenounproject.com/png/64958-200.png';
  return (
    <>
      <ul className="users">
        {DataObj.map((instructor) => {
          const { id, name, title, subjects, course_code } = instructor;
          return (
            <li key={id}>
              <div>
                <h4>{name}</h4>
                <img
                  src={Profile_logo}
                  alt=""
                />
                <h6>{title}</h6>
                <h6 className="course_code">
                  {course_code}: {subjects[0]}
                </h6>
                <StarBorderIcon className="rating" />
                <StarBorderIcon className="rating" />
                <StarBorderIcon className="rating" />
                <StarBorderIcon className="rating" />
                <StarBorderIcon className="rating" />
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={props.myFunc}
                >
                  <AddShoppingCartIcon />
                </Button>
              </div>
              <Button 
              style={{marginTop:"4px"}}
              size="small" onClick={()=> setShow(!show)} variant="contained" color="default">
                Read More...
              </Button>
             
            </li>
          );
        })}
      </ul>
      <div>
        {/* <h1>{user}</h1> */}
        {/* {show && <Item/>} */}
        {show && <Details />}
        
      </div>
    </>
  );
}

const Item = () => {
  return (
    <div>
      <h1>Instructor details</h1>
    </div>
  );
};

export default Home;
