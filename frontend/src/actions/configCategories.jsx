import USER_DATA from '../actionTypes/userDataType';
import CATEG_LIST from '../actionTypes/categListType.jsx';

export default function configCategories(method, path, body) {
    return (dispatch)=>{
        let route = path ? path : ''
        let fetchOptions = {
            method,
            body: JSON.stringify(body),
            headers: { 
                "Content-Type": "application/json",
                "Authorization": "Bearer "+localStorage.getItem('token'),
                
            }
        }
        console.log(fetchOptions)
        fetch(`http://localhost:3001/userdata/config/`+route, fetchOptions)
            .then(res => res.json())
            .then((data) => {
                console.log('DATA UPDATED ON SERVER')
                dispatch({
                    type: USER_DATA,
                    data: data.categories,
                })
                return data
            })
            .then((data) => {
                console.log('DATA UPDATED ON SERVER')
                dispatch({
                    type: CATEG_LIST,
                    categList: data.categoriesList,
                })
            })
            .catch(e => console.log(e))
    }
}