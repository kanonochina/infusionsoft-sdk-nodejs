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
* The ShippingInformation model module.
* @module model/ShippingInformation
* @version V1.0
*/
export default class ShippingInformation {
    /**
    * Constructs a new <code>ShippingInformation</code>.
    * @alias module:model/ShippingInformation
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>ShippingInformation</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ShippingInformation} obj Optional instance to populate.
    * @return {module:model/ShippingInformation} The populated <code>ShippingInformation</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShippingInformation();

            
            
            

            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('company')) {
                obj['company'] = ApiClient.convertToType(data['company'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('middle_name')) {
                obj['middle_name'] = ApiClient.convertToType(data['middle_name'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('street1')) {
                obj['street1'] = ApiClient.convertToType(data['street1'], 'String');
            }
            if (data.hasOwnProperty('street2')) {
                obj['street2'] = ApiClient.convertToType(data['street2'], 'String');
            }
            if (data.hasOwnProperty('zip')) {
                obj['zip'] = ApiClient.convertToType(data['zip'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} city
    */
    city = undefined;
    /**
    * @member {String} company
    */
    company = undefined;
    /**
    * @member {String} country
    */
    country = undefined;
    /**
    * @member {String} first_name
    */
    first_name = undefined;
    /**
    * @member {Number} id
    */
    id = undefined;
    /**
    * @member {String} last_name
    */
    last_name = undefined;
    /**
    * @member {String} middle_name
    */
    middle_name = undefined;
    /**
    * @member {String} phone
    */
    phone = undefined;
    /**
    * @member {String} state
    */
    state = undefined;
    /**
    * @member {String} street1
    */
    street1 = undefined;
    /**
    * @member {String} street2
    */
    street2 = undefined;
    /**
    * @member {String} zip
    */
    zip = undefined;








}


