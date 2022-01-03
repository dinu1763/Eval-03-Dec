import { useRef, useState } from "react"

export const Form = () =>{
    const [form, setForm] = useState(null);
    const ref = useRef(null)
    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]:value,
        });
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(form)
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <input onChange = {handleChange} type="text" name="title" placeholder="Title of the Recipe" /><br />
            <input onChange = {handleChange} type="text" name="ingredients" placeholder="Ingredients" /><br />
            <input onChange = {handleChange} type="number" name="ttc" placeholder="Time to Cook" /><br />
            <input onChange = {handleChange} type="text" name="instruction" placeholder="Instructions" /><br />
            <input ref={ref} onChange = {handleChange} type="file" name="image" /><br />
            <input type="submit" value="Add Recipe"/>
        </form>
    )
}