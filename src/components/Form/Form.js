import { Fragment } from "react";
import styles from './Form.module.css'
import GoogleButton from "./GoogleButton";

const Form = () => {
    return (
        <Fragment>
            <form className={styles.form}>
                <label style={{alignItems:'left'}}>Email</label>
                <input />
                <br/>
                <label>Password (6 or more characters)</label>
                <input />
                <p>By clicking Agree & Join, you agree to the LinkedIn <span style={{color: "blue"}}>User Agreement</span> , <span style={{color: "blue"}}>Privacy Policy</span>, and<span style={{color: "blue"}}> Cookie Policy</span>. </p>
                <button className={styles.button}><span>Agree & Join</span></button>
                
                <hr/>
                
                <GoogleButton/>
                <p>Already on LinkedIn? <a href="www.linkedin.com">Sign in</a></p>
            </form>
        </Fragment>
    )
}
export default Form;