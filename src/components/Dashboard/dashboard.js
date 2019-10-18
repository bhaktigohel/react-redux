import React from 'react';
import { Header } from '../Header';
import { bindActionCreators } from 'redux';
import * as actions from './dashBoardActions';
import { connect } from 'react-redux';
import { Spinner, Card } from 'react-bootstrap';
import Masonary from 'react-masonry-component';
// import * as formComponent from '../Form';

class DashBoard extends React.Component {
    constructor() {
        super();
        this.state = {
            error: "",
            route: "everything",
            loader: false,
            articleData: []
        }
    }

    // this can be used when performance is a bottleneck.
    shouldComponentUpdate(nextProps) {
        if (this.state.route !== nextProps.route) {
            this.props.newsApi(nextProps.route);
        }
        return true;
    }


    componentWillReceiveProps(nextProps) {

        this.setState({
            route: nextProps.route,
            articleData: nextProps.articleData,
            loader: nextProps.loader,
            error: nextProps.error
        });
    }

    componentDidMount() {
        this.props.newsApi('everything');
    }

    render() {
        let { articleData, loader, error } = this.state;

        return (
            <>
                <Header/>
                <Masonary style={{  marginTop: '30px' }}>
                    {
                        articleData &&
                        articleData.map((article) => {
                            return (
                                <Card style={{ width: '20rem', margin: '5px', padding: '5px' }} key={article.id} >
                                    <Card.Body >
                                        <Card.Link href={article.url} > {article.description} </Card.Link>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }
                </Masonary>
                {loader &&
                    <div style={{'textAlign': 'center'}} >
                        <Spinner animation="border" role="status" />
                    </div>
                }
                {error !== '' &&
                    <div style={{margin: '30px 10px 10px 10px' ,padding : "1px"}}> {error} </div>
                }
            </>
        )
    }
}

function mapStateToProps(state) {

    return {
        route: state.headerReducer.route,
        articleData: state.dashboardReducer.articleData,
        loader: state.dashboardReducer.loader,
        error: state.dashboardReducer.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return { ...bindActionCreators({ ...actions }, dispatch) }
}

DashBoard = connect(mapStateToProps, mapDispatchToProps)(DashBoard);

export { DashBoard };