import axios from 'axios';

export const getTransationsForPage = async (
  page: number,
  limit: string,
  filter: string,
  input: string | number,
) => {
  const transactions = await axios.get('https://eth-table-api.herokuapp.com/transactions', {
    params: {
      page,
      limit,
      filter,
      input,
    },
  });

  return transactions;
};
