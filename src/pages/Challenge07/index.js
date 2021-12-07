import { useState } from 'react';
import styled from 'styled-components';
import Form from '../../components/Form/Form';
import TableDisplay from '../../components/Table/TableDisplay';

const StyledDiv = styled.div`
    margin-bottom: 50px;
    padding: 0 5%;
    .form__container {
        margin: 0 auto;
        padding: 20px 30%;
        box-sizing: border-box;
    }
`

const Challenge07 = () => {
    // const [data, setData] = useState([])
    const [data, setData] = useState([
        {
            "NIK": "3273051201970001",
            "username": "mnfathur",
            "password": "12345678",
            "firstname": "Nur",
            "lastname": "Fathur",
            "gender": "Male",
            "email": "mnfathur@gmail.com",
            "birthday": "1998-04-28",
            "phone": "081220071998",
            "website": "mnfathur.com",
            "hobby": ["Karate"],
            "favColor": "#FF00FF",
            "happiness": 47
        },
        {
            "NIK": "3273051201970002",
            "username": "fadhil",
            "password": "langsung",
            "firstname": "Ridhan",
            "lastname": "Fadhilah",
            "gender": "Male",
            "email": "ridhanfadhilah@gmail.com",
            "birthday": "1997-01-12",
            "phone": "081220220697",
            "website": "rfadhil.com",
            "hobby": ["Basketball", "Music"],
            "favColor": "#005588",
            "happiness": 97
        }
    ]);
    const bioTemplate = {
        "NIK": "",
        "username": "",
        "password": "",
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
    const [updateMode, setupdateMode] = useState(false);
    const [updatedStatus, setUpdatedStatus] = useState(false);

    const handleChange = (event) => {
        const { value, name, checked } = event.target
        if (name === "hobby") {
            if (checked) {
                setBiodata(prev => ({...prev, [name]: [...biodata.hobby, value]}))
            } else {
                setBiodata(prev => ({...prev, [name]: biodata.hobby.filter(x => x !== value)}))
            }
        } else if (name === "happiness") {
            setBiodata(prev => ({...prev, [name]: parseInt(value, 10)}))
        } else {
            setBiodata(prev => ({...prev, [name]: value}))
        }
    }

    const checkNIKExsistence = (NIK) => {
        return data.some(x => x["NIK"] === NIK)
    }

    const handleSubmit = (event) => {
        if (!updateMode) {
            let biodataKeys = Object.keys(biodata).filter(key => key !== "website");
            const arrayObj = biodataKeys.reduce((acc, val, id) => {
                acc.push({
                    [val]:biodata[val]
                })
                return acc; 
            }, [])
            const biodataWithoutWebsite = Object.assign({}, ...arrayObj);
            let formFilled = Object.values(biodataWithoutWebsite).every(v => v !== "");
            let isNIKExist = checkNIKExsistence(biodata["NIK"]);
            if (biodata !== bioTemplate && biodata.username !== "" && biodata.email !== "" && data[data.length - 1] !== biodata && formFilled && !isNIKExist) {
                setData([
                    ...data,
                    biodata
                ])
            }
            setIsFormFilled(formFilled);
        } else {
            setData(data.map(x => x["NIK"] === biodata["NIK"] ? biodata : x));
            setUpdatedStatus(true);
            handleReset();
        }
        event.preventDefault();
    }

    const handleReset = () => {
        setBiodata(bioTemplate);
        setIsFormFilled(true);
        setupdateMode(false);
        setTimeout(() => setUpdatedStatus(false), 2000);
    }

    const handleUpdate = (event) => {
        const {value} = event.target;
        setupdateMode(true);
        data.forEach((x) => {
            if (x.NIK === value) {
                setBiodata(x);
            }
        });
    }

    const handleDelete = (event) => {
        const {value} = event.target;
        setData(data.filter(x => x["NIK"] !== value));
    }

    return (
        <StyledDiv>
            <div className="form__container">
                <Form biodata={biodata} isUpdateMode={updateMode} isFormFilled={isFormFilled} handleChange={handleChange} handleSubmit={handleSubmit} handleReset={handleReset} />
            </div>
            {updatedStatus && <p style={{color: "green", textAlign: "center"}}>data updated</p>}
            {data.length > 0 && <TableDisplay data={data} onUpdate={(NIK) => handleUpdate(NIK)} onDelete={(NIK) => handleDelete(NIK)} />}
        </StyledDiv>
    )
}

export default Challenge07;
