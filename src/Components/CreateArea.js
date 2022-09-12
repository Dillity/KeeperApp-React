import React, {useState} from "react";

const CreateArea = (props) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        {props.addPost(title, content)}
        setTitle('');
        setContent('');
    }


    return (
        <div>
            <form>
                <input onChange={(e) => {setTitle(e.target.value)}} name='title' value={title} placeholder={'Title'}/>
                <textarea onChange={(e) => {setContent(e.target.value)}} name='content' value={content} placeholder={'Take a note...'} rows={3} />
                <button onClick={handleSubmit}>Add</button>
            </form>
        </div>
    );
}


export default CreateArea;