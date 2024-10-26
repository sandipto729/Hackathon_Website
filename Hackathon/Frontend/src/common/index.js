const backendURL = 'http://localhost:8000';

const SummaryApi={
    UserSignUp:{
        url: `${backendURL}/api/signup`,
        method: 'POST'
    },
    UserSignIn:{
        url: `${backendURL}/api/signin`,
        method: 'POST'
    },
    UserFetch:{
        url: `${backendURL}/api/fetchuser`,
        method: 'GET'
    },
    ProjectFetch:{
        url: `${backendURL}/api/fetchproject`,
        method: 'GET'
    },
    UserProjectSignUp:{
        url: `${backendURL}/api/userprojectsignup`,
        method: 'POST'
    },
    UserLogout:{
        url: `${backendURL}/api/logout`,
        method: 'POST'
    }
}

export default SummaryApi