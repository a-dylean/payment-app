const express = require('express');

const checkIfUserExists = (email) => {
    return (`SELECT * FROM users WHERE email = '${email}';`)
};

module.exports = checkIfUserExists;  