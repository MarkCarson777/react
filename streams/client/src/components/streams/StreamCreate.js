import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    // console.log(meta);
    // console.log(formProps);
    // quick refactor
    // return <input onChange={formProps.input.onChange} value={formProps.input.value} />;
    // always use this structure for redux form
    // return <input {...formProps.input} />
    // further destructuring
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit(formValues) {
    // console.log(formValues);
  }

  render() {
    // console.log(this.props);
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
        {/* name prop is always required */}
        {/* component needs to return an element that we actually want to show on the screen  */}
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="description" component={this.renderInput} label="Enter Description" />
        <button className="ui button library blue">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    // only ran if user did not enter a title
    errors.title = "You must enter a title"
  }

  if (!formValues.description) {
    // only ran if user did not enter a description
    errors.description = "You must enter a description"
  }

  return errors;
};

export default reduxForm({
  form: 'streamCreate',
  validate: validate
})(StreamCreate);