/**
 * @fileoverview Tests for consistent-return rule.
 * @author Raphael Pigulla
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
var rule = require('../rules/consistent-return');
var RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("consistent-return", rule, {

    valid: [
        "function foo() { return; }",
        "function foo() { if (true) return; else return; }",
        "function foo() { if (true) return true; else return false; }",
        "f(function() { return; })",
        "f(function() { if (true) return; else return; })",
        "f(function() { if (true) return true; else return false; })",
        "function foo() { function bar() { return true; } return; }",
        "function foo() { function bar() { return; } return false; }",
        { code: "var x = () => {  return {}; };", parserOptions: { ecmaVersion: 6 } },
        { code: "if (true) { return 1; } return 0;", parserOptions: { ecmaFeatures: { globalReturn: true } } }
    ],

    invalid: [
        {
            code: "function foo() { if (true) return true; else return; }",
            errors: [
                {
                    message: "Expected a return value.",
                    type: "ReturnStatement"
                }
            ]
        },
        {
            code: "var foo = () => { if (true) return true; else return; }",
            parserOptions: { ecmaVersion: 6 },
            errors: [
                {
                    message: "Expected a return value.",
                    type: "ReturnStatement"
                }
            ]
        },
        {
            code: "function foo() { if (true) return; else return false; }",
            errors: [
                {
                    message: "Expected no return value.",
                    type: "ReturnStatement"
                }
            ]
        },
        {
            code: "f(function () { if (true) return true; else return; })",
            errors: [
                {
                    message: "Expected a return value.",
                    type: "ReturnStatement"
                }
            ]
        },
        {
            code: "f(function () { if (true) return; else return false; })",
            errors: [
                {
                    message: "Expected no return value.",
                    type: "ReturnStatement"
                }
            ]
        },
        {
            code: "f(a => { if (true) return; else return false; })",
            parserOptions: { ecmaVersion: 6 },
            errors: [
                {
                    message: "Expected no return value.",
                    type: "ReturnStatement"
                }
            ]
        },
        {
            code: "if (true) { return 1; } return;",
            parserOptions: { ecmaFeatures: { globalReturn: true } },
            errors: [
                {
                    message: "Expected a return value.",
                    type: "ReturnStatement"
                }
            ]
        }
    ]
});
