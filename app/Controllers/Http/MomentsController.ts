import { v4 as uuidv4 } from 'uuid'

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Moment from 'App/Models/Moment'

import { Application } from '@adonisjs/core/build/standalone'

export default class MomentsController {
  private validationOptions = {
    type: ['image'],
    size: '2mb',
  }
  public async store({ request, response }: HttpContextContract) {
    const body = request.body()

    const moment = await Moment.create(body)

    /*ele valida a imagem antes de colocar no sistema */
    const image = request.file('image', this.validationOptions)

    if(image) {
      const imageName = `${uuidv4()}.${image.extname}`
    }
    response.status(201)
    return {
      message: 'Momento criado com sucesso!',
      data: moment,
    }
  }
}
