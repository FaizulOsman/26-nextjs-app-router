import React from "react";

const BlogDynamicPage = ({ params, searchParams }) => {
  return (
    <div>
      <h2>BlogDynamicPage: {params.id}</h2>
      <p>SearchParams: {searchParams?.name}</p>
    </div>
  );
};

export default BlogDynamicPage;
