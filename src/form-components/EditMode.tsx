import React, { useState } from "react";
/*
The EditMode component has two states controlled by a switch: 
the default state shows text indiciating the user’s name and whether 
they are a student, and then the alternate state is an editable form 
for editing the user’s name and whether they are a student.

You will need state to handle the component being in “edit mode”, 
the user’s name, and whether or not the user is a student.
Initially, the component is NOT in edit mode, the user’s name is literally 
the string Your Name (as in, that exact string, not your actual name), 
and the user IS a student.
When not in edit mode, the text of the component must include Your Name 
is a student or Your Name is not a student.
As another example, if the user entered their name as Charles Babbage 
and said they were NOT a student, then the text would be Charles Babbage 
is not a student.
*/

export function EditMode(): JSX.Element {
    const [userName, setUserName] = useState<string>("HELLO");
    const [isStudent, setStudent] = useState<boolean>(true);
    const [editUserName, setEditUserName] = useState<boolean>(false);
    return (
        <div>
            <h3>Edit Mode</h3>
        </div>
    );
}
