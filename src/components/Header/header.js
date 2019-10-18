import React from 'react';
// import logo from '../../logo.svg';
import { Button} from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';
import { Tabs, Tab } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './headerActions';
import { inputField, selectField } from '../Form';
import * as dashboardActions from '../Dashboard/dashBoardActions';
import * as querystring from 'querystring';
class Header extends React.Component {

    constructor() {
        super();
        this.state = {
            route: 'everything',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    HandleRoute(path) {
        this.props.actions.setpath(path);
    }

    handleSubmit = (values) => {
        console.log(values);
        console.log(querystring.stringify(values));
        return false;
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            route: nextProps.route
        });
    }

    render() {
        let { route } = this.state;
        return (
            <div className="App-header displayBlock" >
                {/* <img src={logo} sizes={100} className="App-logo " alt="logo" /> */}
                <Tabs id="controlled-tab-example" activeKey={route} onSelect={k => this.HandleRoute(k)} >
                    <Tab eventKey="everything" title="EveryThing" > </Tab>
                    <Tab eventKey="top-headlines" title="Top-Head-Lines" > </Tab>
                    <Tab eventKey="sources" title="Sources" >  </Tab>
                </Tabs>
                <div>
                    <FieldLevelValidationForm onSubmit={this.handleSubmit} route={route} />
                </div>
            </div>
        )
    }
}

let FieldLevelValidationForm = (props) => {
    const { handleSubmit, pristine, reset, submitting, route } = props;
    return (
        <form onSubmit={handleSubmit} className='margin-5'  autoComplete="off">
            <Field name="q" type="text" component={inputField} label="topic" required/>
            <Field name="domains" type="text" component={inputField} label="domain"/>
            <Field name="pagesize" type="number" component={inputField} label="Page size"/>
            <Field name="page" type="number" component={inputField} label="Page"/>
            <Field name="country" type="text" component={selectField} label="country" options ={[{'country_code' : 'ae','country_name' : 'United Arab emirates'},{'country_code' : 'ar','country_name' : 'argentina'},{'country_code' : 'at','country_name' : 'austira'},{'country_code' : 'au','country_name' : 'australia	'}]} defaultValue = 'at' optionName='country_name' optionValue = 'country_code' optionValue ='country_name'/>
            <div className="margin-5">
                <Button type="submit" size="small" variant = "contained" color="primary" disabled={submitting}>Submit</Button>
                <Button type="button" size="small" variant = "contained" color="primary" disabled={pristine || submitting} onClick={reset}>Clear Values</Button>
            </div>
        </form>
    )
}

FieldLevelValidationForm = (reduxForm({
    form: 'searchForm',
})(FieldLevelValidationForm));

function mapStateToProps(state) {
    return {
        route: state.headerReducer.route,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch),
        dashBoardActions: bindActionCreators(dashboardActions, dispatch)
    }
}

Header = connect(mapStateToProps, mapDispatchToProps)(Header);

export { Header };