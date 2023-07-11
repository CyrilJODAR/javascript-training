import { useState } from "react";

const ContactForm = () =>{

    const [contactSubmited, setContactSubmited] = useState({
        firstname : "",
        lastname : "",
        email: "",
        message: "",
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        setContactSubmited({
            firstname : e.target.firstName.value,
            lastname : e.target.lastName.value,
            email: e.target.email.value,
            message: e.target.message.value,
        })
    }

    return ( 
        <>
            <div className="container" onSubmit={handleSubmit}>
                <form>
                    <h3>CONTACT FORM</h3>
                    <div className="row">
                        <div className="col-25"><label htmlFor="firstName">first Name</label></div>
                        <div className="col-75"><input type="text" id="firstName" name="firstName" placeholder="votre prénom"/></div>
                    </div>
                    <div className="row">
                        <div className="col-25"><label htmlFor="lastName">last Name</label></div>
                        <div className="col-75"><input type="text" id="lastName" name="lastName" placeholder="votre nom"/></div>
                    </div>
                    <div className="row">
                        <div className="col-25"><label htmlFor="message ">message </label></div>
                        <div className="col-75"><textarea id="message" name="message " placeholder="message :"></textarea></div>
                    </div>
                    <div className="row">
                        <div className="col-25"><label htmlFor="email ">email </label></div>
                        <div className="col-75"><input type="text" id="email" name="email " placeholder="email :"></input></div>
                    </div>
                    <div className="row">
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
            {contactSubmited.firstname !== "" &&
            <article className="myArticles">
                <h3>Prénom : {contactSubmited.firstname}</h3>
                <p>Nom : {contactSubmited.lastname}</p>
                <p>Message : {contactSubmited.message}</p>
                <p>Email : {contactSubmited.email}</p>
            </article>}
        </>
    )
}

export default ContactForm;