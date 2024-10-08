function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   class Employee {
      constructor(employeeName, employeeSalary) {
         this.name = employeeName;
         this.salary = Number(employeeSalary);
      }
   }

   class Restaurant {
      constructor(restaurantName, ...restaurantEmployees) {
         this.name = restaurantName;
         this.employees = restaurantEmployees.reduce((obj, employee) => {
            obj[employee.name] = employee;
            return obj;
        }, {});
      }

      get averageSalary() {
         const employeeArray = Object.values(this.employees);
         const totalEmployees = employeeArray.length;
         const totalSalary = employeeArray.reduce((sum, employee) => sum + employee.salary, 0);
         return totalEmployees ? totalSalary / totalEmployees : 0;
     }
 
      get sortedEmployees() {
            const employeeArray = Object.values(this.employees);
            return employeeArray.sort((employeeA, employeeB) => employeeB.salary - employeeA.salary);
      }
 
      get maxSalaryEmployee() {
            return this.sortedEmployees[0];
      }

      updateEmployees (employeesToUpdate) {
         for (const employeeName in employeesToUpdate) {
            this.employees[employeeName] = employeesToUpdate[employeeName];
        }
      }
   }
   
   function onClick () {
      // Get and parse text area input value
      const inputs = document.querySelector('#inputs textarea').value;
      const inputsArray = JSON.parse(inputs);

      // Create empty object to store restaurant objects by their name as key-value
      const restaurants = {};

      // Loop trough the parsed input, extract data and create objects
      for (let restaurant of inputsArray) {
         // Get restaurant name and employee data as strings
         let [restaurantName, restaurantEmployees] = restaurant.split(' - ');

         // Store each employee data as separate strings into array
         let employeeList = restaurantEmployees.split(', ');

         // Convert each string in the array as Employee class object
         employeeList = employeeList.map(
            employeeStr => {
               const [employeeName, employeeSalary] = employeeStr.split(' ');
               return new Employee(employeeName, employeeSalary);
            }
         );

         // Create Restaurant class object with restaurant name and Employee objects
         restaurant = new Restaurant(restaurantName, ...employeeList);

         // Check if restaurant is already added and update the employees instead
         if (restaurantName in restaurants) {
            restaurants[restaurantName].updateEmployees(restaurant.employees);
         } else {
            restaurants[restaurant.name] = restaurant;
         }
      };

      // Get the restaurant with the best average salary
      const restaurantArray = Object.values(restaurants);
      const bestRestaurant = restaurantArray.reduce((bestRestaurant, restaurant) => {
         const currRestAvSal = bestRestaurant.averageSalary;
         const otherRestAvSal = restaurant.averageSalary;
         return (otherRestAvSal > currRestAvSal) ? restaurant : bestRestaurant;
      });

      // Get the appropriate elements from the document to modify
      const bestRestaurantParagraphElement = document.querySelector('#bestRestaurant p');
      const workersParagraphElement = document.querySelector('#workers p');

      // Define the new text of the document elements
      const bestRestaurantString = `Name: ${bestRestaurant.name} ` +
         `Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} ` +
         `Best Salary: ${bestRestaurant.maxSalaryEmployee.salary.toFixed(2)}`;
      let workersString = ''
      bestRestaurant.sortedEmployees.forEach(
         employee => workersString += `Name: ${employee.name} With Salary: ${employee.salary} `
      );
      
      // Set the new text of the targeted document elements
      bestRestaurantParagraphElement.textContent = bestRestaurantString;
      workersParagraphElement.textContent = workersString;
   }
}