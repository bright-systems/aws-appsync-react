"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var PropTypes = require("prop-types");
var apollo_utilities_1 = require("apollo-utilities");
var react_apollo_1 = require("react-apollo");
var aws_appsync_1 = require("aws-appsync");
exports.graphqlMutation = function (mutation, cacheUpdateQuery, typename, idField, operationType) { return withGraphQL(reactMutator(mutation, cacheUpdateQuery, typename, idField, operationType)); };
var withGraphQL = function (options) { return function (Component) {
    var document = options.document;
    var A = react_apollo_1.graphql(document, options)(Component);
    var B = function (props, context) {
        var client = context.client;
        return (React.createElement(A, __assign({}, props, { client: client })));
    };
    B.contextTypes = {
        client: PropTypes.object.isRequired
    };
    return B;
}; };
var reactMutator = function (mutation, cacheUpdateQuery, typename, idField, operationType) { return ({
    document: mutation,
    props: function (props) {
        var _a;
        var client = props.ownProps.client;
        var mutationName = apollo_utilities_1.resultKeyNameFromField(mutation.definitions[0].selectionSet.selections[0]);
        return _a = {},
            _a[mutationName] = function (variables) { return props.mutate(aws_appsync_1.buildMutation(client, mutation, variables, cacheUpdateQuery, typename, idField, operationType)); },
            _a;
    },
}); };
