import { ADD_ITEM, REMOVE_ITEM, SELECT_ITEM, DESELECT_ITEM, CHANGE_PLACEHOLDER } from '../actions/actionsType.js';

const initialState = {
    text : '',
    list: [],
    selectedTask: null,
};
const ImagesArray = [
    {
        uri:"https://img.purch.com/w/640/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Ny83MjMvaTAyL3B1ZXJ0b3JpY29zdXJ2ZXkuanBnPzE1MzE0MTY2ODY="
    },
    {
        uri:"https://static1.squarespace.com/static/5886840e2994ca91a1dea568/t/596aa7c83a04115f9be7ee9a/1500162026877/andreas-gucklhorn-285567.jpg?format=1500w"
    },
    {
        uri:"https://i.redd.it/bhx8n681lbxz.jpg"
    },
    {
        uri:"https://longreadsblog.files.wordpress.com/2017/11/gettyimages-489012110.jpg?w=1680"
    },
    {
        uri:"http://static.asiawebdirect.com/m/phuket/portals/kosamui-com/homepage/beaches/pagePropertiesImage/samui-beaches.jpg.jpg"
    },
    {
        uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIC35ro2QwXZLVsGyWU-oftAFoMrMz8XM6MipO9lFoZ8IMbriP"
    },
];
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                list: state.list.concat(
                    {
                        key:  Math.random().toString(36).substr(2, 9),
                        name:state.text,
                        // image: appImage,
                        image: ImagesArray[Math.floor(Math.random() * (5 - 0 + 1)) + 0],
                    }
                ),
                text: '',
            }
            break;
        case REMOVE_ITEM:
            return {
                ...state,
                list: state.list.filter(function(item) {
                    return item.key !== action.itemKey;
                }),
                selectedTask: null,
            }
            break;
        case SELECT_ITEM:
            return {
                ...state,
                selectedTask: state.list.find( task => {
                    return task.key == action.itemKey;
                } )
            }
            break;
        case DESELECT_ITEM:
            return {
                ...state,
                selectedTask: null,
            }
            break;
        case CHANGE_PLACEHOLDER:
            return {
                ...state,
                text: action.text
            };
        default:
            return state;

    }
};
export default reducer;
