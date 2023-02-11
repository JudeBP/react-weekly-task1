import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import { Button, InputLabel, TextField } from '@mui/material';

// Style for the box
const style = {
    maxHeight: '95vh',
    width: '500px',
    bgcolor: 'background.paper',
    overflow: 'auto',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Form = (props) => {

    var today = new Date();
    var day = String(today.getDate()).padStart(2, '0');
    var month = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var year = today.getFullYear();

    let initialData = {
        name: "",
        dob: "",
        email: "",
        contactNo: "",
        quickFact: "",
    }

    today = year + '-' + month + '-' + day;

    const [data, setData] = useState(initialData);

    // Initializes the data to be the initial data (empty)
    useEffect(() => {
        setData(initialData);
    }, [])

    const [errors, setErrors] = useState({
        name: {
            value: false,
            text: "This is invalid",
        },
        dob: {
            value: false,
            text: "",
        },
        email: {
            value: false,
            text: "",
        },
        contactNo: {
            value: false,
            text: "",
        },
        quickFact: {
            value: false,
            text: "",
        },
    });

    // Handle input change
    const handleInputChange = (e) => {
        var element = e.target;
        setData({
            ...data,
            [element.id]: element.value
        })

        validate(element);
    }

    // Validate name
    const validateName = (value) => {
        if (value.trim().length == 0) {
            setErrors(prev => ({
                ...prev,
                name: {
                    value: true,
                    text: "Field is required"
                }
            }))
        } else if (!(/^[a-zA-Z ]*$/.test(value))) {
            setErrors(prev => ({
                ...prev,
                name: {
                    value: true,
                    text: "Name should only contain alphabet characters"
                }
            }))
        } else {
            setErrors(prev => ({
                ...prev,
                name: {
                    value: false,
                    text: "",
                }
            }))
        }
    }

    // Validate Email
    const validateEmail = (value) => {
        if (value.trim().length == 0) {
            setErrors(prev => ({
                ...prev,
                email: {
                    value: true,
                    text: "Field is required"
                }
            }))
        } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))) {
            setErrors(prev => ({
                ...prev,
                email: {
                    value: true,
                    text: "Invalid email format"
                }
            }))
        } else {
            setErrors(prev => ({
                ...prev,
                email: {
                    value: false,
                    text: "",
                }
            }))
        }
    }

    // Validate Date of Birth
    const validateDob = (value) => {
        if (value.trim().length == 0) {
            setErrors(prev => ({
                ...prev,
                dob: {
                    value: true,
                    text: "Field is required"
                }
            }))
        } else if (value >= today) {
            setErrors(prev => ({
                ...prev,
                dob: {
                    value: true,
                    text: "Date of birth cannot exceed today"
                }
            }))
        } else {
            setErrors(prev => ({
                ...prev,
                dob: {
                    value: false,
                    text: "",
                }
            }))
        }
    }

    // Validate Contact
    const validateContact = (value) => {
        if (value.trim().length == 0) {
            setErrors(prev => ({
                ...prev,
                contactNo: {
                    value: true,
                    text: "Field is required"
                }
            }))
        } else if (!(/^[0-9]*$/.test(value))) {
            setErrors(prev => ({
                ...prev,
                contactNo: {
                    value: true,
                    text: "Contact should only contain digits"
                }
            }))
        } else if (value.trim().length != 10) {
            setErrors(prev => ({
                ...prev,
                contactNo: {
                    value: true,
                    text: "Contact should be 10 characters"
                }
            }))
        } else {
            setErrors(prev => ({
                ...prev,
                contactNo: {
                    value: false,
                    text: "",
                }
            }))
        }
    }

    // Validate Quick Facts
    const validateQuickFact = (value) => {
        if (value.trim().length == 0) {
            setErrors(prev => ({
                ...prev,
                quickFact: {
                    value: true,
                    text: "Field is required"
                }
            }))
        } else {
            setErrors(prev => ({
                ...prev,
                quickFact: {
                    value: false,
                    text: "",
                }
            }))
        }
    }

    // Validate
    const validate = (element) => {
        let id = element.id;
        let value = element.value

        switch (id) {
            case "name": validateName(value);
                break;
            case "dob": validateDob(value);
                break;
            case "email": validateEmail(value);
                break;
            case "contactNo": validateContact(value);
                break;
            case "quickFact": validateQuickFact(value);
                break;
        }
    }

    // Function to submit form
    const submit = () => {
        validateName(data.name)
        validateDob(data.dob)
        validateEmail(data.email)
        validateContact(data.contactNo)
        validateQuickFact(data.quickFact)
        props.submitForm(data);
    }

    return (
        <>
            <Box
                sx={style}
            >
                <div className="employee-form">
                    <div className="text-field">
                        <InputLabel htmlFor="name">Name</InputLabel>
                        <TextField
                            error={errors.name.value}
                            onChange={handleInputChange}
                            fullWidth
                            margin="dense"
                            id="name"
                            placeholder="Your Name"
                            helperText={errors.name.value ? errors.name.text : ""}
                        />
                    </div>
                    <div className="text-field">
                        <InputLabel htmlFor="dob">Date of Birth</InputLabel>
                        <TextField
                            error={errors.dob.value}
                            fullWidth
                            onChange={handleInputChange}
                            margin="dense"
                            id="dob"
                            type="date"
                            helperText={errors.dob.value ? errors.dob.text : ""}
                        />
                    </div>
                    <div className="text-field">
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <TextField
                            error={errors.email.value}
                            fullWidth
                            onChange={handleInputChange}
                            margin="dense"
                            id="email"
                            placeholder="Your Email"
                            helperText={errors.email.value ? errors.email.text : ""}
                        />
                    </div>
                    <div className="text-field">
                        <InputLabel htmlFor="contactNo">Contact No.</InputLabel>
                        <TextField
                            error={errors.contactNo.value}
                            fullWidth
                            onChange={handleInputChange}
                            margin="dense"
                            id="contactNo"
                            placeholder="Contact Number"
                            helperText={errors.contactNo.value ? errors.contactNo.text : ""}
                        />
                    </div>
                    <div className="text-field">
                        <InputLabel htmlFor="quickFact">Quick Fact</InputLabel>
                        <TextField
                            error={errors.quickFact.value}
                            fullWidth
                            onChange={handleInputChange}
                            margin="dense"
                            id="quickFact"
                            placeholder="About you.."
                            multiline
                            helperText={errors.quickFact.value ? errors.quickFact.text : ""}
                            rows={4}
                        />
                    </div>

                    <Button onClick={submit} variant="contained" style={{ marginTop: '15px', marginBottom: '15px' }}>Submit</Button>
                </div>
            </Box>
        </>
    )
}

export default Form