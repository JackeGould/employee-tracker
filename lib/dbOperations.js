const inquirer = require('inquirer');
const db = require('./db');

// Write functions for prompts

function viewDepartments() {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM department', (err, res) => {
            if (err) {
                reject('Error viewing departments: ' + err);
            } else {
                console.table(res);
                resolve();
            }
        });
    });
}

module.exports = {
    viewDepartments,
    viewRoles,
    viewEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole,
    updateEmployeeManager,
    viewEmployeesByManager,
    viewEmployeesByDepartment,
    deleteDepartment,
    deleteRole,
    deleteEmployee,
    calculateDepartmentBudget
};