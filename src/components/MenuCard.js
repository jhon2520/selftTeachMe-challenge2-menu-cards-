import React from 'react'
import options from '../assets/data/options'
import styles from "../styles/Card.module.css"
import { useDispatch } from 'react-redux'
import { addDish } from '../state/menuSlice'

const MenuCard = () => {
    
    const dispatch = useDispatch();

    const handleAddNewDish = (dish)=> {
        dispatch(addDish(dish))
    }


    return (
        <div className={styles.main_container}>
            <h1 className={styles.title}>To Go Menu</h1>
            {
                options.map((dish)=>{
                    return(
                        <div className={styles.dish_container} key={dish.id}>
                            <img className={styles.dish_img} src={dish.img} alt="" />
                            <div className={styles.info_container}>
                                <hgroup className={styles.grupo_h}>
                                    <h3>{dish.name}</h3>
                                    <h2>$ {dish.value}</h2>
                                </hgroup>
                                <button  onClick={()=>handleAddNewDish(dish)} className={styles.dish_btn}>Add to Cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MenuCard