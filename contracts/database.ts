declare module '@ioc:Adonis/Lucid/Orm' {
  interface ModelQueryBuilderContract<Model extends LucidModel, Result = InstanceType<Model>> {
    whereSlug(column:string, value:string): Promise<this>; //see error in declaration in providers/AppProvider.ts
  }
}
