import React from 'react';
import './Table.scss';
import { Dna } from 'react-loader-spinner';
import { Transaction } from '../../types/Transaction';
import { dateFormat } from '../../utils/dateFormat';
import { ErrorNotification } from '../ErrorNotification/ErrorNotification';

type Props = {
  transactions: Transaction[]
  isLoading: boolean
  isError: boolean
  errorMessage: string
};

export const Table: React.FC<Props> = ({
  transactions,
  isLoading,
  isError,
  errorMessage,
}) => {
  return (
    <div className="container">
      <table className="table">
        <tr className="table__header">
          <th className="table__header-cell">Block number</th>
          <th className="table__header-cell">Transaction ID</th>
          <th className="table__header-cell">Sender address</th>
          <th className="table__header-cell">{'Recipient\'s address'}</th>
          <th className="table__header-cell">Block confirmations</th>
          <th className="table__header-cell">Date</th>
          <th className="table__header-cell">Value</th>
          <th className="table__header-cell">Transaction Fee</th>
        </tr>

        {!isLoading && (
          transactions.map(transaction => (
            <tr className="table__data-row" key={transaction.hash}>
              <td className="table__data-cell">
                {transaction.blockNumber}
              </td>

              <td className="table__data-cell">
                <a href={`https://etherscan.io/tx/${transaction.hash}`}>
                  {transaction.hash}
                </a>
              </td>

              <td className="table__data-cell">
                {transaction.from}
              </td>

              <td className="table__data-cell">
                {transaction.to}
              </td>

              <td className="table__data-cell">
                {transaction.confirmations}
              </td>

              <td className="table__data-cell">
                {dateFormat(transaction.sentAt)}
              </td>

              <td className="table__data-cell">
                {transaction.value}
              </td>

              <td className="table__data-cell">
                {transaction.fee}
              </td>
            </tr>
          ))
        )}
      </table>
      {(isLoading && !isError) && (
        <div className="table__loader">
          <Dna
            visible={isLoading}
            height="150"
            width="150"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      )}
      {isError && (
        <div className="table__loader">
          <ErrorNotification isError={isError} message={errorMessage} />
        </div>
      )}
    </div>
  );
};
