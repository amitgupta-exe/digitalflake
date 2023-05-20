import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import crypto from "crypto";
import HomePage from './HomePage';




const LoginPage = () => {

  const email = useRef();
  const password = useRef();


  const [users, setUsers] = useState([]);

  const getUsers = async () => {

    const response = await axios.get("http://localhost:9001/users");
    setUsers(response.data)


  }

  useEffect(() => {
    getUsers();

  }, [])


  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [shaHash, setShaHash] = useState("");


  const generateHash = (string) => {
    const hash = crypto.createHash('sha256').update(string).digest("hex");
    setShaHash(hash);
  }




  const handleSubmit = (e) => {

    e.preventDefault();

    generateHash(password.current);

    let emailAuth = (users[0].email == email.current.value);
    let passwordAuth = (users[0].password == shaHash);
    console.log(users[0].password);
    console.log(shaHash);

    console.log(emailAuth);
    console.log(passwordAuth);

    if (emailAuth && passwordAuth) {
      setIsLoggedIn(true);
    }
  }


  console.log(isLoggedIn);


  return (

    !isLoggedIn ?
      (<main>
        <form onSubmit={handleSubmit} action="">
          <input ref={email} type="text" name='' id='' />
          <input ref={password} type="text" name="" id="" />
          <button>Login</button>
        </form>
      </main>)

      :

      (<HomePage />)

  )
}

export default LoginPage