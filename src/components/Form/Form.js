import Input from "../Input/Input";
import { Button } from "@elevenia/master-ui/components/Atom";

const Form = (props) => {
    const {biodata, isFormFilled, handleChange, handleSubmit, handleReset, isUpdateMode} = props;

    return (
        <form onSubmit={(event) => handleSubmit(event)} className="w-full max-w-lg">
            <h1 className="uppercase font-bold text-gray-700">Registration Form</h1>
            <div className="flex flex-wrap -mx-3 mb-6">
                <Input styledType="TwoLeft" type="text" name="firstname" label="first name" value={biodata.firstname} onChange={(event) => handleChange(event)} placeholder="John" isFilled={isFormFilled || biodata.firstname !== ""} />
                <Input styledType="TwoRight" type="text" name="lastname" label="last name" value={biodata.lastname} onChange={(event) => handleChange(event)} placeholder="Doe" isFilled={isFormFilled || biodata.lastname !== ""} />
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <Input styledType="TwoLeft" type="text" name="username" value={biodata.username} onChange={(event) => handleChange(event)} placeholder="johndoe" isFilled={isFormFilled || biodata.username !== ""} />
                <Input styledType="TwoRight" type="text" name="NIK" value={biodata.NIK} onChange={(event) => handleChange(event)} placeholder="327**5**01**0*0*" isFilled={isFormFilled || biodata.NIK !== ""} notes={"Make sure to use a unique personal NIK"}/>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <Input styledType="One" type="password" name="password" value={biodata.password} onChange={(event) => handleChange(event)} placeholder="******************" isFilled={isFormFilled || biodata.password !== ""} notes="Make it as long and as crazy as you'd like" />
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <Input styledType="One" type="email" name="email" value={biodata.email} onChange={(event) => handleChange(event)} placeholder="example@email.com" isFilled={isFormFilled || biodata.email !== ""} />
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <span className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Gender
                    </span>
                    <div className="w-full flex gap-1">
                        <label htmlFor="gender">
                            <input name="gender" type="radio" value="Male" id="gender1" checked={biodata.gender === "Male"} onChange={(event) => handleChange(event)} placeholder="gender" className="bg-gray-200 text-gray-700 mr-2" />
                            Male
                        </label>
                        <label htmlFor="gender">
                            <input name="gender" type="radio" value="Female" id="gender2" checked={biodata.gender === "Female"} onChange={(event) => handleChange(event)} placeholder="gender" className="bg-gray-200 text-gray-700 mr-2" />
                            Female
                        </label>
                    </div>
                    {!(isFormFilled || biodata.gender !== "") && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="X">
                        Favorite Color
                    </label>
                    <input name="favColor" type="color" value={biodata.favColor} id="favColor" onChange={(event) => handleChange(event)} placeholder="favColor" />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="X">
                        Birthday
                    </label>
                    <input name="birthday" type="date" value={biodata.birthday} id="birthday" onChange={(event) => handleChange(event)} placeholder="birthday" />
                    {!(isFormFilled || biodata.birthday !== "") && <p className="text-red-500 text-xs italic">Please fill out this field.</p>}
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <Input styledType="TwoLeft" type="text" name="phone" value={biodata.phone} onChange={(event) => handleChange(event)} placeholder="0812*022*6**" isFilled={isFormFilled || biodata.phone !== ""} />
                <Input styledType="TwoRight" type="website" name="website" value={biodata.website} onChange={(event) => handleChange(event)} placeholder="mywebsite.com" isFilled={true} />
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-2/3 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="X">
                        Hobby
                    </label>
                    <div className="w-full flex flex-wrap gap-1 mb-6">
                        <label htmlFor="hobby">
                            <input name="hobby" type="checkbox" value="Football" id="hobby1" checked={biodata.hobby.includes("Football")} onChange={(event) => handleChange(event)} placeholder="hobby" className="mr-2" />
                            Football
                        </label>
                        <label htmlFor="hobby">
                            <input name="hobby" type="checkbox" value="Basketball" id="hobby2" checked={biodata.hobby.includes("Basketball")} onChange={(event) => handleChange(event)} placeholder="hobby" className="mr-2" />
                            Basketball
                        </label>
                        <label htmlFor="hobby">
                            <input name="hobby" type="checkbox" value="Music" id="hobby3" checked={biodata.hobby.includes("Music")} onChange={(event) => handleChange(event)} placeholder="hobby" className="mr-2" />
                            Music
                        </label>
                        <label htmlFor="hobby">
                            <input name="hobby" type="checkbox" value="Karate" id="hobby4" checked={biodata.hobby.includes("Karate")} onChange={(event) => handleChange(event)} placeholder="hobby" className="mr-2" />
                            Karate
                        </label>
                    </div>
                </div>
                <div className="w-full md:w-1/3 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="X">
                        Level of Happiness &#128516;
                    </label>
                    <input name="happiness" type="range" value={biodata.happiness} id="happiness" onChange={(event) => handleChange(event)} placeholder="happiness" />
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
                {!isUpdateMode && <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <Button type="submit" className="w-full font-bold text-xl" variant="secondary">Submit</Button>
                </div>}
                {isUpdateMode && <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <Button type="submit" className="w-full font-bold text-xl" variant="secondary">Update</Button>
                </div>}
                <div className="w-full md:w-1/2 px-3">
                    <Button type="reset" onClick={handleReset} className="w-full text-xl" variant="secondary">Reset</Button>
                </div>
            </div>
        </form>
    )
}

export default Form;
