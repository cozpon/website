import Axios from 'axios';

let login = '/api/auth/login';
let logout = '/api/auth/logout';
let register = '/api/auth/register';
let officeRegister = '/api/auth/office';

//___________________________________________

export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const ERROR = 'ERROR';
export const REGISTER_OFFICE = 'REGISTER_OFFICE';

export const registerUser = (registerInfo) => {
  console.log('RegInfo', registerInfo);
  return (dispatch) => {
    return Axios.post(register, registerInfo)
    .then((response) => {
      console.log('action response',response);
        dispatch({
          type: REGISTER_USER,
          response: response.data
       });
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        error: err
      });
    });
  };
};

export const loginUser = (userCreds) => {
  console.log(userCreds);
  return (dispatch) => {
    return Axios.post(login, userCreds)
    .then((response) => {
      console.log(response, "RESPONSE DATA");
      dispatch({
        type: LOGIN_USER,
        userDetails: response.data
      });
    })
    .catch((err) => {
      dispatch({
        type: ERROR,
        error: 'invalid user name or password'
      });
    });
  };
};


export const logoutUser = () => {
  return (dispatch) => {
    // console.log(dispatch, "logout");
    return Axios.get(logout)
    .then((response) => {
      if (response.data.success) {
        dispatch({
          type: LOGOUT_USER,
          success: response.data.success
        });
      }
    })
    .catch((err) => {
      console.log('Logout Failed. Please try again', err);
      return false;
    });
  };
};



export const registerOffice = (officeInfo) => {
  console.log('OFFICEInfo', officeInfo);
  return (dispatch) => {
    return Axios.post(officeRegister, officeInfo)
    .then((response) => {
      console.log(response);
        dispatch({
          type: REGISTER_OFFICE,
          response: response.data
       });
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        error: err
      });
    });
  };
};