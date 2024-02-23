import { BlogCard } from "@/components/BlogCard";
import BlogsFeatures from "@/components/BlogsFeatures";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import Typography from "@/components/Typography";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { generateRandomDate } from "@/lib/formmating-date";
import { getFakeImage } from "@/lib/sourcesImages";
import { fetchBlogs, resetBlogs } from "@/store/slices/blogsSlice";
import { useEffect } from "react";

const clockIcon = "/assets/icons/clock.svg";

export default function Blogs() {
  const { data, filterResults, page, loaded, isLastPage, loading, error } =
    useAppSelector((s) => s.blogs);
  const { value: search } = useAppSelector((s) => s.search);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBlogs(1));
    return () => {
      dispatch(resetBlogs());
    };
  }, [dispatch]);

  return (
    <>
      <BlogsFeatures />
      {loaded ? (
        <>
          <section className="w-full grid grid-cols-6 gap-8 py-8">
            {(search.length ? filterResults : data).map((blog) => {
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
                    <Typography variant="caption" component="span">
                      <div className="flex flex-1 flex-nowrap gap-1 items-center">
                        <Icon src={clockIcon} alt="published blog." size="xs" />{" "}
                        {generateRandomDate()}
                      </div>
                    </Typography>
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
          {search.length && !filterResults.length ? (
            <div className="w-full flex justify-center items-center h-[35rem]">
              <Typography variant="titleMedium" component="p">
                Results with {search} not found.
              </Typography>
            </div>
          ) : null}
        </>
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

      {loaded && !loading && !isLastPage && !search.length ? (
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
