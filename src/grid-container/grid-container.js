import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import EditBox from './edit-box';

import styles from './styles.css';

class GridContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            obj: {
                id: null,
                title: '',
                tagline: '',
                length: '',
                url: '',
            },
            showEditSection: false,
        }
    }

    saveSpecificContentObjToState = (contentObj) => {
        this.setState({
            showEditSection: !this.state.showEditSection,
            obj: {
                id: contentObj.id,
                title: contentObj.title,
                tagline: contentObj.tagline,
                length: contentObj.length,
                url: contentObj.url,
            },
        })
    }

    render() {
        const { showEditSection, obj } = this.state;
        const { videos } = this.props;

        return (
            <div>
                { showEditSection ? <EditBox contentToChange={obj} /> : null}
                <table className="table">
                    <thead className="cms-table-row">
                        <tr className="cms-table-heading-row">
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Tagline</th>
                            <th scope="col">Length</th>
                            <th scope="col">Url</th>
                            <th scope="col">edit?</th>
                        </tr>
                    </thead>

                    <tbody>

                        { videos.map((eachContentsObject, i) => { // creating new row for every json object
                            return <tr key={i} className="cms-table-row">
                                <th scope="row">{eachContentsObject.id}</th>
                                <td>{eachContentsObject.title}</td>
                                <td>{eachContentsObject.tagline}</td>
                                <td>{eachContentsObject.length}</td>
                                <td>{eachContentsObject.url}</td>
                                <td><button onClick={() => this.saveSpecificContentObjToState(eachContentsObject)}>Edit/Cancel Edit</button></td>
                            </tr>
                        }
                        ) // button sends THAT row's object to state
                        }
                    </tbody>
                </table>
            </div>
        )
    }
};

export default GridContainer;

// 1) map through data and render 1 row per json object
// 2) when u click on edit button it saves that rows object
// to state
// 3) we pass that state/obj through to EditBox via props
// 4) EditBox renders that obj and adjacent input for each
// 5) when you click submit in edit box, it fires off
// PATCH req to json-server
// 6) grid container re-renders