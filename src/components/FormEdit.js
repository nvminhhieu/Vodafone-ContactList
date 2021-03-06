import React,{useState} from 'react';

function FormEdit(props)
{

    const [inputName,setInputName] = useState("")
    const [inputEmail,setInputEmail] = useState("")                                        //States for inputs 
    const [inputPhone,setInputPhone] = useState("")


    function settingObject(index)
    {
    const object = {
      id: index,
      name: inputName,                                                          //Creating Object in given data format
      email: inputEmail,
      phoneNumber: inputPhone
    }
    return object
    }


    function submitHandling(e)
    {
        e.preventDefault()

        const newContacts = [settingObject(Math.floor(Math.random()*10000)),...props.table]                      //Generate random ID from 0-100000 for new added contact. Then create new array with old contacts and added contact
        
        props.setTable(newContacts)                 //set the data right after fetching json
        props.setFilTable(newContacts)              //set the data that visualized

        setInputName("")
        setInputEmail("")                                   //clearing input areas 
        setInputPhone("")
    }

    function removing(e)
    {
        props.setTable(props.table.filter((contact) => contact != e))
        props.setFilTable(props.table.filter((contact) => contact != e))                //Deleting function and update the data states 
    }


    return(
    <form className="my-form shadow-lg bg-light" onSubmit={(e) => submitHandling(e)}>
          <div className="form-btn back-btn bg-danger" onClick={()=>props.aniClose()}>
            <span>back</span>
          </div>
        <div className="form-ctn">
          <div className="form-add-ctn">
            <div className="form-add-input">
              <input className="form-add" type="text" placeholder="Name" value={inputName} onChange={(e)=>setInputName(e.target.value)}/>
              <input className="form-add" type="text" placeholder="Email" value={inputEmail} onChange={(e)=>setInputEmail(e.target.value)}/>
              <input className="form-add" type="text" placeholder="Phone" value={inputPhone} onChange={(e)=>setInputPhone(e.target.value)}/>
            </div>
            <button className="form-btn bg-success" type="submit">
              <span>add</span>
            </button>
          </div>
          {(props.table).map(function(contact)
          {
            return <div key={contact.id} className=" shadow form-name-ctn">
              <div className="form-name bg-dark">
                <p  className="my-h1">{contact.name}</p>
              </div>
              <div className="form-btn bg-danger" onClick={() => removing(contact)}>
                <span>DEL</span>
              </div>
              </div>
          }
        )}
        </div>
      </form>
    )
}

export default FormEdit