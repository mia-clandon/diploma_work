import { useApolloClient } from '@apollo/client';
import {FeedDocument, ModerationDocument, UpdateFilterDocument} from '../../hooks';

function useUpdateFilter(id: string) {
  const apolloClient = useApolloClient();

  return (filter: any) => {
    const state = { ...filter };
    delete state.__typename;

    return apolloClient.mutate<{ updateFilter: any }, any>({
      mutation: UpdateFilterDocument,
      variables: {
        filter: state,
      },
      optimisticResponse: {
        updateFilter: {
          __typename: 'Filter',
          ...state,
        },
      },
      refetchQueries: [
        { query: ModerationDocument, variables: { id } },
        { query: FeedDocument, variables: { id } },
      ],
    });
  };
}

export default useUpdateFilter;
