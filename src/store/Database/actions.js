

export const IS_WRITING='IS_WRITING';
export const WRITE_FAILURE='WRITE_FAILURE'


export function isWriting(){
    return{
        type: IS_WRITING
    }
}

export function writeFailure(){
    return{
        type: WRITE_FAILURE
    }
}

export function storeResults(useremail,applesans,orangesans,mixedans, results){
    return async (dispatch, getState) => {
        try{
            dispatch(isWriting());
            console.log(results)
            // firebase.database().ref("users").push({
            //     email:useremail,
            //     apples: applesans,
            //     oranges: orangesans,
            //     mixed: mixedans,
            //     result: results
            // });
        }
        catch(e) {
            console.log(e);
            dispatch(writeFailure());
        }
    }
}