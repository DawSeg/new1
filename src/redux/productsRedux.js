/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;
export const getCompared = ({ products }) => products.filter(product => product.comparison);
export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);
export const getHotDeals = ({products}) => products.filter(product => product.hotDeals);

/* action name creator */
const reducerName = 'product';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const SET_USER_RATING = createActionName('USER_RAITNG');
const TOGGLE_FAVOURITE = createActionName('TOGGLE_FAVOURITE');
const ADD_TO_COMPARE = createActionName('ADD_TO_COMPARE');
const REMOVE_COMPARE = createActionName('REMOVE_COMPARE');

/* action creators */
export const setUserRating = payload => ({ payload, type: SET_USER_RATING });
export const toggleFavourite = payload => ({ payload, type: TOGGLE_FAVOURITE });
export const addToCompare = payload => ({ payload, type: ADD_TO_COMPARE });
export const removeCompare = payload => ({ payload, type: REMOVE_COMPARE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      return statePart.map(product =>
        product.id === action.payload
          ? { ...product, favourite: !product.favourite }
          : product
      );
    case ADD_TO_COMPARE:
      return statePart.map(product =>
        product.id === action.payload
          ? { ...product, comparison: true }
          : product
      );
    case REMOVE_COMPARE:
      return statePart.map(product =>
        product.id === action.payload
          ? { ...product, comparison: false }
          : product
      );
    case SET_USER_RATING:
      return statePart.map(product =>
        product.id === action.payload.id ? { ...product, ...action.payload } : product
      );
    default:
      return statePart;
  }
}
