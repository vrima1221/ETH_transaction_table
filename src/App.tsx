import React, { useEffect, useState } from 'react';
import './App.scss';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Table } from './components/Table/Table';
import { getTransationsForPage } from './api/transactions';
import { Transaction } from './types/Transaction';
import { Pagination } from './components/Pagination/Pagination';
import { Filter, SelectOptionType } from './components/Filter/Filter';

export const App: React.FC = () => {
  const [currentTrans, setCurrentTrans] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const [currentFilter, setCurrentFilter] = useState<SelectOptionType | null>(null);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const showErrorMessage = (message: string) => {
    setIsError(true);
    setIsLoading(false);
    setErrorMessage(message);

    setTimeout(() => {
      setIsError(false);
    }, 3000);
  };

  const loadTransactions = async (pageNumber: number) => {
    try {
      setIsLoading(true);

      const limitPerPage = '14';
      const filter = currentFilter?.value || '';

      const transactionsResponse = await getTransationsForPage(
        pageNumber,
        limitPerPage,
        filter,
        searchValue,
      )
        .then(response => response.data);

      const { transactions, totalPageCount } = transactionsResponse;

      // eslint-disable-next-line no-console
      console.log(transactions);

      setCurrentTrans(transactions);
      setTotalPages(totalPageCount);
      setIsLoading(false);
    } catch (error) {
      setCurrentTrans([]);
      showErrorMessage('Failed to load transactions');
    }
  };

  const handleSearchByFilterSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    try {
      loadTransactions(currentPage);
    } catch (error) {
      showErrorMessage('Failed to load by your filter');
    }
  };

  useEffect(() => {
    try {
      loadTransactions(currentPage);
    } catch (error) {
      showErrorMessage('Failed to load');
    }
  }, [currentPage]);

  return (
    <>
      <Header />

      <div className="wrapper">
        <Filter
          filter={currentFilter}
          searchInput={searchValue}
          onInputChange={setSearchValue}
          onFilterChange={setCurrentFilter}
          onSubmit={handleSearchByFilterSubmit}
        />

        <Table
          transactions={currentTrans}
          isLoading={isLoading}
          isError={isError}
          errorMessage={errorMessage}
        />

      </div>
      {!isLoading && (
        <Pagination
          totalPages={totalPages}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      )}
      <Footer />
    </>
  );
};
