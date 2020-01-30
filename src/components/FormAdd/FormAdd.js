import React from "react";
import {Form, Button} from "react-bootstrap";
import {renderInput, renderInputNumber, renderInputSelect} from '../Input/TextInput'
import {USERS_TYPES_DATA} from "../../constants/form-fields";
import {required,
    requiredFirstName,
    requiredLastName,
    requiredAge,
    requiredPhone} from '../../validators/validators'

import { Field, reduxForm } from 'redux-form';


const FormAdd = props => {

    const { handleSubmit, valid } = props;
    return (

        <Form  onSubmit={handleSubmit} className="w-50 p-12 mx-auto form_custom" border="primary">

            <div>
                <div>{USERS_TYPES_DATA.FIRST_NAME}</div>
                <div>
                    <Field
                        name="firstName"
                        component={renderInput}
                        validate={[required, requiredFirstName]}
                    />
                </div>
            </div>
            <Form.Group>
                <Form.Label>{USERS_TYPES_DATA.LAST_NAME}</Form.Label>
                <div>
                    <Field
                        name="lastName"
                        component={renderInput}
                        validate={[required, requiredLastName]}


                    />
                </div>
            </Form.Group>
            <Form.Group>
                <Form.Label>{USERS_TYPES_DATA.GENDER}</Form.Label>
                <div>
                    <Field name="Gender"
                           validate={required}
                           component={renderInputSelect}>
                    </Field>
                </div>
            </Form.Group>

            <Form.Group>
                <Form.Label>{USERS_TYPES_DATA.AGE}</Form.Label>
                <div>
                    <Field name="Age"
                           validate={[required, requiredAge]}
                           component={renderInputNumber}
                           type="number"
                           placeholder="Age"
                    >
                    </Field>
                </div>
            </Form.Group>
            <Form.Group >
                <Form.Label>
                    {USERS_TYPES_DATA.PHONE.replace(/[^a-zA-Z]/g, "")}
                </Form.Label>
                <div>
                    <Field name="phone"
                           validate={[required, requiredPhone]}
                           component={renderInput}
                    >
                    </Field>
                </div>
            </Form.Group>

            <Form.Group>
                <Button   type="submit" disabled={!valid}>Submit</Button>
            </Form.Group>
        </Form>

    );
};

export default reduxForm({
    form: 'simple',
})(FormAdd);






















// const FormAdd =()=> {
//     const dispatch = useDispatch();
//     const handleSubmit = (e)=> {
//         // e.preventDefault();
//         // dispatch(actions.onSubmitForm(e.target));
//         // console.log(e.target.value);
//     };
//
//     return (
//         <Form onSubmit={handleSubmit}  className="w-75 p-3 mx-auto form_custom" border="primary">
//             <Form.Row>
//                 <Form.Group as={Col}>
//                     <Form.Label>{USERS_TYPES_DATA.FIRST_NAME}</Form.Label>
//                     <Form.Control
//                         type="text"
//                         placeholder={`${USERS_TYPES_DATA.FIRST_NAME.toLowerCase()}`}
//                     />
//                     <Form.Text className="text-muted"/>
//                 </Form.Group>
//
//                 <Form.Group as={Col}>
//                     <Form.Label>{USERS_TYPES_DATA.LAST_NAME}</Form.Label>
//                     <Form.Control
//                         name={"LAST_NAME"}
//                         type="text"
//                         placeholder={`${USERS_TYPES_DATA.LAST_NAME.toLowerCase()}`}
//                     />
//                     <Form.Text className="text-muted"/>
//                 </Form.Group>
//             </Form.Row>
//             <Form.Row>
//
//
//                 <Form.Group as={Col}>
//                     <Form.Label>{USERS_TYPES_DATA.GENDER}</Form.Label>
//                     <Form.Control
//
//                         as="select"
//                         name={"GENDER"}
//                     >
//                         <option value={0}>Choose</option>
//                         <option value="male">male</option>
//                         <option value="female">female</option>
//                     </Form.Control>
//                 </Form.Group>
//
//                 <Form.Group as={Col}>
//                     <Form.Label>{USERS_TYPES_DATA.AGE}</Form.Label>
//                     <Form.Control
//                         type="number"
//                         name={"AGE"}
//                         placeholder={`${USERS_TYPES_DATA.AGE.toLowerCase()}`}
//                         min={1}
//                         max={100}
//                     />
//                     <Form.Text className="text-muted"/>
//                 </Form.Group>
//             </Form.Row>
//
//
//             <Col sm={4} className="m-sm-auto">
//                 <Form.Group>
//                     <Form.Label>
//                         {USERS_TYPES_DATA.PHONE.replace(/[^a-zA-Z]/g, "")}
//                     </Form.Label>
//                     <Form.Control
//
//                         type="text"
//                         placeholder={`${USERS_TYPES_DATA.PHONE.toLowerCase().replace(
//                             /phone/,
//                             ""
//                         )}`}
//                     />
//                     <Form.Text className="text-muted"/>
//                 </Form.Group>
//             </Col>
//             <>
//                 <Button
//                     variant="primary"
//                     type="submit"
//                 >
//                     Submit
//                 </Button>
//
//
//             </>
//         </Form>
//     );
// };

//export default FormAdd;