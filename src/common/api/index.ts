
import {get, post} from '../../utils/request'
 
export const requestIndex = () => {
    return get('api/index').then((res) => {
        // return res.data
        console.log(res)
    })
}
