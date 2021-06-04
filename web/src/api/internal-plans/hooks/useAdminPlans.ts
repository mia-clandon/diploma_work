import { usePlansQuery } from '../../hooks';
import { AdminPlansResponse, OrderEnum } from '../../schemas';

export type Order = 'asc' | 'desc';
export type OrderBy = 'id' | 'name' | 'price' | 'isPrivate' | 'isCustom';

const defaultState: AdminPlansResponse = { rows: [], count: 0 };

function useAdminPlans({
  page = 0,
  rowsPerPage = 50,
  search,
  order = 'desc',
  orderBy = 'name',
}: {
  page?: number;
  rowsPerPage?: number;
  search?: string;
  order?: Order;
  orderBy?: OrderBy;
} = {}) {
  const { data: { admin: { plans = defaultState } = {} } = {} } = usePlansQuery({
    variables: {
      page,
      rowsPerPage,
      search,
      order: order.toUpperCase() as OrderEnum,
      orderBy,
    },
  });

  return {
    data: {
      rows: plans.rows,
      count: plans.count,
    },
  };
}

export default useAdminPlans;
