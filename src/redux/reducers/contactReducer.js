const initialState = [
    {
        id: 0,
        name: "Hamza",
        email: "hamza@gmail.com",
        number: "1234"
    },
    {
        id: 1,
        name: "Hammad",
        email: "hammad@gmail.com",
        number: "123"
    },
];

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CONTACT":
            state = [...state, action.payload]
            return state;
        case "UPDATE_CONTACT":
            const updateState = state.map(contact => contact.id === action.payload.id ? action.payload : contact)
            state = updateState;
            return state;
        case "DELETE_CONTACT":
            console.log("payload", action.payload)
            const filterContacts = state.filter((contact) => contact.id !== action.payload.id )
            state = filterContacts;
            console.log(state)
            return state;
        default:
            return state;
    }
}

export default contactReducer;