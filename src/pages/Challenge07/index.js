import { useState } from 'react';
import styled from 'styled-components';
import Form from '../../components/Form/Form';
import TableDisplay from '../../components/Table/TableDisplay';
import formContent from '../../assets/formContent';

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
    const [data, setData] = useState(formContent);
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
