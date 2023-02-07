export const initialState ={
    user: null,
    playlists: [],
    playing : false,
    item: null,
    // token: 'BQBLz5YE2iLh173gK6g1fujnWC5Po8yVUCdcLqkBnc3e7XMZK-cYG4FYY60LbDoeOYtNBAn9ZrpdOsVpcyQdaRV-agWW1GG7LseQMofVH3sS1jijetncKOHseLBit3rWE0aGTBlLOHReanDwQtt6gXXkz_YTlaXKbLENg4sc5gjXu_Z39kQ297JDCCgCoo6GzRWHbIXKgvOHSxhx',
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

            case 'SET_TOKEN':
                return{
                    ...state,
                    token: action.token
                };

            case 'SET_PLAYLISTS':
                return{
                    ...state,
                    playlists: action.playlists

                }    
            case 'SET_DISCOVER_WEEKLY':
                return{
                    ...state,
                    discover_weekly: action.discover_weekly,

                }    

            default: return state;

}
}

export default reducer;