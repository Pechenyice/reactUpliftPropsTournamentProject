import React, {useState} from "react";

function NewTournamentAddMemberForm({onNewMemberSubmit}) {

    const [value, setValue] = useState(
        {
          fields: {
            name: ''
          }
        }
    );

    function handleInputChange(e) {
        let fields = value.fields;
        fields[e.target.name] = e.target.value;
        setValue({fields});
    }

    function handleNewMemberAction() {
        onNewMemberSubmit(value.fields);
        setValue({fields: {name: ''}});
    }

    return (
        <div>
            <input type='text' placeholder='Enter name' className='newTournamentTable__nameInput' value={value.fields.name} name='name' onChange={handleInputChange}></input>
            <div className='newTournamentTable__addButton' onClick={handleNewMemberAction}>Add new member +</div>
        </div>
    );
}

export default NewTournamentAddMemberForm;