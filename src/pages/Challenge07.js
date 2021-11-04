import { useState } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    margin: 0 auto;
    padding: 20px 30%;
    box-sizing: border-box;
    color: #000000;
    font-size: 16px;
    font-family: "Inter";
    h1 {
        margin: 0 auto 5px;
        padding-top: 20px;
        box-sizing: border-box;
        text-align: center;
        font-size: 20px;
    }
    form {
        display: flex;
        flex-direction: column;
        padding: 5vh 25px;
        margin: 0 0;
        padding-top: 0;
        box-sizing: border-box;
        label, input, button {
            margin-bottom: 5px;
        }
        input {
            margin-left: 5px;
        }
        button {
            font-weight: bold;
            font-size: 18px;
        }
    }
`

const StyledOption = styled.div`
    display: flex;
    gap: 5px;
`

const Challenge07 = () => {
    // Tampilan, Tambah NIK, Update & Delete
    const [data, setData] = useState([]);
    const bioTemplate = {
        "NIK": "",
        "username": "",
        "firstname": "",
        "lastname": "",
        "gender": "",
        "email": "",
        "birthday": "",
        "phone": "",
        "website": "",
        "hobby": [],
        "favColor": "#000000",
        "happiness": 50
    }
    const [biodata, setBiodata] = useState(bioTemplate);
    const [isFormFilled, setIsFormFilled] = useState(true);

    const handleChange = (event) => {
        const { value, name, checked } = event.target
        if (name === "hobby") {
            if (checked) {
                setBiodata(prev => ({
                    ...prev,
                    [name]: [...biodata.hobby, value]
                }))
            } else {
                setBiodata(prev => ({
                    ...prev,
                    [name]: biodata.hobby.filter(x => x !== value)
                }))
            }
        } else if (name === "NIK" && name === "happiness") {
            setBiodata(prev => ({
                ...prev,
                [name]: parseInt(value, 10)
            }))
        } else {
            setBiodata(prev => ({
                ...prev,
                [name]: value
            }))
        }
    }

    const handleSubmit = (event) => {
        let formFilled = Object.values(biodata).every(v => v !== "");
        if (biodata !== bioTemplate && biodata.username !== "" && biodata.email !== "" && data[data.length - 1] !== biodata && formFilled) {
            setData([
                ...data,
                biodata
            ])
        }
        setIsFormFilled(formFilled);
        event.preventDefault();
    }

    const handleReset = () => {
        setBiodata(bioTemplate);
    }

    return (
        <StyledDiv className="form__container">
            <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            First Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Last Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Password
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
                        <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                            City
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                            State
                        </label>
                        <div className="relative">
                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                <option>New Mexico</option>
                                <option>Missouri</option>
                                <option>Texas</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                            Zip
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
                    </div>
                </div>
            </form>

            <h1>Form</h1>
            <form onSubmit={(event) => handleSubmit(event)} className="form">
                <label htmlFor="NIK">
                    NIK:
                    <input name="NIK" type="number" value={biodata.NIK} id="NIK" onChange={(event) => handleChange(event)} placeholder="NIK" />
                </label>
                <label htmlFor="firstname">
                    Firstname:
                    <input name="firstname" type="text" value={biodata.firstname} id="firstname" onChange={(event) => handleChange(event)} placeholder="firstname" />
                </label>
                <label htmlFor="lastname">
                    Lastname:
                    <input name="lastname" type="text" value={biodata.lastname} id="lastname" onChange={(event) => handleChange(event)} placeholder="lastname" />
                </label>
                <label htmlFor="username">
                    Username:
                    <input name="username" type="text" value={biodata.username} id="username" onChange={(event) => handleChange(event)} placeholder="username" />
                </label>
                <label htmlFor="gender">
                    Gender:
                    <StyledOption>
                        <input name="gender" type="radio" value="Male" id="gender1" onChange={(event) => handleChange(event)} placeholder="gender" />
                        <label htmlFor="gender">Male</label>
                        <input name="gender" type="radio" value="Female" id="gender2" onChange={(event) => handleChange(event)} placeholder="gender" />
                        <label htmlFor="gender">Female</label>
                    </StyledOption>
                </label>
                <label htmlFor="email">
                    Email:
                    <input name="email" type="email" value={biodata.email} id="email" onChange={(event) => handleChange(event)} placeholder="email" />
                </label>
                <label htmlFor="birthday">
                    Birthday:
                    <input name="birthday" type="date" value={biodata.birthday} id="birthday" onChange={(event) => handleChange(event)} placeholder="birthday" />
                </label>
                <label htmlFor="phone">
                    Phone:
                    <input name="phone" type="text" value={biodata.phone} id="phone" onChange={(event) => handleChange(event)} placeholder="phone" />
                </label>
                <label htmlFor="website">
                    Website:
                    <input name="website" type="url" value={biodata.website} id="website" onChange={(event) => handleChange(event)} placeholder="website" />
                </label>
                <label htmlFor="hobby">
                    Hobby:
                    <StyledOption>
                        <input name="hobby" type="checkbox" value="Football" id="hobby1" onChange={(event) => handleChange(event)} placeholder="hobby" />
                        <label htmlFor="hobby">Football</label>
                        <input name="hobby" type="checkbox" value="Basketball" id="hobby2" onChange={(event) => handleChange(event)} placeholder="hobby" />
                        <label htmlFor="hobby">Basketball</label>
                        <input name="hobby" type="checkbox" value="Music" id="hobby3" onChange={(event) => handleChange(event)} placeholder="hobby" />
                        <label htmlFor="hobby">Music</label>
                        <input name="hobby" type="checkbox" value="Karate" id="hobby4" onChange={(event) => handleChange(event)} placeholder="hobby" />
                        <label htmlFor="hobby">Karate</label>
                    </StyledOption>
                </label>
                <label htmlFor="favColor">
                    Favorite Color:
                    <input name="favColor" type="color" value={biodata.favColor} id="favColor" onChange={(event) => handleChange(event)} placeholder="favColor" />
                </label>
                <label htmlFor="happiness">
                    Level of Happiness &#128516;:
                    <input name="happiness" type="range" value={biodata.happiness} id="happiness" onChange={(event) => handleChange(event)} placeholder="happiness" />
                </label>
                <button type="submit">Submit</button>
                <input type="reset" onClick={handleReset} />
                {!isFormFilled && <p style={{ color: "red" }}>*Please fill required field</p>}
            </form>
            <ol>
                {(data.length !== 0) && data.map((x, idx) => (
                    <li key={x.NIK}>{idx + 1}. Username: {x.username}</li>
                ))}
            </ol>
        </StyledDiv>
    )
}

export default Challenge07;
