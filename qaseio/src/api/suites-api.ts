/* tslint:disable */
/* eslint-disable */
/**
 * Qase.io API
 * Qase API Specification.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@qase.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { GetMilestonesFiltersParameter } from '../model';
// @ts-ignore
import { IdResponse } from '../model';
// @ts-ignore
import { SuiteCreate } from '../model';
// @ts-ignore
import { SuiteDelete } from '../model';
// @ts-ignore
import { SuiteListResponse } from '../model';
// @ts-ignore
import { SuiteResponse } from '../model';
// @ts-ignore
import { SuiteUpdate } from '../model';
/**
 * SuitesApi - axios parameter creator
 * @export
 */
export const SuitesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This method is used to create a new test suite through API. 
         * @summary Create a new test suite.
         * @param {string} code Code of project, where to search entities.
         * @param {SuiteCreate} suiteCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSuite: async (code: string, suiteCreate: SuiteCreate, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('createSuite', 'code', code)
            // verify required parameter 'suiteCreate' is not null or undefined
            assertParamExists('createSuite', 'suiteCreate', suiteCreate)
            const localVarPath = `/suite/{code}`
                .replace(`{${"code"}}`, encodeURIComponent(String(code)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication TokenAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Token", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(suiteCreate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method completely deletes a test suite with test cases from repository. 
         * @summary Delete test suite.
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {SuiteDelete} [suiteDelete] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSuite: async (code: string, id: number, suiteDelete?: SuiteDelete, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('deleteSuite', 'code', code)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteSuite', 'id', id)
            const localVarPath = `/suite/{code}/{id}`
                .replace(`{${"code"}}`, encodeURIComponent(String(code)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication TokenAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Token", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(suiteDelete, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method allows to retrieve a specific test suite. 
         * @summary Get a specific test suite.
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSuite: async (code: string, id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('getSuite', 'code', code)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getSuite', 'id', id)
            const localVarPath = `/suite/{code}/{id}`
                .replace(`{${"code"}}`, encodeURIComponent(String(code)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication TokenAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Token", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method allows to retrieve all test suites stored in selected project.. 
         * @summary Get all test suites.
         * @param {string} code Code of project, where to search entities.
         * @param {GetMilestonesFiltersParameter} [filters] 
         * @param {number} [limit] A number of entities in result set.
         * @param {number} [offset] How many entities should be skipped.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSuites: async (code: string, filters?: GetMilestonesFiltersParameter, limit?: number, offset?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('getSuites', 'code', code)
            const localVarPath = `/suite/{code}`
                .replace(`{${"code"}}`, encodeURIComponent(String(code)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication TokenAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Token", configuration)

            if (filters !== undefined) {
                localVarQueryParameter['filters'] = filters;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method is used to update a test suite through API. 
         * @summary Update test suite.
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {SuiteUpdate} suiteUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSuite: async (code: string, id: number, suiteUpdate: SuiteUpdate, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('updateSuite', 'code', code)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateSuite', 'id', id)
            // verify required parameter 'suiteUpdate' is not null or undefined
            assertParamExists('updateSuite', 'suiteUpdate', suiteUpdate)
            const localVarPath = `/suite/{code}/{id}`
                .replace(`{${"code"}}`, encodeURIComponent(String(code)))
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication TokenAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Token", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(suiteUpdate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SuitesApi - functional programming interface
 * @export
 */
export const SuitesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SuitesApiAxiosParamCreator(configuration)
    return {
        /**
         * This method is used to create a new test suite through API. 
         * @summary Create a new test suite.
         * @param {string} code Code of project, where to search entities.
         * @param {SuiteCreate} suiteCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createSuite(code: string, suiteCreate: SuiteCreate, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createSuite(code, suiteCreate, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method completely deletes a test suite with test cases from repository. 
         * @summary Delete test suite.
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {SuiteDelete} [suiteDelete] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteSuite(code: string, id: number, suiteDelete?: SuiteDelete, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteSuite(code, id, suiteDelete, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method allows to retrieve a specific test suite. 
         * @summary Get a specific test suite.
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSuite(code: string, id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuiteResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSuite(code, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method allows to retrieve all test suites stored in selected project.. 
         * @summary Get all test suites.
         * @param {string} code Code of project, where to search entities.
         * @param {GetMilestonesFiltersParameter} [filters] 
         * @param {number} [limit] A number of entities in result set.
         * @param {number} [offset] How many entities should be skipped.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSuites(code: string, filters?: GetMilestonesFiltersParameter, limit?: number, offset?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuiteListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSuites(code, filters, limit, offset, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method is used to update a test suite through API. 
         * @summary Update test suite.
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {SuiteUpdate} suiteUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateSuite(code: string, id: number, suiteUpdate: SuiteUpdate, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateSuite(code, id, suiteUpdate, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SuitesApi - factory interface
 * @export
 */
export const SuitesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SuitesApiFp(configuration)
    return {
        /**
         * This method is used to create a new test suite through API. 
         * @summary Create a new test suite.
         * @param {string} code Code of project, where to search entities.
         * @param {SuiteCreate} suiteCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSuite(code: string, suiteCreate: SuiteCreate, options?: any): AxiosPromise<IdResponse> {
            return localVarFp.createSuite(code, suiteCreate, options).then((request) => request(axios, basePath));
        },
        /**
         * This method completely deletes a test suite with test cases from repository. 
         * @summary Delete test suite.
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {SuiteDelete} [suiteDelete] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteSuite(code: string, id: number, suiteDelete?: SuiteDelete, options?: any): AxiosPromise<IdResponse> {
            return localVarFp.deleteSuite(code, id, suiteDelete, options).then((request) => request(axios, basePath));
        },
        /**
         * This method allows to retrieve a specific test suite. 
         * @summary Get a specific test suite.
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSuite(code: string, id: number, options?: any): AxiosPromise<SuiteResponse> {
            return localVarFp.getSuite(code, id, options).then((request) => request(axios, basePath));
        },
        /**
         * This method allows to retrieve all test suites stored in selected project.. 
         * @summary Get all test suites.
         * @param {string} code Code of project, where to search entities.
         * @param {GetMilestonesFiltersParameter} [filters] 
         * @param {number} [limit] A number of entities in result set.
         * @param {number} [offset] How many entities should be skipped.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSuites(code: string, filters?: GetMilestonesFiltersParameter, limit?: number, offset?: number, options?: any): AxiosPromise<SuiteListResponse> {
            return localVarFp.getSuites(code, filters, limit, offset, options).then((request) => request(axios, basePath));
        },
        /**
         * This method is used to update a test suite through API. 
         * @summary Update test suite.
         * @param {string} code Code of project, where to search entities.
         * @param {number} id Identifier.
         * @param {SuiteUpdate} suiteUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSuite(code: string, id: number, suiteUpdate: SuiteUpdate, options?: any): AxiosPromise<IdResponse> {
            return localVarFp.updateSuite(code, id, suiteUpdate, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SuitesApi - object-oriented interface
 * @export
 * @class SuitesApi
 * @extends {BaseAPI}
 */
export class SuitesApi extends BaseAPI {
    /**
     * This method is used to create a new test suite through API. 
     * @summary Create a new test suite.
     * @param {string} code Code of project, where to search entities.
     * @param {SuiteCreate} suiteCreate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SuitesApi
     */
    public createSuite(code: string, suiteCreate: SuiteCreate, options?: AxiosRequestConfig) {
        return SuitesApiFp(this.configuration).createSuite(code, suiteCreate, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method completely deletes a test suite with test cases from repository. 
     * @summary Delete test suite.
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {SuiteDelete} [suiteDelete] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SuitesApi
     */
    public deleteSuite(code: string, id: number, suiteDelete?: SuiteDelete, options?: AxiosRequestConfig) {
        return SuitesApiFp(this.configuration).deleteSuite(code, id, suiteDelete, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method allows to retrieve a specific test suite. 
     * @summary Get a specific test suite.
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SuitesApi
     */
    public getSuite(code: string, id: number, options?: AxiosRequestConfig) {
        return SuitesApiFp(this.configuration).getSuite(code, id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method allows to retrieve all test suites stored in selected project.. 
     * @summary Get all test suites.
     * @param {string} code Code of project, where to search entities.
     * @param {GetMilestonesFiltersParameter} [filters] 
     * @param {number} [limit] A number of entities in result set.
     * @param {number} [offset] How many entities should be skipped.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SuitesApi
     */
    public getSuites(code: string, filters?: GetMilestonesFiltersParameter, limit?: number, offset?: number, options?: AxiosRequestConfig) {
        return SuitesApiFp(this.configuration).getSuites(code, filters, limit, offset, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method is used to update a test suite through API. 
     * @summary Update test suite.
     * @param {string} code Code of project, where to search entities.
     * @param {number} id Identifier.
     * @param {SuiteUpdate} suiteUpdate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SuitesApi
     */
    public updateSuite(code: string, id: number, suiteUpdate: SuiteUpdate, options?: AxiosRequestConfig) {
        return SuitesApiFp(this.configuration).updateSuite(code, id, suiteUpdate, options).then((request) => request(this.axios, this.basePath));
    }
}
