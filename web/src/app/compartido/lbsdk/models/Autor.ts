/* tslint:disable */

declare var Object: any;
export interface AutorInterface {
  "nombre": string;
  "email": string;
  "id"?: number;
}

export class Autor implements AutorInterface {
  "nombre": string;
  "email": string;
  "id": number;
  constructor(data?: AutorInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Autor`.
   */
  public static getModelName() {
    return "Autor";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Autor for dynamic purposes.
  **/
  public static factory(data: AutorInterface): Autor{
    return new Autor(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Autor',
      plural: 'Autors',
      path: 'Autors',
      idName: 'id',
      properties: {
        "nombre": {
          name: 'nombre',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
