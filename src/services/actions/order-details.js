export const SHOW_ORDER_DETAILS = 'SHOW_ORDER_DETAILS'
export const FLUSH_ORDER_DETAILS = `FLUSH_ORDER_DETAILS`
export const GET_ORDER_DETAILS = `GET_ORDER_DETAILS`
export const GET_ORDER_DETAILS_SUCCESS = `GET_ORDER_DETAILS_SUCCESS `
export const GET_ORDER_DETAILS_FAILED = `GET_ORDER_DETAILS_FAILED`





export function getOrderDetailsAction(apiUrl, ingredientIds) {
    // Воспользуемся первым аргументом из усилителя redux-thunk - dispatch
    return function (dispatch) {
        // Проставим флаг в хранилище о том, что мы начали выполнять запрос
        // Это нужно, чтоб отрисовать в интерфейсе лоудер или заблокировать 
        // ввод на время выполнения запроса
        dispatch({
            type: GET_ORDER_DETAILS
        })
        // Запрашиваем данные у сервера
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "ingredients": ingredientIds,
            }),
        }).then(res => {
            if (res.ok) {
                // В случае успешного получения данных вызываем экшен
                // для записи полученных данных в хранилище
                console.log("successs!!!!!!")
                return res.json()
            } else {
                // Если произошла ошибка, отправляем соотвтествующий экшен
                throw new Error("failed fetching data")
            }
        })
            .then(payload => {
                dispatch({
                    type: GET_ORDER_DETAILS_SUCCESS,
                    orderDetail: payload
                })
            })
            .catch(err => {
                // Если сервер не вернул данных, также отправляем экшен об ошибке
                dispatch({
                    type: GET_ORDER_DETAILS_FAILED
                })
            })
    }
} 