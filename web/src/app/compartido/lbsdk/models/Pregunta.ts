/* tslint:disable */

declare var Object: any;
export interface PreguntaInterface {
  "enunciado": string;
  "autorId"?: number;
  "id"?: number;
}

export class Pregunta implements PreguntaInterface {
  "enunciado": string;
  "autorId": number;
  "id": number;
  constructor(data?: PreguntaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Pregunta`.
   */
  public static getModelName() {
    return "Pregunta";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Pregunta for dynamic purposes.
  **/
  public static factory(data: PreguntaInterface): Pregunta{
    return new Pregunta(data);
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
      name: 'Pregunta',
      plural: 'Pregunta',
      path: 'Pregunta',
      idName: 'id',
      properties: {
        "enunciado": {
          name: 'enunciado',
          type: 'string'
        },
        "autorId": {
          name: 'autorId',
          type: 'number'
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
