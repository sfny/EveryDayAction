import fetch from 'isomorphic-unfetch'

export async function getLongform () {
    const url = process.env.AIRTABLE_URL_LONGFORM
    const data = await fetch(url, {
        "headers": {"Authorization": `Bearer ${process.env.AIRTABLE_API_KEY}`}
    })
    .then(res => res.json())
    .then((data) => {
        return data.records
    })
    return data
}
