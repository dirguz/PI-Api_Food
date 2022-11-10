import React, {useEffect, useState} from 'react'
import s from './CreateRecipe.module.css'
import {Link, useHistory} from 'react-router-dom'
import { get_Diets, post_Recipe } from '../../actions/index'
import { useDispatch, useSelector } from 'react-redux'

const validate = (input) => {
    let errors = {};
    input.title
        ? (errors.title = "")
        : (errors.title = "You must name the recipe");
    input.summary
        ? (errors.summary = "")
        : (errors.summary = "You must provide a summary");
    input.dishTypes
        ? (errors.dishTypes = "")
        : (errors.dishTypes = "You must provide a dish type");
    input.instructions
        ? (errors.instructions = "")
        : (errors.instructions = "You must provide an instruction");
    input.diets === 0
        ? (errors.diets = "Choose at least one diet")
        : (errors.diets = "");
    if (!input.score) {
        errors.score = 'You must provide a score'
    } else if (input.score > 100 || input.score < 0) {
        errors.score = 'the range must be between 1 and 100'
    }
    if (!input.health_score) {
        errors.health_score = 'You must provide a healthScore'
    } else if (input.health_score > 100 || input.health_score < 0) {
        errors.health_score = 'The range must be between 1 and 100'
    }
    const imgValidate = /(https?:\/\/.*\.(?:png|jpg))/
    if (!input.image || !imgValidate.test(input.image)) {
        errors.image = 'Please insert an image type URL'
    } else {
        errors.image = "";
    }
    return errors;
}

function CreateRecipe() {
    const dispatch = useDispatch()
    const history = useHistory()
    const diets = useSelector(state => state.diets)
    const [errors, setErrors]= useState({})
    const [input, setInput] = useState({
        name:'',
        summary:'',
        health_score:0,
        instructions:'',
        image:'',
        dietType: [],
        dishTypes:''
    })
    
    const handleChange = (e) => {
     setInput({
        ...input,
        [e.target.name]: e.target.value
      })
     setErrors(validate({
        ...input,
        [e.target.name]: e.target.value
     }))
    }

    const handleCheck = (e) => {
        e.preventDefault();
        if (input.dietType.includes(e.target.value)) {
            return 'Diet Type exists'
        } else {
            setInput((input) => ({
                ...input,
                dietType: [...diets, e.target.value],
            }));
            setErrors(validate({
                ...input,
                [e.target.name]: e.target.value
            }));
            console.log(input)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.title) {
            console.log(input)
            dispatch(post_Recipe(input))
            alert('Recipe created succesfully!')
            setInput({
                name: '',
                summary: '',
                image: '',
                dietType: [],
                dishTypes: '',
                health_score: '',
                instructions: '',
            })
            history.push('/home')
        } else {
            alert('Please complete all fields')
        }
    }

    // const handleDelete = (el) => {
    //     setInput({
    //         ...input,
    //         dietType: input.diets.filter(dietType => dietType !== el)
    //     })
    // }

    useEffect(() => {dispatch(get_Diets())},[dispatch]) 

  return (
    <div className={s.createContainer}>
            <form className={s.formContainer} onSubmit={(e) => handleSubmit(e)}>
                <h1 className={s.formTitle}>Create your recipe</h1>

                <label className={s.etiqueta}>Name:</label>
                <div className={s.inputBox}>
                    <input type='text' placeholder='Complete here...' value={input.title} name='name' onChange={(e) => handleChange(e)} />
                    {errors.title && <p className={s.errores}>{errors.title}</p>}
                </div>

                <label className={s.etiqueta}>Summary:</label>
                <div className={s.inputBox}>
                    <input className={s.input} type='text' placeholder='Complete here...' value={input.summary} name='summary' onChange={(e) => handleChange(e)} />
                    {errors.summary && <p className={s.errores}>{errors.summary}</p>}
                </div>

                <label className={s.etiqueta}>Imagen:</label>
                <div className={s.inputBox}>
                    <input className={s.input} type='text' placeholder='Complete here...' value={input.image} name='image' onChange={(e) => handleChange(e)} />
                    {errors.image && <p className={s.errores}> {errors.image}</p>}
                </div>


                <label className={s.etiqueta}>Dish Type:</label>
                <div className={s.inputBox}>
                    <input className={s.input} type='text' placeholder='Complete here...' value={input.dishTypes} name='dishTypes' onChange={(e) => handleChange(e)} />
                    {errors.dishTypes && <p className={s.errores}>{errors.dishTypes}</p>}
                </div>

                <div className={s.inputBoxHealt}>
                    <label className={s.etiqueta}>Health Score:</label>
                    <input className={s.inputHealt} type='text' value={input.health_score} name='health_score' onChange={(e) => handleChange(e)} />
                    {errors.health_score && <p className={s.errores}>{errors.health_score}</p>}
                </div>

                <label className={s.etiqueta}>Instructions:</label>
                <div className={s.inputBox}>
                    <textarea type='text' className={s.textarea} placeholder='Complete here...' value={input.instructions} name='instructions'
                        onChange={(e) => handleChange(e)} />
                    {errors.instructions && <p className={s.errores}>{errors.instructions}</p>}
                </div>

                <label className={s.etiqueta}>Diet Types:</label>
                <div className={s.inputBox}>
                    <select onChange={(e) => handleCheck(e)} className={s.select}>
                        <option value='ALL'> Total Recipes</option>
                        {diets?.map(el => (
                            <option key={el} value={el}>{el}</option>
                            ))
                        }
                    </select>
                    <ul><li>{input.dietType}</li></ul>
                    {errors.diets && <p className={s.errores}>{errors.diets}</p>}
                </div>
                <div className={s.buttoncenter}>
                    <button className={s.button} type='submit'>Create</button>
                    <Link to="/home"><button className={s.button}>Go Back to Home</button></Link>
                </div>
            </form>
            {/* {input.dietType.map(el =>
                <div key={el} className={s.delDiet}>
                    <p> {el}</p>
                    <button className={s.btnX} onClick={() => handleDelete(el)}>X</button>
                </div>
            )} */}
            <br />


        </div>
  )
}

export default CreateRecipe