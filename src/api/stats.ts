export interface IResponse {
    purchases: Array<{
      date: string;
      value: number;
    }>;
    views_to_clicks: Array<{
      date: string;
      view: number;
      click: number;
    }>;
}

const STATS_URL = "https://wegotrip.com/api/v2/stats/plot"

export const getStats = () => {
    return fetch(STATS_URL)
        .then((res) => res.json())
        .then((data: IResponse) => data)
        .catch((err) => {
            console.error('Error while fetchig stats -', err)
            return err
        })
}