import { useState } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    margin: 20px auto;
    padding: 20px 40%;
    box-sizing: border-box;
    color: #000000;
    background-color: pink;
    form {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
        label {
            
        }
    }
`

const StyledOption = styled.div`
    display: flex;
    gap: 5px;
`

const Challenge07 = () => {
    const [data, setData] = useState([]);
    const [biodata, setBiodata] = useState({
        "username": "",
        "firstname": "",
        "lastname": "",
        "gender": "",
        "email": "",
        "birthday": "",
        "phone": "",
        "hobby": []
    });
    // const [isFootball, setIsFootball] = useState(false);
    // const [isBasketball, setIsBasketball] = useState(false);
    // const [isMusic, setIsMusic] = useState(false);
    // const [isKarate, setIsKarate] = useState(false);
    
    const handleChange = (event) => {
        const { value, name, checked } = event.target
        if (name === "hobby") {
            if (checked) {
                setBiodata(prev=>({
                    ...prev,
                    [name]: [
                        ...biodata.hobby,
                        value
                    ]
                }))
            } else {
                var hobby = biodata.hobby;
                hobby.shift()
                setBiodata(prev=>({
                    ...prev,
                    [name]: hobby
                }))
            }
        } else {
            setBiodata(prev=>({
                ...prev,
                [name]: value
            }))
        }
    }

    const handleCheck = (event) => {

    }

    const handleSubmit = (event) => {
        console.log(biodata);
        setData([
            ...data,
            biodata
        ])
        event.preventDefault();
    }

    return (
        <StyledDiv>
            <form onSubmit={(event) => handleSubmit(event)} action="">
                <label htmlFor="firstname">Firstname: </label>
                <input name="firstname" type="text" value={biodata.firstname} id="firstname" onChange={(event) => handleChange(event)} placeholder="firstname"/>
                <label htmlFor="lastname">Lastname: </label>
                <input name="lastname" type="text" value={biodata.lastname} id="lastname" onChange={(event) => handleChange(event)} placeholder="lastname"/>
                <label htmlFor="username">Username: </label>
                <input name="username" type="text" value={biodata.username} id="username" onChange={(event) => handleChange(event)} placeholder="username"/>
                <label htmlFor="gender">Gender: </label>
                <StyledOption>
                    <input name="gender" type="radio" value="male" id="gender1" onChange={(event) => handleChange(event)} placeholder="gender"/>
                    <label htmlFor="gender">Male</label>
                    <input name="gender" type="radio" value="female" id="gender2" onChange={(event) => handleChange(event)} placeholder="gender"/>
                    <label htmlFor="gender">Female</label>
                </StyledOption>
                <label htmlFor="email">Email: </label>
                <input name="email" type="text" value={biodata.email} id="email" onChange={(event) => handleChange(event)} placeholder="email"/>
                <label htmlFor="birthday">Birthday: </label>
                <input name="birthday" type="date" value={biodata.birthday} id="birthday" onChange={(event) => handleChange(event)} placeholder="birthday"/>
                <label htmlFor="phone">Phone: </label>
                <input name="phone" type="text" value={biodata.phone} id="phone" onChange={(event) => handleChange(event)} placeholder="phone"/>
                <label htmlFor="hobby">Hobby: </label>
                <StyledOption>
                    <input name="hobby" type="checkbox" value="Football" id="hobby1" onChange={(event) => handleChange(event)} placeholder="hobby"/>
                    <label htmlFor="hobby">Football</label>
                    <input name="hobby" type="checkbox" value="Basketball" id="hobby2" onChange={(event) => handleChange(event)} placeholder="hobby"/>
                    <label htmlFor="hobby">Basketball</label>
                    <input name="hobby" type="checkbox" value="Music" id="hobby3" onChange={(event) => handleChange(event)} placeholder="hobby"/>
                    <label htmlFor="hobby">Music</label>
                    <input name="hobby" type="checkbox" value="Karate" id="hobby4" onChange={(event) => handleChange(event)} placeholder="hobby"/>
                    <label htmlFor="hobby">Karate</label>
                </StyledOption>
                <button type="submit">Submit</button>
            </form>
        </StyledDiv>
    )
}

export default Challenge07;
