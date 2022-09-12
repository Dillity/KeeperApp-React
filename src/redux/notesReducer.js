const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    notes: [
            {key: 1, title: "Delegation",            content: "Q. How many programmers does it take to change a light bulb? A. None – It’s a hardware problem"},
            {key: 2, title: "Loops",                 content: "How to keep a programmer in the shower forever. Show him the shampoo bottle instructions: Lather. Rinse. Repeat."},
            {key: 3, title: "Arrays",                content: "Q. Why did the programmer quit his job? A. Because he didn't get arrays."},
            {key: 4, title: "Hardware vs. Software", content: "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."}
    ]
};


const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                notes: [...state.notes, {key: (state.notes.length) + 1, title: action.title, content: action.content}]
            }

        case DELETE_POST:
            return {
                ...state,
                notes: state.notes.filter(note => note.key !== action.key)
            }

        default:
            return state;
    }
}

export const addPost = (title, content) => ({type: ADD_POST, title, content});
export const deletePost = (key) => {
    console.log(key);
   return {type: DELETE_POST, key}};

export default notesReducer;