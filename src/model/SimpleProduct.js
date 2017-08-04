/**
 * Infusionsoft REST API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: V1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';





/**
* The SimpleProduct model module.
* @module model/SimpleProduct
* @version V1.0
*/
export default class SimpleProduct {
    /**
    * Constructs a new <code>SimpleProduct</code>.
    * @alias module:model/SimpleProduct
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>SimpleProduct</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SimpleProduct} obj Optional instance to populate.
    * @return {module:model/SimpleProduct} The populated <code>SimpleProduct</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SimpleProduct();

            
            
            

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('shippable')) {
                obj['shippable'] = ApiClient.convertToType(data['shippable'], 'Boolean');
            }
            if (data.hasOwnProperty('sku')) {
                obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
            }
            if (data.hasOwnProperty('taxable')) {
                obj['taxable'] = ApiClient.convertToType(data['taxable'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * @member {String} description
    */
    description = undefined;
    /**
    * @member {Number} id
    */
    id = undefined;
    /**
    * @member {String} name
    */
    name = undefined;
    /**
    * @member {Boolean} shippable
    */
    shippable = undefined;
    /**
    * @member {String} sku
    */
    sku = undefined;
    /**
    * @member {Boolean} taxable
    */
    taxable = undefined;








}

