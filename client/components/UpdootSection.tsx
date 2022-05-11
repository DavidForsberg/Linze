import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  PostSnippetFragment,
  useDeletePostMutation,
  useVoteMutation,
} from "../src/generated/graphql";

interface UpdootSectionProps {
  // post: PostsQuery["posts"]["posts"][0]
  post: PostSnippetFragment;
  isCreator: Boolean;
}

const UpdootSection: React.FC<UpdootSectionProps> = ({ post, isCreator }) => {
  const [loadingState, setLoadingState] = useState<
    "updoot-loading" | "downdoot-loading" | "not-loading"
  >("not-loading");
  const [, vote] = useVoteMutation();
  const [, deletePost] = useDeletePostMutation();

  return (
    <div className="flex px-6 py-8 mt-20 bg-secondary shadow-xl">
      <div className="flex flex-col items-center">
        <button
          className="px-2 py-1"
          style={
            post.voteStatus === 1 ? { border: "1px lightgreen solid" } : {}
          }
          onClick={async () => {
            if (post.voteStatus === 1) {
              return;
            }
            setLoadingState("updoot-loading");
            await vote({ postId: post.id, value: 1 });
            setLoadingState("not-loading");
          }}
        >
          <Image src="/icons/chevron_up.svg" width="18" height="11" />
        </button>
        <p className="">{post.points}</p>
        <button
          className="px-2 py-1"
          style={post.voteStatus === -1 ? { border: "1px tomato solid" } : {}}
          onClick={async () => {
            if (post.voteStatus === -1) {
              return;
            }
            setLoadingState("downdoot-loading");
            await vote({ postId: post.id, value: -1 });
            setLoadingState("not-loading");
          }}
        >
          <Image src="/icons/chevron_down.svg" width="18" height="11" />
        </button>
      </div>
      <div className="flex flex-col justify-between w-full pl-8">
        <div className="flex justify-between">
          <Link href={`/post/${encodeURIComponent(post.id)}`}>
            <a>
              <h4 className="text-xl">{post.title}</h4>
            </a>
          </Link>
          <p className="text-lg opacity-60">
            Posted by {post.creator.username}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="">{post.textSnippet}</p>
          {isCreator ? (
            <div className="flex">
              <Link href={`/post/edit/${encodeURIComponent(post.id)}`}>
                <a className="pl-4">Edit</a>
              </Link>
              <button
                className="pl-4"
                onClick={() => {
                  deletePost({ id: post.id });
                }}
              >
                Delete
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default UpdootSection;
