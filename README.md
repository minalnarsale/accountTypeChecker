# accountTypeChecker
find whether the account balance amount goes down by the same value each month or it varies month by month.
Type 🅰 denotes a balance history where the balance amount decreases by varying amounts each month.
Type 🅱 is one where the balance amount changes by the same amount each month. 

# Things which considered in the solution are :

1) It finds the account type whether is A or B

2) Other cases which needs to considered : 
    - sometimes amount can get deposit in account, so there might be increase in balance. Balance can't be always decresing. so, by considering this case, the solution gives the expected account Type.

3) unit testing and e2e testing has been covered
   Positive and Negative testing has been considered

postman collection : https://www.getpostman.com/collections/0d4736687d1b5cbe78eb