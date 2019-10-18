import React from 'react';
import { FormHelperText ,TextField} from '@material-ui/core';
const aol = value =>
    value && /.+@aol\.com/.test(value) ?
        'Really? You still use AOL for your email?' : undefined;
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;

const maxValue = max => value =>
    value && value < max ? `should not be grater then ${max}` : undefined;

const maxValue20 = maxValue(20);

const inputField = ({ input, label, type,id, rows, multiline, meta: { touched, error, warning } ,  ...custom }) => (
    <>  
        <TextField
            error = {touched && !!error}
            margin="dense"
            variant="outlined"
            type={type}
            label={label}
            id = {id}
            rows = {rows}
            multiline = {multiline}
            {...input}
            {...custom}
        />
        {touched && ((error && <span> {error} </span>) || (warning && <span> {warning} </span>))}
    </>
)
const selectField = ({ label, options, optionName, optionValue, defaultValue, meta: { touched, error }, ...custom }) => (
    <>
        <label className="sr-only"> {label} </label>
        <select className="form-control form-control-sm margin-5" placeholder={label}  >
            {options.map((d) => {
                return (
                    <option key={d[optionValue]} value={d[optionValue]} selected={d[optionValue] === defaultValue ? true : false} > {d[optionName]} </option>
                )
            })
            }
        </select>
        {(touched && error) ? <FormHelperText error > { error } </FormHelperText>: ''} 
    </>
)
export { inputField, selectField };