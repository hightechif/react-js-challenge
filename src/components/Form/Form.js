import Input from "../Input/Input";

const Form = (props) => {
    const {biodata, isFormFilled, handleChange, handleSubmit, handleReset, isUpdateMode} = props;

    return (
        <form onSubmit={(event) => handleSubmit(event)} className="w-full max-w-lg">
            <h1 className="uppercase font-bold text-gray-700">Registration Form</h1>
            <div className="flex flex-wrap -mx-3 mb-6">
                <Input styledType="TwoLeft" type="text" name="firstname" label="first name" value={biodata.firstname} onChange={(event) => handleChange(event)} placeholder="John" isFilled={isFormFilled} />
                <Input styledType="TwoRight" type="text" name="lastname" label="last name" value={biodata.lastname} onChange={(event) => handleChange(event)} placeholder="Doe" isFilled={isFormFilled} />
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <Input styledType="TwoLeft" type="text" name="username" value={biodata.username} onChange={(event) => handleChange(event)} placeholder="johndoe" isFilled={isFormFilled} />
                <Input styledType="TwoRight" type="text" name="NIK" value={biodata.NIK} onChange={(event) => handleChange(event)} placeholder="327**5**01**0*0*" isFilled={isFormFilled} notes={"NIK already exist. Use another value"}/>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <Input styledType="One" type="password" name="password" value={biodata.password} onChange={(event) => handleChange(event)} placeholder="******************" isFilled={isFormFilled} notes="Make it as long and as crazy as you'd like" />
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <Input styledType="One" type="email" name="email" value={biodata.email} onChange={(event) => handleChange(event)} placeholder="example@email.com" isFilled={isFormFilled} />
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <span className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Gender
                    </span>
                    <div className="w-full flex gap-1">
                        <input name="gender" type="radio" value="Male" id="gender1" onChange={(event) => handleChange(event)} placeholder="gender" className="bg-gray-200 text-gray-700" />
                        <label htmlFor="gender">Male</label>
                        <input name="gender" type="radio" value="Female" id="gender2" onChange={(event) => handleChange(event)} placeholder="gender" className="bg-gray-200 text-gray-700" />
                        <label htmlFor="gender">Female</label>
                    </div>
                    {!isFormFilled && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="X">
                        Favorite Color
                    </label>
                    <input name="favColor" type="color" value={biodata.favColor} id="favColor" onChange={(event) => handleChange(event)} placeholder="favColor" />
                    {!isFormFilled && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="X">
                        Birthday
                    </label>
                    <input name="birthday" type="date" value={biodata.birthday} id="birthday" onChange={(event) => handleChange(event)} placeholder="birthday" />
                    {!isFormFilled && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <Input styledType="TwoLeft" type="text" name="phone" value={biodata.phone} onChange={(event) => handleChange(event)} placeholder="0812*022*6**" isFilled={isFormFilled} />
                <Input styledType="TwoRight" type="website" name="website" value={biodata.website} onChange={(event) => handleChange(event)} placeholder="mywebsite.com" isFilled={isFormFilled} />
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-2/3 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="X">
                        Hobby
                    </label>
                    <div className="w-full flex gap-1">
                        <input name="hobby" type="checkbox" value="Football" id="hobby1" onChange={(event) => handleChange(event)} placeholder="hobby" />
                        <label htmlFor="hobby">Football</label>
                        <input name="hobby" type="checkbox" value="Basketball" id="hobby2" onChange={(event) => handleChange(event)} placeholder="hobby" />
                        <label htmlFor="hobby">Basketball</label>
                        <input name="hobby" type="checkbox" value="Music" id="hobby3" onChange={(event) => handleChange(event)} placeholder="hobby" />
                        <label htmlFor="hobby">Music</label>
                        <input name="hobby" type="checkbox" value="Karate" id="hobby4" onChange={(event) => handleChange(event)} placeholder="hobby" />
                        <label htmlFor="hobby">Karate</label>
                    </div>
                    {!isFormFilled && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
                </div>
                <div className="w-full md:w-1/3 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="X">
                        Level of Happiness &#128516;
                    </label>
                    <input name="happiness" type="range" value={biodata.happiness} id="happiness" onChange={(event) => handleChange(event)} placeholder="happiness" />
                    {!isFormFilled && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
                {!isUpdateMode && <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <button type="submit" className="w-full font-bold text-xl">Submit</button>
                </div>}
                {isUpdateMode && <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <button type="submit" className="w-full font-bold text-xl">Update</button>
                </div>}
                <div className="w-full md:w-1/2 px-3">
                    <input type="reset" onClick={handleReset} className="w-full text-xl" />
                </div>
            </div>
        </form>
    )
}

export default Form;
