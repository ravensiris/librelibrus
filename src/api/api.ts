/* tslint:disable */
/* eslint-disable */
/**
 * API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface ErrorModel
 */
export interface ErrorModel {
    /**
     * 
     * @type {string}
     * @memberof ErrorModel
     */
    message: string;
}
/**
 * 
 * @export
 * @interface LessonUnit
 */
export interface LessonUnit {
    /**
     * 
     * @type {string}
     * @memberof LessonUnit
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof LessonUnit
     */
    teacher: string;
    /**
     * 
     * @type {string}
     * @memberof LessonUnit
     */
    classroom?: string;
    /**
     * Additional info attached to a lesson unit.
     * @type {string}
     * @memberof LessonUnit
     */
    info?: string;
    /**
     * 
     * @type {string}
     * @memberof LessonUnit
     */
    start: string;
    /**
     * Total seconds.
     * @type {number}
     * @memberof LessonUnit
     */
    duration: number;
}
/**
 * 
 * @export
 * @interface LessonUnitFailField
 */
export interface LessonUnitFailField {
    /**
     * 
     * @type {string}
     * @memberof LessonUnitFailField
     */
    week?: string;
    /**
     * 
     * @type {string}
     * @memberof LessonUnitFailField
     */
    token?: string;
}
/**
 * 
 * @export
 * @interface LessonUnitFailModel 
 */
export interface LessonUnitFailModel  {
    /**
     * 
     * @type {LessonUnitFailField}
     * @memberof LessonUnitFailModel 
     */
    data: LessonUnitFailField;
}
/**
 * 
 * @export
 * @interface LessonUnitsModel
 */
export interface LessonUnitsModel {
    /**
     * 
     * @type {UnitsDataField}
     * @memberof LessonUnitsModel
     */
    data: UnitsDataField;
}
/**
 * 
 * @export
 * @interface LessonUnitsModelAllOf
 */
export interface LessonUnitsModelAllOf {
    /**
     * 
     * @type {UnitsDataField}
     * @memberof LessonUnitsModelAllOf
     */
    data: UnitsDataField;
}
/**
 * 
 * @export
 * @interface ListMessagesDataField
 */
export interface ListMessagesDataField {
    /**
     * 
     * @type {Array<MessageBrief>}
     * @memberof ListMessagesDataField
     */
    messages: Array<MessageBrief>;
    /**
     * 
     * @type {PageInfo}
     * @memberof ListMessagesDataField
     */
    pageInfo: PageInfo;
}
/**
 * 
 * @export
 * @interface ListMessagesFailField
 */
export interface ListMessagesFailField {
    /**
     * 
     * @type {string}
     * @memberof ListMessagesFailField
     */
    token: string;
    /**
     * 
     * @type {number}
     * @memberof ListMessagesFailField
     */
    page: number;
}
/**
 * 
 * @export
 * @interface ListMessagesFailModel
 */
export interface ListMessagesFailModel {
    /**
     * 
     * @type {ListMessagesFailField}
     * @memberof ListMessagesFailModel
     */
    data: ListMessagesFailField;
}
/**
 * 
 * @export
 * @interface ListMessagesModel
 */
export interface ListMessagesModel {
    /**
     * 
     * @type {ListMessagesDataField}
     * @memberof ListMessagesModel
     */
    data: ListMessagesDataField;
}
/**
 * 
 * @export
 * @interface ListMessagesModelAllOf
 */
export interface ListMessagesModelAllOf {
    /**
     * 
     * @type {ListMessagesDataField}
     * @memberof ListMessagesModelAllOf
     */
    data: ListMessagesDataField;
}
/**
 * 
 * @export
 * @interface MessageBrief
 */
export interface MessageBrief {
    /**
     * 
     * @type {string}
     * @memberof MessageBrief
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof MessageBrief
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof MessageBrief
     */
    sender: string;
    /**
     * 
     * @type {string}
     * @memberof MessageBrief
     */
    sent: string;
    /**
     * 
     * @type {boolean}
     * @memberof MessageBrief
     */
    has_attachment: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof MessageBrief
     */
    is_read: boolean;
}
/**
 * 
 * @export
 * @interface PageInfo
 */
export interface PageInfo {
    /**
     * 
     * @type {number}
     * @memberof PageInfo
     */
    current: number;
    /**
     * 
     * @type {number}
     * @memberof PageInfo
     */
    max_page: number;
}
/**
 * 
 * @export
 * @interface SuccessModel
 */
export interface SuccessModel {
    /**
     * 
     * @type {object}
     * @memberof SuccessModel
     */
    data: object;
}
/**
 * 
 * @export
 * @interface TokenField
 */
export interface TokenField {
    /**
     * 
     * @type {string}
     * @memberof TokenField
     */
    token: string;
}
/**
 * 
 * @export
 * @interface TokenModel
 */
export interface TokenModel {
    /**
     * 
     * @type {TokenField}
     * @memberof TokenModel
     */
    data: TokenField;
}
/**
 * 
 * @export
 * @interface TokenModelAllOf
 */
export interface TokenModelAllOf {
    /**
     * 
     * @type {TokenField}
     * @memberof TokenModelAllOf
     */
    data: TokenField;
}
/**
 * 
 * @export
 * @interface UnitsDataField
 */
export interface UnitsDataField {
    /**
     * 
     * @type {Array<LessonUnit>}
     * @memberof UnitsDataField
     */
    units: Array<LessonUnit>;
    /**
     * ISO format week date
     * @type {string}
     * @memberof UnitsDataField
     */
    week: string;
}

/**
 * AuthenticationApi - axios parameter creator
 * @export
 */
export const AuthenticationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAuthorizeToken: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Authorization Basic required
            // http basic authentication required
            if (configuration && (configuration.username || configuration.password)) {
                localVarRequestOptions["auth"] = { username: configuration.username, password: configuration.password };
            }


    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthenticationApi - functional programming interface
 * @export
 */
export const AuthenticationApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAuthorizeToken(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TokenModel>> {
            const localVarAxiosArgs = await AuthenticationApiAxiosParamCreator(configuration).getAuthorizeToken(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * AuthenticationApi - factory interface
 * @export
 */
export const AuthenticationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAuthorizeToken(options?: any): AxiosPromise<TokenModel> {
            return AuthenticationApiFp(configuration).getAuthorizeToken(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AuthenticationApi - object-oriented interface
 * @export
 * @class AuthenticationApi
 * @extends {BaseAPI}
 */
export class AuthenticationApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public getAuthorizeToken(options?: any) {
        return AuthenticationApiFp(this.configuration).getAuthorizeToken(options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * MessagesApi - axios parameter creator
 * @export
 */
export const MessagesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} page 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getListMessages: async (page: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'page' is not null or undefined
            if (page === null || page === undefined) {
                throw new RequiredError('page','Required parameter page was null or undefined when calling getListMessages.');
            }
            const localVarPath = `/Messages/units/{page}`
                .replace(`{${"page"}}`, encodeURIComponent(String(page)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apikey required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-API-KEY")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-API-KEY"] = localVarApiKeyValue;
            }


    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MessagesApi - functional programming interface
 * @export
 */
export const MessagesApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} page 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getListMessages(page: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListMessagesModel>> {
            const localVarAxiosArgs = await MessagesApiAxiosParamCreator(configuration).getListMessages(page, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * MessagesApi - factory interface
 * @export
 */
export const MessagesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {number} page 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getListMessages(page: number, options?: any): AxiosPromise<ListMessagesModel> {
            return MessagesApiFp(configuration).getListMessages(page, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MessagesApi - object-oriented interface
 * @export
 * @class MessagesApi
 * @extends {BaseAPI}
 */
export class MessagesApi extends BaseAPI {
    /**
     * 
     * @param {number} page 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessagesApi
     */
    public getListMessages(page: number, options?: any) {
        return MessagesApiFp(this.configuration).getListMessages(page, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * TimetableApi - axios parameter creator
 * @export
 */
export const TimetableApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLessonUnits: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/timetable/units`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apikey required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-API-KEY")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-API-KEY"] = localVarApiKeyValue;
            }


    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} week 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLessonUnits_1: async (week: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'week' is not null or undefined
            if (week === null || week === undefined) {
                throw new RequiredError('week','Required parameter week was null or undefined when calling getLessonUnits_1.');
            }
            const localVarPath = `/timetable/units/{week}`
                .replace(`{${"week"}}`, encodeURIComponent(String(week)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apikey required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-API-KEY")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-API-KEY"] = localVarApiKeyValue;
            }


    
            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TimetableApi - functional programming interface
 * @export
 */
export const TimetableApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLessonUnits(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LessonUnitsModel>> {
            const localVarAxiosArgs = await TimetableApiAxiosParamCreator(configuration).getLessonUnits(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} week 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLessonUnits_1(week: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LessonUnitsModel>> {
            const localVarAxiosArgs = await TimetableApiAxiosParamCreator(configuration).getLessonUnits_1(week, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: (configuration?.basePath || basePath) + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * TimetableApi - factory interface
 * @export
 */
export const TimetableApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLessonUnits(options?: any): AxiosPromise<LessonUnitsModel> {
            return TimetableApiFp(configuration).getLessonUnits(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} week 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLessonUnits_1(week: string, options?: any): AxiosPromise<LessonUnitsModel> {
            return TimetableApiFp(configuration).getLessonUnits_1(week, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TimetableApi - object-oriented interface
 * @export
 * @class TimetableApi
 * @extends {BaseAPI}
 */
export class TimetableApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TimetableApi
     */
    public getLessonUnits(options?: any) {
        return TimetableApiFp(this.configuration).getLessonUnits(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} week 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TimetableApi
     */
    public getLessonUnits_1(week: string, options?: any) {
        return TimetableApiFp(this.configuration).getLessonUnits_1(week, options).then((request) => request(this.axios, this.basePath));
    }
}


