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
import { CustomFieldCreate } from '../model';
// @ts-ignore
import { CustomFieldResponse } from '../model';
// @ts-ignore
import { CustomFieldUpdate } from '../model';
// @ts-ignore
import { CustomFieldsResponse } from '../model';
// @ts-ignore
import { GetCustomFieldsFiltersParameter } from '../model';
// @ts-ignore
import { IdResponse } from '../model';
// @ts-ignore
import { Response } from '../model';
/**
 * CustomFieldsApi - axios parameter creator
 * @export
 */
export const CustomFieldsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This method allows to create custom field. 
         * @summary Create new Custom Field.
         * @param {CustomFieldCreate} customFieldCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCustomField: async (customFieldCreate: CustomFieldCreate, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'customFieldCreate' is not null or undefined
            assertParamExists('createCustomField', 'customFieldCreate', customFieldCreate)
            const localVarPath = `/custom_field`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(customFieldCreate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method allows to delete custom field. 
         * @summary Delete Custom Field by id.
         * @param {number} id Identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCustomField: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteCustomField', 'id', id)
            const localVarPath = `/custom_field/{id}`
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method allows to retrieve custom field. 
         * @summary Get Custom Field by id.
         * @param {number} id Identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCustomField: async (id: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getCustomField', 'id', id)
            const localVarPath = `/custom_field/{id}`
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
         * This method allows to retrieve and filter custom fields. 
         * @summary Get all Custom Fields.
         * @param {GetCustomFieldsFiltersParameter} [filters] 
         * @param {number} [limit] A number of entities in result set.
         * @param {number} [offset] How many entities should be skipped.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCustomFields: async (filters?: GetCustomFieldsFiltersParameter, limit?: number, offset?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/custom_field`;
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
         * This method allows to update custom field. 
         * @summary Update Custom Field by id.
         * @param {number} id Identifier.
         * @param {CustomFieldUpdate} customFieldUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCustomField: async (id: number, customFieldUpdate: CustomFieldUpdate, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateCustomField', 'id', id)
            // verify required parameter 'customFieldUpdate' is not null or undefined
            assertParamExists('updateCustomField', 'customFieldUpdate', customFieldUpdate)
            const localVarPath = `/custom_field/{id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(customFieldUpdate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CustomFieldsApi - functional programming interface
 * @export
 */
export const CustomFieldsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CustomFieldsApiAxiosParamCreator(configuration)
    return {
        /**
         * This method allows to create custom field. 
         * @summary Create new Custom Field.
         * @param {CustomFieldCreate} customFieldCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createCustomField(customFieldCreate: CustomFieldCreate, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createCustomField(customFieldCreate, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method allows to delete custom field. 
         * @summary Delete Custom Field by id.
         * @param {number} id Identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteCustomField(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteCustomField(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method allows to retrieve custom field. 
         * @summary Get Custom Field by id.
         * @param {number} id Identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCustomField(id: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomFieldResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCustomField(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method allows to retrieve and filter custom fields. 
         * @summary Get all Custom Fields.
         * @param {GetCustomFieldsFiltersParameter} [filters] 
         * @param {number} [limit] A number of entities in result set.
         * @param {number} [offset] How many entities should be skipped.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCustomFields(filters?: GetCustomFieldsFiltersParameter, limit?: number, offset?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomFieldsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCustomFields(filters, limit, offset, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method allows to update custom field. 
         * @summary Update Custom Field by id.
         * @param {number} id Identifier.
         * @param {CustomFieldUpdate} customFieldUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateCustomField(id: number, customFieldUpdate: CustomFieldUpdate, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateCustomField(id, customFieldUpdate, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CustomFieldsApi - factory interface
 * @export
 */
export const CustomFieldsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CustomFieldsApiFp(configuration)
    return {
        /**
         * This method allows to create custom field. 
         * @summary Create new Custom Field.
         * @param {CustomFieldCreate} customFieldCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCustomField(customFieldCreate: CustomFieldCreate, options?: any): AxiosPromise<IdResponse> {
            return localVarFp.createCustomField(customFieldCreate, options).then((request) => request(axios, basePath));
        },
        /**
         * This method allows to delete custom field. 
         * @summary Delete Custom Field by id.
         * @param {number} id Identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCustomField(id: number, options?: any): AxiosPromise<Response> {
            return localVarFp.deleteCustomField(id, options).then((request) => request(axios, basePath));
        },
        /**
         * This method allows to retrieve custom field. 
         * @summary Get Custom Field by id.
         * @param {number} id Identifier.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCustomField(id: number, options?: any): AxiosPromise<CustomFieldResponse> {
            return localVarFp.getCustomField(id, options).then((request) => request(axios, basePath));
        },
        /**
         * This method allows to retrieve and filter custom fields. 
         * @summary Get all Custom Fields.
         * @param {GetCustomFieldsFiltersParameter} [filters] 
         * @param {number} [limit] A number of entities in result set.
         * @param {number} [offset] How many entities should be skipped.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCustomFields(filters?: GetCustomFieldsFiltersParameter, limit?: number, offset?: number, options?: any): AxiosPromise<CustomFieldsResponse> {
            return localVarFp.getCustomFields(filters, limit, offset, options).then((request) => request(axios, basePath));
        },
        /**
         * This method allows to update custom field. 
         * @summary Update Custom Field by id.
         * @param {number} id Identifier.
         * @param {CustomFieldUpdate} customFieldUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCustomField(id: number, customFieldUpdate: CustomFieldUpdate, options?: any): AxiosPromise<Response> {
            return localVarFp.updateCustomField(id, customFieldUpdate, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CustomFieldsApi - object-oriented interface
 * @export
 * @class CustomFieldsApi
 * @extends {BaseAPI}
 */
export class CustomFieldsApi extends BaseAPI {
    /**
     * This method allows to create custom field. 
     * @summary Create new Custom Field.
     * @param {CustomFieldCreate} customFieldCreate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomFieldsApi
     */
    public createCustomField(customFieldCreate: CustomFieldCreate, options?: AxiosRequestConfig) {
        return CustomFieldsApiFp(this.configuration).createCustomField(customFieldCreate, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method allows to delete custom field. 
     * @summary Delete Custom Field by id.
     * @param {number} id Identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomFieldsApi
     */
    public deleteCustomField(id: number, options?: AxiosRequestConfig) {
        return CustomFieldsApiFp(this.configuration).deleteCustomField(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method allows to retrieve custom field. 
     * @summary Get Custom Field by id.
     * @param {number} id Identifier.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomFieldsApi
     */
    public getCustomField(id: number, options?: AxiosRequestConfig) {
        return CustomFieldsApiFp(this.configuration).getCustomField(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method allows to retrieve and filter custom fields. 
     * @summary Get all Custom Fields.
     * @param {GetCustomFieldsFiltersParameter} [filters] 
     * @param {number} [limit] A number of entities in result set.
     * @param {number} [offset] How many entities should be skipped.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomFieldsApi
     */
    public getCustomFields(filters?: GetCustomFieldsFiltersParameter, limit?: number, offset?: number, options?: AxiosRequestConfig) {
        return CustomFieldsApiFp(this.configuration).getCustomFields(filters, limit, offset, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method allows to update custom field. 
     * @summary Update Custom Field by id.
     * @param {number} id Identifier.
     * @param {CustomFieldUpdate} customFieldUpdate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomFieldsApi
     */
    public updateCustomField(id: number, customFieldUpdate: CustomFieldUpdate, options?: AxiosRequestConfig) {
        return CustomFieldsApiFp(this.configuration).updateCustomField(id, customFieldUpdate, options).then((request) => request(this.axios, this.basePath));
    }
}
