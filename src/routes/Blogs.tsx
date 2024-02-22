import { BlogCard } from "@/components/BlogCard";
import Button from "@/components/Button";
import Typography from "@/components/Typography";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { getFakeImage } from "@/lib/sourcesImages";
import { fetchBlogs, resetBlogs } from "@/store/slices/blogsSlice";
import { useEffect } from "react";

export default function Blogs() {
  const { data, page, loaded, isLastPage, loading, error } = useAppSelector(
    (s) => s.blogs
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBlogs(1));
    return () => {
      dispatch(resetBlogs());
    };
  }, [dispatch]);

  return (
    <>
      {loaded ? (
        <section className="w-full grid grid-cols-6 gap-8 py-8">
          {data?.map((blog) => {
            return (
              <BlogCard.root
                key={blog.id}
                className="col-span-6 md:col-span-3 lg:col-span-2"
              >
                <BlogCard.header
                  src={getFakeImage()}
                  alt="Sunset in the mountains"
                />
                <BlogCard.content>
                  <Typography variant="titleMedium" component="h3">
                    {blog.title}
                  </Typography>
                  <Typography variant="descriptionSmall" component="p">
                    {blog.body}
                  </Typography>
                </BlogCard.content>
              </BlogCard.root>
            );
          })}
        </section>
      ) : null}

      {loading ? (
        <section className="w-full grid grid-cols-6 gap-8">
          {Array.from({ length: 3 }).map((_, index) => (
            <BlogCard.placeholder
              key={index}
              className="col-span-6 md:col-span-3 lg:col-span-2"
            />
          ))}
        </section>
      ) : null}

      {loaded && !loading && !isLastPage ? (
        <section className="w-full my-6 flex justify-center items-center">
          <Button
            variant="primary"
            size="sm"
            className="rounded-lg"
            onClick={() => dispatch(fetchBlogs(page))}
          >
            See more
          </Button>
        </section>
      ) : null}

      {error ? (
        <div className="w-full h-screen flex flex-col justify-center items-center">
          <Typography variant="descriptionLarge" component="p">
            Something went wrong!
          </Typography>
        </div>
      ) : null}
    </>
  );
}
