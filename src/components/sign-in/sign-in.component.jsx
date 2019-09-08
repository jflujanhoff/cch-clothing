import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:''
        };
    }

    handleEvent = (event) => {
        event.preventDefault();
        this.setState({email:'', password:''})
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({[name]:value})
        
    }

    render() {
        return(
            <div className='sign-in'>
                <div className='title'>
                    <h1>Sign In if you have an account</h1>
                    <span>Please add you email and password</span>
                </div>
                <form onSubmit={this.handleEvent}>
                    <FormInput 
                    type="email" 
                    name='email' 
                    onChange={this.handleChange}
                    label='email'
                    value={this.state.email}
                    />
                    <FormInput 
                    type="password" 
                    name='password' 
                    onChange={this.onChangeHandle}
                    label='password'
                    value={this.state.password}
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;