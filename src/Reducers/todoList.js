const initialState = {
    list: [],
    filter: 'all'
};

export default function todoListReducer(state = initialState, action) {
    const list = state.list;
    console.log(list);

    switch (action.type) {
        case 'add':
            return {
                ...state,
                list: [
                    ...list,
                    {
                        name: action.name,
                        completed: false,
                        id: list.length + 1,
                    }
                ]
            };
        case 'delete':
            const todos = list.map((item) => {

                if (item.id === action.id) {
                    return {...item, completed: !item.completed}
                }

                return item;

            });

            return {
                ...state,
                list: todos,
            };

        case 'filter':
            return {
                ...state,
                filter: action.selected,
            };


        default:
            return state;

    }


}

