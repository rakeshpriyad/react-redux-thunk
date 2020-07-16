import React from 'react'
//import { Field, reduxForm, SubmissionError} from 'redux-form';
import { Field } from 'redux-form';
import { FormLabel } from '../FormLabel';
import '../../../App.css';
import { renderField } from '../FormInputField'
//import { submitSaveUser } from '../../../actions/userActions';
//import { connect } from 'react-redux';

const AddUserFormGenerator = (props) => {
    //const { asyncValidating, handleSubmit, submitUserAction, submitLoadUserAction, pristine, submitting, reset, user } = props;
    const { handleSubmit } = props;
    return (<form onSubmit={handleSubmit(fields => props.save(fields))} id='form1' className='mLabForm'>
        <div className='form-row'>
            <FormLabel labelName={'User Name'} fieldName={'User Name'} isRequire={true} />
            <Field component={renderField} type='text' placeholder='User Name' name='userName' id='userName' />
        </div>

        <div className='form-row'>
            <FormLabel labelName={'Email Address'} fieldName={'Email Address'} isRequire={true} />
            <Field component={renderField} type='email' placeholder='abcdef@mlab.com' name='emailAddress' id='emailAddress' />
        </div>
        <div className='form-row'>
            <FormLabel labelName={'Mobile No'} fieldName={'Mobile No'} isRequire={false} />
            <Field component={renderField} type='number' placeholder='0800000000' name='mobileNo' id='mobileNo' />
        </div>
        <div className='form-row'>
            <FormLabel labelName={'Address '} fieldName={'Address'} isRequire={true} />
            <Field component={renderField} type='text' placeholder='Address' name='address' id='address' />
        </div>
        <div className={`submitBtn u-mt30 u-mb80`}>
            <button type="submit">Submit</button>
        </div>
    </form>)
}

export default AddUserFormGenerator;
