const assert = require('chai').assert;
const accountTypeChecker = require('../routes').accountTypeChecker;

describe('positive test cases', () => {

    const accountBalanceHistoryA = [
        {
          monthNumber: 0, // current month
          account: {
            balance: { amount: 20 },
          },
        },
        {
          monthNumber: 1, // last month
          account: {
            balance: { amount: 120 },
          },
        },
        {
          monthNumber: 2, // two months ago
          account: {
            balance: { amount: 300 },
          },
        }
      ];
    it('should be of account Type A', () =>{
      assert.equal(accountTypeChecker(accountBalanceHistoryA), 'A');
    })

    const accountBalanceHistoryB = [
        {
          monthNumber: 0, // current month
          account: {
            balance: { amount: 100 },
          },
        },
        {
          monthNumber: 1, // last month
          account: {
            balance: { amount: 200 },
          },
        },
        {
          monthNumber: 2, // two months ago
          account: {
            balance: { amount: 300 },
          },
        }
      ];
    it('should be of account Type B', () =>{
      assert.equal(accountTypeChecker(accountBalanceHistoryB), 'B')
    })
});

describe('negative test cases', () => {


    const accountBalanceHistoryB = [
      {
        monthNumber: 0, // current month
        account: {
          balance: { amount: 100 },
        },
      },
      {
        monthNumber: 1, // last month
        account: {
          balance: { amount: 200 },
        },
      },
      {
        monthNumber: 2, // two months ago
        account: {
          balance: { amount: 300 },
        },
      }
    ];
    it('should not be of account Type A', () =>{
      assert.notEqual(accountTypeChecker(accountBalanceHistoryB), 'A')
    })

    const accountBalanceHistoryA = [
        {
          monthNumber: 0, // current month
          account: {
            balance: { amount: 20 },
          },
        },
        {
          monthNumber: 1, // last month
          account: {
            balance: { amount: 120 },
          },
        },
        {
          monthNumber: 2, // two months ago
          account: {
            balance: { amount: 300 },
          },
        }
      ];
    it('should not be of account Type B', () =>{
      assert.notEqual(accountTypeChecker(accountBalanceHistoryA), 'B')
    });
});