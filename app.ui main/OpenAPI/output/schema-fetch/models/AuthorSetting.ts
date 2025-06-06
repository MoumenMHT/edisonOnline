/* tslint:disable */
/* eslint-disable */
/**
 * Edison Backend API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AuthorSetting
 */
export interface AuthorSetting {
    /**
     * 
     * @type {string}
     * @memberof AuthorSetting
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AuthorSetting
     */
    value: string;
}

/**
 * Check if a given object implements the AuthorSetting interface.
 */
export function instanceOfAuthorSetting(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function AuthorSettingFromJSON(json: any): AuthorSetting {
    return AuthorSettingFromJSONTyped(json, false);
}

export function AuthorSettingFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthorSetting {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'value': json['value'],
    };
}

export function AuthorSettingToJSON(value?: AuthorSetting | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'value': value.value,
    };
}

