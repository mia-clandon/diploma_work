import React, { useState } from "react";
import { PostSnippetFragment, useVoteMutation } from "../generated/graphql";
import {IconButton} from "@material-ui/core";
import Box from "@material-ui/core/Box";

interface UpdootSectionProps {
  post: PostSnippetFragment;
}

export const UpdootSection: React.FC<UpdootSectionProps> = ({ post }) => {
  const [loadingState, setLoadingState] = useState<
    "updoot-loading" | "downdoot-loading" | "not-loading"
  >("not-loading");
  const [, vote] = useVoteMutation();
  return (
      <Box display='flex'>
    {/*  <IconButton*/}
    {/*    onClick={async () => {*/}
    {/*      if (post.voteStatus === 1) {*/}
    {/*        return;*/}
    {/*      }*/}
    {/*      setLoadingState("updoot-loading");*/}
    {/*      await vote({*/}
    {/*        postId: post.id,*/}
    {/*        value: 1,*/}
    {/*      });*/}
    {/*      setLoadingState("not-loading");*/}
    {/*    }}*/}
    {/*    variantColor={post.voteStatus === 1 ? "green" : undefined}*/}
    {/*    isLoading={loadingState === "updoot-loading"}*/}
    {/*    aria-label="updoot post"*/}
    {/*    icon="chevron-up"*/}
    {/*  />*/}
    {/*  {post.points}*/}
    {/*  <IconButton*/}
    {/*    onClick={async () => {*/}
    {/*      if (post.voteStatus === -1) {*/}
    {/*        return;*/}
    {/*      }*/}
    {/*      setLoadingState("downdoot-loading");*/}
    {/*      await vote({*/}
    {/*        postId: post.id,*/}
    {/*        value: -1,*/}
    {/*      });*/}
    {/*      setLoadingState("not-loading");*/}
    {/*    }}*/}
    {/*    variantColor={post.voteStatus === -1 ? "red" : undefined}*/}
    {/*    isLoading={loadingState === "downdoot-loading"}*/}
    {/*    aria-label="downdoot post"*/}
    {/*    icon="chevron-down"*/}
    {/*  />*/}
    </Box>
  );
};
