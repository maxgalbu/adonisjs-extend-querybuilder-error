import { ApplicationContract } from '@ioc:Adonis/Core/Application'
import {slugify} from '../start/functions'

export default class AppProvider {
  constructor (protected app: ApplicationContract) {
  }

  public register () {
    // Register your own bindings
  }

  public async boot () {
    const {ModelQueryBuilder} = this.app.container.use('Adonis/Lucid/Database');
    ModelQueryBuilder.macro('whereSlug', async function(column:string, value:string) {
        return this.where(column, await slugify(value));
    });
  }

  public async ready () {
    // App is ready
  }

  public async shutdown () {
    // Cleanup, since app is going down
  }
}
