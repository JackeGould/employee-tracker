const inquirer = require('inquirer');
const db = require('./db');

const inquirer = require('inquirer');
const { viewDepartments, viewRoles, viewEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole, updateEmployeeManager, viewEmployeesByManager, viewEmployeesByDepartment, deleteDepartment, deleteRole, deleteEmployee, calculateDepartmentBudget } = require('./databaseOperations');
const db = require('./db');


module.exports = CLI;

// Use inquirer to create prompts 

// viewDepartments
// viewRoles
// viewEmployees
// addDepartment
// addRole
// addEmployee
// updateEmployeeRole
// updateEmployeeManager
// viewEmployeesByManager
// viewEmployeesByDepartment
// deleteDepartment
// deleteRole
// deleteEmployee
// calculateDepartmentBudget
