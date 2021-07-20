import React from 'react';
import './style.css';
import { Formik } from 'formik';

export default class extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: '',
  //     email: '',
  //     gender: 'male',
  //     role: 'mern stack developer',
  //     terms: '',
  //     errors: {
  //       name: null,
  //       email: null,
  //       gender: null,
  //       role: null,
  //       terms: null
  //     }
  //   };
  // }

  // handleChnage = ({ target: { name, value, checked } }) => {
  //   console.log(name, value, checked);
  //   if (name === 'terms') {
  //     value = checked;
  //   }
  //   const errors = { ...this.state.errors };
  //   switch (name) {
  //     case 'name': {
  //       errors.name = !value ? 'Name is required' : null;
  //       break;
  //     }
  //     case 'email': {
  //       if (!value) {
  //         errors.email = 'Email is required';
  //       } else if (!validateEmail.test(value)) {
  //         errors.email = 'Email is invalid';
  //       } else {
  //         errors.email = null;
  //       }
  //       break;
  //     }
  //     case 'gender': {
  //       errors.gender = !value ? 'Gender is required' : null;
  //       break;
  //     }
  //     case 'terms': {
  //       errors.terms = !value ? 'Terms should be accepted' : null;
  //       break;
  //     }
  //   }
  //   this.setState({ errors, [name]: value });
  // };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>Anywhere in your app!</h1>
        <Formik
          initialValues={{ name: '' }}
          validate={values => {
            console.log(values.name);
            const errors = {};
            if (!values.name) {
              errors.name = 'Name is required';
            }

            return errors;
          }}
          onSubmit={values => {
            console.log(values);
          }}
        >
          {({ values, errors, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <label>Candidate Name : </label>
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                />
                <br />
                <span>{errors.name ? errors.name : <></>}</span>
              </div>

              <div>
                <input type="submit" />
              </div>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}

// <br />
//           <Email
//             email={this.state.email}
//             handleChnage={this.handleChnage}
//             errors={this.state.errors.email}
//           />

//    <br />
//   <div>
//      <input
//       type="radio"
//       name="gender"
//       value="male"
//       checked={this.state.gender === 'male'}
//       onChange={this.handleChnage}
//     />
//     <label>Male</label>
//     <input
//       type="radio"
//       name="gender"
//       value="female"
//       checked={this.state.gender === 'female'}
//       onChange={this.handleChnage}
//     />
//     <label>Female</label>
//     <input
//       type="radio"
//       name="gender"
//       value="others"
//       checked={this.state.gender === 'others'}
//       onChange={this.handleChnage}
//     />
//     <label>others</label>
//     <br />
//     <span>
//       {this.state.errors.gender ? this.state.errors.gender : <></>}
//     </span>
//   </div>
//   <br />
//   <div>
//     <label>Role Applied :</label>
//     <select
//       name="role"
//       value={this.state.role}
//       onChange={this.handleChnage}
//     >
//       <option value="react devloper">React Developer</option>
//       <option value="node developer">Node Developer</option>
//       <option value="mern stack developer">Mern Stack Developer</option>
//     </select>
//   </div>
//   <br />
//   <div>
//     <input
//       type="checkbox"
//       name="terms"
//       checked={this.state.terms}
//       onChange={this.handleChnage}
//     />
//     <label>Please accept terms and conditions</label>
//     <br />
//     <span>
//       {this.state.errors.terms ? this.state.errors.terms : <></>}
//     </span>
//   </div>
//   <br />
