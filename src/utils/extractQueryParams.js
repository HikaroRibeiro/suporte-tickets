export function extractQueryParams(queryString) {
    return queryString.slice(1)
    .split('&')
    .reduce((queryParms, current) => {
        const [key, value] = current.split('=');

        queryParms[key] = value;

        return queryParms;
    }, {});
}