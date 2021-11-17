
const assert = require('chai').assert;
const axios = require('axios')

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
    it('should be of account Type A', async() => {

        let resultA = await axios.post('http://localhost:8080/accountTypeChecker', 
        { accountBalanceHistory: accountBalanceHistoryA });
        resultA = resultA.data;
        let expectedResult = {
            "AccountType": "A",
            "message": "The account in which the balance amount decreases by varying amounts each month."
        };
        assert.deepEqual(resultA, expectedResult);
    });

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
    it('should be of account Type B', async() =>{
        let resultB = await axios.post('http://localhost:8080/accountTypeChecker', 
        { accountBalanceHistory: accountBalanceHistoryB });
        resultB = resultB.data;
        let expectedResult = {
            "AccountType": "B",
            "message": "The account in which the balance amount changes by the same amount each month."
        };
        assert.deepEqual(resultB, expectedResult)
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
    it('should not be of account Type A', async() => {

        let resultB = await axios.post('http://localhost:8080/accountTypeChecker', 
        { accountBalanceHistory: accountBalanceHistoryB });
        resultB = resultB.data.AccountType;
        assert.notEqual(resultB, 'A')
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
    it('should not be of account Type B', async() =>{
        let resultA = await axios.post('http://localhost:8080/accountTypeChecker', 
        { accountBalanceHistory: accountBalanceHistoryA });
        resultA = resultA.data.AccountType;
        assert.notEqual(resultA, 'B')
    });
});