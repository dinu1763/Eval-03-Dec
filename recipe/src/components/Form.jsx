import { useEffect, useRef, useState } from "react"

export const Form = () =>{
    const [data, setData] = useState([]);
    const [form, setForm] = useState("");
    const ref = useRef(null)

    useEffect(() => {
        getForm()
    },[]);

    const getForm = () =>{
        fetch("http://localhost:9000/recipe").then(d => d.json()).then(res =>{
            setData(res)
        });
    }

    const addRecipe = () => {
            const payload = {
               title: form.title,
               ingredients:form.ingredients,
               ttc:form.ttc,
               instructions:form.instruction,
               image:ref.current,
               status:false,
           };
           fetch("http://localhost:9000/recipe",{
               method:"POST",
               body: JSON.stringify(payload),
               headers:{
                   "content-type": "application/json",
               },
           });
       }
   
    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]:value,
        });
    };

  
    
    return(
        <div>
            
            <input onChange = {handleChange} type="text" name="title" placeholder="Title of the Recipe" /><br />
            <input onChange = {handleChange} type="text" name="ingredients" placeholder="Ingredients" /><br />
            <input onChange = {handleChange} type="number" name="ttc" placeholder="Time to Cook" /><br />
            <input onChange = {handleChange} type="text" name="instruction" placeholder="Instructions" /><br />
            {/* <input ref={ref} onChange = {handleChange} type="file" name="image" /><br /> */}
            <button onClick={addRecipe}>Add Recipe</button>
            
            {data.map((e) =>(
                <div>
            <table >
            <tr>
                <th>Recipe</th>
                {/* <th>Ingredients</th> */}
                <th>Time to Cook</th>
                <br />
            </tr>
            <tr>
                <td>{e.title}</td>
                {/* <td>{e.ingredients}</td> */}
                <td>{e.ttc} Minutes</td>
                <br />
                <br />
            </tr>
            
            </table>
            </div>
            ))}
        </div>
        
    );
};