/**
 * This is an example of how to create a static template that uses getStaticProps to retrieve data.
 */
import "../index.css";
import {
  Template,
  GetPath,
  TemplateConfig,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
} from "@yext/pages";
import PageLayout from "../components/page-layout";
import ProfessionalsWrapper from "../pages/professionalsWrapper";

export const config: TemplateConfig = {
  name: "professionals",
};
export const getPath: GetPath<TemplateRenderProps> = () => {
  return `professionals.html`;
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
}): HeadConfig => {
  return {
    title: "Omaha | Professionals",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "link",
        attributes: {
          rel: "icon",
          type: "image/x-icon",
          href: relativePrefixToRoot,
        },
      },
    ],
  };
};

const SearchWrapper: Template<
  TemplateRenderProps
> = ({}: TemplateRenderProps) => {
  return (
    <PageLayout>
      <div className="centered-container">
        <ProfessionalsWrapper />
      </div>
    </PageLayout>
  );
};
export default SearchWrapper;
