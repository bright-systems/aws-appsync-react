/*!
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import * as React from "react";
import * as PropTypes from 'prop-types';
import AWSAppSyncClient from 'aws-appsync';
import { RehydratedState } from './index';
export interface RehydrateProps {
    rehydrated: boolean;
    children: React.ReactNode;
    style: any;
}
export interface RehydratedProps {
    render?: ((props: {
        rehydrated: boolean;
    }) => React.ReactNode);
    children?: React.ReactNode;
    loading?: React.ComponentType<any>;
    style?: any;
}
export default class Rehydrated extends React.Component<RehydratedProps, RehydratedState> {
    static contextTypes: {
        client: PropTypes.Validator<AWSAppSyncClient<import("apollo-cache-inmemory/lib/types").NormalizedCacheObject>>;
    };
    static propTypes: {
        render: PropTypes.Requireable<(...args: any[]) => any>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        loading: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        style: any;
    };
    constructor(props: any, context: any);
    componentWillMount(): Promise<void>;
    render(): {};
}
