import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type BrowseRestaurantInfo = {
  __typename?: 'BrowseRestaurantInfo';
  alias?: Maybe<Scalars['String']>;
  cuisine?: Maybe<Array<Maybe<Scalars['String']>>>;
  image?: Maybe<Scalars['String']>;
  isPermanentlyClosed?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  numReview?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  restaurantId?: Maybe<Scalars['String']>;
  transactions?: Maybe<Array<Maybe<Scalars['String']>>>;
  yelpReview?: Maybe<Scalars['Int']>;
  yelpURL?: Maybe<Scalars['String']>;
};

export type DailyOpenHours = {
  __typename?: 'DailyOpenHours';
  day?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['String']>;
  isOvernight?: Maybe<Scalars['Boolean']>;
  start?: Maybe<Scalars['String']>;
};

export type LatLonPosition = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type OpenHours = {
  __typename?: 'OpenHours';
  dailyOpenHours?: Maybe<Array<Maybe<DailyOpenHours>>>;
  hoursType?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  RestaurantDetail?: Maybe<RestaurantDetail>;
  RestaurantsByLocation?: Maybe<Array<Maybe<BrowseRestaurantInfo>>>;
};


export type QueryRestaurantDetailArgs = {
  restaurantAlias: Scalars['String'];
};


export type QueryRestaurantsByLocationArgs = {
  location1?: InputMaybe<Scalars['String']>;
  location2?: InputMaybe<LatLonPosition>;
};

export type RestaurantDetail = {
  __typename?: 'RestaurantDetail';
  alias?: Maybe<Scalars['String']>;
  cuisine?: Maybe<Array<Maybe<Scalars['String']>>>;
  image?: Maybe<Scalars['String']>;
  isCurrentlyOpen?: Maybe<Scalars['Boolean']>;
  isPermanentlyClosed?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  numReview?: Maybe<Scalars['Int']>;
  openHours?: Maybe<Array<Maybe<OpenHours>>>;
  phone?: Maybe<Scalars['String']>;
  photos?: Maybe<Array<Maybe<Scalars['String']>>>;
  price?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  restaurantId?: Maybe<Scalars['String']>;
  transactions?: Maybe<Array<Maybe<Scalars['String']>>>;
  yelpReview?: Maybe<Scalars['Int']>;
  yelpURL?: Maybe<Scalars['String']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  BrowseRestaurantInfo: ResolverTypeWrapper<BrowseRestaurantInfo>;
  DailyOpenHours: ResolverTypeWrapper<DailyOpenHours>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  LatLonPosition: LatLonPosition;
  OpenHours: ResolverTypeWrapper<OpenHours>;
  Query: ResolverTypeWrapper<{}>;
  RestaurantDetail: ResolverTypeWrapper<RestaurantDetail>;
  String: ResolverTypeWrapper<Scalars['String']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean'];
  BrowseRestaurantInfo: BrowseRestaurantInfo;
  DailyOpenHours: DailyOpenHours;
  Float: Scalars['Float'];
  Int: Scalars['Int'];
  LatLonPosition: LatLonPosition;
  OpenHours: OpenHours;
  Query: {};
  RestaurantDetail: RestaurantDetail;
  String: Scalars['String'];
}>;

export type BrowseRestaurantInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['BrowseRestaurantInfo'] = ResolversParentTypes['BrowseRestaurantInfo']> = ResolversObject<{
  alias?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cuisine?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isPermanentlyClosed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  numReview?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  restaurantId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transactions?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  yelpReview?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  yelpURL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DailyOpenHoursResolvers<ContextType = any, ParentType extends ResolversParentTypes['DailyOpenHours'] = ResolversParentTypes['DailyOpenHours']> = ResolversObject<{
  day?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  end?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isOvernight?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  start?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OpenHoursResolvers<ContextType = any, ParentType extends ResolversParentTypes['OpenHours'] = ResolversParentTypes['OpenHours']> = ResolversObject<{
  dailyOpenHours?: Resolver<Maybe<Array<Maybe<ResolversTypes['DailyOpenHours']>>>, ParentType, ContextType>;
  hoursType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  RestaurantDetail?: Resolver<Maybe<ResolversTypes['RestaurantDetail']>, ParentType, ContextType, RequireFields<QueryRestaurantDetailArgs, 'restaurantAlias'>>;
  RestaurantsByLocation?: Resolver<Maybe<Array<Maybe<ResolversTypes['BrowseRestaurantInfo']>>>, ParentType, ContextType, Partial<QueryRestaurantsByLocationArgs>>;
}>;

export type RestaurantDetailResolvers<ContextType = any, ParentType extends ResolversParentTypes['RestaurantDetail'] = ResolversParentTypes['RestaurantDetail']> = ResolversObject<{
  alias?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cuisine?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isCurrentlyOpen?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isPermanentlyClosed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  numReview?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  openHours?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenHours']>>>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photos?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  restaurantId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transactions?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  yelpReview?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  yelpURL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  BrowseRestaurantInfo?: BrowseRestaurantInfoResolvers<ContextType>;
  DailyOpenHours?: DailyOpenHoursResolvers<ContextType>;
  OpenHours?: OpenHoursResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RestaurantDetail?: RestaurantDetailResolvers<ContextType>;
}>;

