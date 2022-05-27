import React,{useState,useEffect} from 'react'
import styles from "../styles/Register.module.css"
import RegisterItem from './RegisterItem'
import { useSelector } from 'react-redux'


const RegisterCard = () => {

    const {dishes} = useSelector((state)=> state.menu)
    const [subTotal,setSubTotal] = useState(0)
    const [tax,setTax] = useState(2.20)
    const [total,setTotal] = useState(0)
    
    console.log(dishes);

    useEffect(()=>{

        let subTotal = 0
        dishes.forEach((el)=> subTotal += el.totalCost)
        setSubTotal(subTotal)
        setTotal(subTotal  +  tax)

    },[dishes,tax])




    return (
        <div className={styles.main_container}>
            <h1 className={styles.title}>Your Cart</h1>
            {
                (dishes.length !== 0) ? dishes.map((dish,i)=>{
                    return(
                        <RegisterItem
                            key={i}
                            {...dish}
                        />
                    )
                })
                :<h2>No tiene productos</h2>
            }
            <hr className={styles.horizontal} />
            <hgroup className={styles.grupo_h}>
                <h3>Subtotal: <span>${subTotal.toFixed(2)}</span></h3>
                <h3>Tax: <span>${tax}</span></h3>
                <h3>Total: <span>${total.toFixed(2)}</span></h3>
            </hgroup>
        </div>
    )
}

export default RegisterCard