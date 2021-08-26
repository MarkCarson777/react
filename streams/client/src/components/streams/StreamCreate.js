import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

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
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    // console.log(meta);
    // console.log(formProps);
    // quick refactor
    // return <input onChange={formProps.input.onChange} value={formProps.input.value} />;
    // always use this structure for redux form
    // return <input {...formProps.input} />
    // further destructuring
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit(formValues) {
    this.props.createStream(formValues);
  }

  render() {
    // console.log(this.props);
    return (
      // needs a classname of error or no error messages will be displayed
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
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

const formWrapped = reduxForm({
  form: 'streamCreate',
  validate: validate
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);