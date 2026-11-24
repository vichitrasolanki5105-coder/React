import { useState } from "react"

export default function ContactFrom(){
    const [data,updateData]= useState({
        name: "",
        email: "",
        subject: "",
        body: "",
    })

    var handleChange = (e) => {
        e.preventDefault();
        var key =e.target.name;
        var value= e.target.value;

        updateData((prevData)=>({...prevData,[key]: value}));
    }
    var handleSubmit =async(e)=>{
        e.preventdefault();

        var CreateEntry=await fetch("url",{
            method: "Post",
            Headers: {
                contentType: "Application/JSON"
            },
            body: JSON.stringify(data)
        })

        console.log("data",data);
        alert("Form Submitted Sucessfuly");
    }
    return(
    <div>
        <h1 >Contact From</h1>
        <form onSubmit={handleSubmit    }>
            <label htmlFor="Name">Name</label>
            <input type="text"
              id="Name"
              name="name"
              value={data.name} 
              onChange={(e)=> handleChange(e)}
              placeholder="Enter Your Name" 
              required
            />
            <label htmlFor="Email">Email</label>
            <input type="text" 
            id="Email"
            name="email"
            value={data.email}
            onChange={(e)=> handleChange(e)} 
            placeholder="Enter Your Email" 
            required
            />
            <label htmlFor="sub">Subject</label>
            <input type="text" 
            id="sub"
            name="subject"
            value={data.subject} 
            onChange={(e)=> handleChange(e)}
            placeholder="Enter Your Subject" 
            required
            />
            <label htmlFor="Content">Content</label>
            <input type="text" 
            id="Content"
            name="body" 
            value={data.body}
            onChange={(e)=> handleChange(e)}
            placeholder="Enter Your Content" 
            required
            />
            <button type="Submit">Submit</button>
        </form>
    </div>
    )
}