// Original file: ../olca-proto/proto/data_fetch_service.proto

import type { ProtoType as _protolca_ProtoType } from '../../protolca/ProtoType';

/**
 * The request message for getting all data sets of a given type from the
 * database. As there can be thousands of data set of that type in the database
 * the response is paged by default. Unless specified otherwise, the first page
 * with the first 100 data sets is returned by default.
 */
export interface GetAllRequest {
  /**
   * The type of the requested data sets.
   */
  'type'?: (_protolca_ProtoType | keyof typeof _protolca_ProtoType);
  /**
   * The number of data sets that should be returned per response page (defaults
   * to 100)
   */
  'pageSize'?: (number);
  /**
   * The requested page of the data set (defaults to 1).
   */
  'page'?: (number);
  /**
   * If set to true, all data sets of the given type will be returned in a
   * single response.
   */
  'skipPaging'?: (boolean);
  /**
   * Paging is optional and all data sets of the requested type are returned
   * when the `skip_paging` property is set to true.
   */
  'paging'?: "page"|"skipPaging";
}

/**
 * The request message for getting all data sets of a given type from the
 * database. As there can be thousands of data set of that type in the database
 * the response is paged by default. Unless specified otherwise, the first page
 * with the first 100 data sets is returned by default.
 */
export interface GetAllRequest__Output {
  /**
   * The type of the requested data sets.
   */
  'type'?: (_protolca_ProtoType);
  /**
   * The number of data sets that should be returned per response page (defaults
   * to 100)
   */
  'pageSize'?: (number);
  /**
   * The requested page of the data set (defaults to 1).
   */
  'page'?: (number);
  /**
   * If set to true, all data sets of the given type will be returned in a
   * single response.
   */
  'skipPaging'?: (boolean);
}
