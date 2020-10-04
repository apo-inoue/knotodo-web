import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq: Maybe<Scalars['Boolean']>;
  _gt: Maybe<Scalars['Boolean']>;
  _gte: Maybe<Scalars['Boolean']>;
  _in: Maybe<Array<Scalars['Boolean']>>;
  _is_null: Maybe<Scalars['Boolean']>;
  _lt: Maybe<Scalars['Boolean']>;
  _lte: Maybe<Scalars['Boolean']>;
  _neq: Maybe<Scalars['Boolean']>;
  _nin: Maybe<Array<Scalars['Boolean']>>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq: Maybe<Scalars['Int']>;
  _gt: Maybe<Scalars['Int']>;
  _gte: Maybe<Scalars['Int']>;
  _in: Maybe<Array<Scalars['Int']>>;
  _is_null: Maybe<Scalars['Boolean']>;
  _lt: Maybe<Scalars['Int']>;
  _lte: Maybe<Scalars['Int']>;
  _neq: Maybe<Scalars['Int']>;
  _nin: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq: Maybe<Scalars['String']>;
  _gt: Maybe<Scalars['String']>;
  _gte: Maybe<Scalars['String']>;
  _ilike: Maybe<Scalars['String']>;
  _in: Maybe<Array<Scalars['String']>>;
  _is_null: Maybe<Scalars['Boolean']>;
  _like: Maybe<Scalars['String']>;
  _lt: Maybe<Scalars['String']>;
  _lte: Maybe<Scalars['String']>;
  _neq: Maybe<Scalars['String']>;
  _nilike: Maybe<Scalars['String']>;
  _nin: Maybe<Array<Scalars['String']>>;
  _nlike: Maybe<Scalars['String']>;
  _nsimilar: Maybe<Scalars['String']>;
  _similar: Maybe<Scalars['String']>;
};

/** columns and relationships of "accomplishment" */
export type Accomplishment = {
  __typename: 'accomplishment';
  id: Scalars['Int'];
  month: Scalars['Int'];
  week: Scalars['Int'];
  year: Scalars['Int'];
};

/** input type for inserting array relation for remote table "accomplishment" */
export type Accomplishment_Arr_Rel_Insert_Input = {
  data: Array<Accomplishment_Insert_Input>;
};

/** Boolean expression to filter rows from the table "accomplishment". All fields are combined with a logical 'AND'. */
export type Accomplishment_Bool_Exp = {
  _and: Maybe<Array<Maybe<Accomplishment_Bool_Exp>>>;
  _not: Maybe<Accomplishment_Bool_Exp>;
  _or: Maybe<Array<Maybe<Accomplishment_Bool_Exp>>>;
  id: Maybe<Int_Comparison_Exp>;
  month: Maybe<Int_Comparison_Exp>;
  week: Maybe<Int_Comparison_Exp>;
  year: Maybe<Int_Comparison_Exp>;
};

/** input type for inserting data into table "accomplishment" */
export type Accomplishment_Insert_Input = {
  id: Maybe<Scalars['Int']>;
  month: Maybe<Scalars['Int']>;
  week: Maybe<Scalars['Int']>;
  year: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "accomplishment" */
export type Accomplishment_Mutation_Response = {
  __typename: 'accomplishment_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Accomplishment>;
};

/** input type for inserting object relation for remote table "accomplishment" */
export type Accomplishment_Obj_Rel_Insert_Input = {
  data: Accomplishment_Insert_Input;
};

/** ordering options when selecting data from "accomplishment" */
export type Accomplishment_Order_By = {
  id: Maybe<Order_By>;
  month: Maybe<Order_By>;
  week: Maybe<Order_By>;
  year: Maybe<Order_By>;
};

/** primary key columns input for table: "accomplishment" */
export type Accomplishment_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "accomplishment" */
export type Accomplishment_Select_Column = 
  /** column name */
  | 'id'
  /** column name */
  | 'month'
  /** column name */
  | 'week'
  /** column name */
  | 'year';

/** columns and relationships of "categories" */
export type Categories = {
  __typename: 'categories';
  category: Scalars['String'];
  /** An array relationship */
  category_by_todo: Array<Todos>;
  /** An aggregated array relationship */
  category_by_todo_aggregate: Todos_Aggregate;
  created_at: Maybe<Scalars['timestamptz']>;
  deleted_at: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  /** An object relationship */
  user_by_id: Users;
};


/** columns and relationships of "categories" */
export type CategoriesCategory_By_TodoArgs = {
  distinct_on: Maybe<Array<Todos_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Todos_Order_By>>;
  where: Maybe<Todos_Bool_Exp>;
};


/** columns and relationships of "categories" */
export type CategoriesCategory_By_Todo_AggregateArgs = {
  distinct_on: Maybe<Array<Todos_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Todos_Order_By>>;
  where: Maybe<Todos_Bool_Exp>;
};

/** input type for inserting array relation for remote table "categories" */
export type Categories_Arr_Rel_Insert_Input = {
  data: Array<Categories_Insert_Input>;
  on_conflict: Maybe<Categories_On_Conflict>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
  _and: Maybe<Array<Maybe<Categories_Bool_Exp>>>;
  _not: Maybe<Categories_Bool_Exp>;
  _or: Maybe<Array<Maybe<Categories_Bool_Exp>>>;
  category: Maybe<String_Comparison_Exp>;
  category_by_todo: Maybe<Todos_Bool_Exp>;
  created_at: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at: Maybe<Timestamptz_Comparison_Exp>;
  id: Maybe<Uuid_Comparison_Exp>;
  user_by_id: Maybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "categories" */
export type Categories_Constraint = 
  /** unique or primary key constraint */
  | 'categories_pkey';

/** input type for inserting data into table "categories" */
export type Categories_Insert_Input = {
  category: Maybe<Scalars['String']>;
  category_by_todo: Maybe<Todos_Arr_Rel_Insert_Input>;
  user_by_id: Maybe<Users_Obj_Rel_Insert_Input>;
};

/** response of any mutation on the table "categories" */
export type Categories_Mutation_Response = {
  __typename: 'categories_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Categories>;
};

/** input type for inserting object relation for remote table "categories" */
export type Categories_Obj_Rel_Insert_Input = {
  data: Categories_Insert_Input;
  on_conflict: Maybe<Categories_On_Conflict>;
};

/** on conflict condition type for table "categories" */
export type Categories_On_Conflict = {
  constraint: Categories_Constraint;
  update_columns: Array<Categories_Update_Column>;
  where: Maybe<Categories_Bool_Exp>;
};

/** ordering options when selecting data from "categories" */
export type Categories_Order_By = {
  category: Maybe<Order_By>;
  category_by_todo_aggregate: Maybe<Todos_Aggregate_Order_By>;
  created_at: Maybe<Order_By>;
  deleted_at: Maybe<Order_By>;
  id: Maybe<Order_By>;
  user_by_id: Maybe<Users_Order_By>;
};

/** primary key columns input for table: "categories" */
export type Categories_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "categories" */
export type Categories_Select_Column = 
  /** column name */
  | 'category'
  /** column name */
  | 'created_at'
  /** column name */
  | 'deleted_at'
  /** column name */
  | 'id';

/** input type for updating data in table "categories" */
export type Categories_Set_Input = {
  category: Maybe<Scalars['String']>;
  deleted_at: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "categories" */
export type Categories_Update_Column = 
  /** column name */
  | 'category'
  /** column name */
  | 'deleted_at';

/** columns and relationships of "colorTypes" */
export type ColorTypes = {
  __typename: 'colorTypes';
  color_type: Scalars['String'];
  /** An array relationship */
  color_type_enum: Array<Users>;
  id: Maybe<Scalars['String']>;
};


/** columns and relationships of "colorTypes" */
export type ColorTypesColor_Type_EnumArgs = {
  distinct_on: Maybe<Array<Users_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Users_Order_By>>;
  where: Maybe<Users_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "colorTypes". All fields are combined with a logical 'AND'. */
export type ColorTypes_Bool_Exp = {
  _and: Maybe<Array<Maybe<ColorTypes_Bool_Exp>>>;
  _not: Maybe<ColorTypes_Bool_Exp>;
  _or: Maybe<Array<Maybe<ColorTypes_Bool_Exp>>>;
  color_type: Maybe<String_Comparison_Exp>;
  color_type_enum: Maybe<Users_Bool_Exp>;
  id: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "colorTypes" */
export type ColorTypes_Constraint = 
  /** unique or primary key constraint */
  | 'colorTypes_id_key'
  /** unique or primary key constraint */
  | 'colorTypes_pkey';

export type ColorTypes_Enum = 
  /** 2 */
  | 'BLUE'
  /** 1 */
  | 'BRAND'
  /** 3 */
  | 'GREEN'
  /** 6 */
  | 'GREY'
  /** 4 */
  | 'ORANGE'
  /** 5 */
  | 'PINK';

/** expression to compare columns of type colorTypes_enum. All fields are combined with logical 'AND'. */
export type ColorTypes_Enum_Comparison_Exp = {
  _eq: Maybe<ColorTypes_Enum>;
  _in: Maybe<Array<ColorTypes_Enum>>;
  _is_null: Maybe<Scalars['Boolean']>;
  _neq: Maybe<ColorTypes_Enum>;
  _nin: Maybe<Array<ColorTypes_Enum>>;
};

/** response of any mutation on the table "colorTypes" */
export type ColorTypes_Mutation_Response = {
  __typename: 'colorTypes_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<ColorTypes>;
};

/** on conflict condition type for table "colorTypes" */
export type ColorTypes_On_Conflict = {
  constraint: ColorTypes_Constraint;
  update_columns: Array<ColorTypes_Update_Column>;
  where: Maybe<ColorTypes_Bool_Exp>;
};

/** ordering options when selecting data from "colorTypes" */
export type ColorTypes_Order_By = {
  color_type: Maybe<Order_By>;
  id: Maybe<Order_By>;
};

/** primary key columns input for table: "colorTypes" */
export type ColorTypes_Pk_Columns_Input = {
  color_type: Scalars['String'];
};

/** select columns of table "colorTypes" */
export type ColorTypes_Select_Column = 
  /** column name */
  | 'color_type'
  /** column name */
  | 'id';

/** input type for updating data in table "colorTypes" */
export type ColorTypes_Set_Input = {
  color_type: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
};

/** update columns of table "colorTypes" */
export type ColorTypes_Update_Column = 
  /** column name */
  | 'color_type'
  /** column name */
  | 'id';

/** mutation root */
export type Mutation_Root = {
  __typename: 'mutation_root';
  /** delete data from the table: "categories" */
  delete_categories: Maybe<Categories_Mutation_Response>;
  /** delete single row from the table: "categories" */
  delete_categories_by_pk: Maybe<Categories>;
  /** delete data from the table: "colorTypes" */
  delete_colorTypes: Maybe<ColorTypes_Mutation_Response>;
  /** delete single row from the table: "colorTypes" */
  delete_colorTypes_by_pk: Maybe<ColorTypes>;
  /** delete data from the table: "todos" */
  delete_todos: Maybe<Todos_Mutation_Response>;
  /** delete single row from the table: "todos" */
  delete_todos_by_pk: Maybe<Todos>;
  /** delete data from the table: "urgency" */
  delete_urgency: Maybe<Urgency_Mutation_Response>;
  /** delete single row from the table: "urgency" */
  delete_urgency_by_pk: Maybe<Urgency>;
  /** insert data into the table: "accomplishment" */
  insert_accomplishment: Maybe<Accomplishment_Mutation_Response>;
  /** insert a single row into the table: "accomplishment" */
  insert_accomplishment_one: Maybe<Accomplishment>;
  /** insert data into the table: "categories" */
  insert_categories: Maybe<Categories_Mutation_Response>;
  /** insert a single row into the table: "categories" */
  insert_categories_one: Maybe<Categories>;
  /** insert data into the table: "todos" */
  insert_todos: Maybe<Todos_Mutation_Response>;
  /** insert a single row into the table: "todos" */
  insert_todos_one: Maybe<Todos>;
  /** insert data into the table: "users" */
  insert_users: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one: Maybe<Users>;
  /** update data of the table: "categories" */
  update_categories: Maybe<Categories_Mutation_Response>;
  /** update single row of the table: "categories" */
  update_categories_by_pk: Maybe<Categories>;
  /** update data of the table: "colorTypes" */
  update_colorTypes: Maybe<ColorTypes_Mutation_Response>;
  /** update single row of the table: "colorTypes" */
  update_colorTypes_by_pk: Maybe<ColorTypes>;
  /** update data of the table: "todos" */
  update_todos: Maybe<Todos_Mutation_Response>;
  /** update single row of the table: "todos" */
  update_todos_by_pk: Maybe<Todos>;
  /** update data of the table: "urgency" */
  update_urgency: Maybe<Urgency_Mutation_Response>;
  /** update single row of the table: "urgency" */
  update_urgency_by_pk: Maybe<Urgency>;
  /** update data of the table: "users" */
  update_users: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_CategoriesArgs = {
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Categories_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ColorTypesArgs = {
  where: ColorTypes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ColorTypes_By_PkArgs = {
  color_type: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_TodosArgs = {
  where: Todos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Todos_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_UrgencyArgs = {
  where: Urgency_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Urgency_By_PkArgs = {
  urgency_type: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_AccomplishmentArgs = {
  objects: Array<Accomplishment_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Accomplishment_OneArgs = {
  object: Accomplishment_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_CategoriesArgs = {
  objects: Array<Categories_Insert_Input>;
  on_conflict: Maybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Categories_OneArgs = {
  object: Categories_Insert_Input;
  on_conflict: Maybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TodosArgs = {
  objects: Array<Todos_Insert_Input>;
  on_conflict: Maybe<Todos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Todos_OneArgs = {
  object: Todos_Insert_Input;
  on_conflict: Maybe<Todos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CategoriesArgs = {
  _set: Maybe<Categories_Set_Input>;
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_By_PkArgs = {
  _set: Maybe<Categories_Set_Input>;
  pk_columns: Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ColorTypesArgs = {
  _set: Maybe<ColorTypes_Set_Input>;
  where: ColorTypes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_ColorTypes_By_PkArgs = {
  _set: Maybe<ColorTypes_Set_Input>;
  pk_columns: ColorTypes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TodosArgs = {
  _inc: Maybe<Todos_Inc_Input>;
  _set: Maybe<Todos_Set_Input>;
  where: Todos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Todos_By_PkArgs = {
  _inc: Maybe<Todos_Inc_Input>;
  _set: Maybe<Todos_Set_Input>;
  pk_columns: Todos_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UrgencyArgs = {
  _set: Maybe<Urgency_Set_Input>;
  where: Urgency_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Urgency_By_PkArgs = {
  _set: Maybe<Urgency_Set_Input>;
  pk_columns: Urgency_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export type Order_By = 
  /** in the ascending order, nulls last */
  | 'asc'
  /** in the ascending order, nulls first */
  | 'asc_nulls_first'
  /** in the ascending order, nulls last */
  | 'asc_nulls_last'
  /** in the descending order, nulls first */
  | 'desc'
  /** in the descending order, nulls first */
  | 'desc_nulls_first'
  /** in the descending order, nulls last */
  | 'desc_nulls_last';

/** query root */
export type Query_Root = {
  __typename: 'query_root';
  /** fetch data from the table: "accomplishment" */
  accomplishment: Array<Accomplishment>;
  /** fetch data from the table: "accomplishment" using primary key columns */
  accomplishment_by_pk: Maybe<Accomplishment>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk: Maybe<Categories>;
  /** fetch data from the table: "colorTypes" */
  colorTypes: Array<ColorTypes>;
  /** fetch data from the table: "colorTypes" using primary key columns */
  colorTypes_by_pk: Maybe<ColorTypes>;
  /** fetch data from the table: "todos" */
  todos: Array<Todos>;
  /** fetch aggregated fields from the table: "todos" */
  todos_aggregate: Todos_Aggregate;
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk: Maybe<Todos>;
  /** fetch data from the table: "urgency" */
  urgency: Array<Urgency>;
  /** fetch data from the table: "urgency" using primary key columns */
  urgency_by_pk: Maybe<Urgency>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: Maybe<Users>;
};


/** query root */
export type Query_RootAccomplishmentArgs = {
  distinct_on: Maybe<Array<Accomplishment_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Accomplishment_Order_By>>;
  where: Maybe<Accomplishment_Bool_Exp>;
};


/** query root */
export type Query_RootAccomplishment_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootCategoriesArgs = {
  distinct_on: Maybe<Array<Categories_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Categories_Order_By>>;
  where: Maybe<Categories_Bool_Exp>;
};


/** query root */
export type Query_RootCategories_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootColorTypesArgs = {
  distinct_on: Maybe<Array<ColorTypes_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<ColorTypes_Order_By>>;
  where: Maybe<ColorTypes_Bool_Exp>;
};


/** query root */
export type Query_RootColorTypes_By_PkArgs = {
  color_type: Scalars['String'];
};


/** query root */
export type Query_RootTodosArgs = {
  distinct_on: Maybe<Array<Todos_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Todos_Order_By>>;
  where: Maybe<Todos_Bool_Exp>;
};


/** query root */
export type Query_RootTodos_AggregateArgs = {
  distinct_on: Maybe<Array<Todos_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Todos_Order_By>>;
  where: Maybe<Todos_Bool_Exp>;
};


/** query root */
export type Query_RootTodos_By_PkArgs = {
  id: Scalars['String'];
};


/** query root */
export type Query_RootUrgencyArgs = {
  distinct_on: Maybe<Array<Urgency_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Urgency_Order_By>>;
  where: Maybe<Urgency_Bool_Exp>;
};


/** query root */
export type Query_RootUrgency_By_PkArgs = {
  urgency_type: Scalars['String'];
};


/** query root */
export type Query_RootUsersArgs = {
  distinct_on: Maybe<Array<Users_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Users_Order_By>>;
  where: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};

/** subscription root */
export type Subscription_Root = {
  __typename: 'subscription_root';
  /** fetch data from the table: "accomplishment" */
  accomplishment: Array<Accomplishment>;
  /** fetch data from the table: "accomplishment" using primary key columns */
  accomplishment_by_pk: Maybe<Accomplishment>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk: Maybe<Categories>;
  /** fetch data from the table: "colorTypes" */
  colorTypes: Array<ColorTypes>;
  /** fetch data from the table: "colorTypes" using primary key columns */
  colorTypes_by_pk: Maybe<ColorTypes>;
  /** fetch data from the table: "todos" */
  todos: Array<Todos>;
  /** fetch aggregated fields from the table: "todos" */
  todos_aggregate: Todos_Aggregate;
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk: Maybe<Todos>;
  /** fetch data from the table: "urgency" */
  urgency: Array<Urgency>;
  /** fetch data from the table: "urgency" using primary key columns */
  urgency_by_pk: Maybe<Urgency>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: Maybe<Users>;
};


/** subscription root */
export type Subscription_RootAccomplishmentArgs = {
  distinct_on: Maybe<Array<Accomplishment_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Accomplishment_Order_By>>;
  where: Maybe<Accomplishment_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootAccomplishment_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootCategoriesArgs = {
  distinct_on: Maybe<Array<Categories_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Categories_Order_By>>;
  where: Maybe<Categories_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCategories_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootColorTypesArgs = {
  distinct_on: Maybe<Array<ColorTypes_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<ColorTypes_Order_By>>;
  where: Maybe<ColorTypes_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootColorTypes_By_PkArgs = {
  color_type: Scalars['String'];
};


/** subscription root */
export type Subscription_RootTodosArgs = {
  distinct_on: Maybe<Array<Todos_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Todos_Order_By>>;
  where: Maybe<Todos_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTodos_AggregateArgs = {
  distinct_on: Maybe<Array<Todos_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Todos_Order_By>>;
  where: Maybe<Todos_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTodos_By_PkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type Subscription_RootUrgencyArgs = {
  distinct_on: Maybe<Array<Urgency_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Urgency_Order_By>>;
  where: Maybe<Urgency_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUrgency_By_PkArgs = {
  urgency_type: Scalars['String'];
};


/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on: Maybe<Array<Users_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Users_Order_By>>;
  where: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq: Maybe<Scalars['timestamptz']>;
  _gt: Maybe<Scalars['timestamptz']>;
  _gte: Maybe<Scalars['timestamptz']>;
  _in: Maybe<Array<Scalars['timestamptz']>>;
  _is_null: Maybe<Scalars['Boolean']>;
  _lt: Maybe<Scalars['timestamptz']>;
  _lte: Maybe<Scalars['timestamptz']>;
  _neq: Maybe<Scalars['timestamptz']>;
  _nin: Maybe<Array<Scalars['timestamptz']>>;
};

/**
 * urgency
 * 
 * 
 * columns and relationships of "todos"
 */
export type Todos = {
  __typename: 'todos';
  /** An object relationship */
  category_by_id: Maybe<Categories>;
  category_id: Maybe<Scalars['uuid']>;
  completed_at: Maybe<Scalars['timestamptz']>;
  created_at: Maybe<Scalars['timestamptz']>;
  deleted_at: Maybe<Scalars['timestamptz']>;
  id: Scalars['String'];
  isCompleted: Scalars['Boolean'];
  isToday: Scalars['Boolean'];
  title: Scalars['String'];
  urgency: Urgency_Enum;
  /** An object relationship */
  urgency_enum: Urgency;
  /** An object relationship */
  user_by_id: Users;
  workload: Scalars['Int'];
};

/** aggregated selection of "todos" */
export type Todos_Aggregate = {
  __typename: 'todos_aggregate';
  aggregate: Maybe<Todos_Aggregate_Fields>;
  nodes: Array<Todos>;
};

/** aggregate fields of "todos" */
export type Todos_Aggregate_Fields = {
  __typename: 'todos_aggregate_fields';
  avg: Maybe<Todos_Avg_Fields>;
  count: Maybe<Scalars['Int']>;
  max: Maybe<Todos_Max_Fields>;
  min: Maybe<Todos_Min_Fields>;
  stddev: Maybe<Todos_Stddev_Fields>;
  stddev_pop: Maybe<Todos_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Todos_Stddev_Samp_Fields>;
  sum: Maybe<Todos_Sum_Fields>;
  var_pop: Maybe<Todos_Var_Pop_Fields>;
  var_samp: Maybe<Todos_Var_Samp_Fields>;
  variance: Maybe<Todos_Variance_Fields>;
};


/** aggregate fields of "todos" */
export type Todos_Aggregate_FieldsCountArgs = {
  columns: Maybe<Array<Todos_Select_Column>>;
  distinct: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "todos" */
export type Todos_Aggregate_Order_By = {
  avg: Maybe<Todos_Avg_Order_By>;
  count: Maybe<Order_By>;
  max: Maybe<Todos_Max_Order_By>;
  min: Maybe<Todos_Min_Order_By>;
  stddev: Maybe<Todos_Stddev_Order_By>;
  stddev_pop: Maybe<Todos_Stddev_Pop_Order_By>;
  stddev_samp: Maybe<Todos_Stddev_Samp_Order_By>;
  sum: Maybe<Todos_Sum_Order_By>;
  var_pop: Maybe<Todos_Var_Pop_Order_By>;
  var_samp: Maybe<Todos_Var_Samp_Order_By>;
  variance: Maybe<Todos_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "todos" */
export type Todos_Arr_Rel_Insert_Input = {
  data: Array<Todos_Insert_Input>;
  on_conflict: Maybe<Todos_On_Conflict>;
};

/** aggregate avg on columns */
export type Todos_Avg_Fields = {
  __typename: 'todos_avg_fields';
  workload: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "todos" */
export type Todos_Avg_Order_By = {
  workload: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "todos". All fields are combined with a logical 'AND'. */
export type Todos_Bool_Exp = {
  _and: Maybe<Array<Maybe<Todos_Bool_Exp>>>;
  _not: Maybe<Todos_Bool_Exp>;
  _or: Maybe<Array<Maybe<Todos_Bool_Exp>>>;
  category_by_id: Maybe<Categories_Bool_Exp>;
  category_id: Maybe<Uuid_Comparison_Exp>;
  completed_at: Maybe<Timestamptz_Comparison_Exp>;
  created_at: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at: Maybe<Timestamptz_Comparison_Exp>;
  id: Maybe<String_Comparison_Exp>;
  isCompleted: Maybe<Boolean_Comparison_Exp>;
  isToday: Maybe<Boolean_Comparison_Exp>;
  title: Maybe<String_Comparison_Exp>;
  urgency: Maybe<Urgency_Enum_Comparison_Exp>;
  urgency_enum: Maybe<Urgency_Bool_Exp>;
  user_by_id: Maybe<Users_Bool_Exp>;
  workload: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "todos" */
export type Todos_Constraint = 
  /** unique or primary key constraint */
  | 'todo_pkey';

/** input type for incrementing integer column in table "todos" */
export type Todos_Inc_Input = {
  workload: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "todos" */
export type Todos_Insert_Input = {
  category_by_id: Maybe<Categories_Obj_Rel_Insert_Input>;
  category_id: Maybe<Scalars['uuid']>;
  isCompleted: Maybe<Scalars['Boolean']>;
  isToday: Maybe<Scalars['Boolean']>;
  title: Maybe<Scalars['String']>;
  urgency: Maybe<Urgency_Enum>;
  user_by_id: Maybe<Users_Obj_Rel_Insert_Input>;
  workload: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Todos_Max_Fields = {
  __typename: 'todos_max_fields';
  category_id: Maybe<Scalars['uuid']>;
  completed_at: Maybe<Scalars['timestamptz']>;
  created_at: Maybe<Scalars['timestamptz']>;
  deleted_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  workload: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "todos" */
export type Todos_Max_Order_By = {
  category_id: Maybe<Order_By>;
  completed_at: Maybe<Order_By>;
  created_at: Maybe<Order_By>;
  deleted_at: Maybe<Order_By>;
  id: Maybe<Order_By>;
  title: Maybe<Order_By>;
  workload: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Todos_Min_Fields = {
  __typename: 'todos_min_fields';
  category_id: Maybe<Scalars['uuid']>;
  completed_at: Maybe<Scalars['timestamptz']>;
  created_at: Maybe<Scalars['timestamptz']>;
  deleted_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  workload: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "todos" */
export type Todos_Min_Order_By = {
  category_id: Maybe<Order_By>;
  completed_at: Maybe<Order_By>;
  created_at: Maybe<Order_By>;
  deleted_at: Maybe<Order_By>;
  id: Maybe<Order_By>;
  title: Maybe<Order_By>;
  workload: Maybe<Order_By>;
};

/** response of any mutation on the table "todos" */
export type Todos_Mutation_Response = {
  __typename: 'todos_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Todos>;
};

/** input type for inserting object relation for remote table "todos" */
export type Todos_Obj_Rel_Insert_Input = {
  data: Todos_Insert_Input;
  on_conflict: Maybe<Todos_On_Conflict>;
};

/** on conflict condition type for table "todos" */
export type Todos_On_Conflict = {
  constraint: Todos_Constraint;
  update_columns: Array<Todos_Update_Column>;
  where: Maybe<Todos_Bool_Exp>;
};

/** ordering options when selecting data from "todos" */
export type Todos_Order_By = {
  category_by_id: Maybe<Categories_Order_By>;
  category_id: Maybe<Order_By>;
  completed_at: Maybe<Order_By>;
  created_at: Maybe<Order_By>;
  deleted_at: Maybe<Order_By>;
  id: Maybe<Order_By>;
  isCompleted: Maybe<Order_By>;
  isToday: Maybe<Order_By>;
  title: Maybe<Order_By>;
  urgency: Maybe<Order_By>;
  urgency_enum: Maybe<Urgency_Order_By>;
  user_by_id: Maybe<Users_Order_By>;
  workload: Maybe<Order_By>;
};

/** primary key columns input for table: "todos" */
export type Todos_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "todos" */
export type Todos_Select_Column = 
  /** column name */
  | 'category_id'
  /** column name */
  | 'completed_at'
  /** column name */
  | 'created_at'
  /** column name */
  | 'deleted_at'
  /** column name */
  | 'id'
  /** column name */
  | 'isCompleted'
  /** column name */
  | 'isToday'
  /** column name */
  | 'title'
  /** column name */
  | 'urgency'
  /** column name */
  | 'workload';

/** input type for updating data in table "todos" */
export type Todos_Set_Input = {
  category_id: Maybe<Scalars['uuid']>;
  completed_at: Maybe<Scalars['timestamptz']>;
  deleted_at: Maybe<Scalars['timestamptz']>;
  isCompleted: Maybe<Scalars['Boolean']>;
  isToday: Maybe<Scalars['Boolean']>;
  title: Maybe<Scalars['String']>;
  urgency: Maybe<Urgency_Enum>;
  workload: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Todos_Stddev_Fields = {
  __typename: 'todos_stddev_fields';
  workload: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "todos" */
export type Todos_Stddev_Order_By = {
  workload: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Todos_Stddev_Pop_Fields = {
  __typename: 'todos_stddev_pop_fields';
  workload: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "todos" */
export type Todos_Stddev_Pop_Order_By = {
  workload: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Todos_Stddev_Samp_Fields = {
  __typename: 'todos_stddev_samp_fields';
  workload: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "todos" */
export type Todos_Stddev_Samp_Order_By = {
  workload: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Todos_Sum_Fields = {
  __typename: 'todos_sum_fields';
  workload: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "todos" */
export type Todos_Sum_Order_By = {
  workload: Maybe<Order_By>;
};

/** update columns of table "todos" */
export type Todos_Update_Column = 
  /** column name */
  | 'category_id'
  /** column name */
  | 'completed_at'
  /** column name */
  | 'deleted_at'
  /** column name */
  | 'isCompleted'
  /** column name */
  | 'isToday'
  /** column name */
  | 'title'
  /** column name */
  | 'urgency'
  /** column name */
  | 'workload';

/** aggregate var_pop on columns */
export type Todos_Var_Pop_Fields = {
  __typename: 'todos_var_pop_fields';
  workload: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "todos" */
export type Todos_Var_Pop_Order_By = {
  workload: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Todos_Var_Samp_Fields = {
  __typename: 'todos_var_samp_fields';
  workload: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "todos" */
export type Todos_Var_Samp_Order_By = {
  workload: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Todos_Variance_Fields = {
  __typename: 'todos_variance_fields';
  workload: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "todos" */
export type Todos_Variance_Order_By = {
  workload: Maybe<Order_By>;
};

/** columns and relationships of "urgency" */
export type Urgency = {
  __typename: 'urgency';
  id: Maybe<Scalars['String']>;
  /** An array relationship */
  todos_by_urgency: Array<Todos>;
  /** An aggregated array relationship */
  todos_by_urgency_aggregate: Todos_Aggregate;
  urgency_type: Scalars['String'];
};


/** columns and relationships of "urgency" */
export type UrgencyTodos_By_UrgencyArgs = {
  distinct_on: Maybe<Array<Todos_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Todos_Order_By>>;
  where: Maybe<Todos_Bool_Exp>;
};


/** columns and relationships of "urgency" */
export type UrgencyTodos_By_Urgency_AggregateArgs = {
  distinct_on: Maybe<Array<Todos_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Todos_Order_By>>;
  where: Maybe<Todos_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "urgency". All fields are combined with a logical 'AND'. */
export type Urgency_Bool_Exp = {
  _and: Maybe<Array<Maybe<Urgency_Bool_Exp>>>;
  _not: Maybe<Urgency_Bool_Exp>;
  _or: Maybe<Array<Maybe<Urgency_Bool_Exp>>>;
  id: Maybe<String_Comparison_Exp>;
  todos_by_urgency: Maybe<Todos_Bool_Exp>;
  urgency_type: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "urgency" */
export type Urgency_Constraint = 
  /** unique or primary key constraint */
  | 'urgency_id_key'
  /** unique or primary key constraint */
  | 'urgency_pkey';

export type Urgency_Enum = 
  /** 2 */
  | 'month'
  /** 1 */
  | 'week'
  /** 3 */
  | 'year';

/** expression to compare columns of type urgency_enum. All fields are combined with logical 'AND'. */
export type Urgency_Enum_Comparison_Exp = {
  _eq: Maybe<Urgency_Enum>;
  _in: Maybe<Array<Urgency_Enum>>;
  _is_null: Maybe<Scalars['Boolean']>;
  _neq: Maybe<Urgency_Enum>;
  _nin: Maybe<Array<Urgency_Enum>>;
};

/** response of any mutation on the table "urgency" */
export type Urgency_Mutation_Response = {
  __typename: 'urgency_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Urgency>;
};

/** on conflict condition type for table "urgency" */
export type Urgency_On_Conflict = {
  constraint: Urgency_Constraint;
  update_columns: Array<Urgency_Update_Column>;
  where: Maybe<Urgency_Bool_Exp>;
};

/** ordering options when selecting data from "urgency" */
export type Urgency_Order_By = {
  id: Maybe<Order_By>;
  todos_by_urgency_aggregate: Maybe<Todos_Aggregate_Order_By>;
  urgency_type: Maybe<Order_By>;
};

/** primary key columns input for table: "urgency" */
export type Urgency_Pk_Columns_Input = {
  urgency_type: Scalars['String'];
};

/** select columns of table "urgency" */
export type Urgency_Select_Column = 
  /** column name */
  | 'id'
  /** column name */
  | 'urgency_type';

/** input type for updating data in table "urgency" */
export type Urgency_Set_Input = {
  id: Maybe<Scalars['String']>;
  urgency_type: Maybe<Scalars['String']>;
};

/** update columns of table "urgency" */
export type Urgency_Update_Column = 
  /** column name */
  | 'id'
  /** column name */
  | 'urgency_type';

/** columns and relationships of "users" */
export type Users = {
  __typename: 'users';
  color_type: ColorTypes_Enum;
  /** An object relationship */
  color_type_enum: ColorTypes;
  id: Scalars['String'];
  message: Maybe<Scalars['String']>;
  nickname: Scalars['String'];
  /** An array relationship */
  todos_by_user: Array<Todos>;
  /** An aggregated array relationship */
  todos_by_user_aggregate: Todos_Aggregate;
  /** An array relationship */
  user_by_id: Array<Categories>;
};


/** columns and relationships of "users" */
export type UsersTodos_By_UserArgs = {
  distinct_on: Maybe<Array<Todos_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Todos_Order_By>>;
  where: Maybe<Todos_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersTodos_By_User_AggregateArgs = {
  distinct_on: Maybe<Array<Todos_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Todos_Order_By>>;
  where: Maybe<Todos_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUser_By_IdArgs = {
  distinct_on: Maybe<Array<Categories_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<Categories_Order_By>>;
  where: Maybe<Categories_Bool_Exp>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict: Maybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not: Maybe<Users_Bool_Exp>;
  _or: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  color_type: Maybe<ColorTypes_Enum_Comparison_Exp>;
  color_type_enum: Maybe<ColorTypes_Bool_Exp>;
  id: Maybe<String_Comparison_Exp>;
  message: Maybe<String_Comparison_Exp>;
  nickname: Maybe<String_Comparison_Exp>;
  todos_by_user: Maybe<Todos_Bool_Exp>;
  user_by_id: Maybe<Categories_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export type Users_Constraint = 
  /** unique or primary key constraint */
  | 'users_pkey';

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  color_type: Maybe<ColorTypes_Enum>;
  id: Maybe<Scalars['String']>;
  message: Maybe<Scalars['String']>;
  nickname: Maybe<Scalars['String']>;
  todos_by_user: Maybe<Todos_Arr_Rel_Insert_Input>;
  user_by_id: Maybe<Categories_Arr_Rel_Insert_Input>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  color_type: Maybe<Order_By>;
  color_type_enum: Maybe<ColorTypes_Order_By>;
  id: Maybe<Order_By>;
  message: Maybe<Order_By>;
  nickname: Maybe<Order_By>;
  todos_by_user_aggregate: Maybe<Todos_Aggregate_Order_By>;
};

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "users" */
export type Users_Select_Column = 
  /** column name */
  | 'color_type'
  /** column name */
  | 'id'
  /** column name */
  | 'message'
  /** column name */
  | 'nickname';

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  color_type: Maybe<ColorTypes_Enum>;
  id: Maybe<Scalars['String']>;
  message: Maybe<Scalars['String']>;
  nickname: Maybe<Scalars['String']>;
};

/** update columns of table "users" */
export type Users_Update_Column = 
  /** column name */
  | 'color_type'
  /** column name */
  | 'id'
  /** column name */
  | 'message'
  /** column name */
  | 'nickname';


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq: Maybe<Scalars['uuid']>;
  _gt: Maybe<Scalars['uuid']>;
  _gte: Maybe<Scalars['uuid']>;
  _in: Maybe<Array<Scalars['uuid']>>;
  _is_null: Maybe<Scalars['Boolean']>;
  _lt: Maybe<Scalars['uuid']>;
  _lte: Maybe<Scalars['uuid']>;
  _neq: Maybe<Scalars['uuid']>;
  _nin: Maybe<Array<Scalars['uuid']>>;
};

export type InsertCategoryMutationVariables = Exact<{
  category?: Maybe<Scalars['String']>;
}>;


export type InsertCategoryMutation = (
  { __typename: 'mutation_root' }
  & { insert_categories: Maybe<(
    { __typename: 'categories_mutation_response' }
    & { returning: Array<(
      { __typename: 'categories' }
      & Pick<Categories, 'category' | 'id'>
    )> }
  )> }
);

export type UpdateCategoryMutationVariables = Exact<{
  id: Scalars['uuid'];
  category: Maybe<Scalars['String']>;
}>;


export type UpdateCategoryMutation = (
  { __typename: 'mutation_root' }
  & { update_categories_by_pk: Maybe<(
    { __typename: 'categories' }
    & Pick<Categories, 'id' | 'category'>
  )> }
);

export type DeleteCategoryMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteCategoryMutation = (
  { __typename: 'mutation_root' }
  & { update_categories_by_pk: Maybe<(
    { __typename: 'categories' }
    & Pick<Categories, 'id' | 'category'>
  )> }
);

export type SeedDataCategoryMutationVariables = Exact<{ [key: string]: never; }>;


export type SeedDataCategoryMutation = (
  { __typename: 'mutation_root' }
  & { insert_categories: Maybe<(
    { __typename: 'categories_mutation_response' }
    & { returning: Array<(
      { __typename: 'categories' }
      & Pick<Categories, 'id'>
    )> }
  )> }
);

export type SeedDataTodoMutationVariables = Exact<{
  category_id_work: Maybe<Scalars['uuid']>;
  category_id_private: Maybe<Scalars['uuid']>;
}>;


export type SeedDataTodoMutation = (
  { __typename: 'mutation_root' }
  & { insert_todos: Maybe<(
    { __typename: 'todos_mutation_response' }
    & { returning: Array<(
      { __typename: 'todos' }
      & Pick<Todos, 'id'>
    )> }
  )> }
);

export type InsertToDoMutationVariables = Exact<{
  title?: Maybe<Scalars['String']>;
  urgency?: Maybe<Urgency_Enum>;
  workload?: Maybe<Scalars['Int']>;
  isToday?: Maybe<Scalars['Boolean']>;
  isCompleted?: Maybe<Scalars['Boolean']>;
  category_id: Maybe<Scalars['uuid']>;
}>;


export type InsertToDoMutation = (
  { __typename: 'mutation_root' }
  & { insert_todos_one: Maybe<(
    { __typename: 'todos' }
    & Pick<Todos, 'id'>
  )> }
);

export type UpdateTodoMutationVariables = Exact<{
  id: Scalars['String'];
  title: Maybe<Scalars['String']>;
  urgency: Maybe<Urgency_Enum>;
  workload: Maybe<Scalars['Int']>;
  category_id: Maybe<Scalars['uuid']>;
}>;


export type UpdateTodoMutation = (
  { __typename: 'mutation_root' }
  & { update_todos_by_pk: Maybe<(
    { __typename: 'todos' }
    & Pick<Todos, 'id'>
  )> }
);

export type CompleteToDoMutationVariables = Exact<{
  _eq: Scalars['String'];
}>;


export type CompleteToDoMutation = (
  { __typename: 'mutation_root' }
  & { update_todos: Maybe<(
    { __typename: 'todos_mutation_response' }
    & Pick<Todos_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename: 'todos' }
      & Pick<Todos, 'id'>
    )> }
  )> }
);

export type DeleteToDoMutationVariables = Exact<{
  _eq: Scalars['String'];
}>;


export type DeleteToDoMutation = (
  { __typename: 'mutation_root' }
  & { update_todos: Maybe<(
    { __typename: 'todos_mutation_response' }
    & Pick<Todos_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename: 'todos' }
      & Pick<Todos, 'id'>
    )> }
  )> }
);

export type SetTodayTodoMutationVariables = Exact<{
  _eq: Scalars['String'];
}>;


export type SetTodayTodoMutation = (
  { __typename: 'mutation_root' }
  & { update_todos: Maybe<(
    { __typename: 'todos_mutation_response' }
    & Pick<Todos_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename: 'todos' }
      & Pick<Todos, 'id'>
    )> }
  )> }
);

export type SetNotTodayTodoMutationVariables = Exact<{
  _eq: Scalars['String'];
}>;


export type SetNotTodayTodoMutation = (
  { __typename: 'mutation_root' }
  & { update_todos: Maybe<(
    { __typename: 'todos_mutation_response' }
    & Pick<Todos_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename: 'todos' }
      & Pick<Todos, 'id'>
    )> }
  )> }
);

export type RestoreNotTodayMutationVariables = Exact<{
  _eq: Scalars['String'];
}>;


export type RestoreNotTodayMutation = (
  { __typename: 'mutation_root' }
  & { update_todos: Maybe<(
    { __typename: 'todos_mutation_response' }
    & Pick<Todos_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename: 'todos' }
      & Pick<Todos, 'id'>
    )> }
  )> }
);

export type RestoreTodayMutationVariables = Exact<{
  _eq: Scalars['String'];
}>;


export type RestoreTodayMutation = (
  { __typename: 'mutation_root' }
  & { update_todos: Maybe<(
    { __typename: 'todos_mutation_response' }
    & Pick<Todos_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename: 'todos' }
      & Pick<Todos, 'id'>
    )> }
  )> }
);

export type UpdateColorTypeMutationVariables = Exact<{
  color_type: Maybe<ColorTypes_Enum>;
  _eq: Maybe<Scalars['String']>;
}>;


export type UpdateColorTypeMutation = (
  { __typename: 'mutation_root' }
  & { update_users: Maybe<(
    { __typename: 'users_mutation_response' }
    & Pick<Users_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename: 'users' }
      & Pick<Users, 'id' | 'color_type'>
    )> }
  )> }
);

export type UpdateUserMessageMutationVariables = Exact<{
  message: Maybe<Scalars['String']>;
  _eq: Maybe<Scalars['String']>;
}>;


export type UpdateUserMessageMutation = (
  { __typename: 'mutation_root' }
  & { update_users: Maybe<(
    { __typename: 'users_mutation_response' }
    & Pick<Users_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename: 'users' }
      & Pick<Users, 'id' | 'message'>
    )> }
  )> }
);

export type AllCategoryQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCategoryQuery = (
  { __typename: 'query_root' }
  & { categories: Array<(
    { __typename: 'categories' }
    & Pick<Categories, 'category' | 'id'>
  )> }
);

export type GetAllTodosQueryVariables = Exact<{
  created_at?: Maybe<Order_By>;
  urgency?: Maybe<Order_By>;
  workload?: Maybe<Order_By>;
  _in: Maybe<Array<Scalars['uuid']>>;
}>;


export type GetAllTodosQuery = (
  { __typename: 'query_root' }
  & { todos: Array<(
    { __typename: 'todos' }
    & Pick<Todos, 'id' | 'title' | 'urgency' | 'workload' | 'isCompleted' | 'isToday' | 'category_id'>
  )> }
);

export type TodayTodosQueryVariables = Exact<{
  created_at?: Maybe<Order_By>;
  urgency?: Maybe<Order_By>;
  workload?: Maybe<Order_By>;
  _in: Maybe<Array<Scalars['uuid']>>;
}>;


export type TodayTodosQuery = (
  { __typename: 'query_root' }
  & { todos: Array<(
    { __typename: 'todos' }
    & Pick<Todos, 'id' | 'title' | 'urgency' | 'workload' | 'isCompleted' | 'isToday' | 'category_id'>
  )> }
);

export type NotTodayTodosQueryVariables = Exact<{
  created_at?: Maybe<Order_By>;
  urgency?: Maybe<Order_By>;
  workload?: Maybe<Order_By>;
  _in: Maybe<Array<Scalars['uuid']>>;
}>;


export type NotTodayTodosQuery = (
  { __typename: 'query_root' }
  & { todos: Array<(
    { __typename: 'todos' }
    & Pick<Todos, 'id' | 'title' | 'urgency' | 'workload' | 'isToday' | 'isCompleted' | 'category_id'>
  )> }
);

export type CompletedTodosQueryVariables = Exact<{
  created_at?: Maybe<Order_By>;
  urgency?: Maybe<Order_By>;
  workload?: Maybe<Order_By>;
  _in: Maybe<Array<Scalars['uuid']>>;
}>;


export type CompletedTodosQuery = (
  { __typename: 'query_root' }
  & { todos: Array<(
    { __typename: 'todos' }
    & Pick<Todos, 'id' | 'title' | 'urgency' | 'workload' | 'isToday' | 'isCompleted' | 'category_id'>
  )> }
);

export type GetAccomplishmentAndMessageQueryVariables = Exact<{
  _gte1: Maybe<Scalars['timestamptz']>;
  _gte2: Maybe<Scalars['timestamptz']>;
  _gte3: Maybe<Scalars['timestamptz']>;
}>;


export type GetAccomplishmentAndMessageQuery = (
  { __typename: 'query_root' }
  & { week: (
    { __typename: 'todos_aggregate' }
    & { aggregate: Maybe<(
      { __typename: 'todos_aggregate_fields' }
      & Pick<Todos_Aggregate_Fields, 'count'>
    )> }
  ), month: (
    { __typename: 'todos_aggregate' }
    & { aggregate: Maybe<(
      { __typename: 'todos_aggregate_fields' }
      & Pick<Todos_Aggregate_Fields, 'count'>
    )> }
  ), year: (
    { __typename: 'todos_aggregate' }
    & { aggregate: Maybe<(
      { __typename: 'todos_aggregate_fields' }
      & Pick<Todos_Aggregate_Fields, 'count'>
    )> }
  ), users: Array<(
    { __typename: 'users' }
    & Pick<Users, 'message'>
  )> }
);

export type GetColorTypeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetColorTypeQuery = (
  { __typename: 'query_root' }
  & { users: Array<(
    { __typename: 'users' }
    & Pick<Users, 'id' | 'color_type' | 'message'>
  )> }
);

export type GetUserMessageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserMessageQuery = (
  { __typename: 'query_root' }
  & { users: Array<(
    { __typename: 'users' }
    & Pick<Users, 'id' | 'message'>
  )> }
);


export const InsertCategoryDocument = gql`
    mutation InsertCategory($category: String = "") {
  insert_categories(objects: {category: $category}) {
    returning {
      category
      id
    }
  }
}
    `;
export type InsertCategoryMutationFn = Apollo.MutationFunction<InsertCategoryMutation, InsertCategoryMutationVariables>;

/**
 * __useInsertCategoryMutation__
 *
 * To run a mutation, you first call `useInsertCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertCategoryMutation, { data, loading, error }] = useInsertCategoryMutation({
 *   variables: {
 *      category: // value for 'category'
 *   },
 * });
 */
export function useInsertCategoryMutation(baseOptions?: Apollo.MutationHookOptions<InsertCategoryMutation, InsertCategoryMutationVariables>) {
        return Apollo.useMutation<InsertCategoryMutation, InsertCategoryMutationVariables>(InsertCategoryDocument, baseOptions);
      }
export type InsertCategoryMutationHookResult = ReturnType<typeof useInsertCategoryMutation>;
export type InsertCategoryMutationResult = Apollo.MutationResult<InsertCategoryMutation>;
export type InsertCategoryMutationOptions = Apollo.BaseMutationOptions<InsertCategoryMutation, InsertCategoryMutationVariables>;
export const UpdateCategoryDocument = gql`
    mutation UpdateCategory($id: uuid!, $category: String) {
  update_categories_by_pk(pk_columns: {id: $id}, _set: {category: $category}) {
    id
    category
  }
}
    `;
export type UpdateCategoryMutationFn = Apollo.MutationFunction<UpdateCategoryMutation, UpdateCategoryMutationVariables>;

/**
 * __useUpdateCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCategoryMutation, { data, loading, error }] = useUpdateCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *      category: // value for 'category'
 *   },
 * });
 */
export function useUpdateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>) {
        return Apollo.useMutation<UpdateCategoryMutation, UpdateCategoryMutationVariables>(UpdateCategoryDocument, baseOptions);
      }
export type UpdateCategoryMutationHookResult = ReturnType<typeof useUpdateCategoryMutation>;
export type UpdateCategoryMutationResult = Apollo.MutationResult<UpdateCategoryMutation>;
export type UpdateCategoryMutationOptions = Apollo.BaseMutationOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>;
export const DeleteCategoryDocument = gql`
    mutation DeleteCategory($id: uuid!) {
  update_categories_by_pk(pk_columns: {id: $id}, _set: {deleted_at: "now()"}) {
    id
    category
  }
}
    `;
export type DeleteCategoryMutationFn = Apollo.MutationFunction<DeleteCategoryMutation, DeleteCategoryMutationVariables>;

/**
 * __useDeleteCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCategoryMutation, { data, loading, error }] = useDeleteCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCategoryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCategoryMutation, DeleteCategoryMutationVariables>) {
        return Apollo.useMutation<DeleteCategoryMutation, DeleteCategoryMutationVariables>(DeleteCategoryDocument, baseOptions);
      }
export type DeleteCategoryMutationHookResult = ReturnType<typeof useDeleteCategoryMutation>;
export type DeleteCategoryMutationResult = Apollo.MutationResult<DeleteCategoryMutation>;
export type DeleteCategoryMutationOptions = Apollo.BaseMutationOptions<DeleteCategoryMutation, DeleteCategoryMutationVariables>;
export const SeedDataCategoryDocument = gql`
    mutation SeedDataCategory {
  insert_categories(objects: [{category: "仕事"}, {category: "プライベート"}]) {
    returning {
      id
    }
  }
}
    `;
export type SeedDataCategoryMutationFn = Apollo.MutationFunction<SeedDataCategoryMutation, SeedDataCategoryMutationVariables>;

/**
 * __useSeedDataCategoryMutation__
 *
 * To run a mutation, you first call `useSeedDataCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSeedDataCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [seedDataCategoryMutation, { data, loading, error }] = useSeedDataCategoryMutation({
 *   variables: {
 *   },
 * });
 */
export function useSeedDataCategoryMutation(baseOptions?: Apollo.MutationHookOptions<SeedDataCategoryMutation, SeedDataCategoryMutationVariables>) {
        return Apollo.useMutation<SeedDataCategoryMutation, SeedDataCategoryMutationVariables>(SeedDataCategoryDocument, baseOptions);
      }
export type SeedDataCategoryMutationHookResult = ReturnType<typeof useSeedDataCategoryMutation>;
export type SeedDataCategoryMutationResult = Apollo.MutationResult<SeedDataCategoryMutation>;
export type SeedDataCategoryMutationOptions = Apollo.BaseMutationOptions<SeedDataCategoryMutation, SeedDataCategoryMutationVariables>;
export const SeedDataTodoDocument = gql`
    mutation SeedDataTodo($category_id_work: uuid, $category_id_private: uuid) {
  insert_todos(objects: [{title: "例) 第一四半期決算の締め処理", urgency: week, workload: 5, isToday: true, isCompleted: false, category_id: $category_id_work}, {title: "例) ケーキを買って帰る", urgency: week, workload: 1, isToday: true, isCompleted: false, category_id: $category_id_private}]) {
    returning {
      id
    }
  }
}
    `;
export type SeedDataTodoMutationFn = Apollo.MutationFunction<SeedDataTodoMutation, SeedDataTodoMutationVariables>;

/**
 * __useSeedDataTodoMutation__
 *
 * To run a mutation, you first call `useSeedDataTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSeedDataTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [seedDataTodoMutation, { data, loading, error }] = useSeedDataTodoMutation({
 *   variables: {
 *      category_id_work: // value for 'category_id_work'
 *      category_id_private: // value for 'category_id_private'
 *   },
 * });
 */
export function useSeedDataTodoMutation(baseOptions?: Apollo.MutationHookOptions<SeedDataTodoMutation, SeedDataTodoMutationVariables>) {
        return Apollo.useMutation<SeedDataTodoMutation, SeedDataTodoMutationVariables>(SeedDataTodoDocument, baseOptions);
      }
export type SeedDataTodoMutationHookResult = ReturnType<typeof useSeedDataTodoMutation>;
export type SeedDataTodoMutationResult = Apollo.MutationResult<SeedDataTodoMutation>;
export type SeedDataTodoMutationOptions = Apollo.BaseMutationOptions<SeedDataTodoMutation, SeedDataTodoMutationVariables>;
export const InsertToDoDocument = gql`
    mutation InsertToDo($title: String = "", $urgency: urgency_enum = month, $workload: Int = 1, $isToday: Boolean = true, $isCompleted: Boolean = false, $category_id: uuid) {
  insert_todos_one(object: {isCompleted: $isCompleted, isToday: $isToday, title: $title, urgency: $urgency, workload: $workload, category_id: $category_id}) {
    __typename
    id
  }
}
    `;
export type InsertToDoMutationFn = Apollo.MutationFunction<InsertToDoMutation, InsertToDoMutationVariables>;

/**
 * __useInsertToDoMutation__
 *
 * To run a mutation, you first call `useInsertToDoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertToDoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertToDoMutation, { data, loading, error }] = useInsertToDoMutation({
 *   variables: {
 *      title: // value for 'title'
 *      urgency: // value for 'urgency'
 *      workload: // value for 'workload'
 *      isToday: // value for 'isToday'
 *      isCompleted: // value for 'isCompleted'
 *      category_id: // value for 'category_id'
 *   },
 * });
 */
export function useInsertToDoMutation(baseOptions?: Apollo.MutationHookOptions<InsertToDoMutation, InsertToDoMutationVariables>) {
        return Apollo.useMutation<InsertToDoMutation, InsertToDoMutationVariables>(InsertToDoDocument, baseOptions);
      }
export type InsertToDoMutationHookResult = ReturnType<typeof useInsertToDoMutation>;
export type InsertToDoMutationResult = Apollo.MutationResult<InsertToDoMutation>;
export type InsertToDoMutationOptions = Apollo.BaseMutationOptions<InsertToDoMutation, InsertToDoMutationVariables>;
export const UpdateTodoDocument = gql`
    mutation UpdateTodo($id: String!, $title: String, $urgency: urgency_enum, $workload: Int, $category_id: uuid) {
  update_todos_by_pk(pk_columns: {id: $id}, _set: {urgency: $urgency, workload: $workload, title: $title, category_id: $category_id}) {
    id
  }
}
    `;
export type UpdateTodoMutationFn = Apollo.MutationFunction<UpdateTodoMutation, UpdateTodoMutationVariables>;

/**
 * __useUpdateTodoMutation__
 *
 * To run a mutation, you first call `useUpdateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTodoMutation, { data, loading, error }] = useUpdateTodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      urgency: // value for 'urgency'
 *      workload: // value for 'workload'
 *      category_id: // value for 'category_id'
 *   },
 * });
 */
export function useUpdateTodoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTodoMutation, UpdateTodoMutationVariables>) {
        return Apollo.useMutation<UpdateTodoMutation, UpdateTodoMutationVariables>(UpdateTodoDocument, baseOptions);
      }
export type UpdateTodoMutationHookResult = ReturnType<typeof useUpdateTodoMutation>;
export type UpdateTodoMutationResult = Apollo.MutationResult<UpdateTodoMutation>;
export type UpdateTodoMutationOptions = Apollo.BaseMutationOptions<UpdateTodoMutation, UpdateTodoMutationVariables>;
export const CompleteToDoDocument = gql`
    mutation CompleteToDo($_eq: String!) {
  update_todos(where: {id: {_eq: $_eq}}, _set: {isCompleted: true, completed_at: "now()"}) {
    affected_rows
    returning {
      id
    }
  }
}
    `;
export type CompleteToDoMutationFn = Apollo.MutationFunction<CompleteToDoMutation, CompleteToDoMutationVariables>;

/**
 * __useCompleteToDoMutation__
 *
 * To run a mutation, you first call `useCompleteToDoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCompleteToDoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [completeToDoMutation, { data, loading, error }] = useCompleteToDoMutation({
 *   variables: {
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useCompleteToDoMutation(baseOptions?: Apollo.MutationHookOptions<CompleteToDoMutation, CompleteToDoMutationVariables>) {
        return Apollo.useMutation<CompleteToDoMutation, CompleteToDoMutationVariables>(CompleteToDoDocument, baseOptions);
      }
export type CompleteToDoMutationHookResult = ReturnType<typeof useCompleteToDoMutation>;
export type CompleteToDoMutationResult = Apollo.MutationResult<CompleteToDoMutation>;
export type CompleteToDoMutationOptions = Apollo.BaseMutationOptions<CompleteToDoMutation, CompleteToDoMutationVariables>;
export const DeleteToDoDocument = gql`
    mutation DeleteToDo($_eq: String!) {
  update_todos(where: {id: {_eq: $_eq}}, _set: {deleted_at: "now()"}) {
    affected_rows
    returning {
      id
    }
  }
}
    `;
export type DeleteToDoMutationFn = Apollo.MutationFunction<DeleteToDoMutation, DeleteToDoMutationVariables>;

/**
 * __useDeleteToDoMutation__
 *
 * To run a mutation, you first call `useDeleteToDoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteToDoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteToDoMutation, { data, loading, error }] = useDeleteToDoMutation({
 *   variables: {
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useDeleteToDoMutation(baseOptions?: Apollo.MutationHookOptions<DeleteToDoMutation, DeleteToDoMutationVariables>) {
        return Apollo.useMutation<DeleteToDoMutation, DeleteToDoMutationVariables>(DeleteToDoDocument, baseOptions);
      }
export type DeleteToDoMutationHookResult = ReturnType<typeof useDeleteToDoMutation>;
export type DeleteToDoMutationResult = Apollo.MutationResult<DeleteToDoMutation>;
export type DeleteToDoMutationOptions = Apollo.BaseMutationOptions<DeleteToDoMutation, DeleteToDoMutationVariables>;
export const SetTodayTodoDocument = gql`
    mutation SetTodayTodo($_eq: String!) {
  update_todos(where: {id: {_eq: $_eq}}, _set: {isToday: true}) {
    affected_rows
    returning {
      id
    }
  }
}
    `;
export type SetTodayTodoMutationFn = Apollo.MutationFunction<SetTodayTodoMutation, SetTodayTodoMutationVariables>;

/**
 * __useSetTodayTodoMutation__
 *
 * To run a mutation, you first call `useSetTodayTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetTodayTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setTodayTodoMutation, { data, loading, error }] = useSetTodayTodoMutation({
 *   variables: {
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useSetTodayTodoMutation(baseOptions?: Apollo.MutationHookOptions<SetTodayTodoMutation, SetTodayTodoMutationVariables>) {
        return Apollo.useMutation<SetTodayTodoMutation, SetTodayTodoMutationVariables>(SetTodayTodoDocument, baseOptions);
      }
export type SetTodayTodoMutationHookResult = ReturnType<typeof useSetTodayTodoMutation>;
export type SetTodayTodoMutationResult = Apollo.MutationResult<SetTodayTodoMutation>;
export type SetTodayTodoMutationOptions = Apollo.BaseMutationOptions<SetTodayTodoMutation, SetTodayTodoMutationVariables>;
export const SetNotTodayTodoDocument = gql`
    mutation SetNotTodayTodo($_eq: String!) {
  update_todos(where: {id: {_eq: $_eq}}, _set: {isToday: false}) {
    affected_rows
    returning {
      id
    }
  }
}
    `;
export type SetNotTodayTodoMutationFn = Apollo.MutationFunction<SetNotTodayTodoMutation, SetNotTodayTodoMutationVariables>;

/**
 * __useSetNotTodayTodoMutation__
 *
 * To run a mutation, you first call `useSetNotTodayTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetNotTodayTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setNotTodayTodoMutation, { data, loading, error }] = useSetNotTodayTodoMutation({
 *   variables: {
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useSetNotTodayTodoMutation(baseOptions?: Apollo.MutationHookOptions<SetNotTodayTodoMutation, SetNotTodayTodoMutationVariables>) {
        return Apollo.useMutation<SetNotTodayTodoMutation, SetNotTodayTodoMutationVariables>(SetNotTodayTodoDocument, baseOptions);
      }
export type SetNotTodayTodoMutationHookResult = ReturnType<typeof useSetNotTodayTodoMutation>;
export type SetNotTodayTodoMutationResult = Apollo.MutationResult<SetNotTodayTodoMutation>;
export type SetNotTodayTodoMutationOptions = Apollo.BaseMutationOptions<SetNotTodayTodoMutation, SetNotTodayTodoMutationVariables>;
export const RestoreNotTodayDocument = gql`
    mutation RestoreNotToday($_eq: String!) {
  update_todos(where: {id: {_eq: $_eq}}, _set: {isCompleted: false, completed_at: null, isToday: false, deleted_at: null}) {
    affected_rows
    returning {
      id
    }
  }
}
    `;
export type RestoreNotTodayMutationFn = Apollo.MutationFunction<RestoreNotTodayMutation, RestoreNotTodayMutationVariables>;

/**
 * __useRestoreNotTodayMutation__
 *
 * To run a mutation, you first call `useRestoreNotTodayMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRestoreNotTodayMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [restoreNotTodayMutation, { data, loading, error }] = useRestoreNotTodayMutation({
 *   variables: {
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useRestoreNotTodayMutation(baseOptions?: Apollo.MutationHookOptions<RestoreNotTodayMutation, RestoreNotTodayMutationVariables>) {
        return Apollo.useMutation<RestoreNotTodayMutation, RestoreNotTodayMutationVariables>(RestoreNotTodayDocument, baseOptions);
      }
export type RestoreNotTodayMutationHookResult = ReturnType<typeof useRestoreNotTodayMutation>;
export type RestoreNotTodayMutationResult = Apollo.MutationResult<RestoreNotTodayMutation>;
export type RestoreNotTodayMutationOptions = Apollo.BaseMutationOptions<RestoreNotTodayMutation, RestoreNotTodayMutationVariables>;
export const RestoreTodayDocument = gql`
    mutation RestoreToday($_eq: String!) {
  update_todos(where: {id: {_eq: $_eq}}, _set: {isCompleted: false, completed_at: null, isToday: true, deleted_at: null}) {
    affected_rows
    returning {
      id
    }
  }
}
    `;
export type RestoreTodayMutationFn = Apollo.MutationFunction<RestoreTodayMutation, RestoreTodayMutationVariables>;

/**
 * __useRestoreTodayMutation__
 *
 * To run a mutation, you first call `useRestoreTodayMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRestoreTodayMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [restoreTodayMutation, { data, loading, error }] = useRestoreTodayMutation({
 *   variables: {
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useRestoreTodayMutation(baseOptions?: Apollo.MutationHookOptions<RestoreTodayMutation, RestoreTodayMutationVariables>) {
        return Apollo.useMutation<RestoreTodayMutation, RestoreTodayMutationVariables>(RestoreTodayDocument, baseOptions);
      }
export type RestoreTodayMutationHookResult = ReturnType<typeof useRestoreTodayMutation>;
export type RestoreTodayMutationResult = Apollo.MutationResult<RestoreTodayMutation>;
export type RestoreTodayMutationOptions = Apollo.BaseMutationOptions<RestoreTodayMutation, RestoreTodayMutationVariables>;
export const UpdateColorTypeDocument = gql`
    mutation UpdateColorType($color_type: colorTypes_enum, $_eq: String) {
  update_users(_set: {color_type: $color_type}, where: {id: {_eq: $_eq}}) {
    affected_rows
    returning {
      id
      color_type
    }
  }
}
    `;
export type UpdateColorTypeMutationFn = Apollo.MutationFunction<UpdateColorTypeMutation, UpdateColorTypeMutationVariables>;

/**
 * __useUpdateColorTypeMutation__
 *
 * To run a mutation, you first call `useUpdateColorTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateColorTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateColorTypeMutation, { data, loading, error }] = useUpdateColorTypeMutation({
 *   variables: {
 *      color_type: // value for 'color_type'
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useUpdateColorTypeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateColorTypeMutation, UpdateColorTypeMutationVariables>) {
        return Apollo.useMutation<UpdateColorTypeMutation, UpdateColorTypeMutationVariables>(UpdateColorTypeDocument, baseOptions);
      }
export type UpdateColorTypeMutationHookResult = ReturnType<typeof useUpdateColorTypeMutation>;
export type UpdateColorTypeMutationResult = Apollo.MutationResult<UpdateColorTypeMutation>;
export type UpdateColorTypeMutationOptions = Apollo.BaseMutationOptions<UpdateColorTypeMutation, UpdateColorTypeMutationVariables>;
export const UpdateUserMessageDocument = gql`
    mutation UpdateUserMessage($message: String, $_eq: String) {
  update_users(_set: {message: $message}, where: {id: {_eq: $_eq}}) {
    affected_rows
    returning {
      id
      message
    }
  }
}
    `;
export type UpdateUserMessageMutationFn = Apollo.MutationFunction<UpdateUserMessageMutation, UpdateUserMessageMutationVariables>;

/**
 * __useUpdateUserMessageMutation__
 *
 * To run a mutation, you first call `useUpdateUserMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMessageMutation, { data, loading, error }] = useUpdateUserMessageMutation({
 *   variables: {
 *      message: // value for 'message'
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useUpdateUserMessageMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMessageMutation, UpdateUserMessageMutationVariables>) {
        return Apollo.useMutation<UpdateUserMessageMutation, UpdateUserMessageMutationVariables>(UpdateUserMessageDocument, baseOptions);
      }
export type UpdateUserMessageMutationHookResult = ReturnType<typeof useUpdateUserMessageMutation>;
export type UpdateUserMessageMutationResult = Apollo.MutationResult<UpdateUserMessageMutation>;
export type UpdateUserMessageMutationOptions = Apollo.BaseMutationOptions<UpdateUserMessageMutation, UpdateUserMessageMutationVariables>;
export const AllCategoryDocument = gql`
    query AllCategory {
  categories {
    __typename
    category
    id
  }
}
    `;

/**
 * __useAllCategoryQuery__
 *
 * To run a query within a React component, call `useAllCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllCategoryQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllCategoryQuery(baseOptions?: Apollo.QueryHookOptions<AllCategoryQuery, AllCategoryQueryVariables>) {
        return Apollo.useQuery<AllCategoryQuery, AllCategoryQueryVariables>(AllCategoryDocument, baseOptions);
      }
export function useAllCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllCategoryQuery, AllCategoryQueryVariables>) {
          return Apollo.useLazyQuery<AllCategoryQuery, AllCategoryQueryVariables>(AllCategoryDocument, baseOptions);
        }
export type AllCategoryQueryHookResult = ReturnType<typeof useAllCategoryQuery>;
export type AllCategoryLazyQueryHookResult = ReturnType<typeof useAllCategoryLazyQuery>;
export type AllCategoryQueryResult = Apollo.QueryResult<AllCategoryQuery, AllCategoryQueryVariables>;
export const GetAllTodosDocument = gql`
    query GetAllTodos($created_at: order_by = null, $urgency: order_by = null, $workload: order_by = null, $_in: [uuid!]) {
  todos(where: {_and: {deleted_at: {_is_null: true}, category_id: {_in: $_in}}}, order_by: {created_at: $created_at, urgency: $urgency, workload: $workload}) {
    id
    title
    urgency
    workload
    isCompleted
    isToday
    category_id
  }
}
    `;

/**
 * __useGetAllTodosQuery__
 *
 * To run a query within a React component, call `useGetAllTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTodosQuery({
 *   variables: {
 *      created_at: // value for 'created_at'
 *      urgency: // value for 'urgency'
 *      workload: // value for 'workload'
 *      _in: // value for '_in'
 *   },
 * });
 */
export function useGetAllTodosQuery(baseOptions?: Apollo.QueryHookOptions<GetAllTodosQuery, GetAllTodosQueryVariables>) {
        return Apollo.useQuery<GetAllTodosQuery, GetAllTodosQueryVariables>(GetAllTodosDocument, baseOptions);
      }
export function useGetAllTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllTodosQuery, GetAllTodosQueryVariables>) {
          return Apollo.useLazyQuery<GetAllTodosQuery, GetAllTodosQueryVariables>(GetAllTodosDocument, baseOptions);
        }
export type GetAllTodosQueryHookResult = ReturnType<typeof useGetAllTodosQuery>;
export type GetAllTodosLazyQueryHookResult = ReturnType<typeof useGetAllTodosLazyQuery>;
export type GetAllTodosQueryResult = Apollo.QueryResult<GetAllTodosQuery, GetAllTodosQueryVariables>;
export const TodayTodosDocument = gql`
    query todayTodos($created_at: order_by = null, $urgency: order_by = null, $workload: order_by = null, $_in: [uuid!]) {
  todos(where: {_and: {isToday: {_eq: true}, isCompleted: {_eq: false}, deleted_at: {_is_null: true}, category_id: {_in: $_in}}}, order_by: {created_at: $created_at, urgency: $urgency, workload: $workload}) {
    id
    title
    urgency
    workload
    isCompleted
    isToday
    category_id
  }
}
    `;

/**
 * __useTodayTodosQuery__
 *
 * To run a query within a React component, call `useTodayTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodayTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodayTodosQuery({
 *   variables: {
 *      created_at: // value for 'created_at'
 *      urgency: // value for 'urgency'
 *      workload: // value for 'workload'
 *      _in: // value for '_in'
 *   },
 * });
 */
export function useTodayTodosQuery(baseOptions?: Apollo.QueryHookOptions<TodayTodosQuery, TodayTodosQueryVariables>) {
        return Apollo.useQuery<TodayTodosQuery, TodayTodosQueryVariables>(TodayTodosDocument, baseOptions);
      }
export function useTodayTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TodayTodosQuery, TodayTodosQueryVariables>) {
          return Apollo.useLazyQuery<TodayTodosQuery, TodayTodosQueryVariables>(TodayTodosDocument, baseOptions);
        }
export type TodayTodosQueryHookResult = ReturnType<typeof useTodayTodosQuery>;
export type TodayTodosLazyQueryHookResult = ReturnType<typeof useTodayTodosLazyQuery>;
export type TodayTodosQueryResult = Apollo.QueryResult<TodayTodosQuery, TodayTodosQueryVariables>;
export const NotTodayTodosDocument = gql`
    query notTodayTodos($created_at: order_by = null, $urgency: order_by = null, $workload: order_by = null, $_in: [uuid!]) {
  todos(where: {isToday: {_eq: false}, isCompleted: {_eq: false}, deleted_at: {_is_null: true}, category_id: {_in: $_in}}, order_by: {created_at: $created_at, urgency: $urgency, workload: $workload}) {
    id
    title
    urgency
    workload
    isToday
    isCompleted
    category_id
  }
}
    `;

/**
 * __useNotTodayTodosQuery__
 *
 * To run a query within a React component, call `useNotTodayTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useNotTodayTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNotTodayTodosQuery({
 *   variables: {
 *      created_at: // value for 'created_at'
 *      urgency: // value for 'urgency'
 *      workload: // value for 'workload'
 *      _in: // value for '_in'
 *   },
 * });
 */
export function useNotTodayTodosQuery(baseOptions?: Apollo.QueryHookOptions<NotTodayTodosQuery, NotTodayTodosQueryVariables>) {
        return Apollo.useQuery<NotTodayTodosQuery, NotTodayTodosQueryVariables>(NotTodayTodosDocument, baseOptions);
      }
export function useNotTodayTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NotTodayTodosQuery, NotTodayTodosQueryVariables>) {
          return Apollo.useLazyQuery<NotTodayTodosQuery, NotTodayTodosQueryVariables>(NotTodayTodosDocument, baseOptions);
        }
export type NotTodayTodosQueryHookResult = ReturnType<typeof useNotTodayTodosQuery>;
export type NotTodayTodosLazyQueryHookResult = ReturnType<typeof useNotTodayTodosLazyQuery>;
export type NotTodayTodosQueryResult = Apollo.QueryResult<NotTodayTodosQuery, NotTodayTodosQueryVariables>;
export const CompletedTodosDocument = gql`
    query completedTodos($created_at: order_by = null, $urgency: order_by = null, $workload: order_by = null, $_in: [uuid!]) {
  todos(where: {isCompleted: {_eq: true}, deleted_at: {_is_null: true}, category_id: {_in: $_in}}, order_by: {created_at: $created_at, urgency: $urgency, workload: $workload}) {
    id
    title
    urgency
    workload
    isToday
    isCompleted
    category_id
  }
}
    `;

/**
 * __useCompletedTodosQuery__
 *
 * To run a query within a React component, call `useCompletedTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useCompletedTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCompletedTodosQuery({
 *   variables: {
 *      created_at: // value for 'created_at'
 *      urgency: // value for 'urgency'
 *      workload: // value for 'workload'
 *      _in: // value for '_in'
 *   },
 * });
 */
export function useCompletedTodosQuery(baseOptions?: Apollo.QueryHookOptions<CompletedTodosQuery, CompletedTodosQueryVariables>) {
        return Apollo.useQuery<CompletedTodosQuery, CompletedTodosQueryVariables>(CompletedTodosDocument, baseOptions);
      }
export function useCompletedTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CompletedTodosQuery, CompletedTodosQueryVariables>) {
          return Apollo.useLazyQuery<CompletedTodosQuery, CompletedTodosQueryVariables>(CompletedTodosDocument, baseOptions);
        }
export type CompletedTodosQueryHookResult = ReturnType<typeof useCompletedTodosQuery>;
export type CompletedTodosLazyQueryHookResult = ReturnType<typeof useCompletedTodosLazyQuery>;
export type CompletedTodosQueryResult = Apollo.QueryResult<CompletedTodosQuery, CompletedTodosQueryVariables>;
export const GetAccomplishmentAndMessageDocument = gql`
    query GetAccomplishmentAndMessage($_gte1: timestamptz, $_gte2: timestamptz, $_gte3: timestamptz) {
  week: todos_aggregate(where: {completed_at: {_gte: $_gte1}}) {
    aggregate {
      count
    }
  }
  month: todos_aggregate(where: {completed_at: {_gte: $_gte2}}) {
    aggregate {
      count
    }
  }
  year: todos_aggregate(where: {completed_at: {_gte: $_gte3}}) {
    aggregate {
      count
    }
  }
  users {
    message
  }
}
    `;

/**
 * __useGetAccomplishmentAndMessageQuery__
 *
 * To run a query within a React component, call `useGetAccomplishmentAndMessageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAccomplishmentAndMessageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAccomplishmentAndMessageQuery({
 *   variables: {
 *      _gte1: // value for '_gte1'
 *      _gte2: // value for '_gte2'
 *      _gte3: // value for '_gte3'
 *   },
 * });
 */
export function useGetAccomplishmentAndMessageQuery(baseOptions?: Apollo.QueryHookOptions<GetAccomplishmentAndMessageQuery, GetAccomplishmentAndMessageQueryVariables>) {
        return Apollo.useQuery<GetAccomplishmentAndMessageQuery, GetAccomplishmentAndMessageQueryVariables>(GetAccomplishmentAndMessageDocument, baseOptions);
      }
export function useGetAccomplishmentAndMessageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAccomplishmentAndMessageQuery, GetAccomplishmentAndMessageQueryVariables>) {
          return Apollo.useLazyQuery<GetAccomplishmentAndMessageQuery, GetAccomplishmentAndMessageQueryVariables>(GetAccomplishmentAndMessageDocument, baseOptions);
        }
export type GetAccomplishmentAndMessageQueryHookResult = ReturnType<typeof useGetAccomplishmentAndMessageQuery>;
export type GetAccomplishmentAndMessageLazyQueryHookResult = ReturnType<typeof useGetAccomplishmentAndMessageLazyQuery>;
export type GetAccomplishmentAndMessageQueryResult = Apollo.QueryResult<GetAccomplishmentAndMessageQuery, GetAccomplishmentAndMessageQueryVariables>;
export const GetColorTypeDocument = gql`
    query GetColorType {
  users {
    id
    color_type
    message
  }
}
    `;

/**
 * __useGetColorTypeQuery__
 *
 * To run a query within a React component, call `useGetColorTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetColorTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetColorTypeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetColorTypeQuery(baseOptions?: Apollo.QueryHookOptions<GetColorTypeQuery, GetColorTypeQueryVariables>) {
        return Apollo.useQuery<GetColorTypeQuery, GetColorTypeQueryVariables>(GetColorTypeDocument, baseOptions);
      }
export function useGetColorTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetColorTypeQuery, GetColorTypeQueryVariables>) {
          return Apollo.useLazyQuery<GetColorTypeQuery, GetColorTypeQueryVariables>(GetColorTypeDocument, baseOptions);
        }
export type GetColorTypeQueryHookResult = ReturnType<typeof useGetColorTypeQuery>;
export type GetColorTypeLazyQueryHookResult = ReturnType<typeof useGetColorTypeLazyQuery>;
export type GetColorTypeQueryResult = Apollo.QueryResult<GetColorTypeQuery, GetColorTypeQueryVariables>;
export const GetUserMessageDocument = gql`
    query GetUserMessage {
  users {
    id
    message
  }
}
    `;

/**
 * __useGetUserMessageQuery__
 *
 * To run a query within a React component, call `useGetUserMessageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserMessageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserMessageQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserMessageQuery(baseOptions?: Apollo.QueryHookOptions<GetUserMessageQuery, GetUserMessageQueryVariables>) {
        return Apollo.useQuery<GetUserMessageQuery, GetUserMessageQueryVariables>(GetUserMessageDocument, baseOptions);
      }
export function useGetUserMessageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserMessageQuery, GetUserMessageQueryVariables>) {
          return Apollo.useLazyQuery<GetUserMessageQuery, GetUserMessageQueryVariables>(GetUserMessageDocument, baseOptions);
        }
export type GetUserMessageQueryHookResult = ReturnType<typeof useGetUserMessageQuery>;
export type GetUserMessageLazyQueryHookResult = ReturnType<typeof useGetUserMessageLazyQuery>;
export type GetUserMessageQueryResult = Apollo.QueryResult<GetUserMessageQuery, GetUserMessageQueryVariables>;