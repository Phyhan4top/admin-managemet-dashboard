import requestFactory from './factory';

const AuthServices = {
  googleSignUp: async (data: { token: string }) =>
    requestFactory('/auth/vendor/google-sign-up', 'POST', data),
  googleSignIn: async (data: { token: string }) =>
    requestFactory('/auth/vendor/google-sign-in', 'POST', data),
};

export default AuthServices;
