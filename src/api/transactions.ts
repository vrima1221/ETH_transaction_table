import axios from 'axios';

export const getTransationsForPage = async (
  page: number,
  limit: string,
  filter: string,
  input: string | number,
) => {
  const transactions = await axios.get('http://localhost:5000/transactions', {
    params: {
      page,
      limit,
      filter,
      input,
    },
  });

  return transactions;
};
