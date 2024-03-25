import React from "react";
import TitleWithViewBtn from "../header/TitleWithViewBtn";
import NotesCard from "../../cards/NotesCard";
import { useGetAllPostsQuery } from "@/redux/features/posts/postApi";

type Props = {};

const TopNotes = (props: Props) => {
  const { isLoading, data, error } = useGetAllPostsQuery({});
  console.log(data);

  return (
    <div>
      <TitleWithViewBtn title="Top documents for you" url="#" />
      <div className="grid grid-cols-12 gap-6 my-4">
        {data &&
          data.posts.map((items: any) => (
            <div
              key={items._id}
              className="col-span-4 max-1300px:col-span-6 max-900px:col-span-12"
            >
              <NotesCard
                userId={items.user._id}
                userName={items.user.name}
                userAvatar={items.user.avatar}
                createdAt={items.createdAt}
                captions={items.captions}
                likes={items.likes}
                comments={items.comments}
                downloads={items.downloads}
                documentId={items.document._id}
                documentTitle={items.document.title}
                documentUrl={items.document.url}
                documentPageCount={items.document.pageCount}
                documentSize={items.document.size}
                documentFormat={items.document.format}
                tags={items.tags}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default TopNotes;
