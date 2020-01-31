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
    form: 'addUserForm',
})(FormAdd);

