import React, { Component } from 'react';
import { Button } from 'reactstrap';
class AddNewItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            idToSend: props.num,
            titleToSend: '',
            taglineToSend: '',
            lengthToSend: '',
            urlToSend: '',
        }
    }

    submitChange = () => {
        console.log('fired off!');
        const { idToSend, titleToSend, taglineToSend, lengthToSend, urlToSend } = this.state;

        return fetch(`http://localhost:3004/videos/`, {
            body: JSON.stringify({
                id: idToSend,
                title: titleToSend,
                tagline: taglineToSend,
                length: lengthToSend,
                url: urlToSend,
            }),
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST',
            mode: 'cors',
        }).then(response => {
            window.location.reload();
            return response.json()
        })
    }


    newTitleToState = (e) => {
        this.setState({
            titleToSend: e.target.value,
        });
    }

    newTaglineToState = (e) => {
        this.setState({
            taglineToSend: e.target.value,
        });
    }

    newLengthToState = (e) => {
        this.setState({
            lengthToSend: e.target.value,
        });
    }

    newUrlToState = (e) => {
        this.setState({
            urlToSend: e.target.value,
        });
    }

    render() {

        const { num } = this.props;

        return (
            <div className="add-new-item-container">
                <ul className="add-new-ul">
                    <li className="add-new-li">contentID: {num}</li>
                    <li className="add-new-li">Title: <input onChange={(e) => this.newTitleToState(e)} /></li>
                    <li className="add-new-li">Tagline: <input onChange={(e) => this.newTaglineToState(e)} /></li>
                    <li className="add-new-li">Movie Length: <input onChange={(e) => this.newLengthToState(e)} /></li>
                    <li className="add-new-li">YouTube URL: <input onChange={(e) => this.newUrlToState(e)} /></li>
                    <Button onClick={() => this.submitChange()} >Submit</Button>
                </ul>

            </div>
        )
    }
};

export default AddNewItem;

