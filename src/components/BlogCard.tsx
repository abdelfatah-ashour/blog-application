import classNames from "classnames";
import type { ComponentProps } from "react";
import Image from "./Image";

interface BlogCardRootProps extends ComponentProps<"div"> {
  children: React.ReactNode;
}

interface BlogCardHeaderProps {
  alt: string;
  src: string;
}

type BlogCardChildrenProps = { children: React.ReactNode };

const BlogCardRoot = (props: BlogCardRootProps) => {
  return (
    <div
      className={classNames(
        "w-full rounded overflow-hidden flex flex-col shadow",
        props.className || ""
      )}
    >
      {props.children}
    </div>
  );
};

const BlogCardHeader = (props: BlogCardHeaderProps) => {
  return (
    <div className="w-full h-72 overflow-hidden">
      <Image src={props.src} alt={props.alt} />
    </div>
  );
};

const BlogCardContent = (props: BlogCardChildrenProps) => {
  return <div className="w-full p-4">{props.children}</div>;
};

const BlogCardPlaceholder = (props: ComponentProps<"div">) => {
  return (
    <div
      className={classNames(
        "w-full rounded-sm overflow-hidden",
        props.className || ""
      )}
      {...props}
    >
      <div className="w-full h-72 bg-gradient-to-r from-gray-300 to-gray-200"></div>
      <div className="w-full p-4 flex flex-col gap-3">
        <div className="w-full rounded-sm bg-gradient-to-r from-gray-300 to-gray-200 h-6"></div>
        <div className="w-full rounded-sm bg-gradient-to-r from-gray-300 to-gray-200 h-6"></div>
      </div>
    </div>
  );
};

export const BlogCard = {
  content: BlogCardContent,
  header: BlogCardHeader,
  root: BlogCardRoot,
  placeholder: BlogCardPlaceholder,
};
