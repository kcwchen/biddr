const baseUrl = 'http://localhost:3000/api/v1';
export const Auction = {
  index() {
    return fetch(`${baseUrl}/auctions`).then((res) => res.json());
  },
  show(aid) {
    return fetch(`${baseUrl}/auctions/${aid}`).then((res) => res.json());
  },
};
