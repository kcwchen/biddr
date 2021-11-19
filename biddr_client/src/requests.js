const baseUrl = 'http://localhost:3000/api/v1';
export const Auction = {
  index() {
    return fetch(`${baseUrl}/auctions`).then((res) => res.json());
  },
};
