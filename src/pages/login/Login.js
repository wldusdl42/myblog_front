import React from "react";
import PropTypes from "prop-types";
import { withRouter, Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import {
    Container, Row, Col, Button, FormGroup, FormText, Input,
} from "reactstrap";
import Widget from "../../components/Widget/Widget.js";
import { loginUser } from "../../actions/auth.js";

import loginImage from "../../assets/loginImage.svg";

class Login extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
    };

    static isAuthenticated(token) {
        if(token) return true;
    };

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };

        this.doLogin = this.doLogin.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
    }

    doLogin(e) {
        e.preventDefault();
        this.props.dispatch(loginUser({email: this.state.email, password: this.state.password}));
    }

    changeEmail(event) {
        this.setState({ email: event.target.value });
    }

    changePassword(event) {
        this.setState({ password: event.target.value });
    }

    render() {
        // const { from } = this.props.location.state || { from: { pathname: '/login' } };

        // if(Login.isAuthenticated(JSON.parse(localStorage.getItem('authenticated')))) {
        //     return (
        //         <Redirect to={from} />
        //     );
        // }

        return (
            <div className="auth-page">
            <Container className="col-12">
              <Row className="d-flex align-items-center">
                <Col xs={12} lg={6} className="left-column">
                  <Widget className="widget-auth widget-p-lg">
                    <div className="d-flex align-items-center justify-content-between py-3">
                      <p className="auth-header mb-0">Login</p>
                    </div>
                    <div className="auth-info my-2">
                      <p>This is a real app with Node.js backend - use <b>"admin@flatlogic.com / password"</b> to login!</p>
                    </div>
                    <form onSubmit={this.doLogin}>
                      <FormGroup className="my-3">
                        <FormText>Email</FormText>
                        <Input id="email" className="input-transparent pl-3" value={this.state.email} onChange={this.changeEmail} type="email" required name="email" placeholder="Email" />
                      </FormGroup>
                      <FormGroup  className="my-3">
                        <div className="d-flex justify-content-between">
                          <FormText>Password</FormText>
                          <Link to="/error">Forgot password?</Link>
                        </div>
                        <Input id="password" className="input-transparent pl-3" value={this.state.password} onChange={this.changePassword} type="password" required name="password" placeholder="Password"/>
                      </FormGroup>
                      <div className="bg-widget d-flex justify-content-center">
                        <Button className="rounded-pill my-3" type="submit" color="secondary-red">Login</Button>
                      </div>
                      <p className="dividing-line my-3">&#8195;Or&#8195;</p>
                      <div className="d-flex align-items-center my-3">
                        <p className="social-label mb-0">Login with</p>
                        <div className="socials">
                          <a href="https://flatlogic.com/">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M13 13V11H22V12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C15.0799 2 17.9313 3.4025 19.8167 5.76259L18.2542 7.01093C16.7443 5.12095 14.4653 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.0796 20 19.446 16.9463 19.9381 13H13Z" fill="#6B859E"/>
                            </svg>
                          </a>
                          <a href="https://flatlogic.com/">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M21.1195 4.50827L22.5343 4.67349L21.8983 5.948C21.5882 6.56953 21.2778 7.19105 20.967 7.81258C20.9302 7.94422 20.8654 8.05962 20.7697 8.20987C20.7296 8.27265 20.5929 8.47236 20.5865 8.48194C20.5504 8.53608 20.5237 8.57878 20.5045 8.61299V11.0015C20.5045 17.1135 14.5895 20.9974 9.00354 20.9974C7.86051 20.9974 6.99207 20.9427 5.99765 20.7257C4.36115 20.3685 3.14327 19.6587 2.58597 18.418L2.01221 17.1407L3.40659 17.0124C4.66801 16.8964 5.76169 16.6561 6.60159 16.3343C4.29577 15.9635 3.0036 14.9508 3.0036 13.0489V12.0489H4.0036C4.22331 12.0489 4.42143 12.0311 4.59854 11.9983C2.868 10.9636 2.00122 9.30379 2.00122 7.00152C2.00103 6.9034 2.00103 6.90339 2.00044 6.79847C1.99394 5.63803 2.05627 5.01797 2.37395 4.22659C2.57754 3.71941 2.87183 3.24988 3.2679 2.81967L4.02251 2L4.75617 2.83847C7.17394 5.60161 9.56395 7.27795 12.0042 7.48072C12.0146 4.93105 13.9415 3.00152 16.5043 3.00152C17.6991 3.00152 18.7828 3.45501 19.6345 4.27273C20.1006 4.36851 20.5957 4.44709 21.1195 4.50827ZM18.9086 6.16202L18.6021 6.0926L18.3904 5.86028C17.8785 5.29855 17.2359 5.00152 16.5043 5.00152C15.0414 5.00152 14.0041 6.04391 14.0041 7.50152C14.0041 7.73974 13.998 7.88942 13.9683 8.08615C13.8499 8.87116 13.4096 9.50152 12.5041 9.50152C9.50607 9.50152 6.80136 7.89542 4.16389 5.15228C4.02792 5.56561 3.99595 5.99047 4.00041 6.78727C4.00101 6.89384 4.00101 6.89384 4.00122 7.00152C4.00122 9.04953 4.83093 10.1698 6.79547 10.7942L7.49255 11.0158V11.7472C7.49255 12.6342 6.65222 13.4691 5.42268 13.8431C5.98631 14.2708 7.139 14.5015 9.00389 14.5015H10.0039V15.5015C10.0039 16.9343 8.35762 18.0561 5.87075 18.6419C6.68178 18.8903 7.76166 18.9974 9.00354 18.9974C13.618 18.9974 18.5045 15.7888 18.5045 11.0015V8.50152C18.5045 8.20774 18.5897 7.95273 18.7311 7.68759C18.7865 7.58393 18.8474 7.48509 18.9225 7.37237C18.9367 7.35115 18.9892 7.27426 19.0309 7.21279L19.1101 7.05429C19.2386 6.79745 19.3669 6.54061 19.4952 6.28377C19.2958 6.24599 19.1003 6.20541 18.9086 6.16202Z" fill="#6B859E"/>
                            </svg>
                          </a>
                          <a href="https://flatlogic.com/">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M4 2H20C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4C2 2.89543 2.89543 2 4 2ZM4 4V20H20V4H4ZM11.1331 12.0044H13V18H15V12.0044H16.9824V10.0044H15V9C15 8.44772 15.4477 8 16 8H17V6H16C14.3431 6 13 7.34315 13 9V10.0044H11.1331V12.0044Z" fill="#6B859E"/>
                            </svg>
                          </a>
                          <a href="https://flatlogic.com/">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M10.0172 20.0036C10.0224 20.1265 10.0092 20.2464 9.9833 20.3677C9.93785 20.5809 9.85007 20.8065 9.72581 21.015C9.37259 21.6075 8.77254 22.0029 8 22.0029C6.1801 22.0029 5.46584 21.1101 4.57152 18.8743C3.96584 17.3601 3.6801 17.0029 3 17.0029L3 15.0029C4.8199 15.0029 5.53416 15.8958 6.42848 18.1315C7.03416 19.6458 7.3199 20.0029 8 20.0029C8 19.7128 7.99603 19.4557 7.98766 19.1077C7.96806 18.2919 7.96581 18.1253 8.0014 17.9072C8.01562 17.4311 8.13854 17.0933 8.385 16.7581C6.15319 16.2722 4.64792 15.2689 3.78397 13.6414L3.46034 12.8803C3.14505 11.9742 3 10.9475 3 9.76183C3 8.39627 3.41635 7.17529 4.19402 6.15467C3.95143 5.18453 3.98465 3.99922 4.52031 2.6606L4.69534 2.2232L5.14407 2.07966C5.20415 2.06044 5.27718 2.04309 5.36299 2.02962C6.23676 1.89248 7.4801 2.21968 9.10555 3.26084C10.0638 3.03872 11.0728 2.92657 12.0888 2.92657C12.9966 2.92657 13.8995 3.0181 14.7616 3.19854C16.3431 2.20821 17.5522 1.8976 18.4025 2.02979C18.4873 2.04298 18.5596 2.06001 18.6192 2.0789L19.0707 2.22209L19.246 2.66216C19.7146 3.8389 19.795 4.92336 19.6245 5.87229C20.5185 6.945 21 8.26378 21 9.76183C21 11.0248 20.9095 11.9744 20.6494 12.8983L20.3749 13.6517C19.6563 15.2774 18.0715 16.292 15.6275 16.7752C15.8816 17.127 16 17.484 16 18.0029V19.0029C16 19.4875 16 19.5025 15.9989 20.0029C16.0012 20.0389 16.0042 20.0565 16.0074 20.0674C16.0066 20.0677 16 22.0029 16 22.0029C15.1482 22.0029 14.5149 21.5875 14.2034 20.9323C14.0419 20.5925 13.9936 20.2681 14 19.9887V18.0029C14 17.9191 13.9971 17.9142 13.7929 17.71C13.2471 17.1642 13 16.7524 13 16.0029V15.0983L13.9001 15.0079C16.5793 14.7389 18.0365 13.9948 18.5197 12.9078L18.7455 12.2906C18.9251 11.6452 19 10.8593 19 9.76183C19 8.59574 18.5929 7.63247 17.823 6.86286L17.3998 6.43984L17.5725 5.86696C17.726 5.35801 17.7624 4.75579 17.6001 4.0689C17.5731 4.07573 17.5451 4.08318 17.516 4.09128C16.9805 4.24035 16.312 4.56021 15.5064 5.09869L15.139 5.34429L14.7101 5.23792C13.8804 5.0322 12.9889 4.92657 12.0888 4.92657C11.0879 4.92657 10.0985 5.05392 9.18446 5.3031L8.73841 5.4247L8.35682 5.16366C7.52363 4.59367 6.83145 4.25471 6.27642 4.09637C6.23678 4.08506 6.19904 4.07494 6.16316 4.06592C5.96952 4.86091 6.04611 5.51406 6.24223 6.00416L6.47738 6.59181L6.04689 7.05582C5.3609 7.7952 5 8.69497 5 9.76183C5 10.7386 5.11434 11.548 5.32388 12.1576L5.58557 12.7771C6.23974 14.0046 7.6292 14.7431 10.1066 15.0086L11 15.1044V16.0029C11 16.7524 10.7529 17.1642 10.2071 17.71C10.0029 17.9142 10 17.9191 10 18.0029L9.98276 18.1878C9.97136 18.2484 9.97136 18.405 9.98709 19.0596C9.99432 19.3607 9.99844 19.599 9.99963 19.848C10.0116 19.8996 10.0134 19.9328 10.0172 20.0036Z" fill="#6B859E"/>
                            </svg>
                          </a>
                          <a href="https://flatlogic.com/">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M4 2H20C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4C2 2.89543 2.89543 2 4 2ZM4 4V20H20V4H4ZM13 9C12.4823 9 11.9353 9.15826 11.4521 9.45215L11 9H10V16H12V12C12 11.4243 12.594 11 13 11H14C14.406 11 15 11.4243 15 12V16H17V12C17 10.1472 15.394 9 14 9H13ZM8 8C8.55228 8 9 7.55228 9 7C9 6.44772 8.55228 6 8 6C7.44772 6 7 6.44772 7 7C7 7.55228 7.44772 8 8 8ZM7 9V16H9V9H7Z" fill="#6B859E"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                      <Link to="/register">Don’t have an account? Sign Up here</Link>
                    </form>
                  </Widget>
                </Col>
              </Row>
            </Container>
          </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isFetching: state.auth.isFetching,
        isAuthenticated: state.auth.isAuthenticated,
        errorMessage: state.auth.errorMessage,
    };
}

export default withRouter(connect(mapStateToProps)(Login));