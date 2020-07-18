import { reduxForm } from 'redux-form';
import '../../../App.css';
//import { submitUpdateUser } from '../../../actions/userActions';
import { submitUpdateUser } from '../../../api/api';
import { connect } from 'react-redux';
import EditUserFormGenerator from './EditUserFormGenerator'

const EditUserForm = reduxForm({
    form: 'EditUserForm',
    enableReinitialize: true
})(EditUserFormGenerator);

function mapStateToProps(state) {
    return {
        initialValues: {
            id: state.editUser.id,
            userName: state.editUser.userName,
            emailAddress: state.editUser.emailAddress,
            mobileNo: state.editUser.mobileNo,
            address: state.editUser.address
        }
    };
}

export const mapDispatchToProps = (dispatch) => {
    return {
        edit: (user) => dispatch(submitUpdateUser(user))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditUserForm);