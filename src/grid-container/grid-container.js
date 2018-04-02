import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import EditBox from './edit-box';
import AddNewItem from './add-new-item';

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
            showAddSection: false,
            numOfVids: this.props.videos.length,
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

    addItem() {
        this.setState({
            showAddSection: !this.state.showAddSection
        })
    }

    render() {
        const { showEditSection, showAddSection, obj } = this.state;
        const { videos } = this.props;

        return (
            <div>
                {showAddSection ? <AddNewItem num={this.state.numOfVids} /> : null}
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
                                <td><Button onClick={() => this.saveSpecificContentObjToState(eachContentsObject)}>Edit/Cancel Edit</Button></td>
                            </tr>
                        }
                        )
                        }
                    </tbody>
                </table>
                <Button onClick={() => this.addItem()}>Add New Item</Button>
                <Button onClick={() => this.addItem()}>Add New Item</Button>
            </div>
        )
    }
};

export default GridContainer;