import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Note from "./Components/Note";
import {connect} from "react-redux";
import {addPost, deletePost} from "./redux/notesReducer";
import CreateAreaReduxForm from "./Components/CreateArea";


const AppC = (props) => {
  return (
    <div>
        <Header />
        <CreateAreaReduxForm addPost={props.addPost} />
        {props.notes.map((note, index) => (<Note id={note.key} key={index} title={note.title} content={note.content} deletePost={props.deletePost}/>))}
        <Footer />
    </div>
  );
}


let mapStateToProps = (state) => {
    return {
        notes: state.notes.notes
    }
}

const App = connect(mapStateToProps, {addPost, deletePost})(AppC);
export default App;