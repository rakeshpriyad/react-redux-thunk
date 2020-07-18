import { SubmissionError} from 'redux-form';
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const validateAndSubmit = ({id='', userName='', emailAddress='', mobileNo='', address='' }, save, reset) => {
    return sleep(1000).then(() => {
      // simulate server latency
      let error = {};
      let isError = false;
      
      if(userName.trim() === '') {
          error.userName = 'User Name is mandatory field';
          isError = true;
      }
      if(mobileNo.trim() === '') {
          error.mobileNo = 'Mobile no# is mandatory field';
          isError = true;
      }
  
      if (address.trim() === '') {
          error.address = 'Address is mandatory field';
          isError = true;
      }
  
      if (emailAddress.trim() === '') {
          error.emailAddress = 'Email is mandatory field';
          isError = true;
      } 
      if (isError) {
          console.log(isError, 'Error ');
          throw new SubmissionError(error);
  
      } else {
          console.log(' isError', isError);
          save({id,userName, emailAddress, mobileNo, address});
          console.log(`submiting Data:\n\n${JSON.stringify({userName, emailAddress, mobileNo, address}, null, 2)}`)
         // reset();
      }
    })
  }

  export default validateAndSubmit