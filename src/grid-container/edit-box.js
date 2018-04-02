import React, { Component } from 'react';

class EditBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            idToSend: props.contentToChange.id,
            titleToSend: props.contentToChange.title,
            taglineToSend: props.contentToChange.tagline,
            lengthToSend: props.contentToChange.length,
            urlToSend: props.contentToChange.url,
        }
    }

    submitChange = () => {
        const { idToSend, titleToSend, taglineToSend, lengthToSend, urlToSend } = this.state;

        return fetch(`http://localhost:3004/videos/${idToSend}`, {
            body: JSON.stringify({
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
            method: 'PATCH',
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

        const { id, title, tagline, length, url } = this.props.contentToChange;
        const { contentToChange } = this.props;

        return (
            <div className="edit-box-container">

                <ul className="edit-box-row">
                    <li className="edit-box-row-item"><p id="content-no">content No: {id}</p></li>
                    <li className="edit-box-row-item">Title: <input placeholder={title} onChange={(e) => this.newTitleToState(e)} /></li>
                    <li className="edit-box-row-item">Tagline: <input placeholder={tagline} onChange={(e) => this.newTaglineToState(e)} /></li>
                </ul>
                <ul className="edit-box-row">
                    <li className="edit-box-row-item">Length (seconds): <input placeholder={length} onChange={(e) => this.newLengthToState(e)} /></li>
                    <li className="edit-box-row-item">Url: <input placeholder={url} onChange={(e) => this.newUrlToState(e)} /></li>

                    <li className="edit-box-row-item"><button onClick={() => this.submitChange()}>Submit Change</button></li>
                </ul>
            </div>
        )
    }
};

export default EditBox;
