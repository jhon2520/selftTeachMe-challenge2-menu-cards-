import React from 'react'
import styles from "../styles/RegisterItem.module.css"
import { useDispatch } from 'react-redux'
import { addDish, removeDish } from '../state/menuSlice';
import options from '../assets/data/options';

const RegisterItem = ({img,name,value,totalCost = 0,quantity,id}) => {

    const dispatch = useDispatch();

    const handleAddNewDish = (id)=> {

        const dish = options.find((el)=> el.id === id)
        dispatch(addDish(dish))

    }
    const handleAddRemoveDish = (id)=> {

        const dish = options.find((el)=> el.id === id)
        dispatch(removeDish(dish))

    }

    return (
        <>
        <div className={styles.main_container}>
            <img src={img} alt="" />
            <section className={styles.item_info}>
                <h3>{name}</h3>
                <h3>{value}</h3>
                <div className={styles.item_option}>
                    <div className={styles.buttons}>
                        <button onClick={()=>handleAddRemoveDish(id)}>&#60;</button>
                        <h3>{quantity}</h3>
                        <button onClick={()=>handleAddNewDish(id)}>&#62;</button>
                    </div>
                    <h2>$ {totalCost.toFixed(2)}</h2>
                </div>
            </section>
        </div>
        </>
    )
}

export default RegisterItem