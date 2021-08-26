import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  renderInput({ input, label }) {
    // console.log(formProps);
    // quick refactor
    // return <input onChange={formProps.input.onChange} value={formProps.input.value} />;
    // always use this structure for redux form
    // return <input {...formProps.input} />
    // further destructuring
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }

  render() {
    // console.log(this.props);
    return (
      <form>
        {/* name prop is always required */}
        {/* component needs to return an element that we actually want to show on the screen  */}
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="description" component={this.renderInput} label="Enter Description" />
      </form>
    );
  }
}

export default reduxForm({
  form: 'streamCreate'
})(StreamCreate);