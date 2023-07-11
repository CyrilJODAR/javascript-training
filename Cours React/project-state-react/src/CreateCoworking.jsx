const CreateCoworking = () =>{
    const handleSubmit = (e) =>{
        e.preventDefault()
        const title = e.target.title.value
        const desc = e.target.desc.value
        const adress = e.target.adress.value

        console.log(title, desc, adress)
    }

    return(
        <div className="container" onSubmit={handleSubmit}>
            <form>
                <div className="row">
                    <div className="col-25"><label htmlFor="fname">First Name</label></div>
                    <div className="col-75"><input type="text" id="fname" name="title" placeholder="Your name.."/></div>
                </div>
                <div className="row">
                    <div className="col-25"><label htmlFor="lname">Last Name</label></div>
                    <div className="col-75"><input type="text" id="lname" name="desc" placeholder="Your last name.."/></div>
                </div>
                <div className="row">
                    <div className="col-25"><label htmlFor="subject">Subject</label></div>
                    <div className="col-75"><textarea id="subject" name="adress" placeholder="Write something.."></textarea></div>
                </div>
                <div className="row">
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default CreateCoworking;