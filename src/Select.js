import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Select extends PureComponent {
  render() {
    const {
      value,
      multiple,
      name,
      options,
      onChange,
      label,
      defaultOptionText,
      step,
    } = this.props;
    const selectItems = options.map(obj => (
      <option key={obj.value || obj} value={obj.value || obj}>
      {obj.label || obj}
      </option>
    ));
    return (
      <div className="select-group">
          <span className="step-text">Step {step}</span>
          <span className="label-text">Select a  {label}: </span>
          <select
            className={multiple==="true" ? "form-control select-checkbox" : ""}
            multiple={multiple}
            value={value}
            name={name}
            onChange={onChange}
          >
          <option value="" selected disabled>{defaultOptionText}</option>
          {selectItems}
          </select>
        </div>
    );
  }
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  multiple: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  step: PropTypes.number.isRequired,
  options: PropTypes.array.isRequired,
};

Select.defaultProps = {
  value: null,
  options: [],
  defaultOptionText: '',
  helpText: null,
};

export default Select;
