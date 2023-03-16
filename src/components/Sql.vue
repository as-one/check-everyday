<template>
  <div class="container content">
    <h2>Basics</h2>

    <div class="row">
      <div class="col-sm-12 col-md-4">
        <h3>Database Manipulation</h3>
        <h4>Create a database</h4>
        <pre class="pre">
CREATE DATABASE My_First_Database
        </pre>

        <h4>Delete a database</h4>
        <pre class="pre">
DROP DATABASE My_First_Database
        </pre>
      </div>

      <div class="col-sm-12 col-md-4">
        <h3>Table Manipulation</h3>
        <h4>Create a table in a database</h4>
        <pre class="pre">
CREATE TABLE Person
(LastName varchar(30) NOT NULL, FirstName varchar(30) NOT NULL,
Address varchar(50) NOT NULL, Age int NOT NULL,
PersonID int NOT NULL, PRIMARY KEY (PersonID) );
        </pre>

        <h4>Add columns in an existing table</h4>
        <pre class="pre">
ALTER TABLE Person ADD Sex char(6)
        </pre>

        <h4>Delete columns in an existing table</h4>
        <pre class="pre">
ALTER TABLE Person DROP Sex char(6)
        </pre>

        <h4>Delete a table</h4>
        <pre class="pre">
DROP TABLE Person
        </pre>
      </div>

      <div class="col-sm-12 col-md-4">
        <h3>Data Manipulation</h3>
        <h4>Insert new rows into a table</h4>
        <pre class="pre">
INSERT INTO Persons
VALUES('Skywalker', 'Julie', 'White House')

# OR

INSERT INTO Persons (LastName, FirstName, Address)
VALUES('Skywalker', 'Julie', 'White House')
        </pre>

        <h4>Update one or several columns in rows</h4>
        <pre class="pre">
UPDATE Person
SET Address = 'Planet of Tatooine'
WHERE LastName = 'Skywalker'
        </pre>

        <h4>Delete rows in a table</h4>
        <pre class="pre">
DELETE FROM Person WHERE LastName = 'Skywalker'
        </pre>

        <h4>Deletes the data inside the table</h4>
        <pre class="pre">
TRUNCATE TABLE Person
        </pre>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <h3>SELECT</h3>
      </div>

      <div class="col-sm-12 col-md-4">
        <h4>Select data from a table</h4>
        <pre class="pre">
SELECT LastName, FirstName FROM Persons
        </pre>

        <h4>Select all data from a table</h4>
        <pre class="pre">
SELECT * FROM Persons
        </pre>

        <h4>Select only distinct (different) data from a table</h4>
        <pre class="pre">
ELECT DISTINCT LastName, FirstName FROM Persons
        </pre>

        <h4>Select only certain data from a table</h4>
        <pre class="pre">
SELECT * FROM Persons WHERE sex='female'

# OR

SELECT * FROM Persons WHERE
(FirstName='Tove' OR FirstName='Stephen')
AND LastName='Svendson'
        </pre>
      </div>

      <div class="col-sm-12 col-md-4">
        <h4>The IN operator</h4>
        <pre class="pre">
SELECT * FROM Persons
WHERE LastName IN ('Skywalker','Pettersen')
        </pre>

        <h4>Order By</h4>
        <pre class="pre">
SELECT * FROM Persons
ORDER BY LastName
        </pre>

        <h5>ASC</h5>
        <pre class="pre">
SELECT Company, OrderNumber FROM Orders
ORDER BY Company DESC, OrderNumber ASC
        </pre>

        <h5>DESC</h5>
        <pre class="pre">
SELECT FirstName, LastName FROM Persons
ORDER BY LastName DESC
        </pre>
      </div>

      <div class="col-sm-12 col-md-4">
        <h3>Some aggregate functions</h3>
        <h4>AVG(column)</h4>
        <pre class="pre">
SELECT Company, AVG(Amount)
FROM Sales
GROUP BY Company
        </pre>

        <h4>COUNT(column)</h4>
        <pre class="pre">
SELECT Company, COUNT(Amount)
FROM Sales
GROUP BY Company
        </pre>

        <h4>MAX(column)</h4>
        <pre class="pre">
SELECT Company, MAX(Amount)
FROM Sales
GROUP BY Company
        </pre>

        <h4>MIN(column)</h4>
        <pre class="pre">
SELECT Company, MIN(Amount)
FROM Sales
GROUP BY Company
        </pre>

        <h4>SUM(column)</h4>
        <pre class="pre">
SELECT Company, SUM(Amount)
FROM Sales
GROUP BY Company
        </pre>

        <h4>HAVING</h4>
        <pre class="pre">
SELECT Company, SUM(Amount)
FROM Sales
GROUP BY Company
HAVING SUM(Amount)>10000
        </pre>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <div class="row">
          <h3>Alias</h3>
          <div class="col-sm-12 col-md-4">
            <h4>Column name</h4>
            <pre class="pre">
SELECT LastName AS Family, FirstName AS Name
FROM Persons
        </pre>
          </div>

          <div class="col-sm-12 col-md-4">
            <h4>Table name</h4>
            <pre class="pre">
SELECT LastName, FirstName
FROM Persons AS Employees
            </pre>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <h3>JOIN</h3>
      </div>

      <div class="col-sm-12 col-md-4">
        <h4>The INNER JOIN</h4>
        <pre class="pre">
SELECT Employees.Name, Orders.Product
FROM Employees
INNER JOIN Orders
ON Employees.Employee_ID=Orders.Employee_ID
        </pre>
      </div>

      <div class="col-sm-12 col-md-4">
        <h4>The LEFT JOIN</h4>
        <pre class="pre">
SELECT Employees.Name, Orders.Product
FROM Employees
LEFT JOIN Orders
ON Employees.Employee_ID=Orders.Employee_ID
        </pre>
      </div>

      <div class="col-sm-12 col-md-4">
        <h4>The RIGHT JOIN</h4>
        <pre class="pre">
SELECT Employees.Name, Orders.Product
FROM Employees
RIGHT JOIN Orders
ON Employees.Employee_ID=Orders.Employee_ID
        </pre>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12 col-md-4">
        <h3>UNION</h3>
        <h4>Select all different values</h4>
        <pre class="pre">
SELECT E_Name FROM Employees_Norway
UNION
SELECT E_Name FROM Employees_USA
        </pre>

        <h4>Select all values</h4>
        <pre class="pre">
SELECT E_Name FROM Employees_Norway
UNION
SELECT E_Name FROM Employees_USA
        </pre>
      </div>

      <div class="col-sm-12 col-md-4">
        <h3>SELECT INTO/IN</h3>
        <h4>Select data from table(S) and insert it into another table</h4>
        <pre class="pre">
SELECT * INTO Persons_backup FROM Persons
        </pre>

        <h4>Select data from table(S) and insert it in another database</h4>
        <pre class="pre">
SELECT Persons.* INTO Persons IN 'Backup.db' FROM Persons WHERE City='Sandnes'
        </pre>
      </div>
    </div>
  </div>
</template>
